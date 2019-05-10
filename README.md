# simple_content_slider

<a href="https://vpodhornyi.github.io/simple_content_slider/">Link to example</a>
<br/>
<p>With this code you can create a simple slider for any content of you want.</p>
<h2>Step 1:</h2>
<p>Create simple structure in yore html file</p>
<p>To "content-slider__item" you can put any content of you want</p>
```html
<pre>
<div class="content-slider" id="slider">
    <div class="content-slider__arrow content-slider__arrow_left"></div>
    <div class="content-slider__contents">
      <div class="content-slider__item">
          <img src="./img/ch.jpeg" alt="photo" class="content-slider__photo">
      </div>
      <div class="content-slider__item">
          <img src="./img/cn.jpg" alt="photo" class="content-slider__photo">
      </div>
      <div class="content-slider__item">
          <img src="./img/lb.jpeg" alt="photo" class="content-slider__photo">
      </div>
      <div class="content-slider__item">
          <img src="./img/ps.jpg" alt="photo" class="content-slider__photo">
      </div>
      <div class="content-slider__item  content-slider__item_active">
          <img src="./img/rf.jpg" alt="photo" class="content-slider__photo">
      </div>
    </div>
    <div class="content-slider__arrow content-slider__arrow_right"></div>
  </div>
</pre>
```
<pre>
let slider = new ContentSlider({
  carousel: true,
  flippingDirection: true,
});

slider.activateSlider();
</pre>
