# simple_content_slider

<pre>
const arg = {
  mainId: 'slider',
  btnClassLeft: 'content-slider__arrow_left',
  btnClassRight: 'content-slider__arrow_right',
  hideBtn: 'content-slider__arrow_hide',
  contentClass: 'content-slider__item',
  activeContentClass: 'content-slider__item_active',
  carousel: false,
  autoShow: true,
  pauseAutoShow: 7,
  autoFlippingTime: 3,
  flippingDirection: 'right',
};

let slider = new ContentSlider(arg);

slider.activateSlider();
</pre>
