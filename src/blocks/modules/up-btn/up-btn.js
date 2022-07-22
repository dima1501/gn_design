const scrollTopBtn = document.getElementsByClassName('js-scroll-top')[0];

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
}
