let slider = new ContentSlider({
  carousel: true,
  flippingDirection: true,
});

slider.activateSlider();

let newsSlider = new ContentSlider({
  mainId: 'news_slider',
  flippingDirection: true,
  autoFlippingTime: 5,
});

newsSlider.activateSlider();