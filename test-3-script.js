const leftBackground = document.getElementById('background-left');

const rightBackground = document.getElementById('background-right');

const signUpContainer = document.getElementById('toggle-container-sign-up')

const signInContainer = document.getElementById('toggle-container-sign-in')

const signInOpenerBtn = document.getElementById('login-toggle');

const signUpOpenerBtn = document.getElementById('signup-toggle');

signInOpenerBtn.addEventListener('click', () => {
  console.log('you clicked sign in button')
  rightBackground.classList.add('move-right-bg');
  signInContainer.classList.add('move-sign-in-cont');
  leftBackground.classList.remove('move-left-bg');
  signUpContainer.classList.add('move-sign-up-cont');
})

signUpOpenerBtn.addEventListener('click', () => {
  leftBackground.classList.add('move-left-bg');
  signUpContainer.classList.remove('move-sign-up-cont');
  rightBackground.classList.remove('move-right-bg');
  signInContainer.classList.remove('move-sign-in-cont');
  console.log('you clicked sign up button')
})