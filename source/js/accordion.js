$('.accordion__btn').on('click', function() {
  const parent = $(this).closest('.accordion');

  $('.accordion--open').not(parent)
    .toggleClass('accordion--open')
    .find('.accordion__item').slideUp();

  parent.toggleClass('accordion--open');
  parent.find('.accordion__item').slideToggle();
});
