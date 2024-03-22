$(document).ready(function(){
  // Initialization for facilitator-slider
  $('.facilitator-slider').slick({
      dots: true, // Enables navigation dots
      infinite: true, // Infinite looping
      speed: 300, // Transition speed
      slidesToShow: 1, // Number of slides to show at once
      adaptiveHeight: true, // Adjusts slider height based on content
      autoplay: true, // Enables autoplay mode
      autoplaySpeed: 2000, // Delay between autoplay slides
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
      responsive: [
          {
              breakpoint: 768, // Adjusts settings for screens smaller than 768px
              settings: {
                  arrows: false, // Hides arrows on smaller screens
                  centerMode: true, // Enables center mode
                  centerPadding: '40px', // Adds padding on the sides
                  slidesToShow: 1 // Shows only one slide at a time
              }
          },
          {
              breakpoint: 480, // Adjusts settings for screens smaller than 480px
              settings: {
                  arrows: false, // Hides arrows on very small screens
                  centerMode: true, // Enables center mode
                  centerPadding: '40px', // Adds padding on the sides
                  slidesToShow: 1 // Shows only one slide at a time
              }
          }
      ]
  });

  // Initialization for photo-show-slider
  $('.photo-show-slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true, // Smooth fade transition between images
      cssEase: 'linear', // Use a linear animation
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 3000, // Adjust time on screen per photo
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
              }
          },
          {
              breakpoint: 480,
              settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
              }
          }
      ]
  });
});
