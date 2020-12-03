/* global swal */
const contactForm = document.getElementById('contact');
const name = document.getElementById('name');
const email = document.getElementById('emailAddress');
const city = document.getElementById('city');
const postCode = document.getElementById('postCode');
const types = document.getElementsByName('type');
const orderNumber = document.getElementById('orderNumber');
const message = document.getElementById('message');
const subscribeForm = document.getElementById('subscribe');

function getTypeValue() {
  let val;
  for (let i = 0; i < types.length; i++) {
    if (types[i].checked) {
      val = types[i].value;
    }
  }
  return val;
}

for (let i = 0; i < types.length; i++) {
  let orderGroup = document.getElementsByClassName('orderNumber')[0];
  types[i].addEventListener('click', () => {
    console.log(getTypeValue());
    orderGroup.style.display = getTypeValue() === 'order' ? 'block' : 'none';
  });
}

contactForm.addEventListener('submit', e => {
  e.preventDefault();

  let errMsg = null;

  if (!name.value.match(/[a-zA-Z\s]+/)) {
    errMsg = 'Please enter valid name';
  }

  if (!email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    errMsg = 'Please enter valid email';
  }

  if (!city.value.match(/[a-zA-Z\s]+/)) {
    errMsg = 'Please enter valid city';
  }

  if (!postCode.value.match(/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/)) {
    errMsg = 'Please enter valid postal code';
  }

  if (getTypeValue() === 'order' && (orderNumber.value === '' || orderNumber.value === null)) {
    errMsg = 'Please enter order number';
  }

  errMsg ? swal(errMsg, '', 'warning') : e.target.submit();
});

subscribeForm.addEventListener('submit', e => {
  e.preventDefault();
  let email = document.getElementById('email');
  if (!email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    swal('Please enter valid email', '', 'warning');
  } else {
    e.target.submit();
  }
});
