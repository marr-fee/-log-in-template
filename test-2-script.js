
const signInBtn = document.getElementById('login');
const signUpBtn = document.getElementById('signup');

let signInContainer = document.getElementById('first-background');
let signUpContainer = document.getElementById('second-background');

let signInForm = document.getElementById('sign-in-form');
let signUpForm = document.getElementById('sign-up-form');

let toggleTextLeft = document.getElementById('toggle-left');
let toggleTextRight = document.getElementById('toggle-right');


signInBtn.addEventListener('click', () => {
  signInContainer.classList.add('move1');
  signUpContainer.classList.add('move2');
  signInForm.classList.remove('sign-in-inactive');
  signUpForm.classList.add('sign-up-inactive');
  toggleTextLeft.classList.add('move-hello');
  toggleTextRight.classList.add('move-welcome');
  console.log('clicked sign in');
});

signUpBtn.addEventListener('click', () => {
  signUpContainer.classList.remove('move2');
  signInContainer.classList.remove('move1');
  signInForm.classList.add('sign-in-inactive');
  signUpForm.classList.remove('sign-up-inactive');
  toggleTextLeft.classList.remove('move-hello');
  toggleTextRight.classList.remove('move-welcome');
  console.log('clicked sign up');
});