import throttle from 'lodash.throttle';

const refs = {
  formLogin: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('[type = email]'),
  inputMessage: document.querySelector('[name = message]'),
  submitButton: document.querySelector('[type = submit]'),
};
populateForm();
const feedBackDataKey = 'feedback-form-state';
let userData = {};

refs.formLogin.addEventListener(
  'input',
  throttle(event => {
    userData[refs.inputMessage.name] = refs.inputMessage.value;
    userData[refs.inputEmail.type] = refs.inputEmail.value;
    localStorage.setItem(feedBackDataKey, JSON.stringify(userData));
  }, 500)
);

refs.formLogin.addEventListener('submit', onFormHandleSubmit);

function onFormHandleSubmit(event) {
  event.preventDefault();
  localStorage.getItem(feedBackDataKey);
  localStorage.removeItem(feedBackDataKey);
  event.currentTarget.reset();
}

function populateForm() {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedData) {
    refs.inputEmail.value = savedData.email;
    refs.inputMessage.value = savedData.message;
  }
}
