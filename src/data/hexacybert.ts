import type { Lang } from '~/utils/i18n';

export type SectionKey =
  | 'cybersecurity'
  | 'privacy'
  | 'privacy-center'
  | 'vpn'
  | 'antivirus'
  | 'password-managers'
  | 'guides'
  | 'comparisons'
  | 'tools'
  | 'news'
  | 'device-security'
  | 'wifi-security'
  | 'resources';

export type Level = 'Beginner' | 'Intermediate' | 'Advanced';

export interface SourceRef {
  label: string;
  url: string;
}

export interface Article {
  title: string;
  slug: string;
  lang: Lang;
  description: string;
  category: SectionKey;
  type: 'guide' | 'privacy' | 'manager' | 'comparison' | 'news' | 'device' | 'network' | 'cybersecurity';
  level: Level;
  date: string;
  updated: string;
  author: string;
  readingTime: string;
  tags: string[];
  audience: string[];
  os: string[];
  summary: string;
  content: {
    intro: string[];
    risks: string[];
    steps: string[];
    mistakes: string[];
    checklist: string[];
    faq: Array<[string, string]>;
    conclusion: string;
  };
  sources: SourceRef[];
  seo: { title: string; description: string };
}

export const sourceLibrary = {
  cisaMfa: {
    label: 'CISA - Multifactor Authentication',
    url: 'https://www.cisa.gov/topics/cybersecurity-best-practices/multifactor-authentication',
  },
  cisaMoreThanPassword: { label: 'CISA - More than a Password', url: 'https://www.cisa.gov/MFA' },
  nistIdentity: { label: 'NIST SP 800-63 Digital Identity Guidelines', url: 'https://pages.nist.gov/800-63-4/' },
  ncscSmallOrg: { label: 'NCSC - Small organisations guide to cyber security', url: 'https://www.ncsc.gov.uk/collection/small-organisations-guide-to-cyber-security' },
  ncscBackups: { label: 'NCSC - Backing up your data', url: 'https://www.ncsc.gov.uk/collection/small-organisations-guide-to-cyber-security/1-backing-up-your-data' },
  ncscScams: { label: 'NCSC - Spotting cyber attacks', url: 'https://www.ncsc.gov.uk/collection/small-organisations-guide-to-cyber-security/5-spotting-cyber-attacks' },
  cnilCookies: { label: 'CNIL - Alternatives to third-party cookies and consent', url: 'https://www.cnil.fr/en/alternatives-third-party-cookies-what-consequences-regarding-consent' },
  cnilHome: { label: 'CNIL - Guidelines and recommendations', url: 'https://www.cnil.fr/en' },
  edpbCookies: { label: 'EDPB - Cookie banner taskforce report', url: 'https://www.edpb.europa.eu/our-work-tools/our-documents/other/report-work-undertaken-cookie-banner-taskforce_en' },
  ncscVpn: { label: 'NCSC - Virtual Private Networks', url: 'https://www.ncsc.gov.uk/collection/device-security-guidance/infrastructure/virtual-private-networks' },
  cisaWireless: { label: 'CISA - Securing Wireless Networks', url: 'https://www.cisa.gov/news-events/news/securing-wireless-networks' },
  cyberCanadaWifi: { label: 'Canadian Centre for Cyber Security - Wi-Fi guidance', url: 'https://www.cyber.gc.ca/en/guidance/protecting-your-organization-while-using-wi-fi-itsap80009' },
  ietfIkev2: { label: 'IETF RFC 5996 - Internet Key Exchange Protocol Version 2', url: 'https://datatracker.ietf.org/doc/html/rfc5996' },
  wireguardProtocol: { label: 'WireGuard - Protocol and cryptography', url: 'https://www.wireguard.com/protocol/' },
  openVpnManual: { label: 'OpenVPN - Community documentation', url: 'https://openvpn.net/community-resources/' },
  mozillaWebRtc: { label: 'MDN Web Docs - WebRTC API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API' },
  nistTelework: { label: 'NIST SP 800-46 Rev. 2 - Enterprise Telework, Remote Access, and BYOD Security', url: 'https://csrc.nist.gov/pubs/sp/800/46/r2/final' },
  ftcVpn: { label: 'FTC - VPN apps: What you need to know', url: 'https://consumer.ftc.gov/articles/vpn-apps-what-you-need-know' },
  bitwarden: { label: 'Bitwarden - Product and help resources', url: 'https://bitwarden.com/' },
  onePassword: { label: '1Password - Features', url: 'https://1password.com/features' },
  dashlane: { label: 'Dashlane - Password manager resources', url: 'https://www.dashlane.com/features/password-manager' },
  protonPass: { label: 'Proton Pass - Product information', url: 'https://proton.me/pass' },
  protonPasskeys: { label: 'Proton Pass - Passkeys support', url: 'https://proton.me/support/pass-use-passkeys' },
  keepassxc: { label: 'KeePassXC - User guide', url: 'https://keepassxc.org/docs/KeePassXC_UserGuide' },
  keeper: { label: 'Keeper - Security model', url: 'https://www.keepersecurity.com/security.html' },
  roboform: { label: 'RoboForm - Product information', url: 'https://www.roboform.com/' },
  enpass: { label: 'Enpass - Product information', url: 'https://www.enpass.io/' },
};

export const contactEmail = 'hexacybertprivate@gmail.com';
export const contactMailto = `mailto:${contactEmail}`;
export const adminCountry: Record<'en' | 'fr' | 'es', string> = {
  en: 'France',
  fr: 'France',
  es: 'Francia',
};

export const siteCopy = {
  en: {
    description: 'Guides, reviews and tools to help you stay secure online.',
    heroTitle: 'Protect your digital life',
    heroText: 'Independent cybersecurity guidance, privacy explainers and local tools for safer online decisions.',
    primaryCta: 'Start with the security guides',
    secondaryCta: 'Open the privacy center',
    categoriesTitle: 'Explore HexaCybert',
    featuredTitle: 'Recommended reading',
    toolsTitle: 'Free local security tools',
    latestTitle: 'Latest editorial updates',
    newsletterTitle: 'Practical security notes',
    newsletterText: 'Receive clear, non-promotional security and privacy updates when new resources are published.',
    emailPlaceholder: 'you@example.com',
    subscribe: 'Subscribe',
  },
  fr: {
    description: 'Guides, analyses et outils pour rester plus en sécurité en ligne.',
    heroTitle: 'Protégez votre vie numérique',
    heroText: 'Conseils indépendants, explications sur la vie privée et outils locaux pour prendre de meilleures décisions en ligne.',
    primaryCta: 'Commencer par les guides',
    secondaryCta: 'Ouvrir le centre de confidentialité',
    categoriesTitle: 'Explorer HexaCybert',
    featuredTitle: 'Lectures recommandées',
    toolsTitle: 'Outils de sécurité locaux',
    latestTitle: 'Dernières mises à jour',
    newsletterTitle: 'Notes pratiques de sécurité',
    newsletterText: 'Recevez des mises à jour claires, sans promotion, lorsque de nouvelles ressources sont publiées.',
    emailPlaceholder: 'vous@example.com',
    subscribe: 'S’abonner',
  },
  de: {
    description: 'Leitfaden, Bewertungen und Tools fur mehr Sicherheit online.',
    heroTitle: 'Schutze dein digitales Leben',
    heroText: 'Unabhangige Orientierung zu Cybersicherheit, Datenschutz und lokalen Tools fur bessere Online-Entscheidungen.',
    primaryCta: 'Mit Sicherheitsleitfaden beginnen',
    secondaryCta: 'Datenschutzzentrum offnen',
    categoriesTitle: 'HexaCybert entdecken',
    featuredTitle: 'Empfohlene Lekture',
    toolsTitle: 'Kostenlose lokale Sicherheitstools',
    latestTitle: 'Neueste redaktionelle Updates',
    newsletterTitle: 'Praktische Sicherheitsnotizen',
    newsletterText: 'Klare, nicht werbliche Updates erhalten, wenn neue Ressourcen erscheinen.',
    emailPlaceholder: 'du@example.com',
    subscribe: 'Abonnieren',
  },
  es: {
    description: 'Guias, analisis y herramientas para ayudarte a estar mas seguro en linea.',
    heroTitle: 'Protege tu vida digital',
    heroText: 'Orientacion independiente de ciberseguridad, explicaciones de privacidad y herramientas locales para decidir mejor en linea.',
    primaryCta: 'Empezar con las guias de seguridad',
    secondaryCta: 'Abrir el centro de privacidad',
    categoriesTitle: 'Explorar HexaCybert',
    featuredTitle: 'Lecturas recomendadas',
    toolsTitle: 'Herramientas locales gratuitas',
    latestTitle: 'Ultimas actualizaciones editoriales',
    newsletterTitle: 'Notas practicas de seguridad',
    newsletterText: 'Recibe actualizaciones claras y sin promocion cuando publiquemos nuevos recursos.',
    emailPlaceholder: 'tu@example.com',
    subscribe: 'Suscribirse',
  },
  it: {
    description: 'Guide, recensioni e strumenti per restare piu sicuri online.',
    heroTitle: 'Proteggi la tua vita digitale',
    heroText: 'Guida indipendente su cybersecurity, privacy e strumenti locali per decisioni online piu sicure.',
    primaryCta: 'Inizia dalle guide di sicurezza',
    secondaryCta: 'Apri il centro privacy',
    categoriesTitle: 'Esplora HexaCybert',
    featuredTitle: 'Letture consigliate',
    toolsTitle: 'Strumenti locali gratuiti',
    latestTitle: 'Ultimi aggiornamenti editoriali',
    newsletterTitle: 'Note pratiche di sicurezza',
    newsletterText: 'Ricevi aggiornamenti chiari e non promozionali quando pubblichiamo nuove risorse.',
    emailPlaceholder: 'tu@example.com',
    subscribe: 'Iscriviti',
  },
  pt: {
    description: 'Guias, analises e ferramentas para ajudar a manter-se seguro online.',
    heroTitle: 'Proteja a sua vida digital',
    heroText: 'Orientacao independente sobre ciberseguranca, privacidade e ferramentas locais para melhores decisoes online.',
    primaryCta: 'Comecar pelos guias de seguranca',
    secondaryCta: 'Abrir o centro de privacidade',
    categoriesTitle: 'Explorar HexaCybert',
    featuredTitle: 'Leituras recomendadas',
    toolsTitle: 'Ferramentas locais gratuitas',
    latestTitle: 'Ultimas atualizacoes editoriais',
    newsletterTitle: 'Notas praticas de seguranca',
    newsletterText: 'Receba atualizacoes claras e sem promocao quando novos recursos forem publicados.',
    emailPlaceholder: 'voce@example.com',
    subscribe: 'Subscrever',
  },
  nl: {
    description: 'Gidsen, reviews en tools om online veiliger te blijven.',
    heroTitle: 'Bescherm je digitale leven',
    heroText: 'Onafhankelijke cybersecurity-hulp, privacy-uitleg en lokale tools voor veiligere online keuzes.',
    primaryCta: 'Begin met de beveiligingsgidsen',
    secondaryCta: 'Open het privacycentrum',
    categoriesTitle: 'HexaCybert verkennen',
    featuredTitle: 'Aanbevolen artikelen',
    toolsTitle: 'Gratis lokale beveiligingstools',
    latestTitle: 'Laatste redactionele updates',
    newsletterTitle: 'Praktische beveiligingsnotities',
    newsletterText: 'Ontvang duidelijke updates zonder promotie wanneer nieuwe bronnen verschijnen.',
    emailPlaceholder: 'jij@example.com',
    subscribe: 'Abonneren',
  },
} as const;

export const localizedCopy = (lang: Lang) => siteCopy[lang] ?? siteCopy.en;

export const sectionOrder: SectionKey[] = [
  'guides',
  'vpn',
  'privacy-center',
  'password-managers',
  'comparisons',
  'tools',
  'news',
  'cybersecurity',
  'device-security',
  'wifi-security',
  'resources',
  'privacy',
  'antivirus',
];

export const sections: Record<Lang, Record<SectionKey, { title: string; description: string; icon: string }>> = {
  en: {
    cybersecurity: { title: 'Cybersecurity', description: 'Threat awareness, safer habits and core defensive routines.', icon: 'tabler:shield-lock' },
    privacy: { title: 'Privacy', description: 'Tracking, cookies, permissions, metadata and data minimization.', icon: 'tabler:eye-off' },
    'privacy-center': { title: 'Privacy Center', description: 'Privacy content organized by beginner, intermediate and advanced level.', icon: 'tabler:lock-access' },
    vpn: { title: 'VPN', description: 'Neutral VPN education without affiliate claims or exaggerated promises.', icon: 'tabler:route' },
    antivirus: { title: 'Antivirus', description: 'Malware protection and how antivirus fits into device hygiene.', icon: 'tabler:bug-off' },
    'password-managers': { title: 'Password Managers', description: 'Independent pages on managers, passkeys and safer credential workflows.', icon: 'tabler:key' },
    guides: { title: 'Guides', description: 'Step-by-step security guidance for personal, family and small business use.', icon: 'tabler:list-check' },
    comparisons: { title: 'Comparisons', description: 'Neutral comparisons that explain trade-offs instead of declaring universal winners.', icon: 'tabler:arrows-diff' },
    tools: { title: 'Tools', description: 'Local browser tools that avoid sending sensitive input to a server.', icon: 'tabler:tools' },
    news: { title: 'News', description: 'Verified security updates summarized from primary or official sources.', icon: 'tabler:news' },
    'device-security': { title: 'Device Security', description: 'Windows, macOS, mobile, updates, backups and file protection.', icon: 'tabler:devices' },
    'wifi-security': { title: 'Wi-Fi and Networks', description: 'Router, public Wi-Fi, DNS and home network safety.', icon: 'tabler:wifi' },
    resources: { title: 'Security Resources', description: 'Curated pathways for families, students, travelers, remote workers and small teams.', icon: 'tabler:book-2' },
  },
  fr: {
    cybersecurity: { title: 'Cybersécurité', description: 'Menaces, habitudes plus sûres et routines de défense essentielles.', icon: 'tabler:shield-lock' },
    privacy: { title: 'Vie privée', description: 'Pistage, cookies, permissions, métadonnées et minimisation des données.', icon: 'tabler:eye-off' },
    'privacy-center': { title: 'Centre de confidentialité', description: 'Contenus de confidentialité par niveau débutant, intermédiaire et avancé.', icon: 'tabler:lock-access' },
    vpn: { title: 'VPN', description: 'Éducation neutre sur les VPN, sans promesses exagérées ni pression commerciale.', icon: 'tabler:route' },
    antivirus: { title: 'Antivirus', description: 'Protection contre les malwares et hygiène des appareils.', icon: 'tabler:bug-off' },
    'password-managers': { title: 'Gestionnaires de mots de passe', description: 'Pages indépendantes sur les gestionnaires, passkeys et identifiants.', icon: 'tabler:key' },
    guides: { title: 'Guides', description: 'Procédures de sécurité pour particuliers, familles et petites organisations.', icon: 'tabler:list-check' },
    comparisons: { title: 'Comparatifs', description: 'Comparaisons neutres qui expliquent les compromis.', icon: 'tabler:arrows-diff' },
    tools: { title: 'Outils', description: 'Outils locaux qui évitent d’envoyer les données sensibles à un serveur.', icon: 'tabler:tools' },
    news: { title: 'Actualités', description: 'Mises à jour vérifiées résumées depuis des sources primaires.', icon: 'tabler:news' },
    'device-security': { title: 'Sécurité des appareils', description: 'Windows, macOS, mobile, mises à jour, sauvegardes et fichiers.', icon: 'tabler:devices' },
    'wifi-security': { title: 'Wi-Fi et réseaux', description: 'Routeur, Wi-Fi public, DNS et réseau domestique.', icon: 'tabler:wifi' },
    resources: { title: 'Ressources sécurité', description: 'Parcours pour familles, étudiants, voyageurs, télétravailleurs et petites équipes.', icon: 'tabler:book-2' },
  },
  de: {} as Record<SectionKey, { title: string; description: string; icon: string }>,
  es: {} as Record<SectionKey, { title: string; description: string; icon: string }>,
  it: {} as Record<SectionKey, { title: string; description: string; icon: string }>,
  pt: {} as Record<SectionKey, { title: string; description: string; icon: string }>,
  nl: {} as Record<SectionKey, { title: string; description: string; icon: string }>,
};

const sectionText: Record<Exclude<Lang, 'en' | 'fr'>, Record<SectionKey, [string, string]>> = {
  de: {
    cybersecurity: ['Cybersicherheit', 'Bedrohungen, sichere Gewohnheiten und zentrale Schutzroutinen.'],
    privacy: ['Datenschutz', 'Tracking, Cookies, Berechtigungen, Metadaten und Datenminimierung.'],
    'privacy-center': ['Datenschutzzentrum', 'Datenschutzinhalte nach Einsteiger-, Fortgeschrittenen- und Expertenniveau.'],
    vpn: ['VPN', 'Neutrale VPN-Bildung ohne Affiliate-Druck oder ubertriebene Versprechen.'],
    antivirus: ['Antivirus', 'Malware-Schutz und die Rolle von Antivirus in der Geratepflege.'],
    'password-managers': ['Passwortmanager', 'Unabhangige Seiten zu Managern, Passkeys und sicheren Zugangsdaten.'],
    guides: ['Leitfaden', 'Schrittweise Sicherheitsanleitungen fur Personen, Familien und kleine Teams.'],
    comparisons: ['Vergleiche', 'Neutrale Vergleiche, die Kompromisse statt universeller Sieger erklaren.'],
    tools: ['Tools', 'Lokale Browser-Tools, die sensible Eingaben nicht an Server senden.'],
    news: ['News', 'Geprufte Sicherheitsupdates aus primaren oder offiziellen Quellen.'],
    'device-security': ['Geratesicherheit', 'Windows, macOS, Mobile, Updates, Backups und Dateischutz.'],
    'wifi-security': ['WLAN und Netzwerke', 'Router, offentliches WLAN, DNS und Heimnetzwerksicherheit.'],
    resources: ['Sicherheitsressourcen', 'Kuratierte Wege fur Familien, Studierende, Reisende, Remote-Arbeitende und kleine Teams.'],
  },
  es: {
    cybersecurity: ['Ciberseguridad', 'Amenazas, habitos seguros y rutinas basicas de defensa.'],
    privacy: ['Privacidad', 'Rastreo, cookies, permisos, metadatos y minimizacion de datos.'],
    'privacy-center': ['Centro de privacidad', 'Contenido de privacidad organizado por nivel principiante, intermedio y avanzado.'],
    vpn: ['VPN', 'Educacion neutral sobre VPN sin afiliados ni promesas exageradas.'],
    antivirus: ['Antivirus', 'Proteccion contra malware y como encaja el antivirus en la higiene del dispositivo.'],
    'password-managers': ['Gestores de contrasenas', 'Paginas independientes sobre gestores, passkeys y flujos seguros de credenciales.'],
    guides: ['Guias', 'Orientacion paso a paso para personas, familias y pequenas empresas.'],
    comparisons: ['Comparativas', 'Comparativas neutrales que explican ventajas y limites sin declarar ganadores universales.'],
    tools: ['Herramientas', 'Herramientas locales del navegador que evitan enviar datos sensibles a un servidor.'],
    news: ['Noticias', 'Actualizaciones de seguridad verificadas desde fuentes primarias u oficiales.'],
    'device-security': ['Seguridad de dispositivos', 'Windows, macOS, moviles, actualizaciones, copias de seguridad y archivos.'],
    'wifi-security': ['Wi-Fi y redes', 'Router, Wi-Fi publico, DNS y seguridad de la red domestica.'],
    resources: ['Recursos de seguridad', 'Rutas seleccionadas para familias, estudiantes, viajeros, teletrabajo y pequenos equipos.'],
  },
  it: {
    cybersecurity: ['Cybersecurity', 'Minacce, abitudini piu sicure e routine difensive essenziali.'],
    privacy: ['Privacy', 'Tracciamento, cookie, permessi, metadati e minimizzazione dei dati.'],
    'privacy-center': ['Centro privacy', 'Contenuti privacy organizzati per livello principiante, intermedio e avanzato.'],
    vpn: ['VPN', 'Educazione neutrale sulle VPN senza affiliazioni o promesse esagerate.'],
    antivirus: ['Antivirus', 'Protezione malware e ruolo dell antivirus nell igiene dei dispositivi.'],
    'password-managers': ['Password manager', 'Pagine indipendenti su manager, passkey e credenziali piu sicure.'],
    guides: ['Guide', 'Indicazioni passo passo per persone, famiglie e piccole imprese.'],
    comparisons: ['Confronti', 'Confronti neutrali che spiegano compromessi invece di vincitori universali.'],
    tools: ['Strumenti', 'Strumenti locali del browser che evitano di inviare dati sensibili a un server.'],
    news: ['News', 'Aggiornamenti verificati da fonti primarie o ufficiali.'],
    'device-security': ['Sicurezza dispositivi', 'Windows, macOS, mobile, aggiornamenti, backup e protezione file.'],
    'wifi-security': ['Wi-Fi e reti', 'Router, Wi-Fi pubblico, DNS e sicurezza domestica.'],
    resources: ['Risorse sicurezza', 'Percorsi per famiglie, studenti, viaggiatori, lavoro remoto e piccoli team.'],
  },
  pt: {
    cybersecurity: ['Ciberseguranca', 'Ameacas, habitos mais seguros e rotinas essenciais de defesa.'],
    privacy: ['Privacidade', 'Rastreio, cookies, permissoes, metadados e minimizacao de dados.'],
    'privacy-center': ['Centro de privacidade', 'Conteudo de privacidade por nivel principiante, intermedio e avancado.'],
    vpn: ['VPN', 'Educacao neutra sobre VPN sem afiliacoes nem promessas exageradas.'],
    antivirus: ['Antivirus', 'Protecao contra malware e o papel do antivirus na higiene do dispositivo.'],
    'password-managers': ['Gestores de palavras-passe', 'Paginas independentes sobre gestores, passkeys e credenciais seguras.'],
    guides: ['Guias', 'Orientacao passo a passo para pessoas, familias e pequenas empresas.'],
    comparisons: ['Comparativos', 'Comparativos neutros que explicam compromissos sem vencedores universais.'],
    tools: ['Ferramentas', 'Ferramentas locais do navegador que evitam enviar dados sensiveis para um servidor.'],
    news: ['Noticias', 'Atualizacoes de seguranca verificadas a partir de fontes primarias ou oficiais.'],
    'device-security': ['Seguranca de dispositivos', 'Windows, macOS, mobile, atualizacoes, copias e ficheiros.'],
    'wifi-security': ['Wi-Fi e redes', 'Router, Wi-Fi publico, DNS e seguranca domestica.'],
    resources: ['Recursos de seguranca', 'Percursos para familias, estudantes, viajantes, teletrabalho e pequenas equipas.'],
  },
  nl: {
    cybersecurity: ['Cybersecurity', 'Dreigingen, veiligere gewoonten en basisroutines voor bescherming.'],
    privacy: ['Privacy', 'Tracking, cookies, machtigingen, metadata en dataminimalisatie.'],
    'privacy-center': ['Privacycentrum', 'Privacy-inhoud per niveau: beginner, gemiddeld en geavanceerd.'],
    vpn: ['VPN', 'Neutrale VPN-uitleg zonder affiliateclaims of overdreven beloften.'],
    antivirus: ['Antivirus', 'Malwarebescherming en hoe antivirus past bij apparaathygiene.'],
    'password-managers': ['Wachtwoordmanagers', 'Onafhankelijke pagina s over managers, passkeys en veiligere inloggegevens.'],
    guides: ['Gidsen', 'Stap-voor-stap beveiligingshulp voor personen, gezinnen en kleine teams.'],
    comparisons: ['Vergelijkingen', 'Neutrale vergelijkingen die afwegingen uitleggen in plaats van universele winnaars.'],
    tools: ['Tools', 'Lokale browsertools die gevoelige invoer niet naar een server sturen.'],
    news: ['Nieuws', 'Geverifieerde beveiligingsupdates uit primaire of officiele bronnen.'],
    'device-security': ['Apparaatbeveiliging', 'Windows, macOS, mobiel, updates, back-ups en bestandsbescherming.'],
    'wifi-security': ['Wifi en netwerken', 'Router, publieke wifi, DNS en thuisnetwerkbeveiliging.'],
    resources: ['Beveiligingsbronnen', 'Geselecteerde routes voor gezinnen, studenten, reizigers, remote workers en kleine teams.'],
  },
};

for (const lang of ['de', 'es', 'it', 'pt', 'nl'] as Exclude<Lang, 'en' | 'fr'>[]) {
  sections[lang] = Object.fromEntries(
    sectionOrder.map((key) => [key, { title: sectionText[lang][key][0], description: sectionText[lang][key][1], icon: sections.en[key].icon }])
  ) as Record<SectionKey, { title: string; description: string; icon: string }>;
}

const guideTopics = [
  ['what-is-cybersecurity', 'What is cybersecurity?', 'Build a clear foundation for protecting accounts, devices and data.', 'Beginner'],
  ['start-protecting-yourself-online', 'How to start protecting yourself online', 'A practical first-week plan for safer internet use.', 'Beginner'],
  ['create-secure-passwords', 'How to create secure passwords', 'Use length, uniqueness and a manager instead of memory tricks.', 'Beginner'],
  ['use-two-step-authentication', 'How to use two-step authentication', 'Choose stronger second factors and avoid common recovery mistakes.', 'Beginner'],
  ['what-is-a-passkey', 'What is a passkey?', 'Understand passwordless sign-in and where passkeys fit.', 'Intermediate'],
  ['recognize-phishing-email', 'How to recognize a phishing email', 'Read sender, link and urgency signals calmly.', 'Beginner'],
  ['detect-fraudulent-messages', 'How to detect fraudulent messages', 'Spot scams in SMS, chat apps and social DMs.', 'Beginner'],
  ['after-clicking-suspicious-link', 'What to do after opening a suspicious link', 'Contain risk without panic after a bad click.', 'Beginner'],
  ['protect-email-account', 'How to protect an email account', 'Secure the account that resets many other accounts.', 'Intermediate'],
  ['protect-social-media-accounts', 'How to protect social media accounts', 'Reduce takeover risk and impersonation damage.', 'Beginner'],
  ['protect-online-banking', 'How to protect online banking', 'Safer banking habits, alerts and device checks.', 'Intermediate'],
  ['protect-online-shopping', 'How to shop online more safely', 'Check stores, payment flows and delivery messages.', 'Beginner'],
  ['browse-more-privately', 'How to browse more privately', 'Reduce unnecessary tracking without breaking everyday browsing.', 'Beginner'],
  ['configure-router-securely', 'How to configure a router securely', 'Review admin access, updates, DNS and guest networks.', 'Intermediate'],
  ['secure-home-wifi', 'How to protect a home Wi-Fi network', 'Make your home network safer for family and guests.', 'Beginner'],
  ['use-public-wifi-safely', 'How to use public Wi-Fi safely', 'Understand what public networks expose and how to limit risk.', 'Beginner'],
  ['keep-device-updated', 'How to keep a device updated', 'Make updates predictable across apps, browsers and operating systems.', 'Beginner'],
  ['make-backups', 'How to make reliable backups', 'Create backups that can actually restore your files.', 'Beginner'],
  ['after-data-breach', 'What to do after a data breach', 'Change the right passwords and watch for follow-on scams.', 'Intermediate'],
  ['protect-children-online', 'How to protect children and teenagers online', 'Balance safety, privacy and trust in family devices.', 'Beginner'],
  ['secure-devices-while-traveling', 'How to protect devices while traveling', 'Prepare devices before hotels, airports and border crossings.', 'Intermediate'],
  ['protect-small-business', 'How to protect a small business', 'A practical security baseline for small teams.', 'Intermediate'],
  ['remote-worker-security-basics', 'Security basics for remote workers', 'Protect work accounts and home workspaces.', 'Beginner'],
  ['identify-fake-apps', 'How to identify fake apps', 'Avoid copycat apps, risky permissions and malicious installers.', 'Beginner'],
  ['check-app-permissions', 'How to check app permissions', 'Review camera, microphone, contacts and location access.', 'Beginner'],
  ['protect-personal-files', 'How to protect personal files', 'Classify, back up and restrict sensitive files.', 'Beginner'],
  ['encrypt-important-documents', 'How to encrypt important documents', 'Use encryption for records you cannot afford to expose.', 'Intermediate'],
  ['set-up-account-recovery', 'How to set up safer account recovery', 'Protect recovery emails, codes and trusted devices.', 'Intermediate'],
  ['report-security-incident', 'How to report a security incident', 'Keep evidence and contact the right support channels.', 'Intermediate'],
  ['build-personal-security-routine', 'Build a monthly personal security routine', 'Turn security into repeatable maintenance.', 'Beginner'],
] as const;

const privacyTopics = [
  ['digital-privacy-basics', 'Digital privacy basics', 'What personal data reveals and how to reduce exposure.', 'Beginner'],
  ['online-tracking-explained', 'Online tracking explained', 'Cookies, pixels and account-based tracking in plain language.', 'Beginner'],
  ['cookie-privacy-guide', 'Cookies and privacy', 'What cookies do and when consent should matter.', 'Beginner'],
  ['browser-fingerprinting', 'Browser fingerprinting', 'Why device and browser signals can identify sessions.', 'Advanced'],
  ['ip-address-privacy', 'IP addresses and privacy', 'What an IP address can reveal and what it cannot.', 'Beginner'],
  ['metadata-privacy', 'Metadata privacy', 'Hidden context in files, photos and communications.', 'Intermediate'],
  ['browsing-history-privacy', 'Browsing history privacy', 'Where history is stored and how to reduce leakage.', 'Beginner'],
  ['privacy-browsers', 'Privacy-oriented browsers', 'How to evaluate privacy browsers without hype.', 'Intermediate'],
  ['private-search-engines', 'Private search engines', 'Search privacy trade-offs and configuration basics.', 'Beginner'],
  ['private-email', 'Private email', 'Understand encrypted email, aliases and account recovery.', 'Intermediate'],
  ['dns-privacy', 'DNS and privacy', 'Why DNS lookups can expose browsing patterns.', 'Intermediate'],
  ['encrypted-dns-doh-dot', 'DoH and DoT explained', 'Compare encrypted DNS transport options.', 'Advanced'],
  ['social-media-privacy', 'Social media privacy settings', 'Reduce public exposure and ad profiling.', 'Beginner'],
  ['android-privacy', 'Privacy on Android', 'Review permissions, identifiers and backups.', 'Beginner'],
  ['iphone-privacy', 'Privacy on iPhone', 'Review location, tracking prompts and iCloud settings.', 'Beginner'],
  ['windows-privacy', 'Privacy on Windows', 'Review diagnostic data, permissions and browser defaults.', 'Beginner'],
  ['macos-privacy', 'Privacy on macOS', 'Review app permissions, FileVault and account settings.', 'Beginner'],
  ['location-permissions', 'Location permissions', 'Limit precise location access to apps that need it.', 'Beginner'],
  ['delete-online-accounts', 'How to delete online accounts', 'Plan exports, recovery and data deletion requests.', 'Intermediate'],
  ['encrypted-cloud-backups', 'Encrypted cloud backups', 'Protect backup content before cloud sync.', 'Intermediate'],
] as const;

const managerTopics = [
  ['bitwarden', 'Bitwarden', 'Open-source password manager for personal and organizational vaults.', 'Intermediate', sourceLibrary.bitwarden],
  ['1password', '1Password', 'Password, passkey and secrets manager for individuals, families and teams.', 'Intermediate', sourceLibrary.onePassword],
  ['dashlane', 'Dashlane', 'Password manager focused on autofill, monitoring and account protection workflows.', 'Intermediate', sourceLibrary.dashlane],
  ['proton-pass', 'Proton Pass', 'Password manager connected to Proton privacy services, aliases and passkeys.', 'Intermediate', sourceLibrary.protonPass],
  ['nordpass', 'NordPass', 'Password manager from Nord Security with vault, autofill and sharing features.', 'Intermediate', { label: 'NordPass - Product information', url: 'https://nordpass.com/' }],
  ['keepassxc', 'KeePassXC', 'Local, open-source password manager using encrypted database files.', 'Advanced', sourceLibrary.keepassxc],
  ['keeper', 'Keeper', 'Password manager with encrypted vault records, MFA options and sharing controls.', 'Intermediate', sourceLibrary.keeper],
  ['roboform', 'RoboForm', 'Password manager with autofill, sharing, import/export and form-filling heritage.', 'Intermediate', sourceLibrary.roboform],
  ['enpass', 'Enpass', 'Offline-first password manager with user-controlled storage and optional sync.', 'Advanced', sourceLibrary.enpass],
  ['browser-password-managers', 'Browser password managers', 'Built-in browser managers compared with independent vaults.', 'Beginner', { label: 'NIST - Digital Identity Guidelines', url: sourceLibrary.nistIdentity.url }],
] as const;

const comparisonTopics = [
  ['bitwarden-vs-1password', 'Bitwarden vs 1Password', 'Open-source flexibility compared with a polished commercial vault.'],
  ['bitwarden-vs-proton-pass', 'Bitwarden vs Proton Pass', 'Credential management compared with privacy-suite integration.'],
  ['1password-vs-dashlane', '1Password vs Dashlane', 'Two mature password managers with different workflow strengths.'],
  ['keepassxc-vs-bitwarden', 'KeePassXC vs Bitwarden', 'Local database control compared with cloud sync convenience.'],
  ['local-vs-cloud-password-manager', 'Local vs cloud password manager', 'Control, recovery and sync trade-offs.'],
  ['passkeys-vs-passwords', 'Passkeys vs passwords', 'Passwordless authentication compared with traditional credentials.'],
  ['vpn-vs-proxy', 'VPN vs proxy', 'Traffic tunneling compared with app-level proxying.'],
  ['free-vpn-vs-paid-vpn', 'Free VPN vs paid VPN', 'Privacy and trust considerations before choosing a VPN.'],
  ['free-antivirus-vs-paid-antivirus', 'Free antivirus vs paid antivirus', 'Core protection compared with extra management features.'],
  ['traditional-antivirus-vs-built-in-protection', 'Traditional antivirus vs built-in protection', 'Third-party tools compared with platform security features.'],
  ['private-browser-vs-incognito', 'Private browser vs incognito mode', 'Long-term privacy settings compared with temporary local history controls.'],
  ['traditional-dns-vs-encrypted-dns', 'Traditional DNS vs encrypted DNS', 'Visibility and compatibility trade-offs.'],
  ['local-backup-vs-cloud-backup', 'Local backup vs cloud backup', 'Restore speed, ransomware exposure and off-site resilience.'],
  ['sms-vs-authenticator-app', 'SMS vs authenticator app', 'Convenience compared with stronger authentication hygiene.'],
  ['authenticator-app-vs-security-key', 'Authenticator app vs security key', 'Code-based MFA compared with phishing-resistant hardware-backed sign-in.'],
] as const;

const cyberTopics = [
  ['phishing-basics', 'Phishing basics', 'Understand why social engineering still works.'],
  ['ransomware-basics', 'Ransomware basics', 'How ransomware spreads and how backups reduce impact.'],
  ['malware-warning-signs', 'Malware warning signs', 'Device behaviors that deserve investigation.'],
  ['account-takeover', 'Account takeover', 'Why reused passwords and weak recovery paths matter.'],
  ['identity-theft-basics', 'Identity theft basics', 'Reduce exposure and respond to suspicious activity.'],
  ['secure-downloads', 'Safer downloads', 'Avoid fake installers and malicious updates.'],
  ['secure-file-sharing', 'Safer file sharing', 'Share documents without exposing more than needed.'],
  ['security-for-creators', 'Security for content creators', 'Protect channels, brand accounts and recovery email.'],
  ['security-for-students', 'Security for students', 'Protect school accounts, laptops and shared devices.'],
  ['travel-security', 'Travel security', 'Prepare accounts and devices before travel.'],
  ['ai-security-basics', 'AI and security basics', 'Protect sensitive data when using AI tools.'],
  ['scam-calls', 'Scam calls and verification', 'Pause, verify and use official channels.'],
  ['secure-qr-codes', 'QR code safety', 'Check destination context before scanning or paying.'],
  ['safe-usb-devices', 'USB device safety', 'Avoid unknown devices and risky charging situations.'],
  ['personal-threat-model', 'Personal threat modeling', 'Focus on realistic risks instead of fear.'],
] as const;

const deviceTopics = [
  ['secure-windows-device', 'Secure a Windows device', 'Updates, accounts, browser settings and backups.'],
  ['secure-macos-device', 'Secure a macOS device', 'FileVault, app permissions and update hygiene.'],
  ['secure-android-device', 'Secure an Android device', 'Updates, app sources, permissions and screen locks.'],
  ['secure-iphone-device', 'Secure an iPhone', 'iOS updates, privacy prompts and account recovery.'],
  ['protect-lost-device', 'What to do if a device is lost', 'Remote lock, account sessions and recovery steps.'],
  ['device-encryption-basics', 'Device encryption basics', 'Protect storage when a device is stolen.'],
  ['browser-extension-safety', 'Browser extension safety', 'Review permissions and remove unused extensions.'],
  ['secure-shared-computer', 'Using shared computers safely', 'Avoid saved sessions and protect downloads.'],
  ['backup-phone-photos', 'Protect phone photos and files', 'Backups, metadata and sharing controls.'],
  ['factory-reset-safely', 'Factory reset safely', 'Prepare devices before selling or recycling.'],
] as const;

const networkTopics = [
  ['home-router-basics', 'Home router security basics', 'Admin passwords, firmware and guest networks.'],
  ['wifi-passwords', 'Wi-Fi passwords and network names', 'Choose safer network credentials and SSIDs.'],
  ['guest-network-guide', 'Guest network guide', 'Separate visitors and smart devices from primary devices.'],
  ['public-wifi-risks', 'Public Wi-Fi risks', 'Understand rogue hotspots and shared networks.'],
  ['dns-settings-home', 'DNS settings at home', 'Choose DNS settings with privacy and reliability in mind.'],
  ['encrypted-dns-setup', 'Encrypted DNS setup', 'Use encrypted DNS without assuming it hides everything.'],
  ['smart-home-network', 'Smart home network safety', 'Isolate devices and update firmware.'],
  ['router-firmware-updates', 'Router firmware updates', 'Why network devices need maintenance.'],
  ['network-sharing-settings', 'Network sharing settings', 'Turn off unnecessary discovery and sharing.'],
  ['small-office-network', 'Small office network baseline', 'Basic segmentation and admin access controls.'],
] as const;

const vpnTopics = [
  ['vpn-basics', 'What a VPN does and does not protect', 'Understand the network protection a VPN can provide, plus the privacy limits that still depend on accounts, browsers and device hygiene.'],
  ['vpn-for-public-wifi', 'Using a VPN on public Wi-Fi', 'Use a VPN on shared networks without ignoring phishing, account security, operating system updates or unsafe captive portals.'],
  ['vpn-privacy-limits', 'VPN privacy limits', 'See why provider trust, browser tracking, DNS choices, payments and logged-in accounts still matter after the tunnel is enabled.'],
  ['choosing-a-vpn', 'How to choose a VPN', 'Compare trust, security features, platform support, audits, ownership, cancellation terms and realistic privacy claims before paying.'],
  ['vpn-protocols-explained', 'VPN protocols explained', 'Compare WireGuard, OpenVPN and IKEv2 at a practical level without presenting one protocol as a universal winner.'],
  ['vpn-and-dns-leaks', 'VPN, DNS and WebRTC leaks', 'Check DNS, IPv6 and WebRTC exposure before relying on a VPN for network privacy in daily browsing.'],
  ['vpn-kill-switch-guide', 'VPN kill switch guide', 'Understand what a kill switch can block, what it cannot block and how to test it before travel or public Wi-Fi use.'],
  ['free-vpn-risks', 'Free VPN risks', 'Evaluate free VPNs with attention to funding model, logging, limits, data collection and long-term account safety.'],
  ['vpn-on-mobile', 'VPN on mobile', 'Balance battery, always-on settings, trusted Wi-Fi, roaming, app permissions and account recovery on phones.'],
  ['vpn-for-travel', 'VPN for travel', 'Prepare devices, accounts, trusted networks and recovery options before hotels, airports or temporary SIMs.'],
  ['vpn-for-remote-work', 'VPN for remote work', 'Use business VPNs, device posture, MFA and offboarding as part of a broader access routine.'],
  ['vpn-vs-tor', 'VPN vs Tor', 'Compare common privacy goals, performance trade-offs and mistakes when combining tools incorrectly.'],
] as const;

const newsTopics = [
  ['cisa-mfa-guidance', 'CISA guidance: MFA beyond passwords', 'CISA explains why a second factor can reduce account takeover risk.', sourceLibrary.cisaMfa],
  ['nist-passkeys-guidelines', 'NIST guidance: passkeys and digital identity', 'NIST digital identity guidance recognizes modern authenticators such as passkeys.', sourceLibrary.nistIdentity],
  ['ncsc-small-business-guide', 'NCSC guide: small organization cyber basics', 'The UK NCSC organizes advice around backups, devices, accounts and scams.', sourceLibrary.ncscSmallOrg],
  ['cnil-cookie-privacy', 'CNIL guidance: tracking and consent', 'CNIL privacy materials explain why tracking alternatives still require privacy safeguards.', sourceLibrary.cnilCookies],
  ['ncsc-backup-advice', 'NCSC advice: backups as resilience', 'Backup routines remain central to recovering from mistakes, theft and ransomware.', sourceLibrary.ncscBackups],
  ['cisa-more-than-password', 'CISA campaign: more than a password', 'CISA encourages users and organizations to adopt MFA for important accounts.', sourceLibrary.cisaMoreThanPassword],
  ['proton-passkeys-support', 'Proton Pass documents passkey support', 'Proton explains how passkeys can be saved and used in supported clients.', sourceLibrary.protonPasskeys],
  ['keepassxc-user-guide', 'KeePassXC documents local vault workflows', 'KeePassXC guidance describes offline encrypted database management.', sourceLibrary.keepassxc],
  ['keeper-security-model', 'Keeper explains encrypted vault records', 'Keeper documents encryption and MFA concepts for its vault model.', sourceLibrary.keeper],
  ['roboform-import-sharing', 'RoboForm documents sharing and import workflows', 'RoboForm product materials describe import, sync and sharing capabilities.', sourceLibrary.roboform],
] as const;

const startDate = Date.UTC(2023, 0, 1);
const latestArticleDate = Date.UTC(2026, 6, 10);
const dateRangeDays = Math.floor((latestArticleDate - startDate) / 86400000) + 1;
const formatDate = (timestamp: number) => new Date(timestamp).toISOString().slice(0, 10);
const hashDateKey = (value: string) =>
  [...value].reduce((hash, char) => Math.imul(hash ^ char.charCodeAt(0), 16777619) >>> 0, 2166136261);
const seededDay = (key: string, salt: number) => hashDateKey(`${salt}:${key}`) % dateRangeDays;
const dateFor = (key: string) => formatDate(startDate + seededDay(key, 1) * 86400000);
const updatedFor = (key: string) => {
  const published = startDate + seededDay(key, 1) * 86400000;
  const extraDays = seededDay(key, 2) % 240;
  return formatDate(Math.min(published + extraDays * 86400000, latestArticleDate));
};
const minsFor = (title: string) => `${Math.max(5, Math.min(14, Math.round(title.length / 8)))} min read`;
const levelLabels: Record<Lang, Record<Level, string>> = {
  en: { Beginner: 'Beginner', Intermediate: 'Intermediate', Advanced: 'Advanced' },
  fr: { Beginner: 'Débutant', Intermediate: 'Intermédiaire', Advanced: 'Avancé' },
  de: { Beginner: 'Einsteiger', Intermediate: 'Fortgeschritten', Advanced: 'Experte' },
  es: { Beginner: 'Principiante', Intermediate: 'Intermedio', Advanced: 'Avanzado' },
  it: { Beginner: 'Principiante', Intermediate: 'Intermedio', Advanced: 'Avanzato' },
  pt: { Beginner: 'Principiante', Intermediate: 'Intermedio', Advanced: 'Avancado' },
  nl: { Beginner: 'Beginner', Intermediate: 'Gemiddeld', Advanced: 'Geavanceerd' },
};

const productSlugs = new Set(['bitwarden', '1password', 'dashlane', 'proton-pass', 'nordpass', 'keepassxc', 'keeper', 'roboform', 'enpass']);
const wordMaps: Record<Exclude<Lang, 'en'>, Record<string, string>> = {
  fr: { security: 'sécurité', cybersecurity: 'cybersécurité', privacy: 'confidentialité', password: 'mot de passe', passwords: 'mots de passe', manager: 'gestionnaire', managers: 'gestionnaires', secure: 'sécuriser', device: 'appareil', devices: 'appareils', wifi: 'Wi-Fi', network: 'réseau', networks: 'réseaux', online: 'en ligne', home: 'domicile', router: 'routeur', phishing: 'phishing', email: 'e-mail', account: 'compte', accounts: 'comptes', backup: 'sauvegarde', backups: 'sauvegardes', public: 'public', private: 'privé', browser: 'navigateur', browsers: 'navigateurs', data: 'données', basics: 'bases', guide: 'guide', guides: 'guides', safer: 'plus sûr', safe: 'sûr', file: 'fichier', sharing: 'partage', recovery: 'récupération', passkeys: 'passkeys', passkey: 'passkey', authentication: 'authentification', antivirus: 'antivirus', vpn: 'VPN' },
  de: { security: 'Sicherheit', cybersecurity: 'Cybersicherheit', privacy: 'Datenschutz', password: 'Passwort', passwords: 'Passworter', manager: 'Manager', managers: 'Manager', secure: 'sichern', device: 'Gerat', devices: 'Gerate', wifi: 'WLAN', network: 'Netzwerk', networks: 'Netzwerke', online: 'online', home: 'Zuhause', router: 'Router', phishing: 'Phishing', email: 'E-Mail', account: 'Konto', accounts: 'Konten', backup: 'Backup', backups: 'Backups', public: 'offentlich', private: 'privat', browser: 'Browser', browsers: 'Browser', data: 'Daten', basics: 'Grundlagen', guide: 'Leitfaden', guides: 'Leitfaden', safer: 'sicherer', safe: 'sicher', file: 'Datei', sharing: 'Teilen', recovery: 'Wiederherstellung', passkeys: 'Passkeys', passkey: 'Passkey', authentication: 'Authentifizierung', antivirus: 'Antivirus', vpn: 'VPN' },
  es: { security: 'seguridad', cybersecurity: 'ciberseguridad', privacy: 'privacidad', password: 'contrasena', passwords: 'contrasenas', manager: 'gestor', managers: 'gestores', secure: 'proteger', device: 'dispositivo', devices: 'dispositivos', wifi: 'Wi-Fi', network: 'red', networks: 'redes', online: 'en linea', home: 'hogar', router: 'router', phishing: 'phishing', email: 'correo', account: 'cuenta', accounts: 'cuentas', backup: 'copia de seguridad', backups: 'copias de seguridad', public: 'publico', private: 'privado', browser: 'navegador', browsers: 'navegadores', data: 'datos', basics: 'conceptos basicos', guide: 'guia', guides: 'guias', safer: 'mas seguro', safe: 'seguro', file: 'archivo', sharing: 'compartir', recovery: 'recuperacion', passkeys: 'passkeys', passkey: 'passkey', authentication: 'autenticacion', antivirus: 'antivirus', vpn: 'VPN' },
  it: { security: 'sicurezza', cybersecurity: 'cybersecurity', privacy: 'privacy', password: 'password', passwords: 'password', manager: 'manager', managers: 'manager', secure: 'proteggere', device: 'dispositivo', devices: 'dispositivi', wifi: 'Wi-Fi', network: 'rete', networks: 'reti', online: 'online', home: 'casa', router: 'router', phishing: 'phishing', email: 'email', account: 'account', accounts: 'account', backup: 'backup', backups: 'backup', public: 'pubblico', private: 'privato', browser: 'browser', browsers: 'browser', data: 'dati', basics: 'basi', guide: 'guida', guides: 'guide', safer: 'piu sicuro', safe: 'sicuro', file: 'file', sharing: 'condivisione', recovery: 'recupero', passkeys: 'passkey', passkey: 'passkey', authentication: 'autenticazione', antivirus: 'antivirus', vpn: 'VPN' },
  pt: { security: 'seguranca', cybersecurity: 'ciberseguranca', privacy: 'privacidade', password: 'palavra-passe', passwords: 'palavras-passe', manager: 'gestor', managers: 'gestores', secure: 'proteger', device: 'dispositivo', devices: 'dispositivos', wifi: 'Wi-Fi', network: 'rede', networks: 'redes', online: 'online', home: 'casa', router: 'router', phishing: 'phishing', email: 'email', account: 'conta', accounts: 'contas', backup: 'copia de seguranca', backups: 'copias de seguranca', public: 'publico', private: 'privado', browser: 'navegador', browsers: 'navegadores', data: 'dados', basics: 'basicos', guide: 'guia', guides: 'guias', safer: 'mais seguro', safe: 'seguro', file: 'ficheiro', sharing: 'partilha', recovery: 'recuperacao', passkeys: 'passkeys', passkey: 'passkey', authentication: 'autenticacao', antivirus: 'antivirus', vpn: 'VPN' },
  nl: { security: 'beveiliging', cybersecurity: 'cybersecurity', privacy: 'privacy', password: 'wachtwoord', passwords: 'wachtwoorden', manager: 'manager', managers: 'managers', secure: 'beveiligen', device: 'apparaat', devices: 'apparaten', wifi: 'wifi', network: 'netwerk', networks: 'netwerken', online: 'online', home: 'thuis', router: 'router', phishing: 'phishing', email: 'e-mail', account: 'account', accounts: 'accounts', backup: 'back-up', backups: 'back-ups', public: 'publiek', private: 'prive', browser: 'browser', browsers: 'browsers', data: 'gegevens', basics: 'basis', guide: 'gids', guides: 'gidsen', safer: 'veiliger', safe: 'veilig', file: 'bestand', sharing: 'delen', recovery: 'herstel', passkeys: 'passkeys', passkey: 'passkey', authentication: 'authenticatie', antivirus: 'antivirus', vpn: 'VPN' },
};

const phraseTitles: Record<Exclude<Lang, 'en'>, Record<string, string>> = {
  fr: { 'what-is-cybersecurity': 'Qu’est-ce que la cybersécurité ?', 'start-protecting-yourself-online': 'Commencer à se protéger en ligne', 'create-secure-passwords': 'Créer des mots de passe sécurisés', 'use-two-step-authentication': 'Utiliser l’authentification en deux étapes' },
  de: { 'what-is-cybersecurity': 'Was ist Cybersicherheit?', 'start-protecting-yourself-online': 'Online-Schutz richtig beginnen', 'create-secure-passwords': 'Sichere Passworter erstellen', 'use-two-step-authentication': 'Zwei-Faktor-Anmeldung nutzen' },
  es: { 'what-is-cybersecurity': 'Que es la ciberseguridad?', 'start-protecting-yourself-online': 'Como empezar a protegerte en linea', 'create-secure-passwords': 'Como crear contrasenas seguras', 'use-two-step-authentication': 'Como usar la autenticacion en dos pasos' },
  it: { 'what-is-cybersecurity': 'Che cos e la cybersecurity?', 'start-protecting-yourself-online': 'Come iniziare a proteggersi online', 'create-secure-passwords': 'Come creare password sicure', 'use-two-step-authentication': 'Come usare l autenticazione in due passaggi' },
  pt: { 'what-is-cybersecurity': 'O que e ciberseguranca?', 'start-protecting-yourself-online': 'Como comecar a proteger-se online', 'create-secure-passwords': 'Como criar palavras-passe seguras', 'use-two-step-authentication': 'Como usar autenticacao em dois passos' },
  nl: { 'what-is-cybersecurity': 'Wat is cybersecurity?', 'start-protecting-yourself-online': 'Online bescherming starten', 'create-secure-passwords': 'Sterke wachtwoorden maken', 'use-two-step-authentication': 'Tweestapsverificatie gebruiken' },
};

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);
const localizedAudience: Record<Lang, string[]> = {
  en: ['Individuals', 'Families'],
  fr: ['Particuliers', 'Familles'],
  de: ['Personen', 'Familien'],
  es: ['Personas', 'Familias'],
  it: ['Persone', 'Famiglie'],
  pt: ['Pessoas', 'Familias'],
  nl: ['Personen', 'Gezinnen'],
};
const allPlatforms: Record<Lang, string> = { en: 'All platforms', fr: 'Toutes plateformes', de: 'Alle Plattformen', es: 'Todas las plataformas', it: 'Tutte le piattaforme', pt: 'Todas as plataformas', nl: 'Alle platforms' };

const localizeTitle = (article: Omit<Article, 'lang'>, lang: Lang) => {
  if (lang === 'en') return article.title;
  if (productSlugs.has(article.slug)) return article.title;
  const phrase = phraseTitles[lang]?.[article.slug];
  if (phrase) return phrase;
  const mapped = article.slug
    .split('-')
    .map((word) => wordMaps[lang]?.[word] ?? word)
    .join(' ')
    .replace(/\bvs\b/g, 'vs')
    .replace(/\bVPN\b/gi, 'VPN')
    .replace(/\bWi fi\b/gi, 'Wi-Fi');
  return capitalize(mapped);
};

const localizedTemplates: Record<Lang, {
  summaryPrefix: string;
  intro: (title: string, description: string) => string[];
  risks: string[];
  steps: string[];
  mistakes: string[];
  checklist: string[];
  faq: Array<[string, string]>;
  conclusion: (type: Article['type']) => string;
  seoPrefix: string;
}> = {
  en: {
    summaryPrefix: '',
    intro: (title, description) => [
      `${title} is useful when you want a safer routine without turning every online task into a technical project.`,
      `${description} The practical goal is to reduce common risk, keep recovery options available and avoid decisions made under pressure.`,
    ],
    risks: ['Relying on one control, such as a password or a single device, creates a fragile setup.', 'Urgent messages, confusing prompts and reused credentials often lead to avoidable mistakes.', 'Recovery plans that are never tested can fail exactly when they are needed.'],
    steps: ['Identify the account, device, network or data that matters most.', 'Enable updates, unique credentials and multifactor authentication where available.', 'Review permissions, recovery options and active sessions before a problem appears.', 'Keep backups or exports for information you cannot afford to lose.', 'Revisit the setup after major device, account or provider changes.'],
    mistakes: ['Using the same password across important accounts.', 'Saving recovery codes in the same account they are meant to recover.', 'Ignoring browser, router or phone updates for months.', 'Treating private browsing or a VPN as complete anonymity.'],
    checklist: ['Unique password or passkey configured.', 'MFA enabled with backup codes stored safely.', 'Recovery email and phone number reviewed.', 'Unnecessary permissions removed.', 'Backup or export tested recently.'],
    faq: [['Is this enough for high-risk users?', 'High-risk users should adapt the steps to their threat model and may need professional help.'], ['Should I change everything at once?', 'No. Start with email, banking, password manager and device updates, then continue in stages.'], ['Can a tool guarantee safety?', 'No tool guarantees safety. Good security is a layered routine that needs periodic review.']],
    conclusion: (type) => type === 'comparison' ? 'The better option depends on your risk, devices, recovery needs and tolerance for complexity.' : 'The safest path is usually a consistent routine: unique credentials, updates, recovery planning and careful verification.',
    seoPrefix: '',
  },
  fr: {
    summaryPrefix: 'Guide HexaCybert sur',
    intro: (title) => [`${title} aide à mettre en place une routine plus sûre sans transformer chaque action en projet technique.`, 'L’objectif pratique est de réduire les risques courants, de garder des options de récupération et d’éviter les décisions prises dans l’urgence.'],
    risks: ['Un seul contrôle de sécurité rend la protection fragile.', 'Les messages urgents, les permissions floues et les mots de passe réutilisés créent des risques évitables.', 'Une récupération jamais testée peut échouer au mauvais moment.'],
    steps: ['Identifier le compte, l’appareil, le réseau ou les données les plus importants.', 'Activer les mises à jour, les identifiants uniques et la MFA si disponible.', 'Vérifier les permissions, les options de récupération et les sessions actives.', 'Conserver des sauvegardes ou exports pour les données importantes.', 'Revoir la configuration après tout changement majeur.'],
    mistakes: ['Réutiliser le même mot de passe sur plusieurs comptes.', 'Stocker les codes de récupération dans le compte qu’ils doivent récupérer.', 'Ignorer les mises à jour pendant des mois.', 'Croire qu’un mode privé ou un VPN rend totalement anonyme.'],
    checklist: ['Mot de passe unique ou passkey configuré.', 'MFA activée avec codes de secours conservés hors ligne.', 'E-mail et téléphone de récupération vérifiés.', 'Permissions inutiles supprimées.', 'Sauvegarde ou export testé récemment.'],
    faq: [['Est-ce suffisant pour les personnes très exposées ?', 'Les personnes à risque élevé doivent adapter ces conseils et parfois demander une aide spécialisée.'], ['Faut-il tout changer en une fois ?', 'Non. Commencez par e-mail, banque, gestionnaire de mots de passe et mises à jour.'], ['Un outil peut-il garantir la sécurité ?', 'Non. La sécurité repose sur plusieurs couches et une révision régulière.']],
    conclusion: () => 'La meilleure approche est une routine suivie : identifiants uniques, mises à jour, récupération et vérification calme.',
    seoPrefix: 'Guide HexaCybert en français :',
  },
  de: {
    summaryPrefix: 'HexaCybert-Leitfaden zu',
    intro: (title) => [`${title} hilft, eine sicherere Routine aufzubauen, ohne jede Online-Aufgabe technisch kompliziert zu machen.`, 'Das praktische Ziel ist weniger Risiko, bessere Wiederherstellung und ruhigere Entscheidungen.'],
    risks: ['Ein einzelner Schutzmechanismus macht die Einrichtung fragil.', 'Dringende Nachrichten, unklare Berechtigungen und wiederverwendete Passworter fuhren oft zu vermeidbaren Fehlern.', 'Nie getestete Wiederherstellung kann im Ernstfall scheitern.'],
    steps: ['Wichtige Konten, Gerate, Netzwerke oder Daten identifizieren.', 'Updates, eindeutige Zugangsdaten und MFA aktivieren.', 'Berechtigungen, Wiederherstellung und aktive Sitzungen prufen.', 'Backups oder Exporte fur wichtige Daten behalten.', 'Die Einrichtung nach groseren Anderungen erneut prufen.'],
    mistakes: ['Dasselbe Passwort fur wichtige Konten verwenden.', 'Wiederherstellungscodes im zu rettenden Konto speichern.', 'Browser-, Router- oder Handyupdates monatelang ignorieren.', 'Privates Surfen oder VPN als vollstandige Anonymitat verstehen.'],
    checklist: ['Eindeutiges Passwort oder Passkey eingerichtet.', 'MFA aktiv und Backup-Codes sicher gespeichert.', 'Wiederherstellungs-E-Mail und Telefonnummer gepruft.', 'Unnotige Berechtigungen entfernt.', 'Backup oder Export kurzlich getestet.'],
    faq: [['Reicht das fur besonders gefahrdete Personen?', 'Personen mit hohem Risiko sollten die Schritte an ihr Bedrohungsmodell anpassen.'], ['Soll ich alles auf einmal andern?', 'Nein. Beginne mit E-Mail, Banking, Passwortmanager und Updates.'], ['Kann ein Tool Sicherheit garantieren?', 'Nein. Sicherheit ist eine mehrschichtige Routine.']],
    conclusion: () => 'Der sicherste Weg ist eine konstante Routine: eindeutige Zugangsdaten, Updates, Wiederherstellung und ruhige Prufung.',
    seoPrefix: 'HexaCybert-Leitfaden:',
  },
  es: {
    summaryPrefix: 'Guia HexaCybert sobre',
    intro: (title) => [`${title} ayuda a crear una rutina mas segura sin convertir cada tarea en un proyecto tecnico.`, 'El objetivo practico es reducir riesgos comunes, mantener opciones de recuperacion y evitar decisiones tomadas con prisa.'],
    risks: ['Depender de un solo control, como una contrasena o un dispositivo, crea una configuracion fragil.', 'Los mensajes urgentes, permisos confusos y credenciales reutilizadas suelen provocar errores evitables.', 'Los planes de recuperacion que nunca se prueban pueden fallar justo cuando hacen falta.'],
    steps: ['Identifica la cuenta, dispositivo, red o dato mas importante.', 'Activa actualizaciones, credenciales unicas y autenticacion multifactor cuando este disponible.', 'Revisa permisos, opciones de recuperacion y sesiones activas antes de un problema.', 'MantÃ©n copias o exportaciones de la informacion que no puedes perder.', 'Vuelve a revisar la configuracion despues de cambios importantes.'],
    mistakes: ['Usar la misma contrasena en cuentas importantes.', 'Guardar codigos de recuperacion dentro de la cuenta que deben recuperar.', 'Ignorar actualizaciones del navegador, router o movil durante meses.', 'Tratar la navegacion privada o una VPN como anonimato total.'],
    checklist: ['Contrasena unica o passkey configurada.', 'MFA activada con codigos de respaldo guardados de forma segura.', 'Correo y telefono de recuperacion revisados.', 'Permisos innecesarios eliminados.', 'Copia de seguridad o exportacion probada recientemente.'],
    faq: [['Es suficiente para usuarios de alto riesgo?', 'Los usuarios de alto riesgo deben adaptar los pasos a su modelo de amenaza y pueden necesitar ayuda profesional.'], ['Debo cambiar todo de una vez?', 'No. Empieza por correo, banca, gestor de contrasenas y actualizaciones.'], ['Una herramienta puede garantizar seguridad?', 'No. La seguridad es una rutina por capas que necesita revision periodica.']],
    conclusion: () => 'El camino mas seguro suele ser una rutina constante: credenciales unicas, actualizaciones, recuperacion y verificacion cuidadosa.',
    seoPrefix: 'Guia HexaCybert:',
  },
  it: {
    summaryPrefix: 'Guida HexaCybert su',
    intro: (title) => [`${title} aiuta a creare una routine piu sicura senza rendere tecnica ogni attivita online.`, 'L obiettivo pratico e ridurre i rischi comuni, mantenere opzioni di recupero e decidere senza fretta.'],
    risks: ['Dipendere da un solo controllo rende fragile la configurazione.', 'Messaggi urgenti, permessi confusi e credenziali riutilizzate portano a errori evitabili.', 'I piani di recupero non testati possono fallire nel momento peggiore.'],
    steps: ['Identifica account, dispositivo, rete o dato piu importante.', 'Attiva aggiornamenti, credenziali uniche e MFA dove disponibile.', 'Controlla permessi, recupero e sessioni attive prima dei problemi.', 'Mantieni backup o esportazioni per i dati importanti.', 'Rivedi la configurazione dopo cambiamenti importanti.'],
    mistakes: ['Usare la stessa password su account importanti.', 'Salvare codici di recupero nello stesso account da recuperare.', 'Ignorare aggiornamenti per mesi.', 'Considerare navigazione privata o VPN come anonimato completo.'],
    checklist: ['Password unica o passkey configurata.', 'MFA attiva con codici di backup conservati in sicurezza.', 'Email e telefono di recupero verificati.', 'Permessi inutili rimossi.', 'Backup o esportazione testati di recente.'],
    faq: [['Basta per utenti ad alto rischio?', 'Gli utenti ad alto rischio dovrebbero adattare i passaggi al proprio modello di minaccia.'], ['Devo cambiare tutto subito?', 'No. Inizia da email, banca, password manager e aggiornamenti.'], ['Uno strumento puo garantire sicurezza?', 'No. La sicurezza e una routine a piu livelli.']],
    conclusion: () => 'Il percorso piu sicuro e una routine costante: credenziali uniche, aggiornamenti, recupero e verifica attenta.',
    seoPrefix: 'Guida HexaCybert:',
  },
  pt: {
    summaryPrefix: 'Guia HexaCybert sobre',
    intro: (title) => [`${title} ajuda a criar uma rotina mais segura sem transformar cada tarefa num projeto tecnico.`, 'O objetivo pratico e reduzir riscos comuns, manter opcoes de recuperacao e evitar decisoes apressadas.'],
    risks: ['Depender de um unico controlo torna a configuracao fragil.', 'Mensagens urgentes, permissoes confusas e credenciais reutilizadas levam a erros evitaveis.', 'Planos de recuperacao nunca testados podem falhar quando mais importam.'],
    steps: ['Identifique a conta, dispositivo, rede ou dado mais importante.', 'Ative atualizacoes, credenciais unicas e MFA quando disponivel.', 'Reveja permissoes, recuperacao e sessoes ativas antes de problemas.', 'Mantenha copias ou exportacoes da informacao essencial.', 'Reveja a configuracao apos mudancas importantes.'],
    mistakes: ['Usar a mesma palavra-passe em contas importantes.', 'Guardar codigos de recuperacao na conta que devem recuperar.', 'Ignorar atualizacoes durante meses.', 'Tratar navegacao privada ou VPN como anonimato total.'],
    checklist: ['Palavra-passe unica ou passkey configurada.', 'MFA ativa com codigos de seguranca guardados.', 'Email e telefone de recuperacao revistos.', 'Permissoes desnecessarias removidas.', 'Copia ou exportacao testada recentemente.'],
    faq: [['Isto basta para utilizadores de alto risco?', 'Utilizadores de alto risco devem adaptar os passos ao seu modelo de ameaca.'], ['Devo mudar tudo de uma vez?', 'Nao. Comece por email, banco, gestor de palavras-passe e atualizacoes.'], ['Uma ferramenta garante seguranca?', 'Nao. A seguranca e uma rotina por camadas.']],
    conclusion: () => 'O caminho mais seguro e uma rotina constante: credenciais unicas, atualizacoes, recuperacao e verificacao cuidadosa.',
    seoPrefix: 'Guia HexaCybert:',
  },
  nl: {
    summaryPrefix: 'HexaCybert-gids over',
    intro: (title) => [`${title} helpt een veiligere routine op te bouwen zonder elke online taak technisch te maken.`, 'Het praktische doel is minder risico, betere herstelopties en rustigere beslissingen.'],
    risks: ['Afhankelijk zijn van een enkele maatregel maakt de setup kwetsbaar.', 'Urgente berichten, onduidelijke machtigingen en hergebruikte wachtwoorden veroorzaken vaak vermijdbare fouten.', 'Herstelplannen die nooit getest zijn kunnen falen wanneer ze nodig zijn.'],
    steps: ['Bepaal welk account, apparaat, netwerk of gegeven het belangrijkst is.', 'Schakel updates, unieke inloggegevens en MFA in waar mogelijk.', 'Controleer machtigingen, herstelopties en actieve sessies.', 'Bewaar back-ups of exports van belangrijke informatie.', 'Controleer de setup opnieuw na grote wijzigingen.'],
    mistakes: ['Hetzelfde wachtwoord gebruiken voor belangrijke accounts.', 'Herstelcodes opslaan in het account dat ze moeten herstellen.', 'Updates maanden negeren.', 'Privenavigatie of VPN zien als volledige anonimiteit.'],
    checklist: ['Uniek wachtwoord of passkey ingesteld.', 'MFA actief en back-upcodes veilig bewaard.', 'Herstelmail en telefoonnummer gecontroleerd.', 'Onnodige machtigingen verwijderd.', 'Back-up of export recent getest.'],
    faq: [['Is dit genoeg voor gebruikers met hoog risico?', 'Gebruikers met hoog risico moeten de stappen aanpassen aan hun dreigingsmodel.'], ['Moet ik alles tegelijk veranderen?', 'Nee. Begin met e-mail, bankieren, wachtwoordmanager en updates.'], ['Kan een tool veiligheid garanderen?', 'Nee. Veiligheid is een gelaagde routine.']],
    conclusion: () => 'De veiligste route is meestal een vaste routine: unieke gegevens, updates, herstelplanning en zorgvuldige controle.',
    seoPrefix: 'HexaCybert-gids:',
  },
};

const buildContent = (title: string, description: string, type: Article['type'], lang: Lang = 'en') => {
  const template = localizedTemplates[lang];
  return {
    intro: template.intro(title, description),
    risks: template.risks,
    steps: template.steps,
    mistakes: template.mistakes,
    checklist: template.checklist,
    faq: template.faq,
    conclusion: template.conclusion(type),
  };
};

const frVpnProfiles: Record<
  string,
  {
    title: string;
    description: string;
    focus: string;
    situation: string;
    limit: string;
    evidence: string;
    habit: string;
  }
> = {
  'vpn-basics': {
    title: 'Ce qu’un VPN protège vraiment, et ce qu’il ne protège pas',
    description: 'Comprendre le rôle réel d’un tunnel VPN, ses limites de confidentialité et les habitudes qui restent indispensables au quotidien.',
    focus: 'la séparation entre protection du réseau et protection du compte',
    situation: 'un usage personnel avec navigation, messagerie, banque en ligne et applications connectées',
    limit: 'un VPN ne supprime pas les traceurs du navigateur, ne corrige pas un mot de passe réutilisé et ne rend pas une session connectée anonyme',
    evidence: 'la documentation du NCSC rappelle qu’un VPN protège surtout le trajet réseau vers une passerelle de confiance',
    habit: 'activer le VPN sur les réseaux peu fiables, garder les mises à jour et vérifier les paramètres de confidentialité du navigateur',
  },
  'vpn-for-public-wifi': {
    title: 'Utiliser un VPN sur un Wi-Fi public sans se tromper de menace',
    description: 'Préparer une routine sûre pour les cafés, hôtels, gares et aéroports sans oublier phishing, portails captifs et mises à jour.',
    focus: 'la réduction des risques sur les réseaux partagés',
    situation: 'un ordinateur portable ou un téléphone utilisé sur un réseau que vous ne contrôlez pas',
    limit: 'le tunnel ne rend pas fiable un faux portail de connexion, un lien piégé ou une application déjà compromise',
    evidence: 'les recommandations CISA et Cyber Centre Canada insistent sur la prudence avec les réseaux sans fil publics',
    habit: 'démarrer le VPN après le portail captif, éviter les opérations sensibles si l’appareil n’est pas à jour et fermer les sessions inutiles',
  },
  'vpn-privacy-limits': {
    title: 'Les limites de confidentialité d’un VPN',
    description: 'Identifier ce qui reste visible malgré le tunnel : comptes connectés, paiement, empreinte du navigateur, DNS et confiance dans le fournisseur.',
    focus: 'les limites pratiques de confidentialité après activation du tunnel',
    situation: 'une personne qui veut réduire l’exposition réseau sans croire à une invisibilité totale',
    limit: 'le fournisseur VPN peut devenir un nouvel intermédiaire et les sites peuvent toujours reconnaître un compte connecté',
    evidence: 'la FTC conseille d’examiner les promesses de confidentialité des applications VPN avec prudence',
    habit: 'combiner le VPN avec des réglages de navigateur, des mots de passe uniques et une lecture attentive de la politique de journalisation',
  },
  'choosing-a-vpn': {
    title: 'Comment choisir un VPN avec une méthode prudente',
    description: 'Comparer un VPN sans se laisser guider par des classements universels, des fausses urgences ou des promesses de confidentialité absolue.',
    focus: 'la comparaison méthodique avant abonnement',
    situation: 'un lecteur qui hésite entre plusieurs services et veut éviter les arguments marketing trop rapides',
    limit: 'un bon prix ou une application jolie ne prouvent pas la qualité de la politique de confidentialité, du support ou des réglages de sécurité',
    evidence: 'les sources publiques recommandent de regarder le modèle de confiance, la configuration et la gestion des accès',
    habit: 'lire les conditions d’annulation, vérifier les plateformes nécessaires, noter les fonctions indispensables et tester la sortie avant de payer longtemps',
  },
  'vpn-protocols-explained': {
    title: 'Protocoles VPN : WireGuard, OpenVPN et IKEv2 expliqués simplement',
    description: 'Comprendre les différences pratiques entre protocoles sans transformer le choix technique en promesse automatique de vitesse ou de sécurité.',
    focus: 'le choix d’un protocole adapté au contexte',
    situation: 'un utilisateur qui voit plusieurs options dans son application VPN et ne sait pas laquelle choisir',
    limit: 'le protocole ne compense pas une mauvaise configuration, une application non maintenue ou un fournisseur qui manque de transparence',
    evidence: 'WireGuard, OpenVPN et IKEv2 sont documentés publiquement avec des objectifs et des compromis différents',
    habit: 'laisser le mode automatique si le fournisseur le gère bien, puis tester la stabilité et les fuites DNS sur les réseaux utilisés',
  },
  'vpn-and-dns-leaks': {
    title: 'VPN, DNS et WebRTC : comprendre les fuites possibles',
    description: 'Vérifier les chemins qui peuvent exposer des informations réseau même quand l’application VPN paraît connectée.',
    focus: 'les fuites DNS, IPv6 et WebRTC dans un navigateur moderne',
    situation: 'un navigateur avec extensions, visioconférence, applications web et plusieurs réseaux dans la même journée',
    limit: 'une icône VPN verte ne garantit pas que chaque requête DNS ou interface réseau suit le tunnel attendu',
    evidence: 'MDN décrit WebRTC comme une technologie réseau du navigateur, distincte du simple chargement d’une page web',
    habit: 'tester les fuites après installation, après changement de protocole et après mise à jour majeure du navigateur',
  },
  'vpn-kill-switch-guide': {
    title: 'Kill switch VPN : rôle, limites et test responsable',
    description: 'Savoir ce qu’un kill switch bloque, ce qu’il ne bloque pas et comment le vérifier avant de dépendre de lui.',
    focus: 'la continuité de protection quand le tunnel tombe',
    situation: 'un réseau instable, un déplacement ou une connexion où les coupures changent rapidement de route',
    limit: 'un kill switch ne protège pas contre une page de phishing, une fuite de compte connecté ou une mauvaise configuration DNS persistante',
    evidence: 'les guides VPN institutionnels traitent le tunnel comme une partie de l’architecture, pas comme une garantie isolée',
    habit: 'tester avec une page non sensible, couper brièvement le réseau, observer le comportement et documenter le réglage choisi',
  },
  'free-vpn-risks': {
    title: 'VPN gratuit : risques, compromis et questions à poser',
    description: 'Évaluer un VPN gratuit à partir de son financement, de ses limites, de sa collecte de données et de sa maintenance.',
    focus: 'le modèle économique et les concessions cachées',
    situation: 'un service gratuit proposé comme solution immédiate pour toute la navigation',
    limit: 'la gratuité peut se payer par des plafonds stricts, moins de support, plus de collecte ou une priorité faible sur les mises à jour',
    evidence: 'la FTC recommande de regarder les pratiques de données et les déclarations des applications VPN',
    habit: 'préférer un usage limité, lire les conditions, éviter les comptes sensibles et supprimer l’application si la politique reste floue',
  },
  'vpn-on-mobile': {
    title: 'VPN sur mobile : batterie, Wi-Fi fiable et réglages utiles',
    description: 'Configurer un VPN sur téléphone sans casser les notifications, la batterie, les réseaux de confiance ni la récupération du compte.',
    focus: 'l’équilibre entre protection réseau et contraintes mobiles',
    situation: 'un téléphone qui passe du Wi-Fi domestique à la 4G, au roaming et aux réseaux publics',
    limit: 'un VPN mobile ne remplace pas le verrouillage de l’écran, les mises à jour système ou la maîtrise des permissions d’applications',
    evidence: 'les recommandations de sécurité mobile mettent l’accent sur l’appareil, les comptes et le réseau en même temps',
    habit: 'activer la connexion automatique sur réseaux inconnus, vérifier la batterie et garder les codes de récupération hors du téléphone',
  },
  'vpn-for-travel': {
    title: 'VPN en voyage : préparer ses appareils avant le départ',
    description: 'Organiser VPN, sauvegardes, comptes, cartes SIM temporaires et récupération avant hôtels, aéroports et déplacements prolongés.',
    focus: 'la préparation avant exposition à des réseaux temporaires',
    situation: 'un voyage avec Wi-Fi d’hôtel, aéroport, location, cartes SIM locales et appareils parfois partagés',
    limit: 'le VPN ne remplace pas une sauvegarde, une MFA robuste ni une stratégie si le téléphone principal est perdu',
    evidence: 'les guides de sécurité pour le télétravail et les réseaux publics privilégient la préparation avant incident',
    habit: 'mettre à jour avant le départ, réduire les données locales, tester le VPN et conserver les moyens de récupération séparément',
  },
  'vpn-for-remote-work': {
    title: 'VPN et télétravail : accès distant sans angle mort',
    description: 'Utiliser un VPN professionnel avec MFA, appareil sain, droits limités et procédure de départ claire.',
    focus: 'l’accès distant comme processus de sécurité complet',
    situation: 'une petite équipe ou un indépendant qui accède à des ressources de travail hors du bureau',
    limit: 'un VPN d’entreprise ne corrige pas un poste non mis à jour, un compte partagé ou des droits conservés après le départ d’un collaborateur',
    evidence: 'le NIST décrit l’accès distant, le BYOD et le télétravail comme des sujets d’architecture et de gestion des risques',
    habit: 'associer VPN, MFA, inventaire des appareils, revues d’accès et suppression rapide des comptes inutiles',
  },
  'vpn-vs-tor': {
    title: 'VPN ou Tor : choisir selon le besoin de confidentialité',
    description: 'Comparer VPN et Tor sans les confondre, en tenant compte de la confiance, des performances, des usages et des erreurs fréquentes.',
    focus: 'la différence entre tunnel commercial et réseau d’anonymisation',
    situation: 'un lecteur qui veut masquer une exposition réseau mais ne sait pas quel outil correspond à son risque',
    limit: 'empiler des outils sans comprendre leur ordre peut dégrader la sécurité, ralentir l’usage ou créer une fausse confiance',
    evidence: 'les documents publics sur les VPN et les protocoles réseau montrent que chaque outil déplace la confiance différemment',
    habit: 'définir d’abord le risque, séparer navigation quotidienne et besoins sensibles, puis tester les effets sur comptes, vitesse et fiabilité',
  },
};

const buildFrVpnContent = (slug: string) => {
  const profile = frVpnProfiles[slug];
  if (!profile) return undefined;
  const intro = [
    `${profile.title} demande d’abord de nommer le risque que l’on cherche à réduire. Dans ${profile.situation}, le VPN peut aider à éviter qu’un réseau local observe directement une partie du trafic ou modifie certains chemins réseau. Cette protection est utile, mais elle ne transforme pas automatiquement toute l’activité en ligne en navigation anonyme. La bonne question n’est donc pas seulement “faut-il un VPN ?”, mais “quel problème précis le VPN résout-il ici ?”.`,
    `Le point central est ${profile.focus}. Un tunnel VPN chiffre la connexion entre l’appareil et le serveur VPN, puis le trafic ressort depuis l’infrastructure du fournisseur. Ce déplacement de confiance peut être raisonnable sur un réseau public, en déplacement ou lorsque l’on veut limiter l’exposition au fournisseur d’accès local. Il exige aussi de choisir un fournisseur, une application et des réglages que l’on comprend suffisamment pour les maintenir.`,
    `Il faut garder la limite en tête : ${profile.limit}. Les sites web, applications, systèmes publicitaires et comptes connectés disposent d’autres signaux. Les cookies, les empreintes de navigateur, les adresses e-mail, les moyens de paiement et les habitudes de connexion peuvent continuer à relier des actions entre elles. HexaCybert présente donc le VPN comme une couche de réseau, pas comme une promesse globale d’effacement.`,
    `Une méthode saine consiste à partir des sources, des réglages et des tests reproductibles. Dans ce cas, ${profile.evidence}. Le lecteur doit pouvoir retrouver les paramètres, comprendre ce qui change, et revenir en arrière si une application bancaire, une visioconférence ou un service professionnel ne fonctionne plus correctement. La sécurité utile est celle que l’on peut expliquer et répéter sans improviser sous pression.`,
  ];
  const risks = [
    `Confondre confidentialité réseau et anonymat complet conduit à de mauvaises décisions, surtout lorsque des comptes personnels restent connectés pendant toute la session.`,
    `Choisir un fournisseur uniquement sur une promotion ou un classement peut masquer des éléments plus importants : politique de journaux, support, historique, juridiction, applications maintenues et conditions de remboursement.`,
    `Ignorer les réglages DNS, IPv6, WebRTC ou kill switch peut laisser une exposition différente de celle attendue, en particulier après une mise à jour ou un changement de protocole.`,
    `Installer plusieurs extensions ou applications VPN en parallèle complique le diagnostic et peut créer des conflits de routes, de certificats ou de permissions système.`,
    `Utiliser le VPN comme excuse pour reporter les mises à jour, la MFA ou les sauvegardes affaiblit la protection générale, car la plupart des incidents personnels commencent par un compte ou un appareil compromis.`,
    `Ne pas tester la configuration avant un voyage, un télétravail important ou un réseau public oblige à résoudre les erreurs au pire moment, avec moins d’options de récupération.`,
  ];
  const steps = [
    `Définissez le scénario principal : maison, Wi-Fi public, voyage, télétravail, mobile ou comparaison de fournisseurs. Un réglage adapté à ${profile.situation} sera plus utile qu’une configuration vague copiée partout.`,
    `Vérifiez la transparence du fournisseur : politique de confidentialité, documentation technique, plateformes prises en charge, méthode de paiement, annulation et explication claire des limites.`,
    `Installez uniquement l’application officielle, depuis le site ou la boutique reconnue, puis supprimez les anciens profils VPN qui ne servent plus pour éviter les conflits.`,
    `Activez les réglages pertinents comme connexion automatique sur réseaux inconnus, protection DNS, kill switch ou protocole automatique, puis notez ce que vous avez changé.`,
    `Testez avec des pages non sensibles : adresse IP visible, DNS, coupure réseau, changement de Wi-Fi, sortie de veille et lancement du navigateur avant toute opération importante.`,
    `Associez le VPN à une hygiène de compte : mots de passe uniques, MFA, navigateur à jour, permissions réduites et sauvegarde des codes de récupération dans un lieu séparé.`,
    `Réévaluez après chaque changement majeur : nouvel appareil, nouveau pays, nouvelle box, nouvelle politique du fournisseur ou incident public touchant l’application utilisée.`,
  ];
  const mistakes = [
    `Croire qu’un VPN efface les traces laissées par un compte connecté ou une session déjà identifiée.`,
    `Se fier à un test de vitesse isolé pour juger un service, alors que la stabilité, les fuites et le support comptent davantage sur la durée.`,
    `Laisser l’abonnement se renouveler sans relire les conditions, les appareils utilisés et les besoins réels.`,
    `Désactiver le VPN dès qu’un site bloque l’accès sans chercher la cause, puis oublier de le réactiver sur le réseau suivant.`,
    `Installer une application gratuite inconnue sur un téléphone principal contenant e-mail, banque, photos et récupération de comptes.`,
  ];
  const checklist = [
    `Objectif principal écrit en une phrase : ${profile.focus}.`,
    `Application officielle installée et anciens profils VPN inutiles supprimés.`,
    `DNS, WebRTC, kill switch ou connexion automatique testés selon le scénario.`,
    `MFA, gestionnaire de mots de passe et mises à jour vérifiés avant de dépendre du VPN.`,
    `Politique de confidentialité, support, annulation et limites commerciales relus calmement.`,
    `Plan de secours prévu si le VPN bloque une application critique ou si l’appareil est perdu.`,
  ];
  const faq: Array<[string, string]> = [
    ['Un VPN suffit-il pour être anonyme ?', `Non. ${profile.limit}. Un VPN peut réduire une exposition réseau précise, mais il ne supprime pas les identifiants, les cookies, les paiements ni les habitudes de connexion.`],
    ['Faut-il laisser le VPN actif tout le temps ?', `Cela dépend du contexte. Pour ${profile.situation}, l’activation automatique peut être utile, mais elle doit être testée avec les applications indispensables afin d’éviter les blocages silencieux.`],
    ['Comment vérifier que la configuration fonctionne ?', `Pour ${profile.focus}, commencez par des tests simples liés à ${profile.situation} : adresse IP visible, DNS, coupure de réseau, changement de Wi-Fi et fonctionnement des services essentiels.`],
    ['Quel est le meilleur VPN ?', `${profile.title} n’appelle pas un gagnant universel. Le bon choix dépend du besoin, du modèle de confiance, des appareils, du budget, du support et des limites que vous acceptez.`],
  ];
  return {
    title: profile.title,
    description: profile.description,
    summary: `${profile.description} Le guide insiste sur ${profile.focus} et sur les limites à vérifier avant de faire confiance au tunnel.`,
    content: {
      intro,
      risks,
      steps,
      mistakes,
      checklist,
      faq,
      conclusion: `La bonne utilisation d’un VPN repose sur une idée simple : ${profile.habit}. Ce n’est pas une garantie magique, mais une couche utile lorsqu’elle est intégrée à des comptes solides, des appareils maintenus, une récupération préparée et une lecture honnête des sources. En gardant cette discipline, le VPN devient un outil compréhensible plutôt qu’un slogan.`,
    },
    seoDescription: `${profile.description} Guide indépendant HexaCybert avec limites, méthode de vérification et sources publiques.`,
  };
};

const readingTimeFromContent = (content: Article['content'], lang: Lang) => {
  const text = [
    ...content.intro,
    ...content.risks,
    ...content.steps,
    ...content.mistakes,
    ...content.checklist,
    ...content.faq.flatMap(([question, answer]) => [question, answer]),
    content.conclusion,
  ].join(' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const mins = Math.max(3, Math.ceil(words / 220));
  const labels: Record<Lang, string> = { en: 'min read', fr: 'min de lecture', de: 'Min. Lesezeit', es: 'min de lectura', it: 'min di lettura', pt: 'min de leitura', nl: 'min leestijd' };
  return `${mins} ${labels[lang]}`;
};

const localizeArticle = (article: Omit<Article, 'lang'>, lang: Lang): Article => {
  const frVpn = lang === 'fr' && article.category === 'vpn' ? buildFrVpnContent(article.slug) : undefined;
  const title = frVpn?.title ?? localizeTitle(article, lang);
  const section = sections[lang]?.[article.category] ?? sections.en[article.category];
  const template = localizedTemplates[lang];
  const description = frVpn?.description ?? (lang === 'en' ? article.description : `${section.description}`);
  const content = frVpn?.content ?? buildContent(title, description, article.type, lang);
  return {
    ...article,
    lang,
    title,
    description,
    author: lang === 'fr' ? 'Équipe éditoriale de HexaCybert' : 'HexaCybert Editorial',
    readingTime: readingTimeFromContent(content, lang),
    tags: [section.title, article.type, levelLabels[lang][article.level]],
    audience: localizedAudience[lang],
    os: article.category === 'device-security' ? ['Windows', 'macOS', 'Android', 'iOS'] : [allPlatforms[lang]],
    summary: frVpn?.summary ?? (lang === 'en' ? article.summary : `${template.summaryPrefix} ${title.toLowerCase()}.`),
    content,
    seo: { title, description: frVpn?.seoDescription ?? (lang === 'en' ? article.seo.description : `${template.seoPrefix} ${description}`) },
  };
};

const makeArticle = (
  [slug, title, description, level = 'Beginner', source = sourceLibrary.ncscSmallOrg]: readonly [string, string, string, string?, SourceRef?],
  index: number,
  category: SectionKey,
  type: Article['type'],
  extraSources: SourceRef[] = []
): Omit<Article, 'lang'> => ({
  title,
  slug,
  description,
  category,
  type,
  level: level as Level,
  date: dateFor(`${index}:${slug}`),
  updated: updatedFor(`${index}:${slug}`),
  author: 'HexaCybert Editorial',
  readingTime: minsFor(title),
  tags: [category.replace('-', ' '), type, level.toLowerCase()],
  audience: ['Individuals', type === 'cybersecurity' ? 'Small teams' : 'Families'],
  os: category === 'device-security' ? ['Windows', 'macOS', 'Android', 'iOS'] : ['All platforms'],
  summary: description,
  content: buildContent(title, description, type),
  sources: [source, ...extraSources],
  seo: { title, description },
});

const baseArticles = [
  ...guideTopics.map((topic, index) => makeArticle(topic, index, 'guides', 'guide', [sourceLibrary.cisaMfa, sourceLibrary.nistIdentity])),
  ...privacyTopics.map((topic, index) => makeArticle(topic, index + 35, 'privacy', 'privacy', [sourceLibrary.cnilHome])),
  ...managerTopics.map((topic, index) => makeArticle(topic, index + 70, 'password-managers', 'manager', [sourceLibrary.nistIdentity])),
  ...comparisonTopics.map((topic, index) => makeArticle([...topic, 'Intermediate', sourceLibrary.nistIdentity], index + 90, 'comparisons', 'comparison')),
  ...cyberTopics.map((topic, index) => makeArticle([...topic, 'Beginner', sourceLibrary.cisaMfa], index + 120, 'cybersecurity', 'cybersecurity')),
  ...deviceTopics.map((topic, index) => makeArticle([...topic, 'Beginner', sourceLibrary.ncscSmallOrg], index + 140, 'device-security', 'device')),
  ...networkTopics.map((topic, index) => makeArticle([...topic, 'Intermediate', sourceLibrary.ncscSmallOrg], index + 155, 'wifi-security', 'network')),
  ...vpnTopics.map((topic, index) =>
    makeArticle([...topic, 'Beginner', sourceLibrary.ncscVpn], index + 165, 'vpn', 'privacy', [
      sourceLibrary.cisaWireless,
      sourceLibrary.cyberCanadaWifi,
      sourceLibrary.ietfIkev2,
      sourceLibrary.wireguardProtocol,
      sourceLibrary.openVpnManual,
      sourceLibrary.mozillaWebRtc,
      sourceLibrary.nistTelework,
      sourceLibrary.ftcVpn,
    ])
  ),
  ...newsTopics.map((topic, index) => makeArticle([topic[0], topic[1], topic[2], 'Beginner', topic[3]], index + 170, 'news', 'news')),
];

export const articles: Article[] = [
  ...(['en', 'fr', 'es'] as Lang[]).flatMap((lang) => baseArticles.map((article) => localizeArticle(article, lang))),
];

export const toolCatalog = [
  ['password-generator', 'Password generator', 'Generate random passwords locally in your browser.'],
  ['strength-meter', 'Password strength meter', 'Estimate password quality without sending it anywhere.'],
  ['passphrase-generator', 'Passphrase generator', 'Create memorable multi-word passphrases.'],
  ['entropy-calculator', 'Entropy calculator', 'Estimate search space from character sets and length.'],
  ['hash-generator', 'Hash generator', 'Create SHA-256 hashes for non-sensitive text.'],
  ['uuid-generator', 'UUID generator', 'Generate UUID values locally.'],
  ['random-code-generator', 'Random code generator', 'Create short recovery-style random codes.'],
  ['security-checklist', 'Security checklist', 'Track a personal security baseline.'],
  ['privacy-checklist', 'Privacy checklist', 'Review tracking, permissions and account exposure.'],
  ['url-analyzer', 'Educational URL analyzer', 'Break down a URL for learning purposes.'],
  ['email-header-inspector', 'Email header inspector', 'Paste headers manually and inspect common fields.'],
  ['crack-time-estimator', 'Password crack-time estimator', 'Educational estimate based on length and character variety.'],
  ['recovery-code-generator', 'Recovery code generator', 'Create printable recovery codes locally.'],
  ['personal-security-evaluator', 'Personal security evaluator', 'Score a self-assessment checklist.'],
  ['auth-method-comparator', 'Authentication method comparator', 'Compare SMS, app codes, passkeys and security keys.'],
] as const;

const localizedToolText: Partial<Record<Lang, Record<string, [string, string]>>> = {
  es: {
    'password-generator': ['Generador de contrasenas', 'Genera contrasenas aleatorias localmente en tu navegador.'],
    'strength-meter': ['Medidor de fortaleza', 'Estima la calidad de una contrasena sin enviarla a ningun lugar.'],
    'passphrase-generator': ['Generador de frases', 'Crea frases de varias palabras faciles de recordar.'],
    'entropy-calculator': ['Calculadora de entropia', 'Estima el espacio de busqueda segun caracteres y longitud.'],
    'hash-generator': ['Generador hash', 'Crea hashes SHA-256 para texto no sensible.'],
    'uuid-generator': ['Generador UUID', 'Genera valores UUID localmente.'],
    'random-code-generator': ['Codigos aleatorios', 'Crea codigos cortos de recuperacion.'],
    'security-checklist': ['Lista de seguridad', 'Revisa una base personal de seguridad.'],
    'privacy-checklist': ['Lista de privacidad', 'Revisa rastreo, permisos y exposicion de cuentas.'],
    'url-analyzer': ['Analizador de URL', 'Desglosa una URL con fines educativos.'],
    'email-header-inspector': ['Inspector de cabeceras', 'Pega cabeceras manualmente y revisa campos comunes.'],
    'crack-time-estimator': ['Estimador de descifrado', 'Estimacion educativa segun longitud y variedad.'],
    'recovery-code-generator': ['Codigos de recuperacion', 'Crea codigos imprimibles localmente.'],
    'personal-security-evaluator': ['Evaluador personal', 'Puntua una autoevaluacion de seguridad.'],
    'auth-method-comparator': ['Comparador de autenticacion', 'Compara SMS, apps, passkeys y llaves fisicas.'],
  },
  fr: {
    'password-generator': ['Générateur de mots de passe', 'Générer des mots de passe localement.'],
    'strength-meter': ['Mesure de robustesse', 'Évaluer un mot de passe sans l’envoyer.'],
    'passphrase-generator': ['Générateur de phrase secrète', 'Créer une phrase mémorable.'],
    'entropy-calculator': ['Calculateur d’entropie', 'Estimer l’espace de recherche.'],
    'hash-generator': ['Générateur de hash', 'Créer un hash SHA-256 pour texte non sensible.'],
    'uuid-generator': ['Générateur UUID', 'Générer des UUID localement.'],
    'random-code-generator': ['Codes aléatoires', 'Créer des codes courts.'],
    'security-checklist': ['Liste de sécurité', 'Suivre une base de sécurité personnelle.'],
    'privacy-checklist': ['Liste confidentialité', 'Vérifier pistage, permissions et exposition.'],
    'url-analyzer': ['Analyseur URL', 'Décomposer une URL à but éducatif.'],
    'email-header-inspector': ['Inspecteur d’en-têtes', 'Examiner les champs courants.'],
    'crack-time-estimator': ['Estimation de cassage', 'Estimation éducative selon longueur et variété.'],
    'recovery-code-generator': ['Codes de secours', 'Créer des codes imprimables localement.'],
    'personal-security-evaluator': ['Évaluateur personnel', 'Noter une auto-évaluation.'],
    'auth-method-comparator': ['Comparateur d’authentification', 'Comparer SMS, application, passkeys et clés.'],
  },
};

export const getToolCatalog = (lang: Lang) =>
  toolCatalog.map(([slug, title, description]) => {
    const localized = localizedToolText[lang]?.[slug];
    return [slug, localized?.[0] ?? title, localized?.[1] ?? description] as const;
  });

export const resourceGroups = [
  ['Beginners', ['start-protecting-yourself-online', 'create-secure-passwords', 'use-two-step-authentication']],
  ['Families', ['protect-children-online', 'digital-security-checklist-families', 'secure-home-wifi']],
  ['Students', ['security-for-students', 'protect-personal-files', 'public-wifi-risks']],
  ['Travelers', ['secure-devices-while-traveling', 'use-public-wifi-safely', 'travel-security']],
  ['Remote workers', ['remote-worker-security-basics', 'protect-email-account', 'home-router-basics']],
  ['Small businesses', ['protect-small-business', 'small-office-network', 'make-backups']],
  ['Creators', ['security-for-creators', 'protect-social-media-accounts', 'account-takeover']],
  ['Windows users', ['secure-windows-device', 'windows-privacy', 'keep-device-updated']],
  ['macOS users', ['secure-macos-device', 'macos-privacy', 'device-encryption-basics']],
  ['Android users', ['secure-android-device', 'android-privacy', 'check-app-permissions']],
  ['iPhone users', ['secure-iphone-device', 'iphone-privacy', 'location-permissions']],
] as const;

const localizedResourceGroupLabels: Partial<Record<Lang, Record<(typeof resourceGroups)[number][0], string>>> = {
  fr: {
    Beginners: 'Débutants',
    Families: 'Familles',
    Students: 'Étudiants',
    Travelers: 'Voyageurs',
    'Remote workers': 'Télétravailleurs',
    'Small businesses': 'Petites entreprises',
    Creators: 'Créateurs',
    'Windows users': 'Utilisateurs Windows',
    'macOS users': 'Utilisateurs macOS',
    'Android users': 'Utilisateurs Android',
    'iPhone users': 'Utilisateurs iPhone',
  },
  es: {
    Beginners: 'Principiantes',
    Families: 'Familias',
    Students: 'Estudiantes',
    Travelers: 'Viajeros',
    'Remote workers': 'Teletrabajadores',
    'Small businesses': 'Pequeñas empresas',
    Creators: 'Creadores',
    'Windows users': 'Usuarios de Windows',
    'macOS users': 'Usuarios de macOS',
    'Android users': 'Usuarios de Android',
    'iPhone users': 'Usuarios de iPhone',
  },
};

export const getResourceGroups = (lang: Lang) =>
  resourceGroups.map(([group, links]) => [localizedResourceGroupLabels[lang]?.[group] ?? group, links] as const);

type EvergreenPage = readonly [string, string, string];
export const evergreenPages: Partial<Record<SectionKey, readonly EvergreenPage[]>> = {};

export const legalPages = {
  'privacy-policy': {
    title: { en: 'Privacy Policy', fr: 'Politique de confidentialité', es: 'Politica de privacidad' },
    description: {
      en: 'How HexaCybert handles personal data, privacy choices and future analytics.',
      fr: 'Comment HexaCybert traite les données personnelles, les choix de confidentialité et les futurs outils de mesure.',
      es: 'Como HexaCybert trata los datos personales, las opciones de privacidad y futuras mediciones.',
    },
    body: {
      en: ['HexaCybert is an informational website administered from France. We aim to collect the minimum data needed to operate the site.', `For editorial contact, corrections or privacy requests, write to ${contactEmail}.`, 'At launch, the site does not require account creation, does not sell personal data and does not publish fake affiliate tracking links.', 'Server logs may be created by hosting providers for security, abuse prevention and technical operation. Optional analytics or marketing tools must not load unless they are documented and the visitor has given valid consent.', 'We keep privacy notices under review when site features change, especially if analytics, forms, newsletters or affiliate integrations are added later.'],
      fr: ['HexaCybert est un projet éditorial indépendant administré depuis la France. Nous cherchons à collecter le minimum de données nécessaire au fonctionnement d’un site d’information.', `Pour une question éditoriale, une correction ou une demande de confidentialité, écrivez à ${contactEmail}.`, 'Le site ne demande pas de compte lecteur, ne vend pas de données personnelles et ne publie pas de liens affiliés présentés comme des recommandations neutres sans mention claire.', 'Des journaux techniques peuvent être créés par les hébergeurs pour la sécurité, la prévention des abus, le diagnostic d’erreurs et la livraison des pages. Ces journaux ne sont pas utilisés pour inventer un profil commercial de lecteur.', 'Les outils optionnels de mesure, publicité, retargeting ou affiliation ne doivent pas se charger sans information claire et consentement valide lorsque la loi l’exige.', 'Cette notice est revue lorsque les fonctionnalités changent, notamment en cas d’ajout futur de statistiques, formulaires, newsletter ou intégrations affiliées.'],
      es: ['HexaCybert es un sitio informativo administrado desde Francia. Nuestro objetivo es recopilar solo los datos minimos necesarios para operar el sitio.', `Para contacto editorial, correcciones o solicitudes de privacidad, escribe a ${contactEmail}.`, 'En el lanzamiento, el sitio no exige crear cuenta, no vende datos personales y no publica enlaces de afiliado falsos.', 'El proveedor de alojamiento puede generar registros tecnicos para seguridad, prevencion de abuso y funcionamiento. Las herramientas opcionales de analitica o marketing no deben cargarse sin informacion clara y consentimiento valido.', 'Revisamos esta politica cuando cambian las funciones del sitio, especialmente si se agregan analitica, formularios, newsletter o integraciones de afiliados en el futuro.'],
    },
  },
  cookies: {
    title: { en: 'Cookie Policy', fr: 'Politique cookies', es: 'Politica de cookies' },
    description: {
      en: 'Essential cookies and consent rules for optional tools.',
      fr: 'Cookies essentiels et regles de consentement pour les outils optionnels.',
      es: 'Cookies esenciales y reglas de consentimiento para herramientas opcionales.',
    },
    body: {
      en: ['HexaCybert may store essential preferences, such as the cookie choice itself, so the site can remember a visitor decision.', 'Optional analytics, advertising, retargeting or affiliate tracking cookies should remain disabled until they are fully documented and accepted by the visitor.', 'Visitors can clear cookies in their browser settings. If optional tools are added later, the banner and this policy must describe their purpose, provider and duration.'],
      fr: ['HexaCybert peut stocker des préférences essentielles, comme le choix cookie lui-même, afin de mémoriser la décision du visiteur.', 'Les cookies optionnels de mesure, publicité, retargeting ou suivi affilié doivent rester désactivés tant qu’ils ne sont pas documentés et acceptés par le visiteur.', 'Les visiteurs peuvent supprimer les cookies dans les réglages du navigateur. Si des outils optionnels sont ajoutés, la bannière et cette page devront indiquer leur finalité, fournisseur et durée.', 'Un refus des cookies optionnels ne doit pas bloquer l’accès aux contenus éditoriaux ordinaires. Les fonctions strictement nécessaires à l’affichage, à la sécurité ou à la mémorisation d’un choix peuvent rester actives.'],
      es: ['HexaCybert puede guardar preferencias esenciales, como la decision sobre cookies, para recordar la eleccion del visitante.', 'Las cookies opcionales de analitica, publicidad, retargeting o seguimiento de afiliados deben permanecer desactivadas hasta estar documentadas y aceptadas por el visitante.', 'Los visitantes pueden borrar cookies desde el navegador. Si se agregan herramientas opcionales, el banner y esta politica deben explicar su finalidad, proveedor y duracion.'],
    },
  },
  terms: {
    title: { en: 'Terms and Conditions', fr: 'Conditions d’utilisation', es: 'Terminos y condiciones' },
    description: {
      en: 'Terms for using HexaCybert educational cybersecurity content.',
      fr: 'Conditions applicables au contenu éducatif de cybersécurité de HexaCybert.',
      es: 'Condiciones de uso del contenido educativo de ciberseguridad de HexaCybert.',
    },
    body: {
      en: ['HexaCybert publishes educational cybersecurity and privacy information. It is not legal, compliance, financial or emergency incident-response advice.', 'Readers remain responsible for checking whether guidance fits their device, jurisdiction, employer rules and risk level.', 'We may update, remove or reorganize content when information changes or when errors are found.', `Questions about these terms can be sent to ${contactEmail}.`],
      fr: ['HexaCybert publie des informations éducatives sur la cybersécurité, la confidentialité, les VPN, les gestionnaires de mots de passe et la protection des appareils. Ce contenu ne remplace pas un conseil juridique, conformité, financier ou une intervention d’urgence.', 'Les lecteurs doivent vérifier si les conseils conviennent à leurs appareils, pays, règles professionnelles et niveau de risque. Une personne très exposée peut avoir besoin d’un accompagnement spécialisé.', 'Nous pouvons mettre à jour, retirer ou réorganiser le contenu lorsque les informations changent ou qu’une erreur est identifiée.', 'Les outils locaux proposés sur le site sont fournis comme aide pratique. Les résultats doivent être interprétés avec prudence et ne garantissent pas une sécurité complète.', `Les questions peuvent être envoyées à ${contactEmail}.`],
      es: ['HexaCybert publica informacion educativa sobre ciberseguridad y privacidad. No sustituye asesoramiento legal, de cumplimiento, financiero ni respuesta profesional ante incidentes.', 'Cada lector debe comprobar si la guia encaja con sus dispositivos, pais, reglas laborales y nivel de riesgo.', 'Podemos actualizar, retirar o reorganizar contenido cuando cambie la informacion o se detecten errores.', `Las preguntas pueden enviarse a ${contactEmail}.`],
    },
  },
  'legal-notice': {
    title: { en: 'Legal Notice', fr: 'Mentions légales', es: 'Aviso legal' },
    description: {
      en: 'Publisher, administration country and editorial contact for HexaCybert.',
      fr: 'Éditeur, pays d’administration et contact éditorial de HexaCybert.',
      es: 'Editor, pais de administracion y contacto editorial de HexaCybert.',
    },
    body: {
      en: ['Site name: HexaCybert.', 'Administration country: France.', `Editorial and legal contact: ${contactEmail}.`, 'HexaCybert is published as an informational security and privacy resource. Hosting and technical providers may process limited technical data needed to deliver the site.'],
      fr: ['Nom du site : HexaCybert.', 'Domaine : https://hexacybert.xyz.', 'Pays d’administration : France.', `Contact éditorial et légal : ${contactEmail}.`, 'HexaCybert est publié comme ressource d’information sur la cybersécurité, la confidentialité, les VPN, la protection des comptes, les gestionnaires de mots de passe, le Wi-Fi, les outils et l’éducation technologique.', 'Aucune adresse postale, numéro fiscal, nombre d’employés, laboratoire de test ou relation commerciale avec un fournisseur VPN ne doit être supposé si cette information n’est pas publiée explicitement sur le site.', 'Les fournisseurs techniques peuvent traiter des données limitées nécessaires à la diffusion du site, à la sécurité et au diagnostic d’erreurs.'],
      es: ['Nombre del sitio: HexaCybert.', 'Pais de administracion: Francia.', `Contacto editorial y legal: ${contactEmail}.`, 'HexaCybert se publica como recurso informativo de seguridad y privacidad. Los proveedores tecnicos pueden tratar datos limitados necesarios para entregar el sitio.'],
    },
  },
  'affiliate-disclosure': {
    title: { en: 'Affiliate Disclosure', fr: 'Déclaration d’affiliation', es: 'Divulgacion de afiliados' },
    description: {
      en: 'How HexaCybert will disclose future affiliate relationships.',
      fr: 'Comment HexaCybert signalera les futures relations d’affiliation.',
      es: 'Como HexaCybert informara futuras relaciones de afiliacion.',
    },
    body: {
      en: ['HexaCybert may apply for affiliate programs in the future, including VPN or security software programs. No partnership should be implied unless it is active and disclosed on the relevant page.', 'Affiliate compensation must not determine editorial conclusions, rankings or security claims. Reviews should explain evidence, limitations and update dates.', 'If affiliate links are added, they must be clearly labelled before or near the link and must not use misleading urgency, fake discounts or unsupported claims.'],
      fr: ['HexaCybert peut demander à rejoindre des programmes d’affiliation à l’avenir, y compris pour des VPN ou logiciels de sécurité. Aucun partenariat ne doit être supposé sans relation active et mention claire sur la page concernée.', 'La rémunération affiliée ne doit pas déterminer les conclusions éditoriales, classements ou affirmations de sécurité. Un lien rémunéré doit rester séparé de l’évaluation des faits, limites et sources.', 'Si des liens affiliés sont ajoutés, ils devront être signalés clairement avant ou près du lien, sans urgence trompeuse, fausses réductions, prix inventés ou promesses non étayées.', 'HexaCybert ne prétend pas être partenaire d’IPVanish ou d’un autre fournisseur tant qu’une relation n’est pas active, approuvée et indiquée publiquement.'],
      es: ['HexaCybert puede solicitar programas de afiliados en el futuro, incluidos programas de VPN o software de seguridad. No debe suponerse ninguna colaboracion si no esta activa y declarada en la pagina correspondiente.', 'La compensacion de afiliados no debe determinar conclusiones editoriales, rankings ni afirmaciones de seguridad.', 'Si se agregan enlaces de afiliado, deben etiquetarse claramente y no usar urgencia enganosa, descuentos falsos ni afirmaciones sin respaldo.'],
    },
  },
  'editorial-policy': {
    title: { en: 'Editorial Policy', fr: 'Politique éditoriale', es: 'Politica editorial' },
    description: {
      en: 'Editorial standards for practical, neutral security guidance.',
      fr: 'Règles éditoriales pour des conseils de sécurité pratiques et neutres.',
      es: 'Normas editoriales para guias de seguridad practicas y neutrales.',
    },
    body: {
      en: ['HexaCybert prioritizes practical guidance, primary sources, clear limits and accessible language.', 'We avoid invented testing, fake awards, unsupported anonymity claims and pressure-based buying language.', 'Security content should explain what a tool can do, what it cannot do and which safer habits still matter.'],
      fr: ['HexaCybert privilégie les conseils pratiques, les sources primaires, les limites claires et un langage accessible.', 'Nous évitons les tests inventés, faux prix, promesses d’anonymat non prouvées, classements universels artificiels et formulations commerciales sous pression.', 'Le contenu de sécurité doit expliquer ce qu’un outil peut faire, ce qu’il ne peut pas faire et quelles habitudes restent importantes.', 'Les articles VPN doivent distinguer protection du réseau, confidentialité du fournisseur, suivi par navigateur, comptes connectés et sécurité de l’appareil.', 'Les dates de publication et de mise à jour ne doivent pas être placées dans le futur. Lorsqu’une information matérielle change, la page concernée doit être relue.'],
      es: ['HexaCybert prioriza orientacion practica, fuentes primarias, limites claros y lenguaje accesible.', 'Evitamos pruebas inventadas, premios falsos, promesas de anonimato sin respaldo y lenguaje de compra con presion.', 'El contenido de seguridad debe explicar que puede hacer una herramienta, que no puede hacer y que habitos seguros siguen siendo importantes.'],
    },
  },
  'corrections-policy': {
    title: { en: 'Corrections Policy', fr: 'Politique de corrections', es: 'Politica de correcciones' },
    description: {
      en: 'How readers can report errors and how HexaCybert updates content.',
      fr: 'Comment signaler une erreur et comment HexaCybert met à jour le contenu.',
      es: 'Como reportar errores y como HexaCybert actualiza contenido.',
    },
    body: {
      en: [`Send corrections to ${contactEmail} with the page URL, the issue and any supporting source.`, 'We review factual errors, broken links, outdated guidance, mistranslations and accessibility issues.', 'When a correction changes meaning, the affected page should be updated with a new modified date. Minor spelling or formatting fixes may be made silently.'],
      fr: [`Envoyez les corrections à ${contactEmail} avec l’URL de la page, le problème et une source utile.`, 'Nous examinons les erreurs factuelles, liens cassés, conseils obsolètes, problèmes de traduction et d’accessibilité.', 'Lorsqu’une correction change le sens, la page concernée doit être mise à jour avec une nouvelle date de modification. Les corrections mineures de forme peuvent être faites sans note.', 'Les demandes portant sur une promesse commerciale, un prix, une remise ou une relation d’affiliation doivent être vérifiées avant publication.'],
      es: [`Envia correcciones a ${contactEmail} con la URL de la pagina, el problema y una fuente de apoyo.`, 'Revisamos errores factuales, enlaces rotos, guias desactualizadas, traducciones incorrectas y problemas de accesibilidad.', 'Cuando una correccion cambia el significado, la pagina afectada debe actualizar su fecha de modificacion. Los ajustes menores de ortografia o formato pueden hacerse sin aviso.'],
    },
  },
  methodology: {
    title: { en: 'Editorial Methodology', fr: 'Méthodologie éditoriale', es: 'Metodologia editorial' },
    description: {
      en: 'How HexaCybert researches, reviews and updates security content.',
      fr: 'Comment HexaCybert recherche, révise et met à jour le contenu de sécurité.',
      es: 'Como HexaCybert investiga, revisa y actualiza contenido de seguridad.',
    },
    body: {
      en: ['We prefer official documentation, standards bodies, vendor documentation and reputable public-interest security guidance.', 'Comparison pages should explain trade-offs instead of declaring a universal winner. Product claims must be separated from verified facts.', 'Dates must not be set in the future. Pages should be reviewed when standards, product features, pricing, privacy terms or threat context materially change.'],
      fr: ['Nous privilégions la documentation officielle, les organismes de normalisation, la documentation des fournisseurs et les guides de sécurité d’intérêt public reconnus.', 'Les comparatifs doivent expliquer les compromis plutôt que désigner un gagnant universel. Les affirmations commerciales doivent être séparées des faits vérifiés.', 'Les articles sont relus selon le risque : une page sur les VPN, l’authentification ou la récupération de compte demande plus de sources et plus de prudence qu’une page de vocabulaire.', 'Les dates ne doivent pas être placées dans le futur. Les pages doivent être revues lorsque les standards, fonctions, prix, conditions de confidentialité ou menaces changent de façon importante.', 'La méthode éditoriale refuse les résultats de vitesse, tests internes, remises ou partenariats qui ne peuvent pas être vérifiés.'],
      es: ['Preferimos documentacion oficial, organismos de estandares, documentacion de proveedores y guias de seguridad de interes publico con buena reputacion.', 'Las comparativas deben explicar ventajas y limites en lugar de declarar un ganador universal. Las afirmaciones comerciales deben separarse de los hechos verificados.', 'Las fechas no deben estar en el futuro. Las paginas deben revisarse cuando cambien estandares, funciones, precios, condiciones de privacidad o contexto de amenazas de forma importante.'],
    },
  },
} as const;

export const getSection = (lang: Lang, key: SectionKey) => sections[lang]?.[key] ?? sections.en[key];
export const getArticles = (lang: Lang) => articles.filter((article) => article.lang === lang);
export const getArticle = (lang: Lang, slug: string) => getArticles(lang).find((article) => article.slug === slug);
export const relatedArticles = (article: Article) =>
  getArticles(article.lang)
    .filter((item) => item.slug !== article.slug && (item.category === article.category || item.tags.some((tag) => article.tags.includes(tag))))
    .slice(0, 3);
