const links = document.getElementsByClassName('js-anchor');
const header = document.getElementsByClassName('js-header')[0];

for (let link of links) {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const anchor = link.getAttribute('data-anchor');
    const target = document.querySelector(anchor);
    const offset = window.innerWidth > 1199 ? 50 : 0;

    const y = target.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({ top: y, behavior: 'smooth' });
    header.classList.remove('_opened');
  });
}
