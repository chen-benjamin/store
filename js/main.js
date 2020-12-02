/* global util, products */
window.onload = function() {
  let bread = document.querySelector('.breadcrumbs');
  let cover = document.querySelector('.cover');
  bread.style.display = 'none';
  products.forEach(product => {
    product.price = new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD'
    }).format(product.price);
  });
  Array.from(document.querySelectorAll('nav li:not(:last-child) a')).forEach(element => {
    element.addEventListener('click', () => {
      if (cover.style.display !== 'none') {
        cover.style.display = 'none';
        bread.style.display = 'block';
      }
      bread.innerHTML =
        'Home > ' +
        element
          .getAttribute('href')
          .replace('#', '')
          .replace('_', ' > ');
      let category = element.textContent.toLowerCase().replace(' ', '-');
      if (category === 'all') category = '';
      util.productsToCards(util.getProductsByCategory(category));
    });
  });
};
