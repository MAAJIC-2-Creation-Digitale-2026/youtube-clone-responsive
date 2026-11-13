# YouTube clone : la version responsive

> **Mon site en ligne :** _colle ici le lien de ton site GitHub Pages (partie 7)_ https://[ton-pseudo].github.io/youtube-clone-responsive/

Tu as déjà fait un YouTube clone pour **ordinateur**. Ce dépôt t'en donne une version ordinateur **terminée** : tout le monde part du même code.

**Ta mission : le rendre responsive.** Le site doit être agréable à utiliser sur un ordinateur, une tablette **et un téléphone**, sur les 2 pages (`index.html` et `video.html`).

📅 **Rendu : mardi 17 novembre, 16h00.** C'est l'heure de ton **dernier commit** sur GitHub qui compte. Rien après 16h00.

---

## 1. Ce qu'il y a dans le dépôt

```
youtube-clone-responsive/
├── index.html      la page d'accueil (filtres, vidéos, Shorts)
├── video.html      la page d'une vidéo (lecteur, chaîne, commentaires, suggestions)
├── css/style.css   tout le style, rangé en 6 zones
├── js/script.js    le petit JavaScript du site (déjà fait, tu n'y touches pas)
├── .github/        les modèles de tes issues (ta liste de tâches)
└── README.md       ce mode d'emploi
```

- Il n'y a **pas de dossier `img/`** : les images, la police et les icônes viennent d'Internet (des **CDN**). Il faut donc être connecté·e pour voir le site.
- Les **icônes** sont des [Material Symbols](https://fonts.google.com/icons) : on écrit le nom de l'icône dans un `<span>`, par exemple `<span class="material-symbols-outlined">home</span>`. Elles se règlent comme du texte : `font-size` pour la taille, `color` pour la couleur.
- Les noms de classes sont ceux des fiches (`.filtres`, `.videos`, `.video-card`, `.video-infos`, `.video-texte`, `.shorts`, `.lecteur`, `.chaine`, `.commentaire`, `.suggestions`…). Prends 10 minutes pour lire le HTML et le CSS avant de commencer.
- Le **JavaScript** (`js/script.js`) est **déjà fait**. Il ne fait qu'**ajouter ou enlever une classe** quand on clique ; c'est **ton CSS** qui décide à quoi ressemble la page avec cette classe :

| On clique sur… | Le JS ajoute la classe… | Ce que tu écris dans le CSS |
|---|---|---|
| le bouton menu ☰ | `sidebar-basculee` sur `<body>` | `body.sidebar-basculee .sidebar { … }` (tiroir sur tablette et téléphone) |
| la loupe seule (téléphone) | `recherche-ouverte` sur le header | `.banner.recherche-ouverte … { … }` |
| un filtre | `active` sur ce filtre | rien, c'est déjà stylé |
| « …afficher plus » (page vidéo) | `description-ouverte` sur la description | rien, c'est déjà stylé |

---

## 2. Récupérer le dépôt sur ta machine

### Étape 1 : forker (faire ta propre copie sur GitHub)
1. Connecte-toi à GitHub.
2. En haut à droite de cette page, clique sur **Fork**.
3. **Owner** : choisis **ton** compte. Laisse le nom `youtube-clone-responsive`. Clique sur **Create fork**.
4. Tu arrives sur `github.com/TON-IDENTIFIANT/youtube-clone-responsive` : c'est **ta** copie. C'est là que tu vas pousser ton travail.

> ⚠️ Ne clone pas le dépôt de l'organisation : tu ne pourrais pas y envoyer ton travail. Clone **ton fork**.

### Étape 2 : cloner ton fork dans VS Code
1. Sur la page de **ton fork**, clique sur le bouton vert **Code** › onglet **HTTPS** › copie l'adresse (elle finit par `.git`).
2. Dans VS Code : `Ctrl + Maj + P` › tape **Git: Clone** › colle l'adresse › Entrée.
3. Choisis le dossier où ranger le projet (par exemple `Documents/HTML CSS`).
4. Clique sur **Ouvrir** quand VS Code le propose.

### Étape 3 : ouvrir le site
1. Clic droit sur `index.html` › **Open with Live Server**.
2. Ouvre les DevTools (`F12`) › clique sur l'icône **téléphone/tablette** en haut à gauche (`Ctrl + Maj + M`) : c'est le **mode appareil**.
3. En haut, choisis **Dimensions : Responsive** et tape la largeur à tester : **1280**, **1024**, **768**, **390**.

---

## 3. La méthode : desktop first, avec `max-width`

Le site est fait pour l'ordinateur. On **descend** vers les petits écrans. Dans la **zone 6** de `style.css`, 3 media queries t'attendent, vides (une par issue) :

| Media query | Pour qui ? | Largeur de test |
|---|---|---|
| `@media (max-width: 1024px)` | petit ordinateur, tablette à l'horizontale | 1024 px |
| `@media (max-width: 768px)` | tablette | 768 px |
| `@media (max-width: 480px)` | téléphone | 390 px |

Les règles d'or :
1. **Ne modifie pas les zones 1 à 5.** Tu les **surcharges** dans la zone 6 : tu réécris seulement ce qui change, à cette largeur.
2. **Garde l'ordre** 1024 › 768 › 480. Une règle de 768 s'applique aussi en dessous de 768 (donc aussi au téléphone).
3. **Teste au fur et à mesure**, en élargissant et en rétrécissant la fenêtre. Ce qui ne doit **jamais** arriver : une **barre de défilement horizontale** sur toute la page.
4. Tu peux **ajouter du HTML** si un bonus le demande (par exemple une barre de navigation en bas), mais la base reste la même.

Rappel de syntaxe :
```css
@media (max-width: 768px) {
  .video-card {
    width: calc((100% - var(--space-4)) / 2); /* 2 cartes et 1 écart */
  }
}
```

---

## 4. Ce que tu dois obtenir

### Étape 1 : crée tes 4 issues (une seule fois, au début)
Ta liste de tâches est rangée en **issues** dans **ton fork**. Les modèles sont déjà prêts :
1. Sur ton fork : **Settings** › **General** › descends jusqu'à **Features** › coche **Issues**.
2. Onglet **Issues** › **New issue** › choisis le modèle **1 · Responsive 1024 px** › **Create**.
3. Recommence avec les modèles **2 · Responsive 768 px**, **3 · Responsive 480 px (téléphone)** et **4 · Bonus**.
4. Note le **numéro** de chaque issue (#1, #2…) : il te servira dans tes messages de commit.

Coche les cases de chaque issue au fur et à mesure (clique sur la case directement dans l'issue).

### En résumé, ce qui change à chaque largeur

| Largeur | Accueil | Page vidéo | Header et sidebar |
|---|---|---|---|
| **1024 px** | toujours 3 vidéos par ligne | suggestions **sous** le lecteur | sidebar en **mini-guide** (72 px, icônes) |
| **768 px** | **2** vidéos par ligne | ligne de la chaîne sur 2 lignes, boutons qui défilent | sidebar **cachée**, « Créer » devient **+** |
| **480 px** | **1** vidéo par ligne, 3 points toujours visibles, 2 Shorts | suggestions en grandes cartes, commentaires plus compacts | recherche et micro cachés, **loupe seule** |

Le détail est dans chaque issue.

---

## 5. Enregistrer ton travail : commiter souvent

Dans VS Code, panneau **Source Control** (`Ctrl + Maj + G`) :
1. Écris un message **précis** dans la case du haut.
2. Clique sur **Commit** (si VS Code demande, réponds **Oui / Always** pour tout ajouter).
3. Clique sur **Sync Changes** pour envoyer sur GitHub.

Commite **souvent** (à chaque chose qui marche). Quand une largeur est terminée, ferme son issue **avec le message du commit** :
- `Responsive 1024 : mini-guide et suggestions sous la vidéo (Closes #1)`
- `Responsive 768 : sidebar cachée et 2 colonnes (Closes #2)`
- `Responsive 480 : version téléphone (Closes #3)`
- `Bonus : …`

> `Closes #1` ferme automatiquement l'issue n° 1 quand le commit arrive sur GitHub. Remplace le numéro par celui de **ton** issue.

> Le dernier commit **avant mardi 17/11 à 16h00** est celui qui sera noté.

---

## 6. Récupérer une mise à jour du dépôt de départ

Si ta formatrice ajoute quelque chose au dépôt de l'organisation **après** ton fork, ton fork ne se met **pas** à jour tout seul. Pour récupérer la nouveauté :

1. **Commite et synchronise d'abord ton travail** dans VS Code (**Commit** puis **Sync Changes**).
2. Sur la page GitHub de **ton fork**, sous le bouton vert **Code**, un bandeau indique *« This branch is X commits behind »*. Clique sur **Sync fork** › **Update branch**.
3. Dans VS Code : panneau **Source Control** › **Sync Changes** (ou `…` › **Pull**) : les nouveaux fichiers arrivent sur ta machine.

> ⚠️ Si GitHub affiche un bouton rouge **Discard X commits**, **ne clique pas dessus** : il effacerait ton travail. Appelle ta formatrice.

---

## 7. Mettre ton site en ligne (GitHub Pages)

1. Sur **ton fork** : **Settings** › **Pages** (menu de gauche).
2. **Source** : *Deploy from a branch* · **Branch** : `main` · dossier `/ (root)` › **Save**.
3. Attends 1 à 2 minutes et recharge la page : l'adresse s'affiche (`https://TON-IDENTIFIANT.github.io/youtube-clone-responsive/`).
4. Colle cette adresse **tout en haut de ce README**, à la ligne « Mon site en ligne », puis commite.
5. Ouvre cette adresse **sur ton propre téléphone** : c'est le vrai test !

---

## 8. Pour t'aider

- [W3Schools : responsive web design, les media queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)
- [MDN : utiliser les media queries](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Chrome : le mode appareil des DevTools](https://developer.chrome.com/docs/devtools/device-mode?hl=fr)
- [Material Symbols : chercher une icône](https://fonts.google.com/icons)
- Le vrai YouTube : ouvre `youtube.com` en mode appareil et observe ce qui change à chaque largeur.

---

## Crédits

Clone réalisé pour un exercice (L2 Création digitale, ILOI). YouTube et son logo sont des marques de Google.
Miniatures : `i.ytimg.com` (vidéos publiques de YouTube) · icônes : [Material Symbols](https://fonts.google.com/icons) (licence Apache 2.0) · avatars : [UI Avatars](https://ui-avatars.com) · photo de la pub fictive : cirque de Mafate, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cirque_de_Mafate.jpg) · police : [Roboto](https://fonts.google.com/specimen/Roboto). Les chiffres (vues, abonnés, commentaires) sont approximatifs ou inventés.
