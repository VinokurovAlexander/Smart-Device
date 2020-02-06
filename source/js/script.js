'use strict';

//accordion
$('.accordion__btn').on('click', function() {
  const parent = $(this).closest('.accordion');
  parent.toggleClass('accordion--open');
  parent.find('.accordion__item').slideToggle();
});

//popup init
$('a[href="#callback-modal"]').magnificPopup({
  type: 'inline',
  midClick: true,
  focus: '#callback-user-name'
});

//localstorage
const form = document.querySelector('#callback-modal');
if (form) {
  const formInput = {
    userName: form.querySelector('#callback-user-name'),
    phoneNumber: form.querySelector('#callback-phone-number'),
    comment: form.querySelector('#callback-feedback-text')
  };

  let isStorageSupport = true;
  const storage = {
    userName: '',
    phoneNumber: '',
    comment: ''
  };

  try {
    Object.keys(storage).forEach((storageItemName) => {
      storage[storageItemName] = localStorage.getItem(storageItemName);
    })
  } catch (err) {
    isStorageSupport = false;
  }

  Object.keys(storage).forEach((storageItemName) => {
    if (storage[storageItemName]) {
      formInput[storageItemName].value = storage[storageItemName];
    }
  });

  form.addEventListener('submit', () => {
    if (isStorageSupport) {
      Object.keys(storage).forEach((storageItemName) => {
        localStorage.setItem(storageItemName, formInput[storageItemName].value)
      })
    }
  });
}

//input mask

const phoneInputs = $('input[name="phone-number"]');

phoneInputs.inputmask({
  mask: '+7[(999)999 99 99]',
  placeholder: ' ',
  greedy: false
});

//document scroll
const Scroll = {
  SLOW: 700,
  FAST: 1500
};

const documentScroll = function (element, speed) {
  $([document.documentElement, document.body]).animate({
    scrollTop: $(element).offset().top
  }, speed);
};

const scrollTo = function (link, element, speed) {
  link.on('click', function(e) {
    e.preventDefault();
    documentScroll(element, speed);
  })
};

scrollTo($('.scroll-btn-feedback'), $('#feedback'), Scroll.FAST);
scrollTo($('.scroll-btn-features'), $('#features'), Scroll.SLOW);






