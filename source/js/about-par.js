const aboutBlock = document.getElementById('about');
const aboutButton = document.getElementById('about-button');

const getParAbout = () => {
  if (aboutBlock && aboutButton) {
    aboutBlock.classList.remove('about--no-js');
    aboutButton.addEventListener('click', () => {
      if (aboutBlock.classList.contains('about--hidden')) {
        aboutBlock.classList.add('about--active');
        aboutBlock.classList.remove('about--hidden');
      } else
      if (aboutBlock.classList.contains('about--active')) {
        aboutBlock.classList.add('about--hidden');
        aboutBlock.classList.remove('about--active');
      }
    });
  }
};

export {getParAbout};
