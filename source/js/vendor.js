// Swiper 7.4.1
import './vendor/swiper';
const sliderlList = document.getElementById('slider');

const sliderProjects = () => {
  if (sliderlList) {
    // eslint-disable-next-line no-unused-vars, no-undef
    const swiper = new Swiper(sliderlList, {
      navigation: {
        nextEl: '.projects__button--right',
        prevEl: '.projects__button--left',
      },
      speed: 600,
      slidesPerView: 1,
      spaceBetween: 100,
      loop: true,
      autoHeight: true,
      allowTouchMove: false,
    });
  }
};

export {sliderProjects};
