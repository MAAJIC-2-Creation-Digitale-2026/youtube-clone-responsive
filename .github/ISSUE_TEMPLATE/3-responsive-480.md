---
name: "3 · Responsive 480 px (téléphone)"
about: "Téléphone : @media (max-width: 480px)"
title: "Responsive 480 : version téléphone"
labels: []
assignees: []
---

**Où :** `css/style.css`, zone 6, dans `@media (max-width: 480px) { }`
**Largeur de test :** 390 px (taille d'un iPhone récent)

## À faire
- [ ] **1 vidéo par ligne**, la carte prend toute la largeur.
- [ ] **Header** : la barre de recherche et le micro disparaissent ; la **loupe seule** (`.search-mobile`, déjà dans le HTML) apparaît.
- [ ] **Loupe** : un clic sur la loupe ouvre la barre de recherche sur toute la largeur du header ; le logo et les autres boutons se cachent. Le JavaScript est déjà fait : il ajoute la classe `recherche-ouverte` sur le header, à toi d'écrire `.banner.recherche-ouverte …` dans cette media query.
- [ ] Les **3 points** des cartes sont **toujours visibles** (sur un téléphone, il n'y a pas de survol !).
- [ ] **Shorts** : 2 Shorts côte à côte, les autres défilent à l'horizontale.
- [ ] **Page vidéo** : les suggestions deviennent de grandes cartes, comme sur l'accueil (miniature au-dessus, pleine largeur, texte en dessous).
- [ ] **Commentaires** : titre à 16 px, avatars de 32 px.
- [ ] Le `main` a un padding de 12 px.
- [ ] Testé **sur mon propre téléphone** avec mon lien GitHub Pages.

## Pour fermer cette issue
Commite avec le message : `Responsive 480 : version téléphone (Closes #NUMÉRO)`, puis **Sync Changes**.
