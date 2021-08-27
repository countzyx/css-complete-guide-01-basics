$(function () {
  const kCssBackdropActivate = 'backdrop--activate';
  const kCssBackdropShow = 'backdrop--show';
  const kCssMobileNavShow = 'mobile-nav--show';
  const kCssModalShow = 'modal--show';

  const backdrop = $('#backdrop');
  const hideBackdrop = () => {
    if (!backdrop) {
      return;
    }

    backdrop.removeClass(kCssBackdropShow);
    setTimeout(() => backdrop.removeClass(kCssBackdropActivate), 200);
  };
  const showBackdrop = () => {
    if (!backdrop) {
      return;
    }

    backdrop.addClass(kCssBackdropActivate);
    setTimeout(() => backdrop.addClass(kCssBackdropShow), 10);
  };

  const mobileNav = $('#mobile-nav');
  const showMobileNav = () => {
    if (!mobileNav) {
      return;
    }

    showBackdrop();
    mobileNav.addClass(kCssMobileNavShow);
  };

  const toggleButton = $('#toggle-button');
  toggleButton && toggleButton.click(showMobileNav);

  const modal = $('#modal');
  // console.log(backdrop, modal);
  const hideAllModals = () => {
    mobileNav && mobileNav.removeClass(kCssMobileNavShow);
    modal && modal.removeClass(kCssModalShow);
    hideBackdrop();
  };
  const showModal = () => {
    if (!modal) {
      return;
    }

    showBackdrop();
    modal.addClass(kCssModalShow);
  };

  backdrop.click(hideAllModals);

  const noButton = modal.find('#no-button');
  // console.log(noButton);
  noButton && noButton.click(hideAllModals);

  const planButtons = $('.plan button');
  // console.log(planButtons);
  planButtons && planButtons.click(showModal);
});
