
const form = document.getElementById('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const firstName = form['first-name'].value;
  const lastName = form['last-name'].value;
  const email = form['email'].value;
  const password = form['password'].value;

  if (firstName === ''){
    checker('first-name', 'First Name cannot be empty')
  } else {
    remove('first-name')
  }

  if (lastName === ''){
    checker('last-name', 'Last Name cannot be empty')
  } else {
    remove('last-name')
  }

  if (email === ''){
    checker('email', 'Looks like this is not an email')
  } else  if (!validEmail(email)){
    checker('email', 'Looks like this is not a valid email')
    }
   else {
    remove('email');
  }

  if (password === ''){
    checker('password', 'Password cannot be ampty')
  } else {
    remove('password')
  }
})

function checker(field, message){
  const error = form[field].parentElement.querySelector('p')
  error.innerText = message;

  const iconError = form[field].parentElement.querySelector('img');
  iconError.style.opacity = '1';

  const border = form[field].parentElement.querySelector('.input');
  border.style.border = '2px solid hsl(0, 100%, 74%)'
  form.classList.add('error')
}

function remove(field){
  const error = form[field].parentElement.querySelector('p')
  error.innerText = '';

  const iconError = form[field].parentElement.querySelector('img');
  iconError.style.opacity = '0';
  
  const border = form[field].parentElement.querySelector('.input');
  border.style.border = ' 1px solid hsl(248, 32%, 49%)'

  form.classList.remove('error')
}

function validEmail(email){
  const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  return regex.test(email);
}