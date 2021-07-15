$(function () {
  const backdrop = $('#backdrop');
  const modal = $('#modal');
  // console.log(backdrop, modal);
  const closeModal = function () {
    modal.hide();
    backdrop.hide();
  };
  backdrop.click(closeModal);
  const noButton = modal.find('.modal__action--negative');
  // console.log(noButton);
  noButton.click(closeModal);
  const planButtons = $('.plan button');
  // console.log(planButtons);
  planButtons.click(function () {
    backdrop.show();
    modal.show();
  });
});
