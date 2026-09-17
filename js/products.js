/* ==========================================================================
   Kamala Interprises — Product Data & Dynamic Showcase
   ========================================================================== */

const PRODUCTS = [
  {
    id: "paver-blocks",
    name: "Paver Blocks",
    short: "Durable interlocking pavers for driveways, walkways & landscaping.",
    img: "images/products/photos/paver-blocks-main.png",
    gallery: ["images/products/photos/paver-blocks-main.png", "images/products/photos/paver-blocks-types.png"],
    overview: "Our interlocking paver blocks are engineered for high-traffic durability and refined visual appeal. Manufactured under controlled curing conditions, each unit delivers consistent strength, colour and finish — suited for driveways, pathways, plazas and parking courts that need to perform for decades.",
    applications: ["Driveways", "Walkways", "Parking Areas", "Garden Paths", "Plazas & Courtyards", "Poolside Decking"],
    features: [
      "Interlocking design for load distribution",
      "Slip-resistant textured surface",
      "UV & weather stable pigmentation",
      "Uniform dimensional tolerance",
      "Low water absorption",
      "Wide format & colour range"
    ],
    specs: [["Compressive Strength", "≥ 40 MPa"], ["Water Absorption", "< 6%"], ["Thickness Options", "50 / 60 / 80 mm"], ["Standard", "IS 15658 Compliant"]],
    benefits: "High compressive strength, weather & water resistance, perfect finish, long-lasting durability.",
  },
  {
    id: "boundary-wall",
    name: "Boundary Wall",
    short: "Precast compound wall panels for fast, secure site enclosure.",
    img: "images/products/photos/boundary-wall-main.png",
    gallery: ["images/products/photos/boundary-wall-main.png", "images/products/photos/boundary-wall-types.png"],
    overview: "Precast boundary wall panels engineered for rapid installation without compromising strength. Factory-cast under stringent quality control, our panels slot into RCC posts to deliver a clean, uniform compound wall — ideal for industrial plots, farms, residential layouts and institutional campuses.",
    applications: ["Industrial Plots", "Residential Layouts", "Farmhouses", "Institutional Campuses", "Warehouses", "Highway Boundaries"],
    features: [
      "Rapid, tool-free panel installation",
      "High impact & weather resistance",
      "Termite and rodent proof",
      "Low maintenance, no painting cycle",
      "Reinforced RCC posts",
      "Custom heights available"
    ],
    specs: [["Panel Thickness", "40 / 50 mm"], ["Standard Height", "5 / 6 / 7 ft"], ["Post Section", "150 x 150 mm"], ["Grade", "M25 Concrete"]],
    benefits: "Faster boundary completion, strong security, minimal upkeep, consistent factory finish.",
  },
  {
    id: "concrete-blocks",
    name: "Concrete Blocks",
    short: "High-strength hollow & solid blocks for masonry construction.",
    img: "images/products/photos/concrete-blocks-main.png",
    gallery: ["images/products/photos/concrete-blocks-main.png", "images/products/photos/concrete-blocks-types.png"],
    overview: "Our concrete masonry blocks are manufactured on high-pressure vibro-compaction machines for dense, uniform structure. Available in hollow and solid formats, they offer excellent thermal insulation, sound absorption and load-bearing performance for walls of any scale.",
    applications: ["Load-Bearing Walls", "Partition Walls", "Compound Construction", "Commercial Buildings", "Warehouses"],
    features: [
      "High-pressure vibro-compacted density",
      "Excellent thermal insulation",
      "Sound absorbing structure",
      "Precise dimensional consistency",
      "Reduced mortar consumption",
      "Hollow & solid variants"
    ],
    specs: [["Compressive Strength", "≥ 4 MPa (Hollow)"], ["Sizes", "400x200x200 / 150 / 100 mm"], ["Density", "1500-1800 kg/m³"], ["Standard", "IS 2185 Compliant"]],
    benefits: "Faster masonry work, better insulation, reduced dead load, consistent factory quality.",
  },
  {
    id: "cover-blocks",
    name: "Cover Blocks",
    short: "Concrete cover blocks for reliable reinforcement spacing and protection.",
    img: "images/products/photos/cover-blocks-main.png",
    gallery: ["images/products/photos/cover-blocks-main.png"],
    overview: "Precision-cast concrete cover blocks designed to maintain the required reinforcement cover in RCC work. Suitable for slabs, beams, columns and foundations where consistent spacing and durability matter.",
    applications: ["RCC Slabs", "Beams", "Columns", "Foundations", "Footings"],
    features: ["Consistent dimensions", "Dense concrete finish", "Rebar-friendly shapes", "Moisture resistant", "Easy site handling"],
    specs: [["Material", "Precast Concrete"], ["Use", "RCC Reinforcement Cover"], ["Finish", "Factory Cast"], ["Sizing", "Project Specific"]],
    benefits: "Consistent reinforcement cover, dependable quality and faster site installation."
  },
  {
    id: "cement",
    name: "Cement",
    short: "Quality cement for dependable concrete and masonry work.",
    img: "images/products/photos/cement-main.png",
    gallery: ["images/products/photos/cement-main.png", "images/products/photos/cement-types.png"],
    overview: "Cement supplies selected for concrete, masonry, plastering and general construction requirements, with dependable strength and consistent performance.",
    applications: ["RCC Work", "Masonry", "Plastering", "Flooring", "General Construction"],
    features: ["Reliable setting", "Consistent quality", "Suitable for concrete", "Construction-ready supply", "Bulk availability"],
    specs: [["Category", "Construction Cement"], ["Packing", "Standard Bags"], ["Supply", "Retail / Bulk"], ["Use", "Concrete & Masonry"]],
    benefits: "Reliable construction performance with convenient project-scale supply."
  },
  {
    id: "tmt-steel",
    name: "TMT Sariya (Rods)",
    short: "TMT reinforcement steel for strong, durable RCC structures.",
    img: "images/products/photos/tmt-steel-main.png",
    gallery: ["images/products/photos/tmt-steel-main.png", "images/products/photos/tmt-steel-types.png"],
    overview: "TMT reinforcement bars for residential, commercial and infrastructure construction, supplied for dependable structural reinforcement and on-site fabrication.",
    applications: ["RCC Structures", "Columns", "Beams", "Slabs", "Foundations"],
    features: ["High tensile strength", "Ribbed surface for bonding", "Consistent diameter", "Construction-grade steel", "Multiple sizes"],
    specs: [["Product", "TMT Reinforcement Bars"], ["Sizes", "Project Specific"], ["Finish", "Ribbed"], ["Supply", "Retail / Bulk"]],
    benefits: "Strong reinforcement, excellent concrete bonding and reliable structural performance."
  },
  {
    id: "paint-waterproofing",
    name: "Paint & Waterproofing Material",
    short: "Protective coatings, paints and waterproofing solutions for buildings.",
    img: "images/products/photos/paint-waterproofing-main.png",
    gallery: ["images/products/photos/paint-waterproofing-main.png", "images/products/photos/paint-waterproofing-types.png"],
    overview: "Construction finishing and waterproofing materials for interior, exterior and moisture-prone areas, helping improve appearance and long-term surface protection.",
    applications: ["Exterior Walls", "Interior Walls", "Terraces", "Bathrooms", "Damp Areas"],
    features: ["Surface protection", "Weather resistance", "Waterproofing options", "Multiple finishes", "Project-ready supply"],
    specs: [["Category", "Paint & Waterproofing"], ["Use", "Interior / Exterior"], ["Application", "Brush / Roller / System"], ["Supply", "Retail / Bulk"]],
    benefits: "Better surface protection, improved finish and practical moisture-control solutions."
  },
  {
    id: "jcb-tractor-spares",
    name: "JCB & Tractor Spare Parts",
    short: "Reliable replacement parts for JCB and tractor equipment.",
    img: "images/products/photos/jcb-tractor-spares-main.png",
    gallery: ["images/products/photos/jcb-tractor-spares-main.png", "images/products/photos/jcb-tractor-spares-types.png"],
    overview: "Replacement and maintenance parts for construction and agricultural equipment, helping keep machines operational with dependable fit and service support.",
    applications: ["JCB Machines", "Tractors", "Construction Equipment", "Agricultural Equipment"],
    features: ["Machine-focused selection", "Maintenance-ready parts", "Multiple component types", "Practical replacement support"],
    specs: [["Category", "Heavy Equipment Spares"], ["Equipment", "JCB / Tractor"], ["Supply", "As Required"], ["Availability", "Subject to Model"]],
    benefits: "Convenient access to maintenance and replacement components for working equipment."
  },
  {
    id: "motors-hardware",
    name: "Motor & Hardware Samagri",
    short: "Motors, fittings, fasteners and hardware for construction and industry.",
    img: "images/products/photos/motors-hardware-main.png",
    gallery: ["images/products/photos/motors-hardware-main.png", "images/products/photos/motors-hardware-types.png"],
    overview: "A practical range of motors, hardware components, fittings and related site materials for construction, maintenance and industrial requirements.",
    applications: ["Construction Sites", "Industrial Maintenance", "Workshops", "Fabrication", "General Hardware"],
    features: ["Multiple component types", "Site-ready supply", "Maintenance essentials", "Industrial-use options"],
    specs: [["Category", "Motors & Hardware"], ["Supply", "Retail / Bulk"], ["Selection", "Project Specific"], ["Use", "Construction / Industry"]],
    benefits: "One-stop access to everyday mechanical and hardware requirements."
  },
  {
    id: "deep-boring",
    name: "Deep Boring Services",
    short: "Professional deep boring and water-well drilling support.",
    img: "images/products/photos/deep-boring-main.png",
    gallery: ["images/products/photos/deep-boring-main.png"],
    overview: "Deep boring services for agricultural, residential and commercial water requirements, supported by drilling equipment and practical site execution.",
    applications: ["Residential Sites", "Agriculture", "Commercial Properties", "Industrial Sites"],
    features: ["Site assessment", "Heavy drilling equipment", "Experienced execution", "Project-specific depth planning"],
    specs: [["Service", "Deep Boring / Drilling"], ["Site Type", "Residential / Commercial / Agriculture"], ["Equipment", "Heavy Drilling Setup"], ["Scope", "Project Specific"]],
    benefits: "End-to-end drilling support with practical planning for site-specific water requirements."
  },
  {
    id: "pipes-fittings",
    name: "Pipe & Fittings",
    short: "Pipes, connectors and fittings for water, drainage and site systems.",
    img: "images/products/photos/pipes-fittings-main.png",
    gallery: ["images/products/photos/pipes-fittings-main.png"],
    overview: "A selection of pipes and compatible fittings for water supply, drainage, plumbing and infrastructure applications, available for project-scale requirements.",
    applications: ["Water Supply", "Drainage", "Plumbing", "Agriculture", "Infrastructure"],
    features: ["Multiple pipe types", "Compatible fittings", "Project-scale supply", "Easy installation options"],
    specs: [["Category", "Pipes & Fittings"], ["Use", "Water / Drainage / Plumbing"], ["Sizes", "Project Specific"], ["Supply", "Retail / Bulk"]],
    benefits: "Convenient matching of pipes and fittings for complete site installations."
  },
  {
    id: "roofing-sheets",
    name: "Roofing Sheets",
    short: "Durable roofing sheets for residential, commercial and industrial structures.",
    img: "images/products/photos/roofing-sheets-main.png",
    gallery: ["images/products/photos/roofing-sheets-main.png"],
    overview: "Roofing sheets selected for practical weather protection and quick installation across sheds, warehouses, utility structures and other buildings.",
    applications: ["Industrial Sheds", "Warehouses", "Farm Structures", "Commercial Buildings", "Utility Sheds"],
    features: ["Weather resistant", "Lightweight installation", "Multiple profiles", "Low maintenance", "Project-ready supply"],
    specs: [["Category", "Roofing Sheets"], ["Profiles", "Project Specific"], ["Use", "Roofing / Sheds"], ["Supply", "Retail / Bulk"]],
    benefits: "Fast installation, dependable weather protection and practical coverage for multiple building types."
  }

];

const DASHBOARD_CATEGORY_IDS = [
  "paver-blocks",
  "cover-blocks",
  "concrete-blocks",
  "boundary-wall",
  "cement",
  "tmt-steel",
  "paint-waterproofing",
  "jcb-tractor-spares",
  "motors-hardware",
  "deep-boring",
  "pipes-fittings",
  "roofing-sheets"
];

const DASHBOARD_PRODUCTS = DASHBOARD_CATEGORY_IDS
  .map(id => PRODUCTS.find(p => p.id === id))
  .filter(Boolean);

let currentProductId = PRODUCTS[0].id;

function featureIconSVG() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
}

function renderShowcase(productId, { scroll = false } = {}) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  currentProductId = productId;

  const showcase = document.getElementById("product-showcase");
  if (!showcase) return;

  document.getElementById("showcase-eyebrow").textContent = "Product Showcase";
  document.getElementById("showcase-title").textContent = product.name;
  document.getElementById("showcase-desc").textContent = product.overview;

  const mainImg = document.getElementById("showcase-main-img");
  mainImg.style.opacity = 0;
  setTimeout(() => {
    mainImg.src = product.img;
    mainImg.alt = product.name + " — Kamala Interprises";
    mainImg.style.opacity = 1;
  }, 220);

  // Thumbs
  const thumbWrap = document.getElementById("showcase-thumbs");
  thumbWrap.innerHTML = product.gallery.map((g, i) =>
    `<div class="t ${i === 0 ? 'active' : ''}" data-src="${g}"><img src="${g}" alt="${product.name} ${i === 0 ? 'main image' : 'all types'}" loading="lazy"><span>${i === 0 ? 'Main Image' : 'All Types'}</span></div>`
  ).join("");
  thumbWrap.querySelectorAll(".t").forEach(t => {
    t.addEventListener("click", () => {
      thumbWrap.querySelectorAll(".t").forEach(x => x.classList.remove("active"));
      t.classList.add("active");
      mainImg.style.opacity = 0;
      setTimeout(() => { mainImg.src = t.dataset.src; mainImg.style.opacity = 1; }, 200);
    });
  });

  // Applications tags
  document.getElementById("showcase-applications").innerHTML =
    product.applications.map(a => `<span>${a}</span>`).join("");

  // Features
  document.getElementById("showcase-features").innerHTML =
    product.features.map(f => `<li>${featureIconSVG()}<span>${f}</span></li>`).join("");

  // Specs
  document.getElementById("showcase-specs").innerHTML =
    product.specs.map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join("");

  // Benefits
  document.getElementById("showcase-benefits").textContent = product.benefits;

  // Related products (exclude current)
  const related = PRODUCTS.filter(p => p.id !== productId).sort(() => 0.5 - Math.random()).slice(0, 4);
  document.getElementById("related-grid").innerHTML = related.map(r =>
    `<div class="related-card" data-product="${r.id}">
      <img src="${r.img}" alt="${r.name}" loading="lazy">
      <span>${r.name}</span>
    </div>`
  ).join("");
  document.getElementById("related-grid").querySelectorAll(".related-card").forEach(card => {
    card.addEventListener("click", () => selectProduct(card.dataset.product, true));
  });

  // Quote select sync
  const quoteSelect = document.getElementById("quote-product-select");
  if (quoteSelect) quoteSelect.value = product.name;

  // Animate content swap
  showcase.querySelector(".showcase-copy").classList.remove("fade-swap");
  void showcase.offsetWidth;
  showcase.querySelector(".showcase-copy").classList.add("fade-swap");

  // Update active card
  document.querySelectorAll(".product-card").forEach(c => c.classList.toggle("active", c.dataset.product === productId));

  if (scroll) {
    document.getElementById("product-showcase").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function selectProduct(id, scroll) {
  renderShowcase(id, { scroll });
}

function buildProductCards() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  grid.innerHTML = DASHBOARD_PRODUCTS.map(p => `
    <div class="product-card reveal" data-product="${p.id}" tabindex="0" role="button" aria-label="View ${p.name} details">
      <div class="thumb"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
      <h4>${p.name}</h4>
      <div class="card-arrow"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></div>
    </div>
  `).join("");

  grid.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => selectProduct(card.dataset.product, true));
    card.addEventListener("keypress", e => { if (e.key === "Enter") selectProduct(card.dataset.product, true); });
  });

  observeReveal(grid.querySelectorAll(".reveal"));
}

function buildQuoteOptions() {
  const select = document.getElementById("quote-product-select");
  if (!select) return;
  select.innerHTML = `<option value="" disabled selected>Select a product</option>` +
    DASHBOARD_PRODUCTS.map(p => `<option value="${p.name}">${p.name}</option>`).join("") +
    `<option value="Other">Other / General Enquiry</option>`;
}

document.addEventListener("DOMContentLoaded", () => {
  buildProductCards();
  buildQuoteOptions();
  renderShowcase(PRODUCTS[0].id);
});
