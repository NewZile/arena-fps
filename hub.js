// Portada del Zile Launcher: animaciones, capturas, visor y versiones
// publicadas (GitHub Releases del mismo repositorio que sirve la web).
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

  // --- Barra superior: se vuelve sólida al bajar ---
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 30);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // --- Portada: capturas de los dos juegos que se van fundiendo ---
  const slides = $$(".slides img");
  let si = 0;
  if (!still) setInterval(() => {
    slides[si].classList.remove("on");
    si = (si + 1) % slides.length;
    const img = slides[si];
    img.style.animation = "none"; void img.offsetWidth; img.style.animation = "";
    img.classList.add("on");
  }, 6000);

  // --- Ventana del launcher de mentira: alterna entre los dos juegos ---
  const mock = $("#mock");
  const mockImgs = $$(".mock-main img");
  const mockSide = $$(".mock-side div:not(.soon)");
  const mockTitle = $("#mock-title");
  const mockVer = $("#mock-ver");
  const versions = { sz: "", kp: "" };
  let mi = 0;
  function showMock(i) {
    mockImgs.forEach((im, k) => im.classList.toggle("on", k === i));
    mockSide.forEach((d, k) => d.classList.toggle("on", k === i));
    mockTitle.className = "mock-title " + (i === 0 ? "sz" : "kp");
    mockTitle.innerHTML = i === 0 ? "STRIKE <span>ZONE</span>" : "KART PARTY";
    mockVer.textContent = (i === 0 ? versions.sz : versions.kp) || "";
  }
  if (!still) setInterval(() => { mi = 1 - mi; showMock(mi); }, 4200);
  // Se inclina siguiendo al ratón.
  const hero = $(".hero");
  if (!still && matchMedia("(pointer: fine)").matches) {
    hero.addEventListener("mousemove", e => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      mock.style.transform = `rotateY(${-14 + x * 16}deg) rotateX(${6 - y * 12}deg)`;
    });
    hero.addEventListener("mouseleave", () => { mock.style.transform = ""; });
  }

  // --- Tarjetas de juego: sus capturas pasan (más rápido con el ratón encima) ---
  $$("[data-cycle]").forEach(card => {
    const imgs = $$(".bg img", card);
    let k = 0, timer = null;
    const next = () => { imgs[k].classList.remove("on"); k = (k + 1) % imgs.length; imgs[k].classList.add("on"); };
    const run = ms => { clearInterval(timer); timer = still ? null : setInterval(next, ms); };
    card.addEventListener("mouseenter", () => { next(); run(1400); });
    card.addEventListener("mouseleave", () => run(5000));
    run(5000 + Math.random() * 1500);
  });

  // --- Aparecen al bajar ---
  if ("IntersectionObserver" in window && !still) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    $$(".rv").forEach(el => io.observe(el));
  } else {
    $$(".rv").forEach(el => el.classList.add("in"));
  }

  // --- Collages: cada captura se mueve a su ritmo al hacer scroll ---
  const collages = $$("[data-parallax]");
  let ticking = false;
  function parallax() {
    ticking = false;
    const vh = innerHeight;
    collages.forEach(c => {
      const r = c.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const p = (r.top + r.height / 2 - vh / 2) / vh;  // -1..1 aprox.
      $$(".shot", c).forEach((s, i) => { s.style.translate = `0 ${p * (i - 1) * 60}px`; });
    });
  }
  if (!still) {
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(parallax); } }, { passive: true });
    parallax();
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

  // --- Cinta de capturas de los dos juegos ---
  const strip = [
    ["kp_lluvia", "cap_rain"], ["apocalipsis", "cap_apo"], ["kp_puente", "cap_bridge"], ["escondite", "cap_props"],
    ["kp_podio", "cap_podium"], ["repeticiones", "cap_rep"], ["kp_desierto", "cap_desert"], ["clan", "cap_clan"],
  ];
  const strip2 = [
    ["menu", "cap_menu"], ["kp_nieve", "cap_snow"], ["trampas", "cap_trap"], ["kp_piloto", "cap_pilot"],
    ["desierto", "cap_sz_desert"], ["kp_isla", "cap_island"], ["podio", "cap_sz_podium"], ["kp_sala", "cap_lobby"],
  ];
  function fillTrack(el, list) {
    const html = list.map(([img, cap]) =>
      `<button class="shot" data-full="img/${img}.jpg"><img src="img/${img}_s.jpg" alt="" loading="lazy"><span class="cap" data-i18n="${cap}">${T(cap)}</span></button>`).join("");
    el.innerHTML = html + html.replace(/<button class="shot"/g, '<button class="shot" tabindex="-1" aria-hidden="true"');
  }
  fillTrack($("#track1"), strip);
  fillTrack($("#track2"), strip2);

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
    setTimeout(() => { lb.hidden = true; }, 250);
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
  fetch(`https://api.github.com/repos/${owner}/${repo}/releases?per_page=100`)
    .then(r => r.ok ? r.json() : Promise.reject(r.status))
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

  // Contadores fijos de la portada
  $$("[data-count]").forEach(el => { const n = +el.dataset.count; if (n > 0) countUp(el, n); });

  // Al cambiar de idioma, la cinta vuelve a montarse con sus textos.
  HUB.onChange(() => { fillTrack($("#track1"), strip); fillTrack($("#track2"), strip2); });
})();
