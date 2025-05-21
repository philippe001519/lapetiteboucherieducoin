document.addEventListener("DOMContentLoaded", function () {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");

  if (!localStorage.getItem("cookiesAccepted")) {
    cookieBanner.style.display = "block";
  }

  acceptBtn.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none";
  });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector('.burger');
    const navUl = document.querySelector('nav ul');

    burger.addEventListener('click', function() {
        navUl.classList.toggle('open');
        burger.classList.toggle('active');
    });

    // (Optionnel) Fermer le menu au clic sur un lien
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            navUl.classList.remove('open');
            burger.classList.remove('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const sortSelect = document.getElementById('sort-select');
  const productGrid = document.querySelector('.product-grid');
  let productItems = Array.from(document.querySelectorAll('.product-item'));

  // Filtrage produits (recherche uniquement)
  function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();

    productItems.forEach(item => {
      const productName = item.querySelector('h3').textContent.toLowerCase();
      if (productName.includes(searchTerm)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    sortProducts();
  }

  // Tri des produits
  function sortProducts() {
    const sortValue = sortSelect.value;
    let visibleItems = productItems.filter(item => item.style.display !== 'none');

    visibleItems.sort((a, b) => {
      let aName = a.querySelector('h3').textContent.trim().toLowerCase();
      let bName = b.querySelector('h3').textContent.trim().toLowerCase();
      let aPriceText = a.querySelector('.price').textContent;
      let bPriceText = b.querySelector('.price').textContent;
      let aPrice = parseFloat(aPriceText.replace(',', '.').replace(/[^\d.]/g, ''));
      let bPrice = parseFloat(bPriceText.replace(',', '.').replace(/[^\d.]/g, ''));

      switch (sortValue) {
        case "price-asc":
          return aPrice - bPrice;
        case "price-desc":
          return bPrice - aPrice;
        case "name-asc":
          return aName.localeCompare(bName);
        case "name-desc":
          return bName.localeCompare(aName);
        default:
          return 0;
      }
    });

    visibleItems.forEach(item => productGrid.appendChild(item));
  }

  // Events listeners
  searchInput.addEventListener('input', filterProducts);
  sortSelect.addEventListener('change', filterProducts);

  // Initialisation
  filterProducts();
});






function hideLoader() {
  const loader = document.querySelector('.loader-container');
  if (loader) {
    loader.style.display = 'none';
  }
}

window.addEventListener('load', () => {
  if (!sessionStorage.getItem('loaderShown')) {
    setTimeout(hideLoader, 1000);
    sessionStorage.setItem('loaderShown', 'true');
  } else {
    hideLoader();
  }
});
