import { Article } from '../articles/models/article.model';

const AUTHORS = {
  alice: { id: 'u1', firstname: 'Alice', lastname: 'Dupont' },
  bob: { id: 'u2', firstname: 'Bob', lastname: 'Martin' },
  charlie: { id: 'u3', firstname: 'Charlie', lastname: 'Lee' },
  diana: { id: 'u4', firstname: 'Diana', lastname: 'Prince' },
  evan: { id: 'u5', firstname: 'Evan', lastname: 'You' },
};

const CATEGORIES = {
  frontend: { id: 'c1', title: 'Développement Front-end' },
  backend: { id: 'c2', title: 'Développement Back-end' },
  design: { id: 'c3', title: 'UI/UX Design' },
  architecture: { id: 'c4', title: 'Architecture Logicielle' },
  devops: { id: 'c5', title: 'DevOps & Cloud' },
};

export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Comprendre le Feature-Sliced Design',
    description: `Une plongée en profondeur dans l'architecture front-end la plus populaire du moment pour les projets Angular scalables. Découvrez comment découper votre code par fonctionnalités métier (slices) plutôt que par couches techniques.

Cette approche garantit une maintenabilité à toute épreuve sur le long terme, même lorsque l'équipe s'agrandit. Nous verrons ensemble comment structurer les dossiers, isoler le domaine métier et gérer les dépendances croisées sans créer de boucles infinies.

Enfin, je partagerai mon retour d'expérience après avoir migré un monolithe de 3 ans vers FSD, avec les pièges à éviter lors des premières semaines.`,
    postImageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80',
    author: AUTHORS.alice,
    category: CATEGORIES.architecture,
    publishedAt: '2026-10-28T10:30:00Z',
  },
  {
    id: '2',
    title: 'Les Signals vs RxJS dans Angular',
    description: `Faut-il tout remplacer par des Signals ? Analyse des cas d'usage parfaits pour chaque technologie et comment les faire cohabiter. Nous explorerons les différences fondamentales entre la programmation réactive asynchrone de RxJS et la gestion d'état synchrone introduite par Angular 19.

Dans une seconde partie, nous construirons un composant de recherche hybride : RxJS gérera le debounce et l'annulation réseau via switchMap, tandis que les Signals s'occuperont du rendu UI instantané.

Le verdict est clair : RxJS reste le roi du réseau, mais les Signals sont les nouveaux maîtres du DOM.`,
    postImageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80',
    author: AUTHORS.bob,
    category: CATEGORIES.frontend,
    publishedAt: '2026-10-27T14:15:00Z',
  },
  {
    id: '3',
    title: 'Maîtriser Tailwind CSS en 2026',
    description: `Découvrez comment structurer vos classes utilitaires pour ne pas transformer vos templates HTML en cauchemar visuel. De l'utilisation du nouveau moteur v4 à la création de variables CSS natives.

Au-delà des bases, nous aborderons la création de plugins personnalisés et l'intégration avec des librairies de composants head-less. Vous apprendrez à maintenir un Design System cohérent sans écrire une seule ligne de CSS classique.

En bonus, un guide pour optimiser le bundle final et supprimer le CSS mort avant la mise en production.`,
    author: AUTHORS.charlie,
    category: CATEGORIES.design,
    publishedAt: '2026-10-26T09:00:00Z',
  },
  {
    id: '4',
    title: 'Déployer sur Vercel avec GitHub Actions',
    description: `Un guide étape par étape pour automatiser vos déploiements front-end à chaque push sur la branche principale. Fini les déploiements manuels risqués : mettez en place un pipeline CI/CD robuste.

Nous configurerons les environnements de staging dynamiques (preview deployments) qui permettront à votre équipe QA de tester les Pull Requests avant qu'elles ne soient fusionnées.

La sécurité ne sera pas en reste, avec une section dédiée à la gestion sécurisée des tokens et des variables d'environnement.`,
    postImageUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500&q=80',
    author: AUTHORS.diana,
    category: CATEGORIES.devops,
    publishedAt: '2026-10-25T16:45:00Z',
  },
  {
    id: '5',
    title: 'Pourquoi Vue.js reste pertinent',
    description: `L'écosystème évolue vite, mais la simplicité d'approche de Vue continue de séduire les startups et les grands groupes. Retour sur l'évolution de la Composition API.

Contrairement aux frameworks concurrents qui imposent une architecture rigide, Vue conserve la courbe d'apprentissage la plus accessible du marché, permettant aux développeurs juniors d'être productifs en quelques jours.

Nous analyserons les performances du dernier moteur de rendu et pourquoi il surpasse souvent la concurrence sur les terminaux mobiles bas de gamme.`,
    postImageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80',
    author: AUTHORS.evan,
    category: CATEGORIES.frontend,
    publishedAt: '2026-10-24T11:20:00Z',
  },
  {
    id: '6',
    title: 'Microservices : Le piège de la complexité',
    description: `Avant de découper votre monolithe, posez-vous ces 5 questions cruciales pour éviter l'enfer distribué. La promesse de l'indépendance technique cache souvent des défis majeurs.

La traçabilité réseau, la consistance éventuelle des données et les coûts explosifs d'infrastructure cloud sont les principaux motifs d'échec des migrations vers les microservices.

Je vous présenterai l'approche "Modular Monolith" : comment garder le code parfaitement séparé tout en déployant un seul binaire exécutable.`,
    author: AUTHORS.alice,
    category: CATEGORIES.architecture,
    publishedAt: '2026-10-22T08:10:00Z',
  },
  {
    id: '7',
    title: 'Le retour du Server-Side Rendering (SSR)',
    description: `Comment Angular Hydration et Next.js ont redonné ses lettres de noblesse au rendu côté serveur. Les Single Page Applications classiques montrent aujourd'hui leurs limites.

Le SEO et les Core Web Vitals poussent l'industrie à abandonner les temps de chargement infinis au profit d'applications hybrides ultra-rapides.

Nous verrons comment implémenter le "Partial Hydration" pour rendre interactive uniquement les parties de la page qui en ont besoin, économisant ainsi de précieux mégaoctets de JavaScript.`,
    postImageUrl: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&q=80',
    author: AUTHORS.bob,
    category: CATEGORIES.frontend,
    publishedAt: '2026-10-21T13:30:00Z',
  },
  {
    id: '8',
    title: 'Design System : Composants ou Utilitaires ?',
    description: `Où tracer la ligne entre un composant UI strictement verrouillé et la liberté laissée aux développeurs ? Une réflexion sur l'équilibre délicat entre la consistance de la marque et la flexibilité.

Trop de rigidité frustre les développeurs qui finissent par "hacker" le système avec du CSS externe. Trop de liberté conduit à des interfaces incohérentes.

La solution réside dans l'approche des "Slots" et de la composition, permettant de créer des layouts complexes sans jamais modifier le cœur du composant bouton ou de la carte.`,
    postImageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80',
    author: AUTHORS.charlie,
    category: CATEGORIES.design,
    publishedAt: '2026-10-20T17:00:00Z',
  },
  {
    id: '9',
    title: "NestJS et l'architecture Hexagonale",
    description: `Séparer la logique métier des détails d'implémentation dans votre backend Node.js. Apprenez à isoler votre domaine métier de la base de données et des protocoles HTTP.

Grâce aux ports et aux adaptateurs, votre code devient totalement indépendant du framework. Vous pourrez changer de base de données sans réécrire une seule règle de gestion.

Cet article inclut un dépôt GitHub complet avec un exemple de panier d'achat e-commerce développé entièrement en Test-Driven Development (TDD).`,
    author: AUTHORS.diana,
    category: CATEGORIES.backend,
    publishedAt: '2026-10-18T10:05:00Z',
  },
  {
    id: '10',
    title: 'Kubernetes pour les développeurs Front',
    description: `Démystifier les pods, les services et les ingress pour comprendre où tourne vraiment votre application. Même sans être un expert DevOps, maîtriser ces concepts est devenu indispensable.

Cela vous aidera à mieux débugger vos environnements de staging, à comprendre pourquoi vos variables d'environnement ne se chargent pas, et à optimiser vos builds Docker multi-stages.

Un tutoriel pratique de 30 minutes pour monter votre cluster local avec Minikube et y déployer votre application Angular.`,
    postImageUrl: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&q=80',
    author: AUTHORS.evan,
    category: CATEGORIES.devops,
    publishedAt: '2026-10-17T15:20:00Z',
  },
  {
    id: '11',
    title: "Optimiser le Change Detection d'Angular",
    description: `Passer en OnPush n'est que la première étape. Comment profiler et éliminer les rendus inutiles. Découvrez les techniques avancées pour soulager le navigateur.

Nous utiliserons l'outil DevTools Profiler pour chasser les cycles de détection qui s'exécutent en boucle sans raison, souvent causés par des getters complexes dans le template.

La combinaison des Signals et de la directive trackBy garantit une interface à 60 FPS, même avec des tableaux de plusieurs milliers de données financières complexes.`,
    author: AUTHORS.alice,
    category: CATEGORIES.frontend,
    publishedAt: '2026-10-15T09:45:00Z',
  },
  {
    id: '12',
    title: "L'art du bon Commit Message",
    description: `Pourquoi Conventional Commits change la vie de votre équipe et automatise votre changelog. Un bon historique Git est comme un roman bien écrit, il est fait pour être lu.

Il permet de comprendre instantanément pourquoi une décision a été prise, des mois après l'écriture du code, et facilite grandement le processus de revue (Code Review).

Apprenez à utiliser des outils comme Husky et Commitlint pour empêcher les développeurs de pousser des messages non conformes.`,
    postImageUrl: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&q=80',
    author: AUTHORS.bob,
    category: CATEGORIES.architecture,
    publishedAt: '2026-10-14T11:10:00Z',
  },
  {
    id: '13',
    title: 'Figma to Code : Le mythe ?',
    description: `Les outils de génération de code ont fait des progrès, mais le métier d'intégrateur est-il mort pour autant ? Analyse des limites actuelles de l'IA et des plugins d'export.

Malgré des démonstrations bluffantes, la réalité du terrain se heurte souvent aux contraintes d'accessibilité (a11y) et à la sémantique HTML qui ne peuvent être devinées par un robot.

Nous explorerons la véritable valeur de ces outils : non pas remplacer le développeur, mais accélérer la création des maquettes jetables et des PoC.`,
    author: AUTHORS.charlie,
    category: CATEGORIES.design,
    publishedAt: '2026-10-12T14:30:00Z',
  },
  {
    id: '14',
    title: 'Sécuriser une API avec JWT et Refresh Tokens',
    description: `L'architecture standard pour gérer l'authentification stateless sans compromettre la sécurité en cas de vol de token. Pourquoi un simple JWT ne suffit pas.

Implémentez la rotation des refresh tokens côté serveur et découvrez pourquoi le stockage du token principal dans le LocalStorage est une faille XSS béante.

La seule méthode réellement sécurisée en 2026 reste le HttpOnly Cookie couplé à une protection CSRF solide.`,
    postImageUrl: 'https://images.unsplash.com/photo-1510511459019-5efa3ecd54ce?w=500&q=80',
    author: AUTHORS.diana,
    category: CATEGORIES.backend,
    publishedAt: '2026-10-10T16:00:00Z',
  },
  {
    id: '15',
    title: "Docker Compose pour l'environnement local",
    description: `Montez une base de données, un cache Redis et votre API backend en une seule commande. Uniformisez l'environnement de développement de toute votre équipe en quelques minutes.

C'est la fin du fameux "ça marche sur ma machine". Avec un fichier docker-compose bien configuré, l'onboarding d'un nouveau développeur passe de 2 jours à 10 minutes.

Nous aborderons également l'intégration des volumes pour que vos modifications de code se répercutent en temps réel dans les conteneurs sans avoir à les reconstruire.`,
    author: AUTHORS.evan,
    category: CATEGORIES.devops,
    publishedAt: '2026-10-09T08:50:00Z',
  },
  {
    id: '16',
    title: "L'accessibilité (a11y) dès le premier jour",
    description: `Ajouter des attributs ARIA à la fin du projet est une erreur. Comment penser l'accessibilité dès la phase de design et éviter les refontes coûteuses.

Explorez l'importance du contraste, de la navigation exclusive au clavier, et des balises sémantiques pour concevoir des applications véritablement inclusives.

Nous utiliserons des lecteurs d'écran comme NVDA et VoiceOver pour auditer notre propre site et comprendre la frustration des utilisateurs malvoyants face aux modales mal gérées.`,
    postImageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=500&q=80',
    author: AUTHORS.charlie,
    category: CATEGORIES.design,
    publishedAt: '2026-10-07T13:20:00Z',
  },
  {
    id: '17',
    title: 'GraphQL vs REST en 2026',
    description: `Avez-vous vraiment besoin de GraphQL ou un bon vieux REST bien pensé suffit-il à votre application ? Le débat n'est toujours pas clos, et la hype est redescendue.

Comparatif des performances pures, de la complexité de mise en cache HTTP, et des scénarios où l'over-fetching de REST justifie réellement la migration coûteuse vers GraphQL.

Nous étudierons le pattern BFF (Backend For Frontend) comme alternative souvent plus pragmatique et moins complexe à maintenir qu'un graphe global.`,
    author: AUTHORS.alice,
    category: CATEGORIES.backend,
    publishedAt: '2026-10-05T10:15:00Z',
  },
  {
    id: '18',
    title: 'Les nouveautés de TypeScript 6.0',
    description: `Pattern matching, typage encore plus strict et performances du compilateur améliorées. Le superset de Microsoft continue d'évoluer de manière spectaculaire.

Ces nouveautés permettent de réduire drastiquement la verbosité du code tout en attrapant toujours plus d'erreurs potentielles au moment de la compilation.

Fini les "any" qui traînent : le nouveau compilateur force des vérifications de types exhaustives sur les switch-cases et les unions discriminantes.`,
    postImageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500&q=80',
    author: AUTHORS.bob,
    category: CATEGORIES.frontend,
    publishedAt: '2026-10-04T15:40:00Z',
  },
  {
    id: '19',
    title: 'Stratégies de cache avec Redis',
    description: `Comment réduire la charge sur votre base de données principale en mettant en cache les requêtes fréquentes. Les bases de données relationnelles ne sont pas faites pour absorber des millions de lectures par seconde.

Des simples clés-valeurs aux structures de données complexes comme les Sorted Sets, découvrez comment optimiser drastiquement les temps de réponse de votre API.

Nous implémenterons les stratégies "Cache-Aside" et "Write-Through" en expliquant clairement l'invalidation des données, l'un des problèmes les plus complexes en informatique.`,
    author: AUTHORS.diana,
    category: CATEGORIES.backend,
    publishedAt: '2026-10-02T11:05:00Z',
  },
  {
    id: '20',
    title: "GitOps : L'infrastructure as Code",
    description: `Gérer l'état de votre cluster directement depuis un dépôt Git avec ArgoCD ou Flux. Cette méthodologie transforme vos déclarations d'infrastructure en unique source de vérité.

Fini les modifications manuelles en SSH sur les serveurs de production. Chaque changement d'architecture doit passer par une Pull Request, revue et approuvée.

Cela automatise la synchronisation continue et facilite les rollbacks d'urgence en un seul clic git revert.`,
    postImageUrl: 'https://images.unsplash.com/photo-1607799279861-4dd9f2d56a73?w=500&q=80',
    author: AUTHORS.evan,
    category: CATEGORIES.devops,
    publishedAt: '2026-09-30T09:30:00Z',
  },
  {
    id: '21',
    title: 'Créer des animations fluides avec CSS',
    description: `Comprendre les couches de rendu du navigateur pour éviter les animations saccadées (jank). L'animation web est autant une affaire de design que de performance technique.

Pourquoi vous ne devriez animer que les propriétés transform et opacity, et comment forcer l'accélération matérielle (GPU) de manière ciblée avec will-change.

Nous déconstruirons l'algorithme FLIP (First, Last, Invert, Play) pour animer des éléments dont la taille finale n'est pas connue à l'avance.`,
    author: AUTHORS.charlie,
    category: CATEGORIES.frontend,
    publishedAt: '2026-09-28T16:15:00Z',
  },
  {
    id: '22',
    title: "L'injection de dépendances simplifiée",
    description: `Pourquoi l'injection de dépendances est le cœur du framework Angular et comment bien l'utiliser. C'est l'outil qui différencie les développeurs débutants des architectes confirmés.

Du pattern Singleton (providedIn: root) aux providers locaux associés aux composants, maîtrisez l'art d'injecter des services pour des architectures hautement testables.

Nous verrons comment utiliser les InjectionTokens pour passer des configurations dynamiques d'un module à un autre sans aucun couplage fort.`,
    postImageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80',
    author: AUTHORS.alice,
    category: CATEGORIES.architecture,
    publishedAt: '2026-09-25T14:00:00Z',
  },
  {
    id: '23',
    title: 'Tests unitaires avec Jest et Testing Library',
    description: `Tester le comportement utilisateur plutôt que les détails d'implémentation du composant. C'est le secret d'une suite de tests qui ne casse pas au moindre changement CSS.

Arrêtez de vérifier les méthodes internes privées de vos classes et concentrez-vous sur ce qui est réellement rendu dans le DOM.

Si l'utilisateur doit cliquer sur un bouton "Soumettre", votre test doit chercher ce bouton par son rôle (getByRole) et simuler le clic de manière réaliste.`,
    author: AUTHORS.bob,
    category: CATEGORIES.frontend,
    publishedAt: '2026-09-23T10:45:00Z',
  },
  {
    id: '24',
    title: 'PostgreSQL : Indexation avancée',
    description: `Au-delà de B-Tree : quand utiliser GIN, GiST ou BRIN pour optimiser vos requêtes complexes. Comprendre comment le moteur de base de données parcourt vos tables.

Un mauvais index peut être pire que pas d'index du tout, car il ralentit considérablement vos opérations d'écriture et de mise à jour (INSERT/UPDATE).

Apprenez à analyser vos plans d'exécution avec EXPLAIN ANALYZE pour repérer les redoutables "Sequential Scans" qui tuent vos performances en production.`,
    postImageUrl: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&q=80',
    author: AUTHORS.diana,
    category: CATEGORIES.backend,
    publishedAt: '2026-09-20T13:20:00Z',
  },
  {
    id: '25',
    title: 'Monitoring avec Prometheus et Grafana',
    description: `Mettre en place des dashboards de supervision métier et technique pour votre stack microservices. La visibilité (Observabilité) est cruciale dans les systèmes distribués.

Ne soyez plus jamais le dernier informé quand votre production plante : configurez des alertes proactives basées sur des métriques réelles d'utilisation (latence, taux d'erreur, CPU).

Nous ajouterons une dimension métier en trackant le nombre d'articles publiés par minute, directement relié à des indicateurs financiers.`,
    author: AUTHORS.evan,
    category: CATEGORIES.devops,
    publishedAt: '2026-09-18T09:10:00Z',
  },
  {
    id: '26',
    title: 'Les Dark Patterns en UI',
    description: `Comment certaines interfaces manipulent l'utilisateur et pourquoi l'éthique devient un enjeu de design primordial. Décryptage des techniques psychologiques trompeuses.

Des fausses alertes de pénurie ("plus qu'une chambre disponible !") aux tunnels de désabonnement impossibles, découvrez ce qui est légal et ce qui franchit la ligne rouge.

Créer de la friction positive pour empêcher des actions destructrices est du bon design, créer de la friction pour empêcher l'utilisateur de partir est un dark pattern.`,
    postImageUrl: 'https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?w=500&q=80',
    author: AUTHORS.charlie,
    category: CATEGORIES.design,
    publishedAt: '2026-09-15T15:05:00Z',
  },
  {
    id: '27',
    title: 'WebSockets pour le Temps Réel',
    description: `Créer un système de notifications en direct avec Socket.io et l'intégrer proprement dans Angular. Ne fatiguez plus vos serveurs avec du Long Polling inutile.

Gestion des reconnexions automatiques lors des micro-coupures de réseau mobile, diffusion de messages ciblés par "rooms" d'utilisateurs.

Nous optimiserons les payloads pour garantir une expérience utilisateur instantanée, même lorsque des milliers de clients sont connectés simultanément.`,
    author: AUTHORS.alice,
    category: CATEGORIES.architecture,
    publishedAt: '2026-09-12T11:30:00Z',
  },
  {
    id: '28',
    title: 'Gestion des erreurs globales',
    description: `Créer un ErrorHandler robuste dans Angular pour capturer et logger toutes les exceptions côté client. Ne laissez plus vos erreurs silencieuses dans la console du navigateur.

Centralisez la remontée d'erreurs vers un service tiers comme Sentry, en y attachant l'identifiant de l'utilisateur et son historique de navigation (breadcrumbs).

Côté UI, offrez des messages utilisateurs gracieux et rassurants plutôt que des écrans brisés, et proposez toujours une action de repli ("Retour à l'accueil").`,
    postImageUrl: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=500&q=80',
    author: AUTHORS.bob,
    category: CATEGORIES.frontend,
    publishedAt: '2026-09-10T14:40:00Z',
  },
  {
    id: '29',
    title: 'Serverless : Mythes et Réalités',
    description: `AWS Lambda est génial, mais attention aux temps de démarrage à froid (cold starts) et aux coûts cachés. La promesse du paiement à l'usage a ses limites.

Une analyse pragmatique de l'architecture serverless pour les applications à fort trafic continu. À partir de quel seuil devient-il plus rentable de revenir à des instances EC2 traditionnelles ?

Nous analyserons l'impact catastrophique des bases de données relationnelles sur les fonctions Lambda si un proxy de connexion n'est pas utilisé.`,
    author: AUTHORS.diana,
    category: CATEGORIES.backend,
    publishedAt: '2026-09-08T10:00:00Z',
  },
  {
    id: '30',
    title: 'Le rôle de Tech Lead',
    description: `Comment passer d'un développeur contributeur individuel à un leader technique qui fait grandir son équipe. Le défi n'est plus technique, il devient humain.

La communication, le mentorat des juniors, et la gestion diplomatique des conflits techniques deviennent des compétences plus cruciales que votre capacité à coder la nuit.

Apprenez à déléguer l'architecture, à accepter des solutions moins "parfaites" mais choisies par l'équipe, et à protéger vos développeurs de la pression produit.`,
    postImageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80',
    author: AUTHORS.evan,
    category: CATEGORIES.architecture,
    publishedAt: '2026-09-05T16:25:00Z',
  },
];
