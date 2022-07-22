import Swiper from 'swiper/bundle';

const pSlider = document.getElementsByClassName('js-p-slider')[0];
const loadMoreBtn = document.getElementsByClassName('js-load-more')[0];

let init = false;
let swiper;

function swiperInit() {
  if (window.innerWidth > 1199) {
    if (!init) {
      init = true;
      swiper = new Swiper('.js-p-slider', {
        loop: true,
        slidesPerView: 2.13,
        spaceBetween: 10,
        navigation: {
          nextEl: '.p-slider__next',
        },
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}

if (pSlider) {
  swiperInit();
  window.addEventListener('resize', swiperInit);
}

if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', () => {
    pSlider.classList.add('_opened');
  });
}
