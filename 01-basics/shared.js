$(function () {
  const toggleButton = $('#toggle-button');
  const backdrop = $('#backdrop');
  const mobileNav = $('#mobile-nav');
  toggleButton.click(function () {
    backdrop.show();
    mobileNav.show();
  });

  const modal = $('#modal');
  // console.log(backdrop, modal);
  const closeModal = function () {
    modal.hide();
    backdrop.hide();
  };

  backdrop.click(function () {
    closeModal();
    mobileNav.hide();
  });

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
