// Search & Filter functionality
const searchInput = document.getElementById("searchInput");
const filterCategory = document.getElementById("filterCategory");
const products = document.querySelectorAll(".product");

const arrivals = document.querySelectorAll('.arrival-box');

window.addEventListener('scroll', () => {
  arrivals.forEach(box => {
    const rect = box.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      box.classList.add('visible');
    }
  });
});

// Reveal animation for Most Wanted
const wantedBoxes = document.querySelectorAll('.wanted-box');

window.addEventListener('scroll', () => {
  wantedBoxes.forEach(box => {
    const rect = box.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      box.classList.add('visible');
    }
  });
});


function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const category = filterCategory.value;

  products.forEach((product) => {
    const name = product.querySelector("h3").textContent.toLowerCase();
    const matchesSearch = name.includes(searchTerm);
    const matchesCategory =
      category === "all" || product.dataset.category === category;

    if (matchesSearch && matchesCategory) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

if (searchInput && filterCategory) {
  searchInput.addEventListener("input", filterProducts);
  filterCategory.addEventListener("change", filterProducts);
}
