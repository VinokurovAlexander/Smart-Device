'use strict';

//accordion
$('.accordion__btn').on('click', function() {
  const parent = $(this).closest('.accordion');
  parent.toggleClass('accordion--open');
  parent.find('.accordion__item').slideToggle();
});

//popup
$('a[href="#callback-modal"]').magnificPopup({
  type: 'inline',
  midClick: true
});

//input mask
const phonesInput = $('input[name="phone-number"]');

phonesInput.inputmask({
  mask: '+7 (999) 999 99 99',
  showMaskOnHover: false,
  placeholder: ' '
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










