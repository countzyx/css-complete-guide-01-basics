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
    modal && modal.removeClass('modal--open');
    backdrop.hide();
  };

  backdrop.click(function () {
    closeModal();
    mobileNav.hide();
  });

  const noButton = modal.find('.modal__action--negative');
  // console.log(noButton);
  noButton && noButton.click(closeModal);

  const planButtons = $('.plan button');
  // console.log(planButtons);
  planButtons.click(function () {
    backdrop.show();
    modal && modal.addClass('modal--open');
  });
});
