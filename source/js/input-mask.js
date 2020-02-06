const phoneInputs = $('input[name="phone-number"]');

phoneInputs.inputmask({
  mask: '+7[(999)999 99 99]',
  placeholder: ' ',
  greedy: false
});
