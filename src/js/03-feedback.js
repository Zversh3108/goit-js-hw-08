import throttle from 'lodash.throttle';

const refs = {
  formLogin: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('[type = email]'),
  inputMessage: document.querySelector('[name = message]'),
  submitButton: document.querySelector('[type = submit]'),
};
const FEED_BACK_DATA_KEY = 'feedback-form-state';
populateForm();

let userData = {};

refs.formLogin.addEventListener(
  'input',
  throttle(event => {
    userData[refs.inputMessage.name] = refs.inputMessage.value;
    userData[refs.inputEmail.type] = refs.inputEmail.value;
    localStorage.setItem(FEED_BACK_DATA_KEY, JSON.stringify(userData));
  }, 500)
);

refs.formLogin.addEventListener('submit', onFormHandleSubmit);

function onFormHandleSubmit(event) {
  event.preventDefault();
  localStorage.getItem(FEED_BACK_DATA_KEY);
  localStorage.removeItem(FEED_BACK_DATA_KEY);
  event.currentTarget.reset();
}

function populateForm() {
  const savedData = JSON.parse(localStorage.getItem(FEED_BACK_DATA_KEY));
  if (savedData) {
    refs.inputEmail.value = savedData.email;
    refs.inputMessage.value = savedData.message;
  }
}
