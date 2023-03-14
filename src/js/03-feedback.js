import throttle from 'lodash.throttle';

const refs = {
  formLogin: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('[type = email]'),
  inputMessage: document.querySelector('[name = message]'),
  submitButton: document.querySelector('[type = submit]'),
};
populateForm();

let userData = {};

refs.formLogin.addEventListener(
  'input',
  throttle(event => {
    userData[refs.inputMessage.name] = refs.inputMessage.value;
    userData[refs.inputEmail.type] = refs.inputEmail.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(userData));
  }, 500)
);

refs.formLogin.addEventListener('submit', onFormHandleSubmit);

function onFormHandleSubmit(event) {
  event.preventDefault();
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
}

function populateForm() {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedData) {
    refs.inputEmail.value = savedData.email;
    refs.inputMessage.value = savedData.message;
  }
}
