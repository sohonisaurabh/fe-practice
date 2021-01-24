export default `
<style>
  .star-rating-wrapper {
    position: relative;
    width: 270px;
  }

  svg {
    width: 50px;
    height: 50px;
    fill: yellow;
  }

  .visually-hidden {
    position: absolute;
    opacity: 0;
  }

  .star-rating-label {
    cursor: pointer;
    display: inline-block;
    width: 50px;
    height: 50px;
  }

  .star-rating-radio:focus + label {
    outline: blue solid 2px;
  }

  .star-rating-radio:checked ~ .star-rating-label svg {
    fill: #f5f5f5;
  }

  .star-rating-radio:checked + .star-rating-label svg {
    fill: yellow;
  }

  .star-rating-wrapper:hover .star-rating-label svg {
    fill: yellow;
  }

  .star-rating-label:hover ~ .star-rating-label svg {
    fill: #f5f5f5;
  }

  .star-rating-label:hover > svg {
    fill: yellow;
  }

  .focus-ring {
    position: absolute;
    top: 0;
    left: 0;
    width: 265px;
    height: 50px;
    border: 2px solid blue;
    opacity: 0;
    z-index: -1;
  }

  #zeroStar:focus ~ .focus-ring{
    opacity: 1;
  }
</style>
<div class="star-rating-wrapper">
    <input type="radio" name="rating" value="0" checked id="zeroStar" class="visually-hidden star-rating-radio"/>
    <label for="zeroStar">
      <span class="visually-hidden">No star</span>
    </label>
    <input type="radio" name="rating" value="1" id="oneStar" class="visually-hidden star-rating-radio"/>
    <label for="oneStar" class="star-rating-label">
      <span class="visually-hidden">1 star</span>
      <svg viewBox="0 0 512 512" class="select-rating">
        <path
          d="M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769z"
        ></path>
      </svg>
    </label>
    <input type="radio" name="rating" value="2" id="twoStars" class="visually-hidden star-rating-radio"/>
    <label for="twoStars" class="star-rating-label">
      <span class="visually-hidden">2 stars</span>
      <svg viewBox="0 0 512 512" class="select-rating">
        <path
          d="M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769z"
        ></path>
      </svg>
    </label>
    <input type="radio" name="rating" value="3" id="threeStars" class="visually-hidden star-rating-radio"/>
    <label for="threeStars" class="star-rating-label">
      <span class="visually-hidden">3 stars</span>
      <svg viewBox="0 0 512 512" class="select-rating">
        <path
          d="M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769z"
        ></path>
      </svg>
    </label>
    <input type="radio" name="rating" value="4" id="fourStars" class="visually-hidden star-rating-radio"/>
    <label for="fourStars" class="star-rating-label">
      <span class="visually-hidden">4 stars</span>
      <svg viewBox="0 0 512 512" class="select-rating">
        <path
          d="M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769z"
        ></path>
      </svg>
    </label>
    <input type="radio" name="rating" value="5" id="fiveStars" class="visually-hidden star-rating-radio"/>
    <label for="fiveStars" class="star-rating-label">
      <span class="visually-hidden">5 stars</span>
      <svg viewBox="0 0 512 512" class="select-rating">
        <path
          d="M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769z"
        ></path>
      </svg>
    </label>

    <span class="focus-ring"></span>
  </div>`;
