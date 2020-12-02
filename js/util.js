/* global products */
const util = {
  getProductsByCategory(category) {
    let res = [];
    products.forEach(product => {
      if (product.category.includes(category)) {
        res.push(product);
      }
    });
    return res;
  },
  productToCard(product) {
    let card = document.createElement('div');
    let img = document.createElement('img');
    let content = document.createElement('div');
    let name = document.createElement('h4');
    let description = document.createElement('p');
    let price = document.createElement('p');
    card.classList.add('card');
    content.classList.add('card-content');
    price.classList.add('price');
    price.innerHTML = product.price;
    img.src = product.imageUrl;
    img.alt = product.name;
    img.title = 'photo retrieved from https://unsplash.com/';
    name.innerHTML = product.name;
    description.innerHTML = product.description;
    content.append(name);
    content.append(description);
    content.append(price);
    card.append(img);
    card.append(content);
    return card;
  },
  clearCards() {
    let cards = document.getElementsByClassName('card');
    for (let index = cards.length - 1; index >= 0; index--) {
      cards[index].parentNode.removeChild(cards[index]);
    }
  },
  productsToCards(products) {
    let main = document.querySelector('.main');
    this.clearCards();
    products.forEach(product => {
      main.append(util.productToCard(product));
    });
  }
};
