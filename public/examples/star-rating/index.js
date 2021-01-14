// Function/Prototype approach

const StarRating = (function () {
    function StarRating() {
      this.starRatingForm = document.querySelector("#star-rating-form");
      this.bindEventHandlers = this.bindEventHandlers.bind(this);
      this.init = this.init.bind(this);
    }
  
    const _proto = StarRating.prototype;
  
    _proto.bindEventHandlers = function bindEventHandlers() {

      this.starRatingForm.addEventListener("submit", function (event) {
        console.log(event.target.rating.value);
        event.preventDefault();
      })
    };
  
    _proto.init = function init() {
      this.bindEventHandlers();
    };
  
    return StarRating;
  })();
  
  const starRatingComp1 = new StarRating();
  starRatingComp1.init();




  // Classical approach

// class StarRating {
//   constructor() {
//     this.starRatingWrapper = document.querySelector(".star-rating-wrapper");
//     this.bindEventHandlers = this.bindEventHandlers.bind(this);
//     this.init = this.init.bind(this);
//   }

//   bindEventHandlers() {
//     this.starRatingWrapper.addEventListener("click", function (event) {
//       event.target.classList.toggle("selected");
//     });
//   }

//   init() {
//       this.bindEventHandlers();
//   }
// }

// const starRatingComp1 = new StarRating();
// starRatingComp1.init();
