/*------Внести в index-----*/
import Splide from '@splidejs/splide';
if (document.querySelector('#profile-affiliate-stats')) {
  var profileStats = new Splide('#profile-affiliate-stats', {
    type: 'slide',
    autoWidth: true,
    gap: 25,
    arrows: false,
    pagination: false,
    perMove: 1,
    breakpoints: {
      992: {
        gap: 20,
      },
      600: {
        gap: 15,
      },
    },
  });
  profileStats.mount();
}

/*-----testimonials-----*/

if (document.querySelector('#about-training-slider')) {
  var aboutTrainingSlider = new Splide('#about-training-slider', {
    type: 'slide',
    autoWidth: true,
    gap: 34,
    arrows: false,
    perMove: 1,
    breakpoints: {
      600: {
        destroy: true,
      },
    },
  });
  aboutTrainingSlider.mount();
  document
    .querySelector('.reviews__2 .about-trainings-row .left_a')
    .addEventListener('click', () => {
      aboutTrainingSlider.go('<');
    });
  document
    .querySelector('.reviews__2 .about-trainings-row .right_a')
    .addEventListener('click', () => {
      aboutTrainingSlider.go('>');
    });
}

if (document.querySelector('#about-retreats-slider')) {
  var aboutRetreatsSlider = new Splide('#about-retreats-slider', {
    type: 'slide',
    autoWidth: true,
    gap: 34,
    arrows: false,
    perMove: 1,
    breakpoints: {
      600: {
        destroy: true,
      },
    },
  });
  aboutRetreatsSlider.mount();
  document
    .querySelector('.reviews__2 .about-retreats-row .left_a')
    .addEventListener('click', () => {
      aboutRetreatsSlider.go('<');
    });
  document
    .querySelector('.reviews__2 .about-retreats-row .right_a')
    .addEventListener('click', () => {
      aboutRetreatsSlider.go('>');
    });
}

if (document.querySelector('.video-review-slider')) {
  var videoReviewSlider = new Splide('.video-review-slider', {
    type: 'slide',
    autoWidth: true,
    gap: 32,
    arrows: false,
    perMove: 1,
    breakpoints: {
      600: {
        destroy: true,
      },
    },
  });
  videoReviewSlider.mount();
  document
    .querySelector('.review__3 .video-review .left_a')
    .addEventListener('click', () => {
      videoReviewSlider.go('<');
    });
  document
    .querySelector('.review__3 .video-review .right_a')
    .addEventListener('click', () => {
      videoReviewSlider.go('>');
    });
}

/*-----Map slider-----*/
if (document.getElementById('maps-slider')) {
  var bodyworkTestimonials = new Splide('#maps-slider', {
    type: 'slide',
    perPage: 1,
    perMove: 1,
    gap: 0,
    arrows: false,
    pagination: false,
  });
  bodyworkTestimonials.mount();
  document
    .querySelector('#maps-slider .arrows .left_a')
    .addEventListener('click', () => {
      bodyworkTestimonials.go('<');
    });
  document
    .querySelector('#maps-slider .arrows .right_a')
    .addEventListener('click', () => {
      bodyworkTestimonials.go('>');
    });
}
