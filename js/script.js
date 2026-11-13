/* ==========================================================
   YouTube clone · script.js
   Le seul fichier JavaScript du site. Il est déjà branché dans
   index.html et video.html (juste avant </head>, avec defer).

   Le JS ne fait QU'UNE chose : il AJOUTE ou ENLÈVE une classe.
   C'est le CSS qui décide à quoi ressemble la page avec cette classe.
   → Tu n'as pas besoin de modifier ce fichier : tu travailles dans le CSS.

   Les 4 interactions :
   1. Bouton menu (☰)       → classe .sidebar-basculee sur <body>
   2. Loupe seule (téléphone) → classe .recherche-ouverte sur le header
   3. Filtres                 → classe .active sur le filtre cliqué
                                + la flèche › fait défiler la barre
   4. « …afficher plus »      → classe .description-ouverte (page vidéo)
   ========================================================== */


/* ---------- 1. Ouvrir / fermer la barre latérale ---------- */

/* « Basculée » = l'INVERSE de son état normal :
   - sur ordinateur, la sidebar est visible → basculée = cachée
   - sur téléphone (dans tes media queries), elle est cachée → basculée = ouverte */
const boutonMenu = document.querySelector(".btn-menu");

if (boutonMenu) {
  boutonMenu.addEventListener("click", function () {
    document.body.classList.toggle("sidebar-basculee");

    // Pour les lecteurs d'écran : le menu est-il ouvert ou fermé ?
    const estBasculee = document.body.classList.contains("sidebar-basculee");
    boutonMenu.setAttribute("aria-expanded", String(!estBasculee));
  });
}

/* La touche Échap remet la sidebar dans son état normal */
document.addEventListener("keydown", function (evenement) {
  if (evenement.key === "Escape") {
    document.body.classList.remove("sidebar-basculee");
    document.querySelector(".banner")?.classList.remove("recherche-ouverte");
  }
});


/* ---------- 2. Ouvrir la recherche sur téléphone ---------- */

/* Le bouton loupe seule (.search-mobile) n'est visible que sur téléphone.
   Un clic ajoute .recherche-ouverte sur le header : à toi d'écrire en CSS
   ce qui change (la barre de recherche réapparaît, le logo se cache…). */
const boutonLoupe = document.querySelector(".search-mobile");
const header = document.querySelector(".banner");

if (boutonLoupe && header) {
  boutonLoupe.addEventListener("click", function () {
    header.classList.toggle("recherche-ouverte");
    if (header.classList.contains("recherche-ouverte")) {
      header.querySelector(".search-input")?.focus(); // le curseur se place dans le champ
    }
  });
}


/* ---------- 3. Les filtres (Tous, Musique, Jeux vidéo…) ---------- */

/* Un clic sur un filtre : il devient .active, les autres ne le sont plus */
const filtres = document.querySelectorAll(".filtres button:not(.filtres-suite)");

filtres.forEach(function (filtre) {
  filtre.addEventListener("click", function () {
    filtres.forEach(function (autre) {
      autre.classList.remove("active");
    });
    filtre.classList.add("active");
  });
});

/* La flèche › au bout de la barre fait défiler les filtres vers la droite */
const flecheFiltres = document.querySelector(".filtres-suite");
const barreFiltres = document.querySelector(".filtres");

if (flecheFiltres && barreFiltres) {
  flecheFiltres.addEventListener("click", function () {
    barreFiltres.scrollBy({ left: 300, behavior: "smooth" });
  });
}


/* ---------- 4. « …afficher plus » dans la description (page vidéo) ---------- */

const boutonPlus = document.querySelector(".afficher-plus");
const description = document.querySelector(".description");

if (boutonPlus && description) {
  boutonPlus.addEventListener("click", function () {
    description.classList.toggle("description-ouverte");
    const estOuverte = description.classList.contains("description-ouverte");
    boutonPlus.textContent = estOuverte ? "Moins" : "…afficher plus";
    boutonPlus.setAttribute("aria-expanded", String(estOuverte));
  });
}
