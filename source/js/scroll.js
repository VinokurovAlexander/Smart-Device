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
