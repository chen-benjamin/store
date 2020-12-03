/* global util, products */
window.onload = function() {
  let bread = document.querySelector('.breadcrumbs');
  let cover = document.querySelector('.cover');
  let coverPhone = document.querySelector('.cover-phone');
  bread.style.display = 'none';
  products.forEach(product => {
    product.price = new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD'
    }).format(product.price);
  });
  Array.from(document.querySelectorAll('li:not(:last-child) a.nav-link')).forEach(element => {
    element.addEventListener('click', () => {
      console.log(4444);
      if (cover.style.display !== 'none' || coverPhone.style.display !== 'none') {
        cover.style.display = 'none';
        coverPhone.style.display = 'none';
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
  const subscribeForm = document.getElementById('subscribe');
  subscribeForm.addEventListener('submit', e => {
    e.preventDefault();
    let email = document.getElementById('email');
    if (!email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      swal('Please enter valid email', '', 'warning');
    } else {
      e.target.submit();
    }
  });
};
