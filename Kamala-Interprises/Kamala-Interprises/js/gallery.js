/* ==========================================================================
   Kamala Interprises — Gallery Filter & Lightbox
   Real product photos supplied by the client.
   ========================================================================== */

const GALLERY_ITEMS = [
  { src: "images/products/photos/paver-blocks-main.png", cat: "paver-blocks", label: "Paver Blocks — Main" },
  { src: "images/products/photos/paver-blocks-types.png", cat: "paver-blocks", label: "Paver Blocks — All Types" },
  { src: "images/products/photos/cover-blocks-main.png", cat: "cover-blocks", label: "Cover Blocks — Main" },
  { src: "images/products/photos/concrete-blocks-main.png", cat: "concrete-blocks", label: "Concrete Blocks — Main" },
  { src: "images/products/photos/concrete-blocks-types.png", cat: "concrete-blocks", label: "Concrete Blocks — All Types" },
  { src: "images/products/photos/boundary-wall-main.png", cat: "boundary-wall", label: "Boundary Wall — Main" },
  { src: "images/products/photos/boundary-wall-types.png", cat: "boundary-wall", label: "Boundary Wall — All Types" },
  { src: "images/products/photos/cement-main.png", cat: "cement", label: "Cement — Main" },
  { src: "images/products/photos/cement-types.png", cat: "cement", label: "Cement — All Types" },
  { src: "images/products/photos/tmt-steel-main.png", cat: "tmt-steel", label: "TMT Sariya (Rods) — Main" },
  { src: "images/products/photos/tmt-steel-types.png", cat: "tmt-steel", label: "TMT Sariya (Rods) — All Types" },
  { src: "images/products/photos/paint-waterproofing-main.png", cat: "paint-waterproofing", label: "Paint & Waterproofing Material — Main" },
  { src: "images/products/photos/paint-waterproofing-types.png", cat: "paint-waterproofing", label: "Paint & Waterproofing Material — All Types" },
  { src: "images/products/photos/jcb-tractor-spares-main.png", cat: "jcb-tractor-spares", label: "JCB & Tractor Spare Parts — Main" },
  { src: "images/products/photos/jcb-tractor-spares-types.png", cat: "jcb-tractor-spares", label: "JCB & Tractor Spare Parts — All Types" },
  { src: "images/products/photos/motors-hardware-main.png", cat: "motors-hardware", label: "Motor & Hardware Samagri — Main" },
  { src: "images/products/photos/motors-hardware-types.png", cat: "motors-hardware", label: "Motor & Hardware Samagri — All Types" },
  { src: "images/products/photos/deep-boring-main.png", cat: "deep-boring", label: "Deep Boring Services — Main" },
  { src: "images/products/photos/pipes-fittings-main.png", cat: "pipes-fittings", label: "Pipe & Fittings — Main" },
  { src: "images/products/photos/roofing-sheets-main.png", cat: "roofing-sheets", label: "Roofing Sheets — Main" }
];

let activeFilter = "all";
let lightboxIndex = 0;
let currentGallerySet = GALLERY_ITEMS;

function buildGallery() {
  const grid = document.getElementById("masonry-grid");
  if (!grid) return;
  currentGallerySet = activeFilter === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter(g => g.cat === activeFilter);

  grid.innerHTML = currentGallerySet.map((item, i) => `
    <div class="masonry-item reveal-scale" data-index="${i}">
      <img src="${item.src}" alt="${item.label}" loading="lazy">
      <div class="zoom-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>
        </svg>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".masonry-item").forEach(el => {
    el.addEventListener("click", () => openLightbox(parseInt(el.dataset.index, 10)));
  });
  observeReveal(grid.querySelectorAll(".reveal-scale"));
}

function openLightbox(index) {
  lightboxIndex = index;
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  img.src = currentGallerySet[index].src;
  img.alt = currentGallerySet[index].label;
  lb.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
  document.body.style.overflow = "";
}

function navLightbox(dir) {
  lightboxIndex = (lightboxIndex + dir + currentGallerySet.length) % currentGallerySet.length;
  const img = document.getElementById("lightbox-img");
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = currentGallerySet[lightboxIndex].src;
    img.alt = currentGallerySet[lightboxIndex].label;
    img.style.opacity = 1;
  }, 150);
}

document.addEventListener("DOMContentLoaded", () => {
  buildGallery();

  document.querySelectorAll(".gallery-filters button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".gallery-filters button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      buildGallery();
    });
  });

  const lb = document.getElementById("lightbox");
  if (lb) {
    document.getElementById("lb-close").addEventListener("click", closeLightbox);
    document.getElementById("lb-prev").addEventListener("click", () => navLightbox(-1));
    document.getElementById("lb-next").addEventListener("click", () => navLightbox(1));
    lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });
    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("active")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navLightbox(-1);
      if (e.key === "ArrowRight") navLightbox(1);
    });
  }
});
