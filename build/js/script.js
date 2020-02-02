'use strict';

//accordion
$('.accordion__btn').on('click', function() {
  const parent = $(this).closest('.accordion');
  parent.toggleClass('accordion--open');
  parent.find('.accordion__item').slideToggle();
});
