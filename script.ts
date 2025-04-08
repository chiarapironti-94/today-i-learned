// CONSTANTS
const TXT_SHARE_FACT = 'Share a fact';
const TXT_CLOSE = 'Close';

const $btnShareFact: JQuery<HTMLElement> = $('.js-open-form');
const $form: JQuery<HTMLFormElement> = $('form.fact-form');

$btnShareFact.on('click', function () {
  const $this = $(this);
  const currentText = $this.text();
  $this.text(currentText === TXT_SHARE_FACT ? TXT_CLOSE : TXT_SHARE_FACT);
  $form.toggleClass('hidden');
});