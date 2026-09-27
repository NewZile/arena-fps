// Idiomas de la página de descarga: el texto en español está en el HTML y
// aquí van las traducciones (data-i18n = clave; data-i18n-alt para el texto
// alternativo de las imágenes y data-i18n-aria para las etiquetas
// accesibles). El idioma elegido se recuerda en este navegador; si no hay
// ninguno, se usa el del navegador (si lo tenemos) o el español.
(function () {
  const LOCALES = { es: "es-ES", en: "en-GB", pt: "pt-BR", fr: "fr-FR", de: "de-DE", it: "it-IT" };

  // Textos que se montan desde el código ({0}, {1}: datos).
  const DYN = {
    es: {
      dl_aria: "Descargar Strike Zone {0} para Windows", dl_aria_size: " (archivo .zip de {0} MB)",
      published: "Publicada el {0}", downloads: "{0} descargas", dl_version: "Descargar la versión {0}",
      less: "Ver menos", all_versions: "Ver todas las versiones ({0})", no_notes: "Sin notas para esta versión.",
      no_releases: "Todavía no hay ninguna versión publicada.",
      releases_error: "No se pudieron cargar las novedades, pero el botón de descarga funciona."
    },
    en: {
      dl_aria: "Download Strike Zone {0} for Windows", dl_aria_size: " ({0} MB .zip file)",
      published: "Released on {0}", downloads: "{0} downloads", dl_version: "Download version {0}",
      less: "Show less", all_versions: "Show all versions ({0})", no_notes: "No notes for this version.",
      no_releases: "No version has been released yet.",
      releases_error: "The news couldn't be loaded, but the download button works."
    },
    pt: {
      dl_aria: "Baixar Strike Zone {0} para Windows", dl_aria_size: " (arquivo .zip de {0} MB)",
      published: "Publicada em {0}", downloads: "{0} downloads", dl_version: "Baixar a versão {0}",
      less: "Ver menos", all_versions: "Ver todas as versões ({0})", no_notes: "Sem notas para esta versão.",
      no_releases: "Ainda não há nenhuma versão publicada.",
      releases_error: "Não foi possível carregar as novidades, mas o botão de download funciona."
    },
    fr: {
      dl_aria: "Télécharger Strike Zone {0} pour Windows", dl_aria_size: " (fichier .zip de {0} Mo)",
      published: "Publiée le {0}", downloads: "{0} téléchargements", dl_version: "Télécharger la version {0}",
      less: "Voir moins", all_versions: "Voir toutes les versions ({0})", no_notes: "Pas de notes pour cette version.",
      no_releases: "Aucune version n'a encore été publiée.",
      releases_error: "Impossible de charger les nouveautés, mais le bouton de téléchargement fonctionne."
    },
    de: {
      dl_aria: "Strike Zone {0} für Windows herunterladen", dl_aria_size: " (.zip-Datei, {0} MB)",
      published: "Veröffentlicht am {0}", downloads: "{0} Downloads", dl_version: "Version {0} herunterladen",
      less: "Weniger anzeigen", all_versions: "Alle Versionen anzeigen ({0})", no_notes: "Keine Hinweise zu dieser Version.",
      no_releases: "Es wurde noch keine Version veröffentlicht.",
      releases_error: "Die Neuigkeiten konnten nicht geladen werden, aber der Download-Button funktioniert."
    },
    it: {
      dl_aria: "Scarica Strike Zone {0} per Windows", dl_aria_size: " (file .zip da {0} MB)",
      published: "Pubblicata il {0}", downloads: "{0} download", dl_version: "Scarica la versione {0}",
      less: "Mostra meno", all_versions: "Mostra tutte le versioni ({0})", no_notes: "Nessuna nota per questa versione.",
      no_releases: "Non è ancora stata pubblicata nessuna versione.",
      releases_error: "Impossibile caricare le novità, ma il pulsante di download funziona."
    }
  };

  // Textos de la página.
  const PAGE = {
    en: {
      skip: "Skip to content", lang_label: "Language",
      kicker: "MULTIPLAYER FPS · ZOMBIES · HIDE AND SEEK · FREE · WINDOWS",
      lead: "Three games in one: tactical <b>Shooter</b> with Bomb mode, ranks and skins; <b>Zombies</b>, waves solo or with your friends; and <b>Hide and seek</b>, turn into an object on the map and don't get found.",
      chip1: "6 modes", chip2: "5 maps", chip3: "6 languages", chip4: "Clans", chip5: "Replays", chip6: "Online with friends",
      new_badge: "NEW VERSION", latest: "Latest version", download: "DOWNLOAD",
      dl_help: "Free, no accounts or purchases. Unzip the .zip and open <code>StrikeZone.exe</code>. When it opens, the game checks for updates and updates with one click.<br>Coming from <b>Arena FPS</b>? It's the same game with a new name: you keep your profile and your skins.",
      z_tag: "ZOMBIES MODE", z_title: "SURVIVE THE <span>HORDE</span>",
      z_lead: "When you open the game you choose: <b>Shooter</b> or <b>Zombies</b>. In Zombies you hold out against ever harder waves on the <b>Apocalypse</b> map, alone or with your friends online.",
      z1: "<b>Endless waves</b>Zombies that walk, run and crawl. How far will you get? They say some waves bring surprises…",
      z2: "<b>Points, shop and mystery box</b>Every kill gives points: buy wall weapons, try your luck with the box, drink perks and upgrade your weapon.",
      z3: "<b>Areas to unlock and traps</b>Open barricades to reach new areas and turn on the electric fence or the fire grill.",
      z4: "<b>Revive your teammates</b>If someone goes down, you have 30 s to revive them. And zombies drop items: bomb, double points, max ammo…",
      cap_horde: "The horde", cap_pris: "Prisoner", cap_yaku: "Yaku (runner)", cap_trap: "Traps",
      egg: "🎃 They say something is hidden in the Apocalypse… will you find it?",
      p_tag: "NEW · HIDE AND SEEK MODE", p_title: "WHERE <span>ARE YOU</span>?",
      p_lead: "Strike Zone's <b>Prop Hunt</b>. Hiders turn into crates, barrels, benches or postboxes; seekers have 2:30 to find them… but every shot at a real object costs them health.",
      cap_props: "Which one is the player?",
      p1: "<b>Become anything</b>Look at an object and press E. Lock its rotation with R to look around without moving it.",
      p2: "<b>Seekers go in blind</b>Their screen is black for the first 30 s while you hide.",
      p3: "<b>Whistle if you dare</b>Press F to whistle and earn points… but they hear you. At the end of the round you whistle on your own.",
      p4: "<b>6 rounds swapping roles</b>If you're found, you become a seeker. With bots, or with your friends online.",
      gal_title: "What it looks like", gal_sub: "Game screenshots (click to enlarge)",
      cap_apo: "Apocalypse map", cap_rep: "Replays", cap_mod: "Choose a mode", cap_city: "City · Bomb mode", cap_play: "PLAY window",
      cap_menu: "Menu · your character", cap_range: "Shooting range", cap_clan: "Clans", cap_podium: "Podium and emotes", cap_desert: "Desert",
      feat_title: "What's inside",
      f_z_t: "Zombies mode", f_z_p: "Waves, shop, mystery box, perks, traps and areas to unlock. Single player or co-op.",
      f_p_t: "Hide and seek mode", f_p_p: "Turn into an object on the map and don't get found. Every map has its own objects.",
      f_modes_t: "6 game modes", f_modes_p: "Free for all, teams, knives only, Bomb (plant and defuse), Hide and seek and Zombies.",
      f_maps_t: "5 maps", f_maps_p: "Desert, Arena, City, the Shooting range and Apocalypse for the zombies.",
      f_rep_t: "Replays", f_rep_p: "Every match is recorded automatically. Watch it in first person, from behind or with a free camera, and jump to your best plays.",
      f_lang_t: "6 languages", f_lang_p: "Spanish, English, Portuguese, French, German and Italian. Change it in Settings.",
      f_bots_t: "Smart bots", f_bots_p: "They only see what's in front of them, hear your footsteps, hunt you down, take cover and warn their team.",
      f_range_t: "Shooting range", f_range_p: "Dummies, moving targets, steel plates for the sniper and a reflex challenge with a record.",
      f_clan_t: "Clans and records", f_clan_p: "Create your clan with a tag and colour, earn points together and compare your best wave with your friends.",
      f_skins_t: "Skins, cases and market", f_skins_p: "Earn cases by playing, open them and trade skins on the market with in-game credits (no real money). Some have a kill counter.",
      f_online_t: "Online with friends", f_online_p: "Add them with their code and play together; on most networks you don't need to open ports. Voice and text chat.",
      f_rank_t: "Ranks and medals", f_rank_p: "Level up, earn a competitive rank and get medals for streaks, headshots or no-scopes.",
      news_title: "What's new", loading: "Loading…", notes_lang: "The notes for each version are in Spanish.",
      friends_title: "Play with friends", friends_sub1: "Online (the easiest way)",
      step1: "In the menu, open <b>FRIENDS</b> and press <b>+ ADD FRIEND</b> with your friend's code (each of you sees your own in that window).",
      step2: "One of you presses <b>PLAY</b>, tab <b>ONLINE · FRIENDS</b>, chooses a mode and presses <b>LET'S PLAY!</b>",
      step3: "The others find them in their <b>FRIENDS</b> list and press <b>JOIN</b>. They can also invite you from the match: <b>Esc → FRIENDS → INVITE</b>.",
      friends_sub2: "In the same house or network",
      lan_help: "One creates the match in <b>PLAY → LOCAL NETWORK</b> and the others press <b>FIND ROOMS</b>. If it doesn't show up, use <b>JOIN BY IP</b> with the IP shown in the room.",
      win_help: "If Windows says it “protected your PC”: <b>More info → Run anyway</b>, and allow access in the firewall.",
      lang_note: "Button names are shown as they appear in the game in English.",
      controls_title: "Controls", k_move: "Move", k_lclick: "Left click", k_fire: "Shoot (knife: slash)", k_rclick: "Right click",
      k_aim: "Aim (knife: stab)", k_reload: "Reload · lock rotation (Hide and seek)", k_space: "Space", k_jump: "Jump (double)",
      k_sprint: "Sprint", k_crouch: "Crouch · with Shift: slide", k_weapons: "Primary / pistol / knife",
      k_use: "Use: pick up, plant, buy, revive a teammate, turn into an object", k_drop: "Drop weapon",
      k_inspect: "Inspect · whistle (Hide and seek)", k_buy: "Choose weapon · shop", k_voice: "Voice chat",
      k_chat: "All chat / team chat", k_tab: "Scoreboard", k_esc: "Pause", k_note: "All of them can be changed in <b>SETTINGS → CONTROLS</b>.",
      history_title: "Version history",
      legal_nav: "Legal information", l_notice: "Legal notice", l_privacy: "Privacy", l_cookies: "Cookies", l_terms: "Terms",
      l_refunds: "Refunds", l_credits: "Credits and licences", l_access: "Accessibility",
      foot1: "Free, non-profit game made with Godot 4. Models by Quaternius, Poly Haven, styloo, Mixamo and Sketchfab artists; zombie sounds by dragon-studio (Pixabay). <a href=\"creditos.html\">See all credits</a>.",
      foot2: "This website doesn't use cookies or tracking tools. Strike Zone is not affiliated with or endorsed by Valve Corporation.",
      foot3: "The legal texts are in Spanish, which is the version that applies.",
      lb_label: "Enlarged screenshot", close: "Close ✕",
      alt_horde: "The zombie horde coming down the street on the Apocalypse map", alt_zgirl: "Zombie: zombie girl",
      alt_zpris: "Zombie: prisoner", alt_zyaku: "Zombie: Yaku running", alt_trap: "The fire trap burning in the shelter's street",
      alt_props: "Objects on the Desert map: one of them is a hidden player", alt_apo: "The Apocalypse map at sunset",
      alt_rep: "The replay player with the camera behind the player", alt_mod: "Screen to choose a mode: Shooter or Zombies",
      alt_city: "City map in Bomb mode, with an ammo box", alt_play: "PLAY window with the modes and map cards",
      alt_menu: "Main menu with your character, level, cases and credits", alt_range: "Shooting range with the reflex challenge",
      alt_clan: "Clan screen with members and clan ranking", alt_podium: "End of match podium with emotes", alt_desert: "Desert map with a bot in the background"
    },
    pt: {
      skip: "Pular para o conteúdo", lang_label: "Idioma",
      kicker: "FPS MULTIJOGADOR · ZUMBIS · ESCONDE-ESCONDE · GRÁTIS · WINDOWS",
      lead: "Três jogos em um: <b>Shooter</b> tático com modo Bomba, ranks e skins; <b>Zumbis</b>, ondas sozinho ou com seus amigos; e <b>Esconde-esconde</b>, vire um objeto do mapa e não deixe te acharem.",
      chip1: "6 modos", chip2: "5 mapas", chip3: "6 idiomas", chip4: "Clãs", chip5: "Replays", chip6: "Online com amigos",
      new_badge: "NOVA VERSÃO", latest: "Última versão", download: "BAIXAR",
      dl_help: "Grátis, sem contas nem compras. Descompacte o .zip e abra o <code>StrikeZone.exe</code>. Ao abrir, o jogo procura atualizações e se atualiza com um clique.<br>Vinha do <b>Arena FPS</b>? É o mesmo jogo com outro nome: você mantém seu perfil e suas skins.",
      z_tag: "MODO ZUMBIS", z_title: "SOBREVIVA À <span>HORDA</span>",
      z_lead: "Ao abrir o jogo você escolhe: <b>Shooter</b> ou <b>Zumbis</b>. Nos Zumbis vocês aguentam ondas cada vez mais difíceis no mapa <b>Apocalipse</b>, sozinho ou com seus amigos pela internet.",
      z1: "<b>Ondas sem fim</b>Zumbis que andam, correm e rastejam. Até que onda vocês chegam? Dizem que algumas trazem surpresas…",
      z2: "<b>Pontos, loja e caixa misteriosa</b>Cada abate dá pontos: compre armas nas paredes, teste a sorte na caixa, beba vantagens e melhore sua arma.",
      z3: "<b>Zonas para abrir e armadilhas</b>Abra barricadas para chegar a novas zonas e ligue a cerca elétrica ou a grelha de fogo.",
      z4: "<b>Levante seus companheiros</b>Se alguém cair, você tem 30 s para levantá-lo. E os zumbis soltam objetos: bomba, pontos em dobro, munição…",
      cap_horde: "A horda", cap_pris: "Prisioneiro", cap_yaku: "Yaku (corredor)", cap_trap: "Armadilhas",
      egg: "🎃 Dizem que há algo escondido no Apocalipse… você vai encontrar?",
      p_tag: "NOVO · MODO ESCONDE-ESCONDE", p_title: "ONDE <span>VOCÊ ESTÁ</span>?",
      p_lead: "O <b>Prop Hunt</b> do Strike Zone. Os escondidos viram caixas, barris, bancos ou caixas de correio; os caçadores têm 2:30 para encontrá-los… mas cada tiro num objeto de verdade tira vida deles.",
      cap_props: "Qual é o jogador?",
      p1: "<b>Vire o que quiser</b>Olhe para um objeto e aperte E. Trave o giro com R para olhar em volta sem movê-lo.",
      p2: "<b>Os caçadores, às cegas</b>A tela deles fica preta nos primeiros 30 s enquanto vocês se escondem.",
      p3: "<b>Assobie se tiver coragem</b>Com F você assobia e ganha pontos… mas te ouvem. No fim da rodada vocês assobiam sozinhos.",
      p4: "<b>6 rodadas trocando de papel</b>Se te encontram, você passa a procurar. Com bots ou com seus amigos pela internet.",
      gal_title: "Assim é o jogo", gal_sub: "Capturas do jogo (clique para ampliar)",
      cap_apo: "Mapa Apocalipse", cap_rep: "Replays", cap_mod: "Escolha a modalidade", cap_city: "Cidade · modo Bomba", cap_play: "Janela JOGAR",
      cap_menu: "Menu · seu personagem", cap_range: "Campo de tiro", cap_clan: "Clãs", cap_podium: "Pódio e emotes", cap_desert: "Deserto",
      feat_title: "O que tem",
      f_z_t: "Modo Zumbis", f_z_p: "Ondas, loja, caixa misteriosa, vantagens, armadilhas e zonas para abrir. Um jogador ou cooperativo.",
      f_p_t: "Modo Esconde-esconde", f_p_p: "Vire um objeto do mapa e não deixe te acharem. Cada mapa tem seus próprios objetos.",
      f_modes_t: "6 modos de jogo", f_modes_p: "Todos contra todos, por equipes, só facas, Bomba (plantar e desarmar), Esconde-esconde e Zumbis.",
      f_maps_t: "5 mapas", f_maps_p: "Deserto, Arena, Cidade, o Campo de tiro e Apocalipse para os zumbis.",
      f_rep_t: "Replays", f_rep_p: "Cada partida é gravada sozinha. Assista em primeira pessoa, por trás ou com câmera livre, e pule para suas melhores jogadas.",
      f_lang_t: "6 idiomas", f_lang_p: "Espanhol, inglês, português, francês, alemão e italiano. Mude nos Ajustes.",
      f_bots_t: "Bots espertos", f_bots_p: "Só veem o que têm na frente, ouvem seus passos, te procuram, se protegem e avisam a equipe.",
      f_range_t: "Campo de tiro", f_range_p: "Bonecos, alvos móveis, placas para o sniper e um desafio de reflexos com recorde.",
      f_clan_t: "Clãs e recordes", f_clan_p: "Crie seu clã com tag e cor, somem pontos jogando e compare sua melhor onda com seus amigos.",
      f_skins_t: "Skins, caixas e mercado", f_skins_p: "Ganhe caixas jogando, abra e troque skins no mercado com créditos do jogo (sem dinheiro real). Algumas têm contador de abates.",
      f_online_t: "Online com amigos", f_online_p: "Adicione pelo código e entrem juntos; na maioria das redes não é preciso abrir portas. Chat de voz e de texto.",
      f_rank_t: "Ranks e medalhas", f_rank_p: "Suba de nível, ganhe rank competitivo e consiga medalhas por sequências, headshots ou no-scopes.",
      news_title: "Novidades", loading: "Carregando…", notes_lang: "As notas de cada versão estão em espanhol.",
      friends_title: "Jogar com amigos", friends_sub1: "Pela internet (o mais fácil)",
      step1: "No menu, abra <b>AMIGOS</b> e aperte <b>+ ADICIONAR AMIGO</b> com o código do seu amigo (cada um vê o seu nessa janela).",
      step2: "Um aperta <b>JOGAR</b>, aba <b>ONLINE · AMIGOS</b>, escolhe o modo e aperta <b>VAMOS JOGAR!</b>",
      step3: "Os outros o procuram na lista de <b>AMIGOS</b> e apertam <b>ENTRAR</b>. Ele também pode convidar pela partida: <b>Esc → AMIGOS → CONVIDAR</b>.",
      friends_sub2: "Na mesma casa ou rede",
      lan_help: "Um cria a partida em <b>JOGAR → REDE LOCAL</b> e os outros apertam <b>BUSCAR SALAS</b>. Se não aparecer, usem <b>ENTRAR POR IP</b> com o IP que aparece na sala.",
      win_help: "Se o Windows avisar que “protegeu o seu PC”: <b>Mais informações → Executar assim mesmo</b>, e permita o acesso no firewall.",
      lang_note: "Os nomes dos botões aparecem como no jogo em português.",
      controls_title: "Controles", k_move: "Mover-se", k_lclick: "Clique esq.", k_fire: "Atirar (faca: corte)", k_rclick: "Clique dir.",
      k_aim: "Mirar (faca: estocada)", k_reload: "Recarregar · travar o giro (Esconde-esconde)", k_space: "Espaço", k_jump: "Pular (duplo)",
      k_sprint: "Correr", k_crouch: "Agachar · com Shift: deslizar", k_weapons: "Principal / pistola / faca",
      k_use: "Usar: pegar, plantar, comprar, levantar um companheiro, virar objeto", k_drop: "Largar arma",
      k_inspect: "Inspecionar · assobiar (Esconde-esconde)", k_buy: "Escolher arma · loja", k_voice: "Falar por voz",
      k_chat: "Chat geral / da equipe", k_tab: "Placar", k_esc: "Pausa", k_note: "Todas podem ser mudadas em <b>AJUSTES → CONTROLES</b>.",
      history_title: "Histórico de versões",
      legal_nav: "Informação legal", l_notice: "Aviso legal", l_privacy: "Privacidade", l_cookies: "Cookies", l_terms: "Termos",
      l_refunds: "Reembolsos", l_credits: "Créditos e licenças", l_access: "Acessibilidade",
      foot1: "Jogo gratuito e sem fins lucrativos, feito com Godot 4. Modelos de Quaternius, Poly Haven, styloo, Mixamo e artistas do Sketchfab; sons de zumbis de dragon-studio (Pixabay). <a href=\"creditos.html\">Ver todos os créditos</a>.",
      foot2: "Este site não usa cookies nem ferramentas de rastreamento. O Strike Zone não é afiliado nem endossado pela Valve Corporation.",
      foot3: "Os textos legais estão em espanhol, que é a versão válida.",
      lb_label: "Captura ampliada", close: "Fechar ✕",
      alt_horde: "A horda de zumbis chegando pela rua no mapa Apocalipse", alt_zgirl: "Zumbi: garota zumbi",
      alt_zpris: "Zumbi: prisioneiro", alt_zyaku: "Zumbi: Yaku correndo", alt_trap: "A armadilha de fogo ligada na rua do refúgio",
      alt_props: "Objetos no mapa Deserto: um deles é um jogador escondido", alt_apo: "O mapa Apocalipse ao entardecer",
      alt_rep: "O reprodutor de replays com a câmera atrás do jogador", alt_mod: "Tela para escolher a modalidade: Shooter ou Zumbis",
      alt_city: "Mapa Cidade no modo Bomba, com uma caixa de munição", alt_play: "Janela JOGAR com os modos e os cartões de mapa",
      alt_menu: "Menu principal com seu personagem, nível, caixas e créditos", alt_range: "Campo de tiro com o desafio de reflexos",
      alt_clan: "Tela do clã com membros e classificação de clãs", alt_podium: "Pódio do fim da partida com emotes", alt_desert: "Mapa Deserto com um bot ao fundo"
    },
    fr: {
      skip: "Aller au contenu", lang_label: "Langue",
      kicker: "FPS MULTIJOUEUR · ZOMBIES · CACHE-CACHE · GRATUIT · WINDOWS",
      lead: "Trois jeux en un : un <b>Shooter</b> tactique avec mode Bombe, rangs et skins ; <b>Zombies</b>, des vagues en solo ou avec tes amis ; et <b>Cache-cache</b>, transforme-toi en objet de la carte et ne te fais pas trouver.",
      chip1: "6 modes", chip2: "5 cartes", chip3: "6 langues", chip4: "Clans", chip5: "Rediffusions", chip6: "En ligne avec des amis",
      new_badge: "NOUVELLE VERSION", latest: "Dernière version", download: "TÉLÉCHARGER",
      dl_help: "Gratuit, sans compte ni achat. Décompresse le .zip et ouvre <code>StrikeZone.exe</code>. À l'ouverture, le jeu cherche les mises à jour et se met à jour en un clic.<br>Tu venais d'<b>Arena FPS</b> ? C'est le même jeu sous un autre nom : tu gardes ton profil et tes skins.",
      z_tag: "MODE ZOMBIES", z_title: "SURVIS À LA <span>HORDE</span>",
      z_lead: "En ouvrant le jeu, tu choisis : <b>Shooter</b> ou <b>Zombies</b>. En Zombies, vous tenez face à des vagues de plus en plus dures sur la carte <b>Apocalypse</b>, seul ou avec tes amis en ligne.",
      z1: "<b>Des vagues sans fin</b>Des zombies qui marchent, courent et rampent. Jusqu'à quelle vague tiendrez-vous ? On dit que certaines réservent des surprises…",
      z2: "<b>Points, boutique et boîte mystère</b>Chaque élimination rapporte des points : achète des armes murales, tente ta chance avec la boîte, bois des atouts et améliore ton arme.",
      z3: "<b>Zones à ouvrir et pièges</b>Ouvre des barricades pour atteindre de nouvelles zones et allume la clôture électrique ou la grille de feu.",
      z4: "<b>Réanime tes coéquipiers</b>Si quelqu'un tombe, tu as 30 s pour le relever. Et les zombies lâchent des objets : bombe, points doubles, munitions…",
      cap_horde: "La horde", cap_pris: "Prisonnier", cap_yaku: "Yaku (coureur)", cap_trap: "Pièges",
      egg: "🎃 On dit que quelque chose est caché dans l'Apocalypse… le trouveras-tu ?",
      p_tag: "NOUVEAU · MODE CACHE-CACHE", p_title: "OÙ <span>ES-TU</span> ?",
      p_lead: "Le <b>Prop Hunt</b> de Strike Zone. Les cachés se transforment en caisses, barils, bancs ou boîtes aux lettres ; les chercheurs ont 2:30 pour les trouver… mais chaque tir sur un vrai objet leur coûte de la vie.",
      cap_props: "Lequel est le joueur ?",
      p1: "<b>Deviens ce que tu veux</b>Regarde un objet et appuie sur E. Bloque sa rotation avec R pour regarder autour sans le bouger.",
      p2: "<b>Les chercheurs à l'aveugle</b>Leur écran est noir pendant les 30 premières secondes, le temps de vous cacher.",
      p3: "<b>Siffle si tu l'oses</b>Avec F tu siffles et gagnes des points… mais on t'entend. En fin de manche, vous sifflez tout seuls.",
      p4: "<b>6 manches en échangeant les rôles</b>Si on te trouve, tu deviens chercheur. Avec des bots ou avec tes amis en ligne.",
      gal_title: "À quoi ça ressemble", gal_sub: "Captures du jeu (clique pour agrandir)",
      cap_apo: "Carte Apocalypse", cap_rep: "Rediffusions", cap_mod: "Choisis un mode", cap_city: "Ville · mode Bombe", cap_play: "Fenêtre JOUER",
      cap_menu: "Menu · ton personnage", cap_range: "Stand de tir", cap_clan: "Clans", cap_podium: "Podium et emotes", cap_desert: "Désert",
      feat_title: "Ce qu'il contient",
      f_z_t: "Mode Zombies", f_z_p: "Vagues, boutique, boîte mystère, atouts, pièges et zones à ouvrir. En solo ou en coopération.",
      f_p_t: "Mode Cache-cache", f_p_p: "Transforme-toi en objet de la carte et ne te fais pas trouver. Chaque carte a ses propres objets.",
      f_modes_t: "6 modes de jeu", f_modes_p: "Chacun pour soi, équipes, couteaux uniquement, Bombe (poser et désamorcer), Cache-cache et Zombies.",
      f_maps_t: "5 cartes", f_maps_p: "Désert, Arène, Ville, le Stand de tir et Apocalypse pour les zombies.",
      f_rep_t: "Rediffusions", f_rep_p: "Chaque partie s'enregistre toute seule. Regarde-la à la première personne, de derrière ou en caméra libre, et saute à tes meilleures actions.",
      f_lang_t: "6 langues", f_lang_p: "Espagnol, anglais, portugais, français, allemand et italien. Change-la dans les Réglages.",
      f_bots_t: "Bots malins", f_bots_p: "Ils ne voient que ce qu'ils ont devant eux, entendent tes pas, te traquent, se mettent à couvert et préviennent leur équipe.",
      f_range_t: "Stand de tir", f_range_p: "Mannequins, cibles mobiles, plaques pour le sniper et un défi de réflexes avec record.",
      f_clan_t: "Clans et records", f_clan_p: "Crée ton clan avec un tag et une couleur, gagnez des points ensemble et compare ta meilleure vague avec tes amis.",
      f_skins_t: "Skins, caisses et marché", f_skins_p: "Gagne des caisses en jouant, ouvre-les et échange des skins au marché avec des crédits du jeu (pas d'argent réel). Certains ont un compteur d'éliminations.",
      f_online_t: "En ligne avec des amis", f_online_p: "Ajoute-les avec leur code et jouez ensemble ; sur la plupart des réseaux, pas besoin d'ouvrir de ports. Chat vocal et textuel.",
      f_rank_t: "Rangs et médailles", f_rank_p: "Monte de niveau, obtiens un rang compétitif et des médailles pour les séries, les headshots ou les no-scopes.",
      news_title: "Nouveautés", loading: "Chargement…", notes_lang: "Les notes de chaque version sont en espagnol.",
      friends_title: "Jouer avec des amis", friends_sub1: "En ligne (le plus simple)",
      step1: "Dans le menu, ouvre <b>AMIS</b> et appuie sur <b>+ AJOUTER UN AMI</b> avec le code de ton ami (chacun voit le sien dans cette fenêtre).",
      step2: "L'un appuie sur <b>JOUER</b>, onglet <b>EN LIGNE · AMIS</b>, choisit un mode et appuie sur <b>C'EST PARTI !</b>",
      step3: "Les autres le trouvent dans leur liste d'<b>AMIS</b> et appuient sur <b>REJOINDRE</b>. Il peut aussi les inviter depuis la partie : <b>Échap → AMIS → INVITER</b>.",
      friends_sub2: "Dans la même maison ou le même réseau",
      lan_help: "L'un crée la partie dans <b>JOUER → RÉSEAU LOCAL</b> et les autres appuient sur <b>CHERCHER DES SALONS</b>. S'il n'apparaît pas, utilisez <b>REJOINDRE PAR IP</b> avec l'IP affichée dans le salon.",
      win_help: "Si Windows indique qu'il « a protégé votre PC » : <b>Informations complémentaires → Exécuter quand même</b>, puis autorise l'accès dans le pare-feu.",
      lang_note: "Les noms des boutons sont ceux du jeu en français.",
      controls_title: "Commandes", k_move: "Se déplacer", k_lclick: "Clic gauche", k_fire: "Tirer (couteau : entaille)", k_rclick: "Clic droit",
      k_aim: "Viser (couteau : coup d'estoc)", k_reload: "Recharger · bloquer la rotation (Cache-cache)", k_space: "Espace", k_jump: "Sauter (double)",
      k_sprint: "Courir", k_crouch: "S'accroupir · avec Shift : glisser", k_weapons: "Principale / pistolet / couteau",
      k_use: "Utiliser : ramasser, poser, acheter, réanimer, te transformer en objet", k_drop: "Lâcher l'arme",
      k_inspect: "Inspecter · siffler (Cache-cache)", k_buy: "Choisir une arme · boutique", k_voice: "Parler en vocal",
      k_chat: "Chat général / d'équipe", k_tab: "Scores", k_esc: "Pause", k_note: "Toutes peuvent être modifiées dans <b>RÉGLAGES → COMMANDES</b>.",
      history_title: "Historique des versions",
      legal_nav: "Informations légales", l_notice: "Mentions légales", l_privacy: "Confidentialité", l_cookies: "Cookies", l_terms: "Conditions",
      l_refunds: "Remboursements", l_credits: "Crédits et licences", l_access: "Accessibilité",
      foot1: "Jeu gratuit et à but non lucratif, fait avec Godot 4. Modèles de Quaternius, Poly Haven, styloo, Mixamo et d'artistes de Sketchfab ; sons de zombies de dragon-studio (Pixabay). <a href=\"creditos.html\">Voir tous les crédits</a>.",
      foot2: "Ce site n'utilise ni cookies ni outils de suivi. Strike Zone n'est ni affilié ni soutenu par Valve Corporation.",
      foot3: "Les textes légaux sont en espagnol, qui est la version qui fait foi.",
      lb_label: "Capture agrandie", close: "Fermer ✕",
      alt_horde: "La horde de zombies arrivant dans la rue sur la carte Apocalypse", alt_zgirl: "Zombie : fille zombie",
      alt_zpris: "Zombie : prisonnier", alt_zyaku: "Zombie : Yaku en train de courir", alt_trap: "Le piège de feu allumé dans la rue du refuge",
      alt_props: "Objets sur la carte Désert : l'un d'eux est un joueur caché", alt_apo: "La carte Apocalypse au coucher du soleil",
      alt_rep: "Le lecteur de rediffusions avec la caméra derrière le joueur", alt_mod: "Écran pour choisir le mode : Shooter ou Zombies",
      alt_city: "Carte Ville en mode Bombe, avec une caisse de munitions", alt_play: "Fenêtre JOUER avec les modes et les cartes",
      alt_menu: "Menu principal avec ton personnage, ton niveau, tes caisses et tes crédits", alt_range: "Stand de tir avec le défi de réflexes",
      alt_clan: "Écran du clan avec les membres et le classement des clans", alt_podium: "Podium de fin de partie avec emotes", alt_desert: "Carte Désert avec un bot au fond"
    },
    de: {
      skip: "Zum Inhalt springen", lang_label: "Sprache",
      kicker: "MULTIPLAYER-FPS · ZOMBIES · VERSTECKEN · KOSTENLOS · WINDOWS",
      lead: "Drei Spiele in einem: taktischer <b>Shooter</b> mit Bomben-Modus, Rängen und Skins; <b>Zombies</b>, Wellen allein oder mit deinen Freunden; und <b>Verstecken</b>: Verwandle dich in ein Objekt der Karte und lass dich nicht finden.",
      chip1: "6 Modi", chip2: "5 Karten", chip3: "6 Sprachen", chip4: "Clans", chip5: "Wiederholungen", chip6: "Online mit Freunden",
      new_badge: "NEUE VERSION", latest: "Neueste Version", download: "HERUNTERLADEN",
      dl_help: "Kostenlos, ohne Konto und ohne Käufe. Entpacke die .zip und öffne <code>StrikeZone.exe</code>. Beim Start sucht das Spiel nach Updates und aktualisiert sich mit einem Klick.<br>Du kommst von <b>Arena FPS</b>? Es ist dasselbe Spiel mit neuem Namen: Du behältst dein Profil und deine Skins.",
      z_tag: "ZOMBIE-MODUS", z_title: "ÜBERLEBE DIE <span>HORDE</span>",
      z_lead: "Beim Start wählst du: <b>Shooter</b> oder <b>Zombies</b>. Bei Zombies haltet ihr immer härtere Wellen auf der Karte <b>Apokalypse</b> aus, allein oder mit deinen Freunden online.",
      z1: "<b>Endlose Wellen</b>Zombies, die gehen, rennen und kriechen. Bis zu welcher Welle schafft ihr es? Man sagt, manche bringen Überraschungen…",
      z2: "<b>Punkte, Shop und mysteriöse Kiste</b>Jeder Kill bringt Punkte: Kauf Wandwaffen, versuch dein Glück an der Kiste, trink Perks und verbessere deine Waffe.",
      z3: "<b>Zonen zum Öffnen und Fallen</b>Öffne Barrikaden, um neue Zonen zu erreichen, und schalte den Elektrozaun oder den Feuerrost ein.",
      z4: "<b>Belebe deine Mitspieler wieder</b>Fällt jemand, hast du 30 s, um ihn aufzuheben. Und Zombies lassen Gegenstände fallen: Bombe, doppelte Punkte, Munition…",
      cap_horde: "Die Horde", cap_pris: "Gefangener", cap_yaku: "Yaku (Läufer)", cap_trap: "Fallen",
      egg: "🎃 Man sagt, in der Apokalypse ist etwas versteckt… findest du es?",
      p_tag: "NEU · VERSTECKEN-MODUS", p_title: "WO <span>BIST DU</span>?",
      p_lead: "Das <b>Prop Hunt</b> von Strike Zone. Die Versteckten verwandeln sich in Kisten, Fässer, Bänke oder Briefkästen; die Sucher haben 2:30, um sie zu finden… aber jeder Schuss auf ein echtes Objekt kostet sie Leben.",
      cap_props: "Welches ist der Spieler?",
      p1: "<b>Werde, was du willst</b>Schau ein Objekt an und drück E. Fixiere die Drehung mit R, um dich umzusehen, ohne es zu bewegen.",
      p2: "<b>Die Sucher sind blind</b>Ihr Bildschirm ist in den ersten 30 s schwarz, während ihr euch versteckt.",
      p3: "<b>Pfeif, wenn du dich traust</b>Mit F pfeifst du und bekommst Punkte… aber man hört dich. Am Rundenende pfeift ihr von selbst.",
      p4: "<b>6 Runden mit Rollentausch</b>Wirst du gefunden, suchst du mit. Mit Bots oder mit deinen Freunden online.",
      gal_title: "So sieht es aus", gal_sub: "Screenshots aus dem Spiel (zum Vergrößern anklicken)",
      cap_apo: "Karte Apokalypse", cap_rep: "Wiederholungen", cap_mod: "Modus wählen", cap_city: "Stadt · Bomben-Modus", cap_play: "Fenster SPIELEN",
      cap_menu: "Menü · dein Charakter", cap_range: "Schießstand", cap_clan: "Clans", cap_podium: "Podium und Emotes", cap_desert: "Wüste",
      feat_title: "Was drin ist",
      f_z_t: "Zombie-Modus", f_z_p: "Wellen, Shop, mysteriöse Kiste, Perks, Fallen und Zonen zum Öffnen. Allein oder im Koop.",
      f_p_t: "Verstecken-Modus", f_p_p: "Verwandle dich in ein Objekt der Karte und lass dich nicht finden. Jede Karte hat eigene Objekte.",
      f_modes_t: "6 Spielmodi", f_modes_p: "Jeder gegen jeden, Teams, nur Messer, Bombe (legen und entschärfen), Verstecken und Zombies.",
      f_maps_t: "5 Karten", f_maps_p: "Wüste, Arena, Stadt, der Schießstand und Apokalypse für die Zombies.",
      f_rep_t: "Wiederholungen", f_rep_p: "Jedes Spiel wird automatisch aufgezeichnet. Sieh es aus der Ego-Perspektive, von hinten oder mit freier Kamera und spring zu deinen besten Szenen.",
      f_lang_t: "6 Sprachen", f_lang_p: "Spanisch, Englisch, Portugiesisch, Französisch, Deutsch und Italienisch. Umstellbar in den Einstellungen.",
      f_bots_t: "Kluge Bots", f_bots_p: "Sie sehen nur, was vor ihnen ist, hören deine Schritte, suchen dich, gehen in Deckung und warnen ihr Team.",
      f_range_t: "Schießstand", f_range_p: "Puppen, bewegliche Ziele, Stahlplatten für das Scharfschützengewehr und eine Reflex-Challenge mit Rekord.",
      f_clan_t: "Clans und Rekorde", f_clan_p: "Gründe deinen Clan mit Kürzel und Farbe, sammelt gemeinsam Punkte und vergleiche deine beste Welle mit deinen Freunden.",
      f_skins_t: "Skins, Kisten und Markt", f_skins_p: "Verdiene Kisten beim Spielen, öffne sie und tausche Skins auf dem Markt mit Spiel-Credits (kein echtes Geld). Manche haben einen Kill-Zähler.",
      f_online_t: "Online mit Freunden", f_online_p: "Füg sie mit ihrem Code hinzu und spielt zusammen; in den meisten Netzen musst du keine Ports öffnen. Sprach- und Textchat.",
      f_rank_t: "Ränge und Medaillen", f_rank_p: "Steig auf, verdiene einen Wettkampfrang und hol dir Medaillen für Serien, Kopfschüsse oder No-Scopes.",
      news_title: "Neuigkeiten", loading: "Wird geladen…", notes_lang: "Die Hinweise zu jeder Version sind auf Spanisch.",
      friends_title: "Mit Freunden spielen", friends_sub1: "Online (am einfachsten)",
      step1: "Öffne im Menü <b>FREUNDE</b> und drück <b>+ FREUND HINZUFÜGEN</b> mit dem Code deines Freundes (jeder sieht seinen eigenen in diesem Fenster).",
      step2: "Einer drückt <b>SPIELEN</b>, Tab <b>ONLINE · FREUNDE</b>, wählt einen Modus und drückt <b>LOS GEHT'S!</b>",
      step3: "Die anderen suchen ihn in ihrer <b>FREUNDE</b>-Liste und drücken <b>BEITRETEN</b>. Er kann sie auch aus dem Spiel einladen: <b>Esc → FREUNDE → EINLADEN</b>.",
      friends_sub2: "Im selben Haus oder Netz",
      lan_help: "Einer erstellt das Spiel unter <b>SPIELEN → LOKALES NETZ</b> und die anderen drücken <b>RÄUME SUCHEN</b>. Erscheint es nicht, nutzt <b>PER IP BEITRETEN</b> mit der IP, die im Raum angezeigt wird.",
      win_help: "Wenn Windows meldet, dass es „den PC geschützt“ hat: <b>Weitere Informationen → Trotzdem ausführen</b> und den Zugriff in der Firewall erlauben.",
      lang_note: "Die Tastennamen sind so, wie sie im Spiel auf Deutsch erscheinen.",
      controls_title: "Steuerung", k_move: "Bewegen", k_lclick: "Linksklick", k_fire: "Schießen (Messer: Hieb)", k_rclick: "Rechtsklick",
      k_aim: "Zielen (Messer: Stich)", k_reload: "Nachladen · Drehung fixieren (Verstecken)", k_space: "Leertaste", k_jump: "Springen (doppelt)",
      k_sprint: "Sprinten", k_crouch: "Ducken · mit Shift: rutschen", k_weapons: "Primär / Pistole / Messer",
      k_use: "Benutzen: aufheben, legen, kaufen, wiederbeleben, in ein Objekt verwandeln", k_drop: "Waffe fallen lassen",
      k_inspect: "Inspizieren · pfeifen (Verstecken)", k_buy: "Waffe wählen · Shop", k_voice: "Sprachchat",
      k_chat: "Chat an alle / Team", k_tab: "Punktetafel", k_esc: "Pause", k_note: "Alle lassen sich unter <b>EINSTELLUNGEN → STEUERUNG</b> ändern.",
      history_title: "Versionsverlauf",
      legal_nav: "Rechtliche Hinweise", l_notice: "Impressum", l_privacy: "Datenschutz", l_cookies: "Cookies", l_terms: "Bedingungen",
      l_refunds: "Erstattungen", l_credits: "Credits und Lizenzen", l_access: "Barrierefreiheit",
      foot1: "Kostenloses, nicht kommerzielles Spiel, gemacht mit Godot 4. Modelle von Quaternius, Poly Haven, styloo, Mixamo und Sketchfab-Künstlern; Zombie-Sounds von dragon-studio (Pixabay). <a href=\"creditos.html\">Alle Credits ansehen</a>.",
      foot2: "Diese Website verwendet weder Cookies noch Tracking-Tools. Strike Zone ist weder mit Valve Corporation verbunden noch von ihr unterstützt.",
      foot3: "Die Rechtstexte sind auf Spanisch; diese Fassung ist maßgeblich.",
      lb_label: "Vergrößerter Screenshot", close: "Schließen ✕",
      alt_horde: "Die Zombiehorde kommt auf der Karte Apokalypse die Straße herunter", alt_zgirl: "Zombie: Zombie-Mädchen",
      alt_zpris: "Zombie: Gefangener", alt_zyaku: "Zombie: Yaku beim Rennen", alt_trap: "Die Feuerfalle brennt in der Straße des Unterschlupfs",
      alt_props: "Objekte auf der Karte Wüste: Eines davon ist ein versteckter Spieler", alt_apo: "Die Karte Apokalypse bei Sonnenuntergang",
      alt_rep: "Der Wiederholungs-Player mit der Kamera hinter dem Spieler", alt_mod: "Bildschirm zur Moduswahl: Shooter oder Zombies",
      alt_city: "Karte Stadt im Bomben-Modus mit einer Munitionskiste", alt_play: "Fenster SPIELEN mit den Modi und Kartenkarten",
      alt_menu: "Hauptmenü mit deinem Charakter, Stufe, Kisten und Credits", alt_range: "Schießstand mit der Reflex-Challenge",
      alt_clan: "Clan-Bildschirm mit Mitgliedern und Clan-Rangliste", alt_podium: "Podium am Spielende mit Emotes", alt_desert: "Karte Wüste mit einem Bot im Hintergrund"
    },
    it: {
      skip: "Vai al contenuto", lang_label: "Lingua",
      kicker: "FPS MULTIGIOCATORE · ZOMBIE · NASCONDINO · GRATIS · WINDOWS",
      lead: "Tre giochi in uno: <b>Shooter</b> tattico con modalità Bomba, gradi e skin; <b>Zombie</b>, ondate da solo o con i tuoi amici; e <b>Nascondino</b>: trasformati in un oggetto della mappa e non farti trovare.",
      chip1: "6 modalità", chip2: "5 mappe", chip3: "6 lingue", chip4: "Clan", chip5: "Replay", chip6: "Online con gli amici",
      new_badge: "NUOVA VERSIONE", latest: "Ultima versione", download: "SCARICA",
      dl_help: "Gratis, senza account né acquisti. Estrai lo .zip e apri <code>StrikeZone.exe</code>. All'avvio il gioco cerca aggiornamenti e si aggiorna con un clic.<br>Venivi da <b>Arena FPS</b>? È lo stesso gioco con un altro nome: mantieni il profilo e le skin.",
      z_tag: "MODALITÀ ZOMBIE", z_title: "SOPRAVVIVI ALL'<span>ORDA</span>",
      z_lead: "All'avvio scegli: <b>Shooter</b> o <b>Zombie</b>. In Zombie resistete a ondate sempre più dure nella mappa <b>Apocalisse</b>, da solo o con i tuoi amici online.",
      z1: "<b>Ondate senza fine</b>Zombie che camminano, corrono e strisciano. Fino a che ondata arriverete? Dicono che alcune portino sorprese…",
      z2: "<b>Punti, negozio e cassa misteriosa</b>Ogni uccisione dà punti: compra armi a muro, tenta la fortuna con la cassa, bevi vantaggi e potenzia la tua arma.",
      z3: "<b>Zone da aprire e trappole</b>Apri le barricate per raggiungere nuove zone e accendi il recinto elettrico o la griglia di fuoco.",
      z4: "<b>Rianima i compagni</b>Se qualcuno cade, hai 30 s per rialzarlo. E gli zombie lasciano oggetti: bomba, punti doppi, munizioni…",
      cap_horde: "L'orda", cap_pris: "Prigioniero", cap_yaku: "Yaku (corridore)", cap_trap: "Trappole",
      egg: "🎃 Dicono che nell'Apocalisse ci sia qualcosa di nascosto… lo troverai?",
      p_tag: "NOVITÀ · MODALITÀ NASCONDINO", p_title: "DOVE <span>SEI</span>?",
      p_lead: "Il <b>Prop Hunt</b> di Strike Zone. I nascosti si trasformano in casse, barili, panchine o cassette postali; i cercatori hanno 2:30 per trovarli… ma ogni colpo a un oggetto vero toglie loro vita.",
      cap_props: "Qual è il giocatore?",
      p1: "<b>Diventa ciò che vuoi</b>Guarda un oggetto e premi E. Blocca la rotazione con R per guardarti intorno senza muoverlo.",
      p2: "<b>I cercatori, alla cieca</b>Hanno lo schermo nero per i primi 30 s mentre vi nascondete.",
      p3: "<b>Fischia se hai coraggio</b>Con F fischi e guadagni punti… ma ti sentono. A fine round fischiate da soli.",
      p4: "<b>6 round scambiandosi i ruoli</b>Se ti trovano, passi a cercare. Con i bot o con i tuoi amici online.",
      gal_title: "Com'è", gal_sub: "Immagini del gioco (clicca per ingrandirle)",
      cap_apo: "Mappa Apocalisse", cap_rep: "Replay", cap_mod: "Scegli la modalità", cap_city: "Città · modalità Bomba", cap_play: "Finestra GIOCA",
      cap_menu: "Menu · il tuo personaggio", cap_range: "Poligono di tiro", cap_clan: "Clan", cap_podium: "Podio ed emote", cap_desert: "Deserto",
      feat_title: "Cosa contiene",
      f_z_t: "Modalità Zombie", f_z_p: "Ondate, negozio, cassa misteriosa, vantaggi, trappole e zone da aprire. Da solo o in cooperativa.",
      f_p_t: "Modalità Nascondino", f_p_p: "Trasformati in un oggetto della mappa e non farti trovare. Ogni mappa ha i suoi oggetti.",
      f_modes_t: "6 modalità di gioco", f_modes_p: "Tutti contro tutti, a squadre, solo coltelli, Bomba (piazza e disinnesca), Nascondino e Zombie.",
      f_maps_t: "5 mappe", f_maps_p: "Deserto, Arena, Città, il Poligono di tiro e Apocalisse per gli zombie.",
      f_rep_t: "Replay", f_rep_p: "Ogni partita si registra da sola. Guardala in prima persona, da dietro o con la camera libera, e salta alle tue giocate migliori.",
      f_lang_t: "6 lingue", f_lang_p: "Spagnolo, inglese, portoghese, francese, tedesco e italiano. Si cambia nelle Impostazioni.",
      f_bots_t: "Bot intelligenti", f_bots_p: "Vedono solo ciò che hanno davanti, sentono i tuoi passi, ti cercano, si riparano e avvisano la squadra.",
      f_range_t: "Poligono di tiro", f_range_p: "Manichini, bersagli mobili, piastre per il cecchino e una sfida di riflessi con record.",
      f_clan_t: "Clan e record", f_clan_p: "Crea il tuo clan con tag e colore, fate punti insieme e confronta la tua ondata migliore con gli amici.",
      f_skins_t: "Skin, casse e mercato", f_skins_p: "Guadagna casse giocando, aprile e scambia skin nel mercato con crediti di gioco (niente soldi veri). Alcune hanno un contatore di uccisioni.",
      f_online_t: "Online con gli amici", f_online_p: "Aggiungili con il loro codice e giocate insieme; nella maggior parte delle reti non serve aprire porte. Chat vocale e di testo.",
      f_rank_t: "Gradi e medaglie", f_rank_p: "Sali di livello, ottieni un grado competitivo e medaglie per serie, headshot o no-scope.",
      news_title: "Novità", loading: "Caricamento…", notes_lang: "Le note di ogni versione sono in spagnolo.",
      friends_title: "Gioca con gli amici", friends_sub1: "Online (il modo più facile)",
      step1: "Nel menu apri <b>AMICI</b> e premi <b>+ AGGIUNGI AMICO</b> con il codice del tuo amico (ognuno vede il proprio in quella finestra).",
      step2: "Uno preme <b>GIOCA</b>, scheda <b>ONLINE · AMICI</b>, sceglie la modalità e preme <b>SI GIOCA!</b>",
      step3: "Gli altri lo cercano nella lista <b>AMICI</b> e premono <b>UNISCITI</b>. Può anche invitarli dalla partita: <b>Esc → AMICI → INVITA</b>.",
      friends_sub2: "Nella stessa casa o rete",
      lan_help: "Uno crea la partita in <b>GIOCA → RETE LOCALE</b> e gli altri premono <b>CERCA STANZE</b>. Se non compare, usate <b>UNISCITI TRAMITE IP</b> con l'IP mostrato nella stanza.",
      win_help: "Se Windows avvisa di aver “protetto il PC”: <b>Ulteriori informazioni → Esegui comunque</b>, e consenti l'accesso nel firewall.",
      lang_note: "I nomi dei pulsanti sono quelli del gioco in italiano.",
      controls_title: "Comandi", k_move: "Muoversi", k_lclick: "Clic sinistro", k_fire: "Sparare (coltello: fendente)", k_rclick: "Clic destro",
      k_aim: "Mirare (coltello: affondo)", k_reload: "Ricaricare · bloccare la rotazione (Nascondino)", k_space: "Spazio", k_jump: "Saltare (doppio)",
      k_sprint: "Correre", k_crouch: "Accovacciarsi · con Shift: scivolata", k_weapons: "Principale / pistola / coltello",
      k_use: "Usare: raccogliere, piazzare, comprare, rianimare, trasformarti in oggetto", k_drop: "Gettare l'arma",
      k_inspect: "Ispezionare · fischiare (Nascondino)", k_buy: "Scegliere arma · negozio", k_voice: "Parlare in voce",
      k_chat: "Chat a tutti / di squadra", k_tab: "Classifica", k_esc: "Pausa", k_note: "Si possono cambiare tutti in <b>IMPOSTAZIONI → COMANDI</b>.",
      history_title: "Cronologia delle versioni",
      legal_nav: "Informazioni legali", l_notice: "Note legali", l_privacy: "Privacy", l_cookies: "Cookie", l_terms: "Termini",
      l_refunds: "Rimborsi", l_credits: "Crediti e licenze", l_access: "Accessibilità",
      foot1: "Gioco gratuito e senza scopo di lucro, fatto con Godot 4. Modelli di Quaternius, Poly Haven, styloo, Mixamo e artisti di Sketchfab; suoni degli zombie di dragon-studio (Pixabay). <a href=\"creditos.html\">Vedi tutti i crediti</a>.",
      foot2: "Questo sito non usa cookie né strumenti di tracciamento. Strike Zone non è affiliato né approvato da Valve Corporation.",
      foot3: "I testi legali sono in spagnolo, che è la versione valida.",
      lb_label: "Immagine ingrandita", close: "Chiudi ✕",
      alt_horde: "L'orda di zombie che arriva per la strada nella mappa Apocalisse", alt_zgirl: "Zombie: ragazza zombie",
      alt_zpris: "Zombie: prigioniero", alt_zyaku: "Zombie: Yaku che corre", alt_trap: "La trappola di fuoco accesa nella strada del rifugio",
      alt_props: "Oggetti nella mappa Deserto: uno di loro è un giocatore nascosto", alt_apo: "La mappa Apocalisse al tramonto",
      alt_rep: "Il lettore di replay con la camera dietro al giocatore", alt_mod: "Schermata per scegliere la modalità: Shooter o Zombie",
      alt_city: "Mappa Città in modalità Bomba, con una cassa di munizioni", alt_play: "Finestra GIOCA con le modalità e le schede delle mappe",
      alt_menu: "Menu principale con il tuo personaggio, livello, casse e crediti", alt_range: "Poligono di tiro con la sfida di riflessi",
      alt_clan: "Schermata del clan con membri e classifica dei clan", alt_podium: "Podio di fine partita con emote", alt_desert: "Mappa Deserto con un bot sullo sfondo"
    }
  };

  const orig = { html: new Map(), alt: new Map(), aria: new Map() };
  const listeners = [];
  let lang = "es";

  function supported(l) { return l === "es" || Object.prototype.hasOwnProperty.call(PAGE, l); }

  function pick() {
    // ?lang=en en el enlace (para compartirlo ya en un idioma)
    const q = new URLSearchParams(location.search).get("lang");
    if (q && supported(q)) return q;
    try {
      const saved = localStorage.getItem("sz_lang");
      if (saved && supported(saved)) return saved;
    } catch (e) { /* sin almacenamiento: da igual */ }
    for (const l of (navigator.languages || [navigator.language || "es"])) {
      const code = String(l).slice(0, 2).toLowerCase();
      if (supported(code)) return code;
    }
    return "es";
  }

  function apply(l) {
    lang = supported(l) ? l : "es";
    const dict = PAGE[lang] || {};
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      if (!orig.html.has(el)) orig.html.set(el, el.innerHTML);
      const k = el.dataset.i18n;
      el.innerHTML = dict[k] !== undefined ? dict[k] : orig.html.get(el);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(el => {
      if (!orig.alt.has(el)) orig.alt.set(el, el.alt);
      const k = el.dataset.i18nAlt;
      el.alt = dict[k] !== undefined ? dict[k] : orig.alt.get(el);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
      if (!orig.aria.has(el)) orig.aria.set(el, el.getAttribute("aria-label"));
      const k = el.dataset.i18nAria;
      el.setAttribute("aria-label", dict[k] !== undefined ? dict[k] : orig.aria.get(el));
    });
    // Avisos que solo tienen sentido fuera del español.
    document.querySelectorAll('[data-i18n="notes_lang"], [data-i18n="foot3"]').forEach(el => { el.hidden = lang === "es"; });
    const sel = document.getElementById("lang");
    if (sel) sel.value = lang;
    listeners.forEach(fn => fn());
  }

  window.I18N = {
    t(key, ...args) {
      const s = (DYN[lang] && DYN[lang][key]) || DYN.es[key] || key;
      return s.replace(/\{(\d)\}/g, (_, i) => args[+i] !== undefined ? args[+i] : "");
    },
    locale() { return LOCALES[lang] || "es-ES"; },
    onChange(fn) { listeners.push(fn); },
    get lang() { return lang; }
  };

  const sel = document.getElementById("lang");
  if (sel) {
    sel.addEventListener("change", () => {
      try { localStorage.setItem("sz_lang", sel.value); } catch (e) { /* nada */ }
      apply(sel.value);
    });
  }
  apply(pick());
})();
