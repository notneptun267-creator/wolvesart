const loyihalar = [
  {
    nomi: "Lazuli",
    teglar: ["Illustration", "Webdesign"],
    rasmi: "lazuli.png",
    klassi: "card-lazuli"
  },
  {
    nomi: "Opentri",
    teglar: ["Identité"],
    rasmi: "opentri.png",
    klassi: "card-opentri"
  },
  {
    nomi: "Webisland 2022",
    teglar: ["Identité", "Webdesign"],
    rasmi: "webisland.png",
    klassi: "card-webisland"
  },
  {
    nomi: "Launchr",
    teglar: ["Identité"],
    rasmi: "launchr.png",
    klassi: "card-launchr"
  }
];

const loyihaKutisi = document.querySelector(".project-grid");
const filtrTugmalari = document.querySelectorAll(".filter-btn");

function ekrangaChiqar(royxat) {
  const kartochkalar = royxat.map((loyiha) => {
    const teglarMatni = loyiha.teglar.map((teg) => `<span>${teg}</span>`).join("");
    return `
      <article class="project-card ${loyiha.klassi}">
        <a class="project-image" href="#" aria-label="Découvrir ${loyiha.nomi}">
          <img src="${loyiha.rasmi}" alt="Projet ${loyiha.nomi}">
        </a>
        <div class="project-info">
          <div>
            <h2>${loyiha.nomi}</h2>
            <div class="tags">${teglarMatni}</div>
          </div>
          <button type="button" class="round-arrow" onclick="alert('La page sur ${loyiha.nomi} n\'existe pas pour le moment.')" aria-label="Voir le projet ${loyiha.nomi}">↗</button>
        </div>
      </article>
    `;
  }).join("");

  loyihaKutisi.innerHTML = kartochkalar;
}

ekrangaChiqar(loyihalar);

filtrTugmalari.forEach((tugma) => {
  tugma.addEventListener("click", () => {
    filtrTugmalari.forEach((t) => t.classList.remove("active"));
    tugma.classList.add("active");

    const tanlanganTeg = tugma.dataset.filter;

    if (tanlanganTeg === "all") {
      ekrangaChiqar(loyihalar);
    } else {
      const saralanganlar = loyihalar.filter((loyiha) =>
        loyiha.teglar.includes(tanlanganTeg)
      );
      ekrangaChiqar(saralanganlar);
    }
  });
});