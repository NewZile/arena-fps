// Idiomas de la portada (index.html). El español está en el HTML y aquí van
// las traducciones (data-i18n = clave; data-i18n-aria para las etiquetas
// accesibles). El idioma se comparte con strikezone.html (misma clave en el
// navegador).
(function () {
  const LOCALES = { es: "es-ES", en: "en-GB", pt: "pt-BR", fr: "fr-FR", de: "de-DE", it: "it-IT" };

  // Pies de las capturas que se montan desde el código (la cinta).
  const CAPS = {
    es: { cap_apo: "Mapa Apocalipsis", cap_rep: "Repeticiones", cap_clan: "Clanes", cap_menu: "Tu personaje", cap_trap: "Trampas zombi", cap_sz_desert: "Desierto", cap_sz_podium: "Podio y emotes" },
    en: { cap_apo: "Apocalypse map", cap_rep: "Replays", cap_clan: "Clans", cap_menu: "Your character", cap_trap: "Zombie traps", cap_sz_desert: "Desert", cap_sz_podium: "Podium and emotes" },
    pt: { cap_apo: "Mapa Apocalipse", cap_rep: "Replays", cap_clan: "Clãs", cap_menu: "Seu personagem", cap_trap: "Armadilhas zumbi", cap_sz_desert: "Deserto", cap_sz_podium: "Pódio e emotes" },
    fr: { cap_apo: "Carte Apocalypse", cap_rep: "Replays", cap_clan: "Clans", cap_menu: "Ton personnage", cap_trap: "Pièges à zombies", cap_sz_desert: "Désert", cap_sz_podium: "Podium et emotes" },
    de: { cap_apo: "Karte Apokalypse", cap_rep: "Wiederholungen", cap_clan: "Clans", cap_menu: "Deine Figur", cap_trap: "Zombie-Fallen", cap_sz_desert: "Wüste", cap_sz_podium: "Podium und Emotes" },
    it: { cap_apo: "Mappa Apocalisse", cap_rep: "Replay", cap_clan: "Clan", cap_menu: "Il tuo personaggio", cap_trap: "Trappole zombi", cap_sz_desert: "Deserto", cap_sz_podium: "Podio ed emote" },
  };

  const PAGE = {
    en: {
      skip: "Skip to content", nav_label: "Main", nav_games: "Games", nav_start: "Get started", lang_label: "Language", nav_dl: "DOWNLOAD",
      hero_kicker: "FREE · WINDOWS · WITH FRIENDS", hero_t1: "Your games.", hero_t2: "One launcher.",
      hero_lead: "The <b>Zile Launcher</b> installs and updates <b>Strike Zone</b>, a shooter with Zombies and Hide &amp; Seek, and <b>Kart Party</b>, crazy kart racing. No accounts, no purchases: download and play.",
      news_title: "News", hero_dl: "DOWNLOAD ZILE LAUNCHER", hero_see: "SEE THE GAMES", hero_fine: "Windows 10 and 11, 64-bit, Updates itself",
      st_games: "free games", st_modes: "modes and tracks", st_dl: "downloads", mock_play: "PLAY",
      games_kicker: "THE COLLECTION", games_title: "Pick your game", games_sub: "Both install from the launcher in one click and update themselves every time a new version comes out.",
      available: "AVAILABLE", sz_card: "Tactical shooter with Bomb mode, Zombie waves and Hide &amp; Seek (Prop Hunt). Ranks, skins, clans and smart bots.",
      t_zombies: "Zombies", t_hide: "Hide &amp; Seek", t_bomb: "Bomb mode", t_clans: "Clans", discover: "DISCOVER IT",
      t_racing: "RACING", kp_card: "Crazy kart racing: drifts with mini-turbo, bananas and shells, cups with a podium, rain and your own driver.",
      t_5tracks: "5 tracks", t_cup: "Cup &amp; podium", t_pilot: "Your driver", t_online: "Online",
      soon1: "A new game is on its way…", soon2: "Coming soon to the launcher",
      sz_kicker: "MULTIPLAYER FPS", sz_lead: "Three games in one: tactical <b>Shooter</b>, <b>Zombie</b> waves solo or co-op, and <b>Hide &amp; Seek</b>, where you turn into a map object so nobody finds you.",
      szf1: "Zombie mode", szf1d: "Waves, mystery box, perks and traps.", szf2: "Hide &amp; Seek", szf2d: "Become a crate, a barrel or a mailbox… and don't get caught.",
      szf3: "6 modes, 5 maps", szf3d: "Bomb, teams, knives only, free-for-all…", szf4: "Ranks and skins", szf4d: "Cases, market, clans, medals and replays.",
      sz_more: "ALL ABOUT STRIKE ZONE", cap_horde: "The horde · Zombies", cap_props: "Which one is the player?", cap_city: "City · Bomb mode",
      kp_kicker: "RACING WITH FRIENDS", kp_lead: "Drift to charge the mini-turbo, throw bananas and shells and win the <b>Cup</b> to step onto the podium with your driver. Solo against bots, on LAN or online with a code.",
      kpf1: "5 tracks", kpf1d: "Valley, snow, island with a bridge, desert and a city at night.", kpf2: "Cup and podium", kpf2d: "Every track in a row, points and trophies.",
      kpf3: "Your driver and your car", kpf3d: "Helmets, outfits, number, stickers, horn and dance.", kpf4: "Rain and night", kpf4d: "Wet asphalt, lightning and less grip.",
      kk_drive: "drive", kk_space: "Space", kk_drift: "drift", kk_item: "item", kk_horn: "horn", kk_pad: "🎮 Gamepad supported",
      cap_rain: "Night City in the rain", cap_podium: "The Cup podium", cap_desert: "Golden Dunes at 185 km/h", cap_bridge: "Tropical Island: figure-eight track with a bridge",
      cap_pilot: "Create your driver", cap_car: "Number and stickers", cap_snow: "Snowy Peak", cap_cup: "Points and trophies", cap_lobby: "The lobby and the garage", cap_island: "Item boxes at sunset",
      marquee_label: "Screenshots of both games", start_kicker: "IN ONE MINUTE", start_title: "Get started",
      s1t: "Download the launcher", s1p: "A single file, <b>ZileLauncher.exe</b>. Nothing else to install.",
      s2t: "Install your games", s2p: "Pick Strike Zone or Kart Party and press <b>INSTALL</b>. When a new version comes out, they update themselves.",
      s3t: "Play with friends", s3p: "Create an online room and share the code, or play on the same network. There are bots to play solo too.",
      tip: "If Windows says it “protected your PC”, click <b>More info → Run anyway</b>. The games are free, with no ads or purchases.",
      final_t1: "Ready to", final_t2: "play?", final_p: "Download the Zile Launcher and have both games in a minute.", zip_link: "Prefer the Strike Zone .zip? It's on its page",
      legal_nav: "Legal information", l_notice: "Legal notice", l_privacy: "Privacy", l_cookies: "Cookies", l_terms: "Terms", l_refunds: "Refunds", l_credits: "Credits and licences", l_access: "Accessibility",
      foot1: "Free, non-profit games made with Godot 4 by NewZile. Fonts: Bricolage Grotesque, Geist, Inter, Rajdhani and Luckiest Guy (Astigmatic, Apache 2.0). <a href=\"creditos.html\">See all credits</a>.",
      foot2: "This website uses no cookies or tracking tools. Strike Zone is not affiliated with or endorsed by Valve Corporation.",
      lb_label: "Enlarged screenshot", close: "Close ✕", prev: "Previous", next: "Next",
    },
    pt: {
      skip: "Pular para o conteúdo", nav_label: "Principal", nav_games: "Jogos", nav_start: "Como começar", lang_label: "Idioma", nav_dl: "BAIXAR",
      hero_kicker: "GRÁTIS · WINDOWS · COM AMIGOS", hero_t1: "Seus jogos.", hero_t2: "Um launcher.",
      hero_lead: "O <b>Zile Launcher</b> instala e mantém atualizados o <b>Strike Zone</b>, um shooter com Zumbis e Esconde-esconde, e o <b>Kart Party</b>, corridas malucas de kart. Sem contas, sem compras: é baixar e jogar.",
      news_title: "Novidades", hero_dl: "BAIXAR ZILE LAUNCHER", hero_see: "VER OS JOGOS", hero_fine: "Windows 10 e 11, 64 bits, Atualiza sozinho",
      st_games: "jogos grátis", st_modes: "modos e pistas", st_dl: "downloads", mock_play: "JOGAR",
      games_kicker: "A COLEÇÃO", games_title: "Escolha o seu jogo", games_sub: "Os dois são instalados pelo launcher com um clique e se atualizam sozinhos a cada nova versão.",
      available: "DISPONÍVEL", sz_card: "Shooter tático com modo Bomba, Zumbis em ondas e Esconde-esconde (Prop Hunt). Patentes, skins, clãs e bots espertos.",
      t_zombies: "Zumbis", t_hide: "Esconde-esconde", t_bomb: "Modo Bomba", t_clans: "Clãs", discover: "CONHEÇA",
      t_racing: "CORRIDAS", kp_card: "Corridas malucas de kart: derrapagens com mini-turbo, bananas e cascos, copas com pódio, chuva e o seu próprio piloto.",
      t_5tracks: "5 pistas", t_cup: "Copa e pódio", t_pilot: "Seu piloto", t_online: "Online",
      soon1: "Um jogo novo está a caminho…", soon2: "Em breve no launcher",
      sz_kicker: "FPS MULTIJOGADOR", sz_lead: "Três jogos em um: <b>Shooter</b> tático, <b>Zumbis</b> em ondas sozinho ou em cooperativo, e <b>Esconde-esconde</b>, onde você vira um objeto do mapa para não ser encontrado.",
      szf1: "Modo Zumbis", szf1d: "Ondas, caixa misteriosa, vantagens e armadilhas.", szf2: "Esconde-esconde", szf2d: "Vire caixa, barril ou caixa de correio… e não seja pego.",
      szf3: "6 modos, 5 mapas", szf3d: "Bomba, equipes, só facas, todos contra todos…", szf4: "Patentes e skins", szf4d: "Caixas, mercado, clãs, medalhas e replays.",
      sz_more: "TUDO SOBRE O STRIKE ZONE", cap_horde: "A horda · Zumbis", cap_props: "Qual é o jogador?", cap_city: "Cidade · modo Bomba",
      kp_kicker: "CORRIDAS COM AMIGOS", kp_lead: "Derrape para carregar o mini-turbo, jogue bananas e cascos e vença a <b>Copa</b> para subir ao pódio com o seu piloto. Sozinho contra bots, em rede local ou online com um código.",
      kpf1: "5 pistas", kpf1d: "Vale, neve, ilha com ponte, deserto e cidade à noite.", kpf2: "Copa e pódio", kpf2d: "Todas as pistas seguidas, pontos e troféus.",
      kpf3: "Seu piloto e seu carro", kpf3d: "Capacetes, roupas, número, adesivos, buzina e dancinha.", kpf4: "Chuva e noite", kpf4d: "Asfalto molhado, relâmpagos e menos aderência.",
      kk_drive: "dirigir", kk_space: "Espaço", kk_drift: "derrapar", kk_item: "item", kk_horn: "buzina", kk_pad: "🎮 Compatível com controle",
      cap_rain: "Cidade Noturna na chuva", cap_podium: "O pódio da Copa", cap_desert: "Dunas Douradas a 185 km/h", cap_bridge: "Ilha Tropical: pista em 8 com ponte",
      cap_pilot: "Crie o seu piloto", cap_car: "Número e adesivos", cap_snow: "Pico Nevado", cap_cup: "Pontos e troféus", cap_lobby: "A sala e a garagem", cap_island: "Caixas de itens ao pôr do sol",
      marquee_label: "Capturas dos dois jogos", start_kicker: "EM UM MINUTO", start_title: "Como começar",
      s1t: "Baixe o launcher", s1p: "Um único arquivo, <b>ZileLauncher.exe</b>. Não precisa instalar mais nada.",
      s2t: "Instale os seus jogos", s2p: "Escolha Strike Zone ou Kart Party e aperte <b>INSTALAR</b>. Quando sair uma versão nova, eles se atualizam sozinhos.",
      s3t: "Jogue com amigos", s3p: "Crie uma sala online e passe o código, ou joguem na mesma rede. Também há bots para jogar sozinho.",
      tip: "Se o Windows avisar que “protegeu o seu PC”, clique em <b>Mais informações → Executar assim mesmo</b>. Os jogos são grátis, sem anúncios nem compras.",
      final_t1: "Pronto para", final_t2: "jogar?", final_p: "Baixe o Zile Launcher e tenha os dois jogos em um minuto.", zip_link: "Prefere o .zip do Strike Zone? Está na página dele",
      legal_nav: "Informações legais", l_notice: "Aviso legal", l_privacy: "Privacidade", l_cookies: "Cookies", l_terms: "Termos", l_refunds: "Reembolsos", l_credits: "Créditos e licenças", l_access: "Acessibilidade",
      foot1: "Jogos gratuitos e sem fins lucrativos, feitos com Godot 4 por NewZile. Fontes: Bricolage Grotesque, Geist, Inter, Rajdhani e Luckiest Guy (Astigmatic, Apache 2.0). <a href=\"creditos.html\">Ver todos os créditos</a>.",
      foot2: "Este site não usa cookies nem ferramentas de rastreamento. O Strike Zone não é afiliado nem endossado pela Valve Corporation.",
      lb_label: "Captura ampliada", close: "Fechar ✕", prev: "Anterior", next: "Próxima",
    },
    fr: {
      skip: "Aller au contenu", nav_label: "Principal", nav_games: "Jeux", nav_start: "Pour commencer", lang_label: "Langue", nav_dl: "TÉLÉCHARGER",
      hero_kicker: "GRATUIT · WINDOWS · ENTRE AMIS", hero_t1: "Tes jeux.", hero_t2: "Un launcher.",
      hero_lead: "Le <b>Zile Launcher</b> installe et met à jour <b>Strike Zone</b>, un shooter avec Zombies et Cache-cache, et <b>Kart Party</b>, des courses de karts déjantées. Sans compte, sans achat : télécharge et joue.",
      news_title: "Actualités", hero_dl: "TÉLÉCHARGER ZILE LAUNCHER", hero_see: "VOIR LES JEUX", hero_fine: "Windows 10 et 11, 64 bits, Se met à jour tout seul",
      st_games: "jeux gratuits", st_modes: "modes et circuits", st_dl: "téléchargements", mock_play: "JOUER",
      games_kicker: "LA COLLECTION", games_title: "Choisis ton jeu", games_sub: "Les deux s'installent depuis le launcher en un clic et se mettent à jour seuls à chaque nouvelle version.",
      available: "DISPONIBLE", sz_card: "Shooter tactique avec mode Bombe, vagues de Zombies et Cache-cache (Prop Hunt). Rangs, skins, clans et bots malins.",
      t_zombies: "Zombies", t_hide: "Cache-cache", t_bomb: "Mode Bombe", t_clans: "Clans", discover: "DÉCOUVRIR",
      t_racing: "COURSE", kp_card: "Courses de karts déjantées : dérapages avec mini-turbo, bananes et carapaces, coupes avec podium, pluie et ton propre pilote.",
      t_5tracks: "5 circuits", t_cup: "Coupe et podium", t_pilot: "Ton pilote", t_online: "En ligne",
      soon1: "Un nouveau jeu arrive…", soon2: "Bientôt dans le launcher",
      sz_kicker: "FPS MULTIJOUEUR", sz_lead: "Trois jeux en un : <b>Shooter</b> tactique, vagues de <b>Zombies</b> en solo ou en coop, et <b>Cache-cache</b>, où tu te transformes en objet de la carte pour qu'on ne te trouve pas.",
      szf1: "Mode Zombies", szf1d: "Vagues, boîte mystère, atouts et pièges.", szf2: "Cache-cache", szf2d: "Deviens caisse, tonneau ou boîte aux lettres… sans te faire prendre.",
      szf3: "6 modes, 5 cartes", szf3d: "Bombe, équipes, couteaux, chacun pour soi…", szf4: "Rangs et skins", szf4d: "Caisses, marché, clans, médailles et replays.",
      sz_more: "TOUT SUR STRIKE ZONE", cap_horde: "La horde · Zombies", cap_props: "Lequel est le joueur ?", cap_city: "Ville · mode Bombe",
      kp_kicker: "COURSES ENTRE AMIS", kp_lead: "Dérape pour charger le mini-turbo, lance bananes et carapaces et gagne la <b>Coupe</b> pour monter sur le podium avec ton pilote. En solo contre des bots, en réseau local ou en ligne avec un code.",
      kpf1: "5 circuits", kpf1d: "Vallée, neige, île avec pont, désert et ville de nuit.", kpf2: "Coupe et podium", kpf2d: "Tous les circuits à la suite, points et trophées.",
      kpf3: "Ton pilote et ta voiture", kpf3d: "Casques, tenues, numéro, stickers, klaxon et danse.", kpf4: "Pluie et nuit", kpf4d: "Asphalte mouillé, éclairs et moins d'adhérence.",
      kk_drive: "conduire", kk_space: "Espace", kk_drift: "déraper", kk_item: "objet", kk_horn: "klaxon", kk_pad: "🎮 Manette compatible",
      cap_rain: "Ville de nuit sous la pluie", cap_podium: "Le podium de la Coupe", cap_desert: "Dunes dorées à 185 km/h", cap_bridge: "Île tropicale : circuit en 8 avec un pont",
      cap_pilot: "Crée ton pilote", cap_car: "Numéro et stickers", cap_snow: "Pic enneigé", cap_cup: "Points et trophées", cap_lobby: "Le salon et le garage", cap_island: "Boîtes d'objets au coucher du soleil",
      marquee_label: "Captures des deux jeux", start_kicker: "EN UNE MINUTE", start_title: "Pour commencer",
      s1t: "Télécharge le launcher", s1p: "Un seul fichier, <b>ZileLauncher.exe</b>. Rien d'autre à installer.",
      s2t: "Installe tes jeux", s2p: "Choisis Strike Zone ou Kart Party et appuie sur <b>INSTALLER</b>. À chaque nouvelle version, ils se mettent à jour seuls.",
      s3t: "Joue entre amis", s3p: "Crée un salon en ligne et partage le code, ou jouez sur le même réseau. Il y a aussi des bots pour jouer seul.",
      tip: "Si Windows indique qu'il « a protégé votre PC », clique sur <b>Informations complémentaires → Exécuter quand même</b>. Les jeux sont gratuits, sans pub ni achats.",
      final_t1: "Prêt à", final_t2: "jouer ?", final_p: "Télécharge le Zile Launcher et aie les deux jeux en une minute.", zip_link: "Tu préfères le .zip de Strike Zone ? Il est sur sa page",
      legal_nav: "Informations légales", l_notice: "Mentions légales", l_privacy: "Confidentialité", l_cookies: "Cookies", l_terms: "Conditions", l_refunds: "Remboursements", l_credits: "Crédits et licences", l_access: "Accessibilité",
      foot1: "Jeux gratuits et sans but lucratif, faits avec Godot 4 par NewZile. Polices : Bricolage Grotesque, Geist, Inter, Rajdhani et Luckiest Guy (Astigmatic, Apache 2.0). <a href=\"creditos.html\">Voir tous les crédits</a>.",
      foot2: "Ce site n'utilise ni cookies ni outils de suivi. Strike Zone n'est ni affilié ni approuvé par Valve Corporation.",
      lb_label: "Capture agrandie", close: "Fermer ✕", prev: "Précédente", next: "Suivante",
    },
    de: {
      skip: "Zum Inhalt springen", nav_label: "Hauptmenü", nav_games: "Spiele", nav_start: "Loslegen", lang_label: "Sprache", nav_dl: "HERUNTERLADEN",
      hero_kicker: "KOSTENLOS · WINDOWS · MIT FREUNDEN", hero_t1: "Deine Spiele.", hero_t2: "Ein Launcher.",
      hero_lead: "Der <b>Zile Launcher</b> installiert und aktualisiert <b>Strike Zone</b>, einen Shooter mit Zombies und Verstecken, und <b>Kart Party</b>, verrückte Kartrennen. Keine Konten, keine Käufe: herunterladen und losspielen.",
      news_title: "Neuigkeiten", hero_dl: "ZILE LAUNCHER HERUNTERLADEN", hero_see: "ZU DEN SPIELEN", hero_fine: "Windows 10 und 11, 64 Bit, Aktualisiert sich selbst",
      st_games: "kostenlose Spiele", st_modes: "Modi und Strecken", st_dl: "Downloads", mock_play: "SPIELEN",
      games_kicker: "DIE SAMMLUNG", games_title: "Wähle dein Spiel", games_sub: "Beide werden mit einem Klick über den Launcher installiert und aktualisieren sich bei jeder neuen Version selbst.",
      available: "VERFÜGBAR", sz_card: "Taktik-Shooter mit Bombenmodus, Zombie-Wellen und Verstecken (Prop Hunt). Ränge, Skins, Clans und schlaue Bots.",
      t_zombies: "Zombies", t_hide: "Verstecken", t_bomb: "Bombenmodus", t_clans: "Clans", discover: "ENTDECKEN",
      t_racing: "RENNEN", kp_card: "Verrückte Kartrennen: Drifts mit Mini-Turbo, Bananen und Panzer, Cups mit Podium, Regen und dein eigener Fahrer.",
      t_5tracks: "5 Strecken", t_cup: "Cup und Podium", t_pilot: "Dein Fahrer", t_online: "Online",
      soon1: "Ein neues Spiel ist unterwegs…", soon2: "Bald im Launcher",
      sz_kicker: "MULTIPLAYER-FPS", sz_lead: "Drei Spiele in einem: taktischer <b>Shooter</b>, <b>Zombie</b>-Wellen allein oder im Koop und <b>Verstecken</b>, bei dem du dich in einen Gegenstand der Karte verwandelst.",
      szf1: "Zombie-Modus", szf1d: "Wellen, Mysteriöse Kiste, Perks und Fallen.", szf2: "Verstecken", szf2d: "Werde zur Kiste, zum Fass oder Briefkasten… und lass dich nicht erwischen.",
      szf3: "6 Modi, 5 Karten", szf3d: "Bombe, Teams, nur Messer, jeder gegen jeden…", szf4: "Ränge und Skins", szf4d: "Kisten, Markt, Clans, Medaillen und Wiederholungen.",
      sz_more: "ALLES ÜBER STRIKE ZONE", cap_horde: "Die Horde · Zombies", cap_props: "Wer ist der Spieler?", cap_city: "Stadt · Bombenmodus",
      kp_kicker: "RENNEN MIT FREUNDEN", kp_lead: "Drifte, um den Mini-Turbo aufzuladen, wirf Bananen und Panzer und gewinne den <b>Cup</b>, um mit deinem Fahrer aufs Podium zu steigen. Allein gegen Bots, im LAN oder online mit einem Code.",
      kpf1: "5 Strecken", kpf1d: "Tal, Schnee, Insel mit Brücke, Wüste und Stadt bei Nacht.", kpf2: "Cup und Podium", kpf2d: "Alle Strecken hintereinander, Punkte und Pokale.",
      kpf3: "Dein Fahrer und dein Auto", kpf3d: "Helme, Outfits, Nummer, Aufkleber, Hupe und Tanz.", kpf4: "Regen und Nacht", kpf4d: "Nasser Asphalt, Blitze und weniger Grip.",
      kk_drive: "fahren", kk_space: "Leertaste", kk_drift: "driften", kk_item: "Item", kk_horn: "Hupe", kk_pad: "🎮 Controller unterstützt",
      cap_rain: "Nachtstadt im Regen", cap_podium: "Das Cup-Podium", cap_desert: "Goldene Dünen mit 185 km/h", cap_bridge: "Tropeninsel: Achterstrecke mit Brücke",
      cap_pilot: "Erstelle deinen Fahrer", cap_car: "Nummer und Aufkleber", cap_snow: "Schneegipfel", cap_cup: "Punkte und Pokale", cap_lobby: "Lobby und Garage", cap_island: "Itemboxen im Sonnenuntergang",
      marquee_label: "Screenshots beider Spiele", start_kicker: "IN EINER MINUTE", start_title: "Loslegen",
      s1t: "Launcher herunterladen", s1p: "Eine einzige Datei, <b>ZileLauncher.exe</b>. Sonst musst du nichts installieren.",
      s2t: "Spiele installieren", s2p: "Wähle Strike Zone oder Kart Party und drücke <b>INSTALLIEREN</b>. Neue Versionen spielen sich automatisch ein.",
      s3t: "Mit Freunden spielen", s3p: "Erstelle einen Online-Raum und teile den Code oder spielt im selben Netzwerk. Es gibt auch Bots zum Alleinspielen.",
      tip: "Wenn Windows meldet, dass es „den PC geschützt“ hat, klicke auf <b>Weitere Informationen → Trotzdem ausführen</b>. Die Spiele sind kostenlos, ohne Werbung und Käufe.",
      final_t1: "Bereit zum", final_t2: "Spielen?", final_p: "Lade den Zile Launcher herunter und hab beide Spiele in einer Minute.", zip_link: "Lieber die .zip von Strike Zone? Sie ist auf seiner Seite",
      legal_nav: "Rechtliche Hinweise", l_notice: "Impressum", l_privacy: "Datenschutz", l_cookies: "Cookies", l_terms: "Nutzungsbedingungen", l_refunds: "Erstattungen", l_credits: "Credits und Lizenzen", l_access: "Barrierefreiheit",
      foot1: "Kostenlose, nicht kommerzielle Spiele, mit Godot 4 von NewZile gemacht. Schriften: Bricolage Grotesque, Geist, Inter, Rajdhani und Luckiest Guy (Astigmatic, Apache 2.0). <a href=\"creditos.html\">Alle Credits ansehen</a>.",
      foot2: "Diese Website verwendet keine Cookies oder Tracking-Tools. Strike Zone steht in keiner Verbindung zu Valve Corporation und wird nicht von ihr unterstützt.",
      lb_label: "Vergrößerter Screenshot", close: "Schließen ✕", prev: "Zurück", next: "Weiter",
    },
    it: {
      skip: "Vai al contenuto", nav_label: "Principale", nav_games: "Giochi", nav_start: "Come iniziare", lang_label: "Lingua", nav_dl: "SCARICA",
      hero_kicker: "GRATIS · WINDOWS · CON GLI AMICI", hero_t1: "I tuoi giochi.", hero_t2: "Un launcher.",
      hero_lead: "Lo <b>Zile Launcher</b> installa e aggiorna <b>Strike Zone</b>, uno shooter con Zombi e Nascondino, e <b>Kart Party</b>, corse folli di kart. Niente account, niente acquisti: scarica e gioca.",
      news_title: "Novità", hero_dl: "SCARICA ZILE LAUNCHER", hero_see: "VEDI I GIOCHI", hero_fine: "Windows 10 e 11, 64 bit, Si aggiorna da solo",
      st_games: "giochi gratis", st_modes: "modalità e circuiti", st_dl: "download", mock_play: "GIOCA",
      games_kicker: "LA COLLEZIONE", games_title: "Scegli il tuo gioco", games_sub: "Si installano entrambi dal launcher con un clic e si aggiornano da soli a ogni nuova versione.",
      available: "DISPONIBILE", sz_card: "Shooter tattico con modalità Bomba, ondate di Zombi e Nascondino (Prop Hunt). Gradi, skin, clan e bot furbi.",
      t_zombies: "Zombi", t_hide: "Nascondino", t_bomb: "Modalità Bomba", t_clans: "Clan", discover: "SCOPRILO",
      t_racing: "CORSE", kp_card: "Corse folli di kart: derapate con mini-turbo, banane e gusci, coppe con podio, pioggia e il tuo pilota.",
      t_5tracks: "5 circuiti", t_cup: "Coppa e podio", t_pilot: "Il tuo pilota", t_online: "Online",
      soon1: "Un nuovo gioco è in arrivo…", soon2: "Presto nel launcher",
      sz_kicker: "FPS MULTIGIOCATORE", sz_lead: "Tre giochi in uno: <b>Shooter</b> tattico, ondate di <b>Zombi</b> da solo o in cooperativa, e <b>Nascondino</b>, dove diventi un oggetto della mappa per non farti trovare.",
      szf1: "Modalità Zombi", szf1d: "Ondate, cassa misteriosa, vantaggi e trappole.", szf2: "Nascondino", szf2d: "Diventa una cassa, un barile o una buca delle lettere… senza farti beccare.",
      szf3: "6 modalità, 5 mappe", szf3d: "Bomba, squadre, solo coltelli, tutti contro tutti…", szf4: "Gradi e skin", szf4d: "Casse, mercato, clan, medaglie e replay.",
      sz_more: "TUTTO SU STRIKE ZONE", cap_horde: "L'orda · Zombi", cap_props: "Qual è il giocatore?", cap_city: "Città · modalità Bomba",
      kp_kicker: "CORSE CON GLI AMICI", kp_lead: "Derapa per caricare il mini-turbo, lancia banane e gusci e vinci la <b>Coppa</b> per salire sul podio con il tuo pilota. Da solo contro i bot, in rete locale o online con un codice.",
      kpf1: "5 circuiti", kpf1d: "Valle, neve, isola con ponte, deserto e città di notte.", kpf2: "Coppa e podio", kpf2d: "Tutti i circuiti di fila, punti e trofei.",
      kpf3: "Il tuo pilota e la tua auto", kpf3d: "Caschi, tenute, numero, adesivi, clacson e balletto.", kpf4: "Pioggia e notte", kpf4d: "Asfalto bagnato, fulmini e meno aderenza.",
      kk_drive: "guidare", kk_space: "Spazio", kk_drift: "derapare", kk_item: "oggetto", kk_horn: "clacson", kk_pad: "🎮 Controller compatibile",
      cap_rain: "Città notturna sotto la pioggia", cap_podium: "Il podio della Coppa", cap_desert: "Dune dorate a 185 km/h", cap_bridge: "Isola tropicale: circuito a 8 con ponte",
      cap_pilot: "Crea il tuo pilota", cap_car: "Numero e adesivi", cap_snow: "Picco innevato", cap_cup: "Punti e trofei", cap_lobby: "La stanza e il garage", cap_island: "Casse oggetto al tramonto",
      marquee_label: "Screenshot dei due giochi", start_kicker: "IN UN MINUTO", start_title: "Come iniziare",
      s1t: "Scarica il launcher", s1p: "Un solo file, <b>ZileLauncher.exe</b>. Non serve installare altro.",
      s2t: "Installa i tuoi giochi", s2p: "Scegli Strike Zone o Kart Party e premi <b>INSTALLA</b>. Quando esce una nuova versione, si aggiornano da soli.",
      s3t: "Gioca con gli amici", s3p: "Crea una stanza online e condividi il codice, o giocate sulla stessa rete. Ci sono anche i bot per giocare da solo.",
      tip: "Se Windows dice di aver “protetto il PC”, clicca <b>Ulteriori informazioni → Esegui comunque</b>. I giochi sono gratis, senza pubblicità né acquisti.",
      final_t1: "Pronto a", final_t2: "giocare?", final_p: "Scarica lo Zile Launcher e avrai entrambi i giochi in un minuto.", zip_link: "Preferisci lo .zip di Strike Zone? È nella sua pagina",
      legal_nav: "Informazioni legali", l_notice: "Note legali", l_privacy: "Privacy", l_cookies: "Cookie", l_terms: "Termini", l_refunds: "Rimborsi", l_credits: "Crediti e licenze", l_access: "Accessibilità",
      foot1: "Giochi gratuiti e senza scopo di lucro, fatti con Godot 4 da NewZile. Caratteri: Bricolage Grotesque, Geist, Inter, Rajdhani e Luckiest Guy (Astigmatic, Apache 2.0). <a href=\"creditos.html\">Vedi tutti i crediti</a>.",
      foot2: "Questo sito non usa cookie né strumenti di tracciamento. Strike Zone non è affiliato né approvato da Valve Corporation.",
      lb_label: "Screenshot ingrandito", close: "Chiudi ✕", prev: "Precedente", next: "Successivo",
    },
  };

  const orig = { html: new Map(), aria: new Map() };
  const listeners = [];
  let lang = "es";
  const supported = l => l === "es" || Object.prototype.hasOwnProperty.call(PAGE, l);

  function pick() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q && supported(q)) return q;
    try {
      const saved = localStorage.getItem("sz_lang");
      if (saved && supported(saved)) return saved;
    } catch (e) { /* sin almacenamiento */ }
    for (const l of (navigator.languages || [navigator.language || "es"])) {
      const code = String(l).slice(0, 2).toLowerCase();
      if (supported(code)) return code;
    }
    return "es";
  }

  function apply(l) {
    lang = supported(l) ? l : "es";
    const dict = Object.assign({}, CAPS[lang] || {}, PAGE[lang] || {});
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      if (!orig.html.has(el)) orig.html.set(el, el.innerHTML);
      const k = el.dataset.i18n;
      el.innerHTML = dict[k] !== undefined ? dict[k] : orig.html.get(el);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
      if (!orig.aria.has(el)) orig.aria.set(el, el.getAttribute("aria-label"));
      const k = el.dataset.i18nAria;
      el.setAttribute("aria-label", dict[k] !== undefined ? dict[k] : orig.aria.get(el));
    });
    const sel = document.getElementById("lang");
    if (sel) sel.value = lang;
    listeners.forEach(fn => fn());
  }

  window.HUB = {
    // Texto de una clave en el idioma actual (para lo que se monta desde el código).
    t(key) {
      if (CAPS[lang] && CAPS[lang][key]) return CAPS[lang][key];
      if (PAGE[lang] && PAGE[lang][key]) return PAGE[lang][key];
      const el = document.querySelector(`[data-i18n="${key}"]`);
      if (el && orig.html.has(el)) return orig.html.get(el);
      return (el && el.innerHTML) || CAPS.es[key] || key;
    },
    locale() { return LOCALES[lang] || "es-ES"; },
    onChange(fn) { listeners.push(fn); },
    get lang() { return lang; },
  };

  const sel = document.getElementById("lang");
  if (sel) sel.addEventListener("change", () => {
    try { localStorage.setItem("sz_lang", sel.value); } catch (e) { /* nada */ }
    apply(sel.value);
  });
  apply(pick());
})();
