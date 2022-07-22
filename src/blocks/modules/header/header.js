const burger = document.getElementsByClassName('js-burger')[0];
const header = document.getElementsByClassName('js-header')[0];

burger.addEventListener('click', () => {
  header.classList.toggle('_opened');
});
