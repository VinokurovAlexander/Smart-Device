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
const documentScroll = function (element) {
  $([document.documentElement, document.body]).animate({
    scrollTop: $(element).offset().top
  }, 1500);
};

$('.feedback-scroll-btn').on('click', function(e) {
  e.preventDefault();
  documentScroll($('#feedback'));
});










