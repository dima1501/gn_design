const links = document.getElementsByClassName('js-anchor');
const header = document.getElementsByClassName('js-header')[0];

for (let link of links) {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const anchor = link.getAttribute('data-anchor');
    const target = document.querySelector(anchor);

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    header.classList.remove('_opened');
  });
}
