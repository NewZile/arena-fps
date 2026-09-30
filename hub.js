// Portada del Zile Launcher: selector de capturas, visor, cinta y versiones
// publicadas (GitHub Releases del mismo repositorio que sirve la web).
// Sin listeners de scroll: la barra y el resaltado del menú usan IntersectionObserver.
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const isStatic = new URLSearchParams(location.search).has("static");
  if (isStatic) document.documentElement.classList.add("static");
  const still = isStatic || matchMedia("(prefers-reduced-motion: reduce)").matches;
  const T = k => HUB.t(k);

  // En https://<usuario>.github.io/<repo>/ ; si se abre en local, el repo de siempre.
  const onPages = location.hostname.endsWith("github.io");
  const owner = onPages ? location.hostname.split(".")[0] : "NewZile";
  const repo = onPages ? (location.pathname.split("/").filter(Boolean)[0] || "arena-fps") : "arena-fps";
  $$(".dl-launcher").forEach(a => { a.href = `https://github.com/${owner}/${repo}/releases/download/launcher/ZileLauncher.exe`; });

  // --- Barra flotante: se vuelve más sólida al salir de lo alto de la página ---
  const nav = $("#nav");
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => nav.classList.toggle("scrolled", !e.isIntersecting)).observe($("#sentinel"));
    // Enlace del menú de la sección que se está viendo
    const links = new Map($$(".bar ul a").map(a => [a.getAttribute("href").slice(1), a]));
    const spy = new IntersectionObserver(es => es.forEach(e => {
      const a = links.get(e.target.id);
      if (!a) return;
      a.classList.toggle("on", e.isIntersecting);
      if (e.isIntersecting) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    }), { rootMargin: "-45% 0px -50% 0px" });
    links.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });
  }

  // --- Selector de capturas de la portada: alterna entre los dos juegos ---
  const mockImgs = $$("#mock .shots img");
  const picks = $$("#mock .pick");
  const mockTitle = $("#mock-title");
  const mockVer = $("#mock-ver");
  const versions = { sz: "", kp: "" };
  let mi = 0, mockTimer = null;
  function showMock(i) {
    mi = i;
    mockImgs.forEach((im, k) => im.classList.toggle("on", k === i));
    picks.forEach((b, k) => b.setAttribute("aria-pressed", k === i ? "true" : "false"));
    mockTitle.className = "mock-title " + (i === 0 ? "sz" : "kp");
    mockTitle.innerHTML = i === 0 ? "STRIKE <span>ZONE</span>" : "KART PARTY";
    mockVer.textContent = (i === 0 ? versions.sz : versions.kp) || "";
  }
  const runMock = () => { clearInterval(mockTimer); mockTimer = still ? null : setInterval(() => showMock(1 - mi), 4600); };
  picks.forEach((b, k) => b.addEventListener("click", () => { showMock(k); runMock(); }));
  runMock();

  // --- Tarjetas de juego: sus capturas pasan (más rápido con el ratón encima) ---
  $$("[data-cycle]").forEach(card => {
    const imgs = $$(".bg img", card);
    let k = 0, timer = null;
    const next = () => { imgs[k].classList.remove("on"); k = (k + 1) % imgs.length; imgs[k].classList.add("on"); };
    const run = ms => { clearInterval(timer); timer = still ? null : setInterval(next, ms); };
    card.addEventListener("mouseenter", () => { next(); run(1600); });
    card.addEventListener("mouseleave", () => run(5200));
    run(5200 + Math.random() * 1500);
  });

  // --- Aparecen al bajar ---
  if ("IntersectionObserver" in window && !still) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    $$(".rv").forEach(el => io.observe(el));
  } else {
    $$(".rv").forEach(el => el.classList.add("in"));
  }

  // --- Contadores que suben ---
  function countUp(el, to) {
    if (still) { el.textContent = to.toLocaleString(HUB.locale()); return; }
    const t0 = performance.now(), dur = 1600;
    const step = now => {
      const q = Math.min(1, (now - t0) / dur);
      el.textContent = Math.round(to * (1 - Math.pow(1 - q, 3))).toLocaleString(HUB.locale());
      if (q < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  // --- Cinta única con capturas de los dos juegos ---
  const strip = [
    ["kp_lluvia", "cap_rain"], ["apocalipsis", "cap_apo"], ["kp_puente", "cap_bridge"], ["escondite", "cap_props"],
    ["kp_podio", "cap_podium"], ["repeticiones", "cap_rep"], ["kp_desierto", "cap_desert"], ["clan", "cap_clan"],
    ["menu", "cap_menu"], ["kp_nieve", "cap_snow"], ["trampas", "cap_trap"], ["kp_piloto", "cap_pilot"],
    ["desierto", "cap_sz_desert"], ["kp_isla", "cap_island"], ["podio", "cap_sz_podium"], ["kp_sala", "cap_lobby"],
  ];
  function fillTrack(el, list) {
    const html = list.map(([img, cap]) =>
      `<button class="shot" type="button" data-full="img/${img}.jpg"><span class="frame"><img src="img/${img}_s.jpg" alt="" loading="lazy"></span><span class="cap" data-i18n="${cap}">${T(cap)}</span></button>`).join("");
    // Con movimiento reducido la cinta no se anima: no hace falta la copia para el bucle.
    el.innerHTML = still ? html : html + html.replace(/<button class="shot"/g, '<button class="shot" tabindex="-1" aria-hidden="true"');
  }
  fillTrack($("#track1"), strip);

  // --- Visor de capturas (con anterior / siguiente) ---
  const lb = $("#lightbox");
  const lbImg = $("img", lb), lbCap = $("figcaption", lb), lbClose = $(".lb-close", lb);
  let group = [], gi = 0, from = null;
  function show(i) {
    gi = (i + group.length) % group.length;
    const b = group[gi];
    lbImg.src = b.dataset.full;
    const cap = ($(".cap", b) || {}).textContent || $("img", b).alt;
    lbImg.alt = cap;
    lbCap.textContent = cap;
  }
  document.addEventListener("click", e => {
    const b = e.target.closest(".shot");
    if (!b || b.closest(".lightbox")) return;
    group = $$(".shot").filter(s => s.getAttribute("aria-hidden") !== "true");
    from = b;
    show(Math.max(0, group.indexOf(b)));
    lb.hidden = false;
    requestAnimationFrame(() => lb.classList.add("open"));
    lbClose.focus();
  });
  const close = () => {
    if (lb.hidden) return;
    lb.classList.remove("open");
    setTimeout(() => { lb.hidden = true; }, 400);
    if (from) from.focus();
  };
  lb.addEventListener("click", e => {
    if (e.target === lb || e.target === lbClose) close();
    if (e.target.classList.contains("lb-prev")) show(gi - 1);
    if (e.target.classList.contains("lb-next")) show(gi + 1);
  });
  document.addEventListener("keydown", e => {
    if (lb.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(gi - 1);
    if (e.key === "ArrowRight") show(gi + 1);
  });

  // --- Versiones y descargas (GitHub Releases) ---
  const GAME_ASSETS = ["StrikeZone.zip", "ArenaFPS.zip", "KartParty.zip", "ZileLauncher.exe"];
  // Primero la lista que escribe publicar-versiones.ps1 (sin límite de consultas);
  // si no está, la API de GitHub (60 consultas por hora sin iniciar sesión).
  fetch(`launcher/releases.json?t=${Math.floor(Date.now() / 60000)}`)
    .then(r => r.ok ? r.json() : Promise.reject(r.status))
    .catch(() => fetch(`https://api.github.com/repos/${owner}/${repo}/releases?per_page=100`).then(r => r.ok ? r.json() : Promise.reject(r.status)))
    .then(list => {
      const pub = list.filter(r => !r.draft);
      const sz = pub.find(r => /^v\d/.test(r.tag_name) && !r.prerelease);
      const kp = pub.find(r => r.tag_name.startsWith("kart-v"));
      if (sz) { versions.sz = sz.tag_name; const v = $("#ver-sz"); v.textContent = sz.tag_name; v.hidden = false; }
      if (kp) { versions.kp = "v" + kp.tag_name.slice(6); const v = $("#ver-kp"); v.textContent = versions.kp; v.hidden = false; }
      showMock(mi);
      const total = pub.reduce((n, r) => n + (r.assets || []).filter(a => GAME_ASSETS.includes(a.name))
        .reduce((m, a) => m + (a.download_count || 0), 0), 0);
      if (total > 0) {
        $("#dl-stat").hidden = false;
        countUp($("#dl-total"), total);
      }
    })
    .catch(() => { /* sin API: la página funciona igual */ });

  // Contadores fijos
  $$("[data-count]").forEach(el => { const n = +el.dataset.count; if (n > 0) countUp(el, n); });

  // Al cambiar de idioma, la cinta vuelve a montarse con sus textos.
  HUB.onChange(() => fillTrack($("#track1"), strip));
})();
