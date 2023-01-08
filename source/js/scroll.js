const buttonContacts = document.getElementById('contacts-button');
const textContacts = document.getElementById('banner-anchor');
const buttonTop = document.getElementById('button-up');

const blockContact = document.getElementById('contacts');
const blockBanner = document.getElementById('banner');

const scroll = (block) => {
  block.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const scrollToContacts = () => {
  if (buttonContacts && blockContact) {
    buttonContacts.addEventListener('click', (e) => {
      e.preventDefault();
      scroll(blockContact);
    });
  }
  if (textContacts && blockContact) {
    textContacts.addEventListener('click', (e) => {
      e.preventDefault();
      scroll(blockContact);
    });
  }
};

const scrollToTop = () => {
  if (buttonTop && blockBanner) {
    buttonTop.addEventListener('click', (e) => {
      e.preventDefault();
      scroll(blockBanner);
    });
  }
};

export {scrollToContacts, scrollToTop};
