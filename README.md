# simple_content_slider

<a href="https://vpodhornyi.github.io/simple_content_slider/">Link to example</a>
<br/>
<p>With this code you can create a simple slider for any content you want.</p>
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
