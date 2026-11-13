---
name: "2 · Responsive 768 px"
about: "Tablette : @media (max-width: 768px)"
title: "Responsive 768 : sidebar cachée et 2 colonnes"
labels: []
assignees: []
---

**Où :** `css/style.css`, zone 6, dans `@media (max-width: 768px) { }`
**Largeur de test :** 768 px

## À faire
- [ ] La **sidebar disparaît** complètement.
- [ ] **Bouton menu ☰** : un clic ouvre la sidebar **par-dessus la page**, en tiroir à gauche (`position: fixed`, toute la hauteur sous le header) ; un 2e clic la referme. Le JavaScript est déjà fait : il ajoute la classe `sidebar-basculee` sur `<body>`, à toi d'écrire `body.sidebar-basculee .sidebar { … }` dans cette media query.
- [ ] **2 vidéos par ligne** sur l'accueil.
- [ ] Le bouton **Créer** n'affiche plus que l'icône **+** (le mot « Créer » est caché).
- [ ] Le `main` a un padding de 16 px.
- [ ] **Page vidéo** : la ligne de la chaîne passe sur 2 lignes (`flex-wrap`).
- [ ] **Page vidéo** : les boutons J'aime, Partager… défilent à l'horizontale s'ils ne tiennent pas.
- [ ] Vérifié sur `index.html` **et** `video.html` : aucune barre de défilement horizontale.

## Pour fermer cette issue
Commite avec le message : `Responsive 768 : sidebar cachée et 2 colonnes (Closes #NUMÉRO)`, puis **Sync Changes**.
