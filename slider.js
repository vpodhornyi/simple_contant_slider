function ContentSlider(arg) {
  const carousel = arg.carousel || false;
  const autoShow = arg.autoShow || false;
  const btnHideClass = arg.hideBtn || 'arrow_hide';
  const timeInterval = (arg.autoFlippingTime || 3) * 1000;
  const pauseAutoShow = (arg.pauseAutoShow || 15) * 1000;

  let intervalId = false;
  let timeoutId = false;
  let flippingDirection = arg.flippingDirection === 'right' || false; //true - Right, false - Left

  const id = document.querySelector(`#${arg.mainId}`);
  const btnLeft = document.querySelector(`.${arg.btnClassLeft}`);
  const btnRight = document.querySelector(`.${arg.btnClassRight}`);

  const contents = document.querySelectorAll(`.${arg.contentClass}`);
  const contentsLength = contents.length;
  const indexOfLastChild = contentsLength - 1;
  const indexOfFirstChild = 0;

  (function () {
      const i = activeContent();
      if (!arg.carousel && (i === 0 || i ===  indexOfLastChild)) {
        if (i === 0) {
          flippingDirection = true;
          toggleBtnHide(btnLeft);
          btnLeft.classList.toggle(arg.btnClassLeft);
        } else {
          flippingDirection = false;
          toggleBtnHide(btnRight);
          btnRight.classList.toggle(arg.btnClassRight);
        }
      }
    }
  )();


  function toggleContentItem(i) {
    contents[i].classList.toggle(arg.activeContentClass);
    return i;
  }

  function toggleBtnHide(element) {
    element.classList.toggle(btnHideClass);
  }

  function pressLeftBtn(ev) {
    return ev.target.classList.contains(arg.btnClassLeft);
  }

  function pressRightBtn(ev) {
    return ev.target.classList.contains(arg.btnClassRight);
  }

  function activeContent() {
    for (let i = 0; i < contentsLength; i++) {
      if (contents[i].classList.contains(arg.activeContentClass))
        return i;
    }
    return false;
  }

  function flippingContentLeft() {
    const i = activeContent();
    console.log('Il - ', i);
    if (i) {
      toggleContentItem(i);
      toggleContentItem(i - 1);

      if (i === indexOfLastChild && !carousel) {
        toggleBtnHide(btnRight);
        btnRight.classList.toggle(arg.btnClassRight);
      }

      if (i - 1 === 0 && !carousel) {
        toggleBtnHide(btnLeft);
        btnLeft.classList.toggle(arg.btnClassLeft);

        if (!flippingDirection) flippingDirection = !flippingDirection;
      }

      return i - 1;
    }

    if (carousel) {
      toggleContentItem(i);
      return toggleContentItem(indexOfLastChild);
    }
  }

  function flippingContentRight() {
    const i = activeContent();
    console.log('Ir - ', i);
    if (i < indexOfLastChild) {
      toggleContentItem(i);
      toggleContentItem(i + 1);

      if (i === 0 && !carousel) {
        toggleBtnHide(btnLeft);
        btnLeft.classList.toggle(arg.btnClassLeft);
      }

      if (i + 1 === indexOfLastChild && !carousel) {
        toggleBtnHide(btnRight);
        btnRight.classList.toggle(arg.btnClassRight);

        if (flippingDirection) flippingDirection = !flippingDirection;
      }
      return i + 1;
    }

    if (carousel) {
      toggleContentItem(i);
      return toggleContentItem(indexOfFirstChild);
    }
  }

  function autoFlipping() {
    return setInterval(function () {
      flippingDirection ? flippingContentRight() : flippingContentLeft();
    }, timeInterval)
  }

  function restartAutoShow() {
    if (intervalId) {
      clearInterval(intervalId);

      if (timeoutId) clearInterval(timeoutId);

      timeoutId = setTimeout(function () {
        intervalId = autoFlipping();
      }, pauseAutoShow)
    }
  }

  function main(ev) {
    switch (true) {

      case pressLeftBtn(ev):
        restartAutoShow();
        if (flippingDirection) flippingDirection = !flippingDirection;
        flippingContentLeft();
        break;

      case pressRightBtn(ev):
        restartAutoShow();
        if (!flippingDirection) flippingDirection = !flippingDirection;
        flippingContentRight();
        break;
    }
  }

  function activateSlider() {
    id.addEventListener('click', main);

    if (autoShow) {
      intervalId = autoFlipping();
    }
  }

  this.activateSlider = activateSlider;
}



