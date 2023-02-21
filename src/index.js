//// NEED import
//import $ from 'jquery';
////import '@fancyapps/fancybox';
//import 'slick-carousel';
//
//
//import './js/';
//// NEED import
//
//// SCSS import
//import './scss/style.scss';
////import './scss/compress.scss';

// NEED import
import $ from 'jquery';
import '@fancyapps/fancybox';
//import 'slick-carousel';

import Splide from '@splidejs/splide';

if (document.querySelector('.splide')) {
  var splide = new Splide('.splide');
}

if (document.querySelector('.about__gallery')) {
  //var sliderPost;
  //var sliderpostPrev, sliderpostNext;
  //var sliderpostPrevR, sliderpostNextR;

  var sliderPost = new Splide('.about__gallery', {
    easing: 'ease-in-out',
    gap: '0px',
    focus: 'center',
    //        pagination: false,
    perPage: 1,
    //        start: 1,
    perMove: 1,
    trimSpace: false,
    type: 'loop',
    arrows: false,

    breakpoints: {
      99999: {
        gap: '0px',
        focus: 'center',
        //        pagination: false,
        perPage: 1,
        //        start: 1,
        perMove: 1,
        trimSpace: false,
        type: 'loop',
        arrows: false,

        destroy: false,
      },

      3000: {
        destroy: true,
      },

      600: {
        fixedHeight: '600px',
        easing: 'ease-in-out',
        gap: '0px',
        focus: 'center',
        //        pagination: false,
        perPage: 1,
        //        start: 1,
        perMove: 1,
        trimSpace: false,
        type: 'loop',
        arrows: false,

        destroy: false,
      },

      500: {
        fixedHeight: '400px',
        easing: 'ease-in-out',
        gap: '0px',
        focus: 'center',
        //        pagination: false,
        perPage: 1,
        //        start: 1,
        perMove: 1,
        trimSpace: false,
        type: 'loop',
        arrows: false,

        destroy: false,
      },

      450: {
        fixedHeight: '250px',
        easing: 'ease-in-out',
        gap: '0px',
        focus: 'center',
        //        pagination: false,
        perPage: 1,
        //        start: 1,
        perMove: 1,
        trimSpace: false,
        type: 'loop',
        arrows: false,

        destroy: false,
      },
    },
  }).mount();

  //
  //spliden.on( 'arrows:mounted', function (prev, next, prevIndex, nextIndex) {
  //
  //
  //
  //  });
  //

  //    previousButton.addEventListener('click', function(e) {
  //    splide.go('<');
  //  });

  //bts.addEventListener("click", function(){
  ////        console.log('1');
  //            spliden.mount('next');
  // });
  //  spliden.on( 'arrows:mounted', function ( rate ) {
  //  console.log( rate ); // 0-1
  //} );

  //bts.addEventListener('a.left_a', function (event) {
  //
  //  spliden.on( 'arrows:mounted', function (next){
  //     event.mount(next);
  //  });
  //})

  //  var button = document.querySelector('right_a');
  //
  //    spliden.on('arrows:mounted', function (next) {
  //
  //
  //    button.on('click', function () {    } );
  //    } );

  //  });

  //spliden.on( 'arrows:mounted', function (prev, next, prevIndex, nextIndex) {
  //  // do something
  //
  //
  //  // Go to the previous slide when the Previous button is activated
  //  previousButton.on('click', function() {
  //    spliden.mount(next);
  //  });
  //
  //  // Go to the next slide when the Next button is activated
  //  nextButton.on('click', function() {
  //    spliden.mount(next);
  //  });
  //
  ////  document.querySelectorAll('.home__2 .right_a');
  //
  //// const button = document.querySelector('.right_a');
  //
  ////  button.mount(next);
  //
  ////  previousButton.addEventListener('click', function(e) {
  //////    spliden.go('<');
  ////    spliden.mount(next);
  ////  });
  //
  //});
}

if (document.getElementById('slider__post')) {
  var sliderPost;
  var sliderpostPrev, sliderpostNext;
  var sliderpostPrevR, sliderpostNextR;

  sliderpostPrev = document.querySelector('.home__2 .right_a');
  sliderpostNext = document.querySelector('.home__2 .left_a');

  sliderpostPrevR = document.querySelector('.home__2 .right_r');
  sliderpostNextR = document.querySelector('.home__2 .left_r');

  var sliderPost = new Splide('#slider__post', {
    easing: 'ease-in-out',
    //    fixedWidth: '300px',
    gap: '45px',
    focus: 'center',
    //        pagination: false,
    perPage: 1,
    //        start: 1,
    perMove: 1,
    trimSpace: false,
    type: 'loop',
    arrows: false,

    padding: '10%',

    breakpoints: {
      3500: {
        gap: '45px',
        perPage: 1,
        padding: '30%',
        //				direction: 'ltr',
        //				fixedWidth: 90,
        //              	fixedHeight: 110,
        //                drag: true,
        //                arrows: true,
        //				perPage: 4,
        //              	height: '110px',
        //				cover: true,
        //				focus: 'left',
      },
      2500: {
        gap: '45px',
        perPage: 2,
        padding: '0%',
        //				direction: 'ltr',
        //				fixedWidth: 90,
        //              	fixedHeight: 110,
        //                drag: true,
        //                arrows: true,
        //				perPage: 4,
        //              	height: '110px',
        //				cover: true,
        //				focus: 'left',
      },
      2100: {
        gap: '45px',
        perPage: 1,
        padding: '20%',
        //				direction: 'ltr',
        //				fixedWidth: 90,
        //              	fixedHeight: 110,
        //                drag: true,
        //                arrows: true,
        //				perPage: 4,
        //              	height: '110px',
        //				cover: true,
        //				focus: 'left',
      },
      1800: {
        gap: '45px',
        perPage: 1,
        padding: '15%',
        //				direction: 'ltr',
        //				fixedWidth: 90,
        //              	fixedHeight: 110,
        //                drag: true,
        //                arrows: true,
        //				perPage: 4,
        //              	height: '110px',
        //				cover: true,
        //				focus: 'left',
      },
      1400: {
        gap: '45px',
        perPage: 1,

        padding: '10%',
        //				direction: 'ltr',
        //				fixedWidth: 90,
        //              	fixedHeight: 110,
        //                drag: true,
        //                arrows: true,
        //				perPage: 4,
        //              	height: '110px',
        //				cover: true,
        //				focus: 'left',
      },
      992: {
        gap: '45px',
        perPage: 1,
        //				direction: 'ltr',
        //				fixedWidth: 90,
        //              	fixedHeight: 110,
        //                drag: true,
        //                arrows: true,
        //				perPage: 4,
        //              	height: '110px',
        //				cover: true,
        //				focus: 'left',
      },
      768: {
        gap: '35px',
        perPage: 1,

        //				direction: 'ltr',
        //				fixedWidth: 90,
        //              	fixedHeight: 110,
        //                drag: true,
        //                arrows: true,
        //				perPage: 4,
        //              	height: '110px',
        //				cover: true,
        //				focus: 'left',
      },
      600: {
        gap: '28px',
        perPage: 1,

        padding: '10%',

        //				direction: 'ltr',
        //				fixedWidth: 90,
        //              	fixedHeight: 110,
        //                drag: true,
        //                arrows: true,
        //				perPage: 4,
        //              	height: '110px',
        //				cover: true,
        //				focus: 'left',
      },
    },
  }).mount();

  // Go to the previous slide when the Previous button is activated
  sliderpostPrev.addEventListener('click', function (e) {
    sliderPost.go('<');
  });

  // Go to the next slide when the Next button is activated
  sliderpostNext.addEventListener('click', function (e) {
    sliderPost.go('>');
  });

  // Go to the previous slide when the Previous button is activated
  sliderpostPrevR.addEventListener('click', function (e) {
    sliderPost.go('<');
  });

  // Go to the next slide when the Next button is activated
  sliderpostNextR.addEventListener('click', function (e) {
    sliderPost.go('>');
  });

  //
  //spliden.on( 'arrows:mounted', function (prev, next, prevIndex, nextIndex) {
  //
  //
  //
  //  });
  //

  //    previousButton.addEventListener('click', function(e) {
  //    splide.go('<');
  //  });

  //bts.addEventListener("click", function(){
  ////        console.log('1');
  //            spliden.mount('next');
  // });
  //  spliden.on( 'arrows:mounted', function ( rate ) {
  //  console.log( rate ); // 0-1
  //} );

  //bts.addEventListener('a.left_a', function (event) {
  //
  //  spliden.on( 'arrows:mounted', function (next){
  //     event.mount(next);
  //  });
  //})

  //  var button = document.querySelector('right_a');
  //
  //    spliden.on('arrows:mounted', function (next) {
  //
  //
  //    button.on('click', function () {    } );
  //    } );

  //  });

  //spliden.on( 'arrows:mounted', function (prev, next, prevIndex, nextIndex) {
  //  // do something
  //
  //
  //  // Go to the previous slide when the Previous button is activated
  //  previousButton.on('click', function() {
  //    spliden.mount(next);
  //  });
  //
  //  // Go to the next slide when the Next button is activated
  //  nextButton.on('click', function() {
  //    spliden.mount(next);
  //  });
  //
  ////  document.querySelectorAll('.home__2 .right_a');
  //
  //// const button = document.querySelector('.right_a');
  //
  ////  button.mount(next);
  //
  ////  previousButton.addEventListener('click', function(e) {
  //////    spliden.go('<');
  ////    spliden.mount(next);
  ////  });
  //
  //});
}

//
//var bts = document.querySelector('.left_a');
//
//spliden.on( 'arrows:mounted', function (next) {
//
//  bts.addEventListener("click", spliden);
//
//   console.log('1');
//});

if (document.getElementById('info__brand')) {
  var spliden = new Splide('#info__brand', {
    easing: 'ease-in-out',
    //    fixedWidth: '300px',
    gap: '100px',
    //        focus: 'center',
    pagination: false,
    perPage: 2,
    //        start: 1,
    perMove: 1,
    trimSpace: false,
    type: 'loop',
    arrows: false,

    padding: '0',

    //                 autoplay     : true,
    //              interval     : 5000,
    paginationDirection: false,
    // drag: false,

    //         speed: 3,

    //  autoScroll: {
    //    speed: 1,
    //  },

    breakpoints: {
      992: {
        pagination: false,
        gap: '45px',
        perPage: 2,
        //				direction: 'ltr',
        //				fixedWidth: 90,
        //              	fixedHeight: 110,
        //                drag: true,
        //                arrows: true,
        //				perPage: 4,
        //              	height: '110px',
        //				cover: true,
        //				focus: 'left',
        paginationDirection: false,
      },
      768: {
        pagination: true,
        gap: '35px',
        perPage: 1,

        //				direction: 'ltr',
        //				fixedWidth: 90,
        //              	fixedHeight: 110,
        //                drag: true,
        //                arrows: true,
        //				perPage: 4,
        //              	height: '110px',
        //				cover: true,
        //				focus: 'left',

        //              paginationDirection: 'ltr',
      },
      600: {
        pagination: true,
        gap: '28px',
        perPage: 1,

        //				direction: 'ltr',
        //				fixedWidth: 90,
        //              	fixedHeight: 110,
        //                drag: true,
        //                arrows: true,
        //				perPage: 4,
        //              	height: '110px',
        //				cover: true,
        //				focus: 'left',

        //              paginationDirection: 'ltr',
      },
    },

    classes: {
      //      arrows: 'splide__arrows your-class-arrows',
      //      arrow : 'splide__arrow your-class-arrow',
      //      prev  : 'splide__arrow--prev your-class-prev',
      //      next  : 'splide__arrow--next your-class-next',
    },
  }).mount();
}

if (document.getElementById('trainings')) {
  var spliden = new Splide('#trainings', {
    easing: 'ease-in-out',
    //    fixedWidth: '300px',
    //          gap: '25px 15px',
    focus: 'center',
    //        pagination: false,
    //        perPage  : 3,
    //        start: 1,
    perMove: 1,
    trimSpace: false,
    type: 'loop',
    arrows: false,

    //     padding: '10%',

    //                 autoplay     : true,
    //              interval     : 5000,
    //  paginationDirection: false,
    // drag: false,

    //         speed: 3,

    //  autoScroll: {
    //    speed: 1,
    //  },

    breakpoints: {
      9999: {
        gap: '25px 15px',
        perPage: 3,
        padding: '10%',
        //               padding: '10%',
        //				direction: 'ltr',
        //				fixedWidth: 90,
        //              	fixedHeight: 110,
        //                drag: true,
        //                arrows: true,
        //				perPage: 4,
        //              	height: '110px',
        //				cover: true,
        //				focus: 'left',
        //              paginationDirection: false,
      },
      1400: {
        gap: '25px 15px',
        perPage: 3,
        padding: '10%',
        //               padding: '10%',
        //				direction: 'ltr',
        //				fixedWidth: 90,
        //              	fixedHeight: 110,
        //                drag: true,
        //                arrows: true,
        //				perPage: 4,
        //              	height: '110px',
        //				cover: true,
        //				focus: 'left',
        //              paginationDirection: false,
      },
      992: {
        gap: '25px 15px',
        perPage: 1,
        padding: '25%',
        //               padding: '10%',
        //				direction: 'ltr',
        //				fixedWidth: 90,
        //              	fixedHeight: 110,
        //                drag: true,
        //                arrows: true,
        //				perPage: 4,
        //              	height: '110px',
        //				cover: true,
        //				focus: 'left',
        //              paginationDirection: false,
      },
      768: {
        gap: '10px',
        perPage: 1,
        padding: '15%',
        //             destroy: true,

        //				direction: 'ltr',
        //				fixedWidth: 90,
        //              	fixedHeight: 110,
        //                drag: true,
        //                arrows: true,
        //				perPage: 4,
        //              	height: '110px',
        //				cover: true,
        //				focus: 'left',

        //              paginationDirection: 'ltr',
      },
      300: {
        gap: '20px',
        //                      perPage  : 1,
        padding: '35%',
        // destroy: true,
        //				direction: 'ltr',
        //				fixedWidth: 90,
        //              	fixedHeight: 110,
        //                drag: true,
        //                arrows: true,
        //				perPage: 4,
        //              	height: '110px',
        //				cover: true,
        //				focus: 'left',

        //              paginationDirection: 'ltr',
      },
    },

    classes: {
      //      arrows: 'splide__arrows your-class-arrows',
      //      arrow : 'splide__arrow your-class-arrow',
      //      prev  : 'splide__arrow--prev your-class-prev',
      //      next  : 'splide__arrow--next your-class-next',
    },
  }).mount();
}

if (document.getElementById('workshop')) {
  var spliden = new Splide('#workshop', {
    easing: 'ease-in-out',
    //    fixedWidth: '300px',
    gap: '0',
    focus: 'center',
    //        pagination: false,
    perPage: 3,
    //        start: 1,
    perMove: 1,
    trimSpace: false,
    type: 'loop',
    arrows: false,

    padding: '0',

    //                 autoplay     : true,
    //              interval     : 5000,
    //  paginationDirection: false,
    // drag: false,

    //         speed: 3,

    //  autoScroll: {
    //    speed: 1,
    //  },

    breakpoints: {
      1150: {
        gap: '0px',
        perPage: 2,

        fixedWidth: false,
      },
      800: {
        gap: '0px',
        perPage: 1,
        fixedWidth: false,

        //              fixedWidth : '95%',
        //				direction: 'ltr',
        //				fixedWidth: 90,
        //              	fixedHeight: 110,
        //                drag: true,
        //                arrows: true,
        //				perPage: 4,
        //              	height: '110px',
        //				cover: true,
        //				focus: 'left',
        //              paginationDirection: false,
      },

      600: {
        //              fixedWidth : '30rem',
        fixedWidth: false,

        gap: '0px',
        perPage: 1,

        padding: '50px',
        // destroy: true,
        //				direction: 'ltr',
        //				fixedWidth: 90,
        //              	fixedHeight: 110,
        //                drag: true,
        //                arrows: true,
        //				perPage: 4,
        //              	height: '110px',
        //				cover: true,
        //				focus: 'left',

        //              paginationDirection: 'ltr',
      },
    },

    classes: {
      //      arrows: 'splide__arrows your-class-arrows',
      //      arrow : 'splide__arrow your-class-arrow',
      //      prev  : 'splide__arrow--prev your-class-prev',
      //      next  : 'splide__arrow--next your-class-next',
    },
  }).mount();
}

if (document.getElementById('brand_logo')) {
  var spliden = new Splide('#brand_logo', {
    easing: 'ease-in-out',
    //    fixedWidth: '300px',
    gap: '100px',
    //        focus: 'center',
    pagination: false,
    perPage: 6,
    //        start: 1,
    perMove: 1,
    trimSpace: false,
    type: 'loop',
    arrows: false,

    padding: '0',

    //                 autoplay     : true,
    //              interval     : 5000,
    //  paginationDirection: false,
    // drag: false,

    //         speed: 3,

    //  autoScroll: {
    //    speed: 1,
    //  },

    breakpoints: {
      992: {
        gap: '45px',
        perPage: 4,
        //				direction: 'ltr',
        //				fixedWidth: 90,
        //              	fixedHeight: 110,
        //                drag: true,
        //                arrows: true,
        //				perPage: 4,
        //              	height: '110px',
        //				cover: true,
        //				focus: 'left',
        //              paginationDirection: false,
        destroy: true,
      },
      800: {
        gap: '35px',
        perPage: 1,
        destroy: true,

        //				direction: 'ltr',
        //				fixedWidth: 90,
        //              	fixedHeight: 110,
        //                drag: true,
        //                arrows: true,
        //				perPage: 4,
        //              	height: '110px',
        //				cover: true,
        //				focus: 'left',

        //              paginationDirection: 'ltr',
      },
      600: {
        gap: '28px',
        perPage: 1,
        destroy: true,
        //				direction: 'ltr',
        //				fixedWidth: 90,
        //              	fixedHeight: 110,
        //                drag: true,
        //                arrows: true,
        //				perPage: 4,
        //              	height: '110px',
        //				cover: true,
        //				focus: 'left',

        //              paginationDirection: 'ltr',
      },
    },

    classes: {
      //      arrows: 'splide__arrows your-class-arrows',
      //      arrow : 'splide__arrow your-class-arrow',
      //      prev  : 'splide__arrow--prev your-class-prev',
      //      next  : 'splide__arrow--next your-class-next',
    },
  }).mount();
}

if (document.getElementById('testimonias')) {
  var testimoniasPost;
  var testimoniasPostPrev, testimoniasPostNext;
  var testimoniasPrevR, testimoniasNextR;

  testimoniasPostPrev = document.querySelector('.home__8 .right_a');
  testimoniasPostNext = document.querySelector('.home__8 .left_a');

  testimoniasPrevR = document.querySelector('.home__8 .previous__');
  testimoniasNextR = document.querySelector('.home__8 .next__');

  var testimoniasPost = new Splide('#testimonias', {
    easing: 'ease-in-out',
    //    fixedWidth: '300px',
    gap: '0px',
    //        focus: 'center',
    pagination: false,
    perPage: 1,
    start: 1,
    perMove: 1,
    trimSpace: false,
    type: 'loop',
    arrows: false,

    padding: '0px',

    breakpoints: {
      600: {
        easing: 'ease-in-out',
        //    fixedWidth: '300px',
        gap: '0px',
        //        focus: 'center',
        pagination: false,
        perPage: 1,
        start: 1,
        perMove: 1,
        trimSpace: false,
        type: 'loop',
        arrows: false,

        padding: '0px',
      },
    },

    //  classes: {
    //		arrows: 'splide__arrows your-class-arrows',
    //		arrow : 'splide__arrow your-class-arrow',
    //		prev  : 'splide__arrow--prev your-class-prev ',
    //		next  : 'splide__arrow--next your-class-next',
    //  },
  }).mount();

  // Go to the previous slide when the Previous button is activated
  testimoniasPrevR.addEventListener('click', function (e) {
    testimoniasPost.go('<');
  });

  // Go to the next slide when the Next button is activated
  testimoniasNextR.addEventListener('click', function (e) {
    testimoniasPost.go('>');
  });

  // Go to the previous slide when the Previous button is activated
  testimoniasPostPrev.addEventListener('click', function (e) {
    testimoniasPost.go('<');
  });

  // Go to the next slide when the Next button is activated
  testimoniasPostNext.addEventListener('click', function (e) {
    testimoniasPost.go('>');
  });
}

if (document.querySelector('.members')) {
  var membersPost;
  var membersPostPrev, membersPostNext;
  //var membersPrevR, membersNextR;

  membersPostPrev = document.querySelector('.app__5 .right_a');
  membersPostNext = document.querySelector('.app__5 .left_a');

  var membersPost = new Splide('.members', {
    easing: 'ease-in-out',
    //    fixedWidth: '300px',
    gap: '17px',
    focus: 'center',
    pagination: true,
    perPage: 3,
    //        start: 1,
    //         perMove: 1,
    //        trimSpace: false,
    type: 'loop',
    arrows: false,

    //      padding: '10%',

    fixedWidth: 549,

    breakpoints: {
      1200: {
        fixedWidth: 549,

        gap: '17px',
        focus: 'center',
        pagination: false,
        perPage: 2,
        //        start: 1,
        //         perMove: 1,
        //        trimSpace: false,
        type: 'loop',
        arrows: false,

        padding: '10%',
      },

      991: {
        fixedWidth: 450,

        gap: '17px',
        focus: 'center',
        pagination: true,
        perPage: 1,
        //        start: 1,
        //         perMove: 1,
        //        trimSpace: false,
        type: 'loop',
        arrows: false,

        padding: '0%',
      },

      600: {
        fixedWidth: 315,

        gap: '17px',
        focus: 'center',
        pagination: true,
        perPage: 1,
        //        start: 1,
        //         perMove: 1,
        //        trimSpace: false,
        type: 'loop',
        arrows: false,

        padding: '0%',
      },
    },

    //  classes: {
    //		arrows: 'splide__arrows your-class-arrows',
    //		arrow : 'splide__arrow your-class-arrow',
    //		prev  : 'splide__arrow--prev your-class-prev ',
    //		next  : 'splide__arrow--next your-class-next',
    //  },
  }).mount();

  // Go to the previous slide when the Previous button is activated
  membersPostPrev.addEventListener('click', function (e) {
    membersPost.go('<');
  });

  // Go to the next slide when the Next button is activated
  membersPostNext.addEventListener('click', function (e) {
    membersPost.go('>');
  });
}

//  Slider with training testimonials
if (document.getElementById('training-slider')) {
  var sliderTestimony;
  var sliderTestimonyPrev, sliderTestimonyNext;
  var sliderTestimonyPrevR, sliderTestimonyNextR;

  sliderTestimonyPrev = document.querySelector(
    '.trainings-arrow-nav  .right_a'
  );
  sliderTestimonyNext = document.querySelector('.trainings-arrow-nav .left_a');

  sliderTestimonyPrevR = document.querySelector(
    '.trainings-arrow-nav .right_r'
  );
  sliderTestimonyNextR = document.querySelector('.trainings-arrow-nav .left_r');

  var sliderTestimony = new Splide('#training-slider', {
    easing: 'ease-in-out',
    focus: 'center',
    perPage: 3,
    type: 'loop',
    arrows: false,
    padding: '30%',

    breakpoints: {
      3500: {
        perPage: 4,
      },
      2500: {
        perPage: 4,
      },
      2100: {
        perPage: 3,
        fixedWidth: 583,
      },
      1800: {
        perPage: 3,
      },
      1400: {
        perPage: 3,
      },
      992: {
        destroy: true,
      },
    },
  }).mount();

  // Go to the previous slide when the Previous button is activated
  if (sliderTestimonyPrev) {
    sliderTestimonyPrev.addEventListener('click', function (e) {
      sliderTestimony.go('<');
    });
  }

  // Go to the next slide when the Next button is activated
  if (sliderTestimonyNext) {
    sliderTestimonyNext.addEventListener('click', function (e) {
      sliderTestimony.go('>');
    });
  }

  // Go to the previous slide when the Previous button is activated
  if (sliderTestimonyPrevR) {
    sliderTestimonyPrevR.addEventListener('click', function (e) {
      sliderTestimony.go('<');
    });
  }

  // Go to the next slide when the Next button is activated
  if (sliderTestimonyNextR) {
    sliderTestimonyNextR.addEventListener('click', function (e) {
      sliderTestimony.go('>');
    });
  }
}

// Slider with retreats & sessions
if (document.getElementById('retreats-slider')) {
  var sliderRetreats;
  var sliderRetreatsPrev, sliderRetreatsNext;
  var sliderRetreatsPrevR, sliderRetreatsNextR;

  sliderRetreatsPrev = document.querySelector('.retreats-arrow-nav .right_a');
  sliderRetreatsNext = document.querySelector('.retreats-arrow-nav .left_a');

  sliderRetreatsPrevR = document.querySelector('.retreats-arrow-nav .right_r');
  sliderRetreatsNextR = document.querySelector('.retreats-arrow-nav .left_r');

  var sliderRetreats = new Splide('#retreats-slider', {
    easing: 'ease-in-out',
    focus: 'center',
    perPage: 3,
    type: 'loop',
    arrows: false,
    padding: '30%',

    breakpoints: {
      3500: {
        perPage: 4,
      },
      2500: {
        perPage: 4,
      },
      2100: {
        perPage: 3,
        fixedWidth: 583,
      },
      1800: {
        perPage: 3,
      },
      1400: {
        perPage: 3,
      },
      992: {
        destroy: true,
      },
    },
  }).mount();

  // Go to the previous slide when the Previous button is activated
  if (sliderRetreatsPrev) {
    sliderRetreatsPrev.addEventListener('click', function (e) {
      sliderRetreats.go('<');
    });
  }

  // Go to the next slide when the Next button is activated
  if (sliderRetreatsNext) {
    sliderRetreatsNext.addEventListener('click', function (e) {
      sliderRetreats.go('>');
    });
  }

  // Go to the previous slide when the Previous button is activated
  if (sliderRetreatsPrevR) {
    sliderRetreatsPrevR.addEventListener('click', function (e) {
      sliderRetreats.go('<');
    });
  }

  // Go to the next slide when the Next button is activated
  if (sliderRetreatsNextR) {
    sliderRetreatsNextR.addEventListener('click', function (e) {
      sliderRetreats.go('>');
    });
  }
}

// Slider with more other testimonials
if (document.getElementById('video-testimonials-slider-1')) {
  var sliderMore;
  var sliderMorePrev, sliderMoreNext;
  var sliderMorePrevR, sliderMoreNextR;

  sliderMorePrev = document.querySelector(
    '.more-testimonials-arrow-nav .right_a'
  );
  sliderMoreNext = document.querySelector(
    '.more-testimonials-arrow-nav .left_a'
  );

  sliderMorePrevR = document.querySelector(
    '.more-testimonials-arrow-nav .right_r'
  );
  sliderMoreNextR = document.querySelector(
    '.more-testimonials-arrow-nav .left_r'
  );

  var sliderMore = new Splide('#video-testimonials-slider-1', {
    easing: 'ease-in-out',
    focus: 'center',
    perPage: 3,
    type: 'loop',
    pagination: false,
    arrows: false,
    padding: '30%',

    breakpoints: {
      3500: {
        perPage: 4,
      },
      2500: {
        perPage: 4,
      },
      2100: {
        perPage: 3,
        fixedWidth: 583,
      },
      1800: {
        perPage: 3,
      },
      1400: {
        perPage: 3,
      },
      992: {
        destroy: true,
      },
    },
  }).mount();

  // Go to the previous slide when the Previous button is activated
  if (sliderMorePrev) {
    sliderMorePrev.addEventListener('click', function (e) {
      sliderRetreats.go('<');
    });
  }

  // Go to the next slide when the Next button is activated
  if (sliderMoreNext) {
    sliderMoreNext.addEventListener('click', function (e) {
      sliderRetreats.go('>');
    });
  }

  // Go to the previous slide when the Previous button is activated
  if (sliderMorePrevR) {
    sliderMorePrevR.addEventListener('click', function (e) {
      sliderRetreats.go('<');
    });
  }

  // Go to the next slide when the Next button is activated
  if (sliderMoreNextR) {
    sliderMoreNextR.addEventListener('click', function (e) {
      sliderRetreats.go('>');
    });
  }
}

if (document.getElementById('video-testimonials-slider-2')) {
  var sliderMore;
  var sliderMorePrev, sliderMoreNext;
  var sliderMorePrevR, sliderMoreNextR;

  sliderMorePrev = document.querySelector(
    '.more-testimonials-arrow-nav .right_a'
  );
  sliderMoreNext = document.querySelector(
    '.more-testimonials-arrow-nav .left_a'
  );

  sliderMorePrevR = document.querySelector(
    '.more-testimonials-arrow-nav .right_r'
  );
  sliderMoreNextR = document.querySelector(
    '.more-testimonials-arrow-nav .left_r'
  );

  var sliderMore = new Splide('#video-testimonials-slider-2', {
    easing: 'ease-in-out',
    focus: 'center',
    perPage: 3,
    type: 'loop',
    arrows: false,
    padding: '30%',

    breakpoints: {
      3500: {
        perPage: 4,
      },
      2500: {
        perPage: 4,
      },
      2100: {
        perPage: 3,
        fixedWidth: 583,
      },
      1800: {
        perPage: 3,
      },
      1400: {
        perPage: 3,
      },
      992: {
        destroy: true,
      },
    },
  }).mount();

  // Go to the previous slide when the Previous button is activated
  if (sliderMorePrev) {
    sliderMorePrev.addEventListener('click', function (e) {
      sliderRetreats.go('<');
    });
  }

  // Go to the next slide when the Next button is activated
  if (sliderMoreNext) {
    sliderMoreNext.addEventListener('click', function (e) {
      sliderRetreats.go('>');
    });
  }

  // Go to the previous slide when the Previous button is activated
  if (sliderMorePrevR) {
    sliderMorePrevR.addEventListener('click', function (e) {
      sliderRetreats.go('<');
    });
  }

  // Go to the next slide when the Next button is activated
  if (sliderMoreNextR) {
    sliderMoreNextR.addEventListener('click', function (e) {
      sliderRetreats.go('>');
    });
  }
}

//  Slider with facilitator list
if (document.getElementById('facilitator-slider')) {
  var sliderFac;
  var sliderFacPrev, sliderFacNext;
  var sliderFacPrevR, sliderFacNextR;

  sliderFacPrev = document.querySelector('.facilitator-arrow-nav  .right_a');
  sliderFacNext = document.querySelector('.facilitator-arrow-nav .left_a');

  sliderFacPrevR = document.querySelector('.facilitator-arrow-nav .right_r');
  sliderFacNextR = document.querySelector('.facilitator-arrow-nav .left_r');

  var sliderFac = new Splide('#facilitator-slider', {
    easing: 'ease-in-out',
    focus: 'center',
    perPage: 3,
    type: 'loop',
    arrows: false,
    // padding: '30%',

    breakpoints: {
      3500: {
        perPage: 1,
      },
      2500: {
        perPage: 1,
      },
      2100: {
        perPage: 1,
        // fixedWidth: 583,
      },
      1800: {
        perPage: 1,
      },
      1400: {
        perPage: 1,
      },
      1200: {
        destroy: true,
      },
    },
  }).mount();

  // Go to the previous slide when the Previous button is activated
  if (sliderFacPrev) {
    sliderFacPrev.addEventListener('click', function (e) {
      sliderFac.go('<');
    });
  }

  // Go to the next slide when the Next button is activated
  if (sliderFacNext) {
    sliderFacNext.addEventListener('click', function (e) {
      sliderFac.go('>');
    });
  }

  // Go to the previous slide when the Previous button is activated
  if (sliderFacPrevR) {
    sliderFacPrevR.addEventListener('click', function (e) {
      sliderFac.go('<');
    });
  }

  // Go to the next slide when the Next button is activated
  if (sliderFacNextR) {
    sliderFacNextR.addEventListener('click', function (e) {
      sliderFac.go('>');
    });
  }
}

//  Slider with optional retreat
if (document.getElementById('optional-slider')) {
  var sliderRet;
  var sliderRetPrev, sliderRetNext;
  var sliderRetPrevR, sliderRetNextR;

  sliderRetPrev = document.querySelector(
    '.optional-retreat-arrow-nav .right_a'
  );
  sliderRetNext = document.querySelector('.optional-retreat-arrow-nav .left_a');

  sliderRetPrevR = document.querySelector(
    '.optional-retreat-arrow-nav .right_r'
  );
  sliderRetNextR = document.querySelector(
    '.optional-retreat-arrow-nav .left_r'
  );

  var sliderRet = new Splide('#optional-slider', {
    easing: 'ease-in-out',
    focus: 'center',
    perPage: 3,
    type: 'loop',
    arrows: false,
    pagination: false,
    // padding: '30%',

    breakpoints: {
      3500: {
        perPage: 1,
      },
      2500: {
        perPage: 1,
      },
      2100: {
        perPage: 1,
      },
      1800: {
        perPage: 1,
      },
      1400: {
        perPage: 1,
      },
      1200: {
        perPage: 1,
      },
      992: {
        perPage: 1,
        pagination: true,
      },
    },
  }).mount();

  // // Go to the previous slide when the Previous button is activated
  if (sliderRetPrev) {
    sliderRetPrev.addEventListener('click', function (e) {
      sliderRet.go('<');
    });
  }

  // Go to the next slide when the Next button is activated
  if (sliderRetNext) {
    sliderRetNext.addEventListener('click', function (e) {
      sliderRet.go('>');
    });
  }

  // Go to the previous slide when the Previous button is activated
  if (sliderRetPrevR) {
    sliderRetPrevR.addEventListener('click', function (e) {
      sliderRet.go('<');
    });
  }

  // Go to the next slide when the Next button is activated
  if (sliderRetNextR) {
    sliderRetNextR.addEventListener('click', function (e) {
      sliderRet.go('>');
    });
  }
}

if (document.querySelector('.retreat__map')) {
  var retreatssPost;
  var retreatsPostPrev, retreatsPostNext;
  //var membersPrevR, membersNextR;

  retreatsPostPrev = document.querySelector('.retreat__4 .right_r');
  retreatsPostNext = document.querySelector('.retreat__4 .left_r');

  var retreatssPost = new Splide('.retreat__map', {
    easing: 'ease-in-out',
    //    fixedWidth: '300px',
    gap: '17px',
    //        focus: 'center',
    pagination: false,
    perPage: 1,
    start: 1,
    perMove: 1,
    //        trimSpace: false,
    type: 'loop',
    arrows: false,

    //      padding: '10%',

    //               fixedWidth: 549,

    //  classes: {
    //		arrows: 'splide__arrows your-class-arrows',
    //		arrow : 'splide__arrow your-class-arrow',
    //		prev  : 'splide__arrow--prev your-class-prev ',
    //		next  : 'splide__arrow--next your-class-next',
    //  },
  }).mount();

  // Go to the previous slide when the Previous button is activated

  if (retreatsPostPrev) {
    retreatsPostPrev.addEventListener('click', function (e) {
      retreatssPost.go('<');
    });
  }
  // Go to the next slide when the Next button is activated
  if (retreatsPostNext) {
    retreatsPostNext.addEventListener('click', function (e) {
      retreatssPost.go('>');
    });
  }
}

if (document.querySelector('.breathwork-levels')) {
  var levelsPost;
  var levelsPostPrev, levelsPostNext;
  //var membersPrevR, membersNextR;

  levelsPostPrev = document.querySelector(
    '.breathwork-levels-one-two__4 .right_a'
  );
  levelsPostNext = document.querySelector(
    '.breathwork-levels-one-two__4 .left_a'
  );

  var levelsPost = new Splide('.breathwork-levels', {
    easing: 'ease-in-out',
    //    fixedWidth: '300px',
    gap: '17px',
    //        focus: 'center',
    pagination: true,
    perPage: 1,
    start: 0,
    perMove: 1,
    //        trimSpace: false,
    type: 'loop',
    arrows: false,

    //      padding: '10%',

    //               fixedWidth: 549,

    //  classes: {
    //		arrows: 'splide__arrows your-class-arrows',
    //		arrow : 'splide__arrow your-class-arrow',
    //		prev  : 'splide__arrow--prev your-class-prev ',
    //		next  : 'splide__arrow--next your-class-next',
    //  },
  }).mount();

  // Go to the previous slide when the Previous button is activated

  if (levelsPostPrev) {
    levelsPostPrev.addEventListener('click', function (e) {
      levelsPost.go('<');
    });
  }
  // Go to the next slide when the Next button is activated
  if (levelsPostNext) {
    levelsPostNext.addEventListener('click', function (e) {
      levelsPost.go('>');
    });
  }
}

if (document.getElementById('affiliate-text-slider')) {
  var affiliateSlider = new Splide('#affiliate-text-slider', {
    type: 'slide',
    autoWidth: true,
    gap: 34,
  });
  affiliateSlider.mount();
  document.querySelector('.arrows .left_a').addEventListener('click', () => {
    affiliateSlider.go('<');
  });
  document.querySelector('.arrows .right_a').addEventListener('click', () => {
    affiliateSlider.go('>');
  });
}

if (document.querySelector('.breathwork-testimonials')) {
  var breathworktesti = new Splide('.breathwork-testimonials', {
    type: 'slide',
    autoWidth: true,
    perPage: 2,
    gap: 34,
    arrows: false,
    perMove: 1,
  });
  breathworktesti.mount();
  document
    .querySelector('.breathwork-levels-one-two__6 .left_a')
    .addEventListener('click', () => {
      breathworktesti.go('<');
    });
  document
    .querySelector('.breathwork-levels-one-two__6 .right_a')
    .addEventListener('click', () => {
      breathworktesti.go('>');
    });
}

if (document.querySelector('#about-training-slider')) {
  var aboutTrainingSlider = new Splide('#about-training-slider', {
    type: 'slide',
    autoWidth: true,
    perPage: 2,
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
    perPage: 2,
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

//  bodywork level 1

if (document.getElementById('bodywork-trainers-slider')) {
  var bodyworkTrainers = new Splide('#bodywork-trainers-slider', {
    type: 'slide',
    autoWidth: true,
    gap: 67,
    breakpoints: {
      600: {
        destroy: true,
      },
    },
  });
  bodyworkTrainers.mount();
  document
    .querySelector('.bodywork-trainers .arrows .left_a')
    .addEventListener('click', () => {
      bodyworkTrainers.go('<');
    });
  document
    .querySelector('.bodywork-trainers .arrows .right_a')
    .addEventListener('click', () => {
      bodyworkTrainers.go('>');
    });
}

if (document.getElementById('bodywork-testimonials-slider')) {
  var bodyworkTestimonials = new Splide('#bodywork-testimonials-slider', {
    type: 'slide',
    autoWidth: true,
    gap: 67,
    breakpoints: {
      600: {
        destroy: true,
      },
    },
  });
  bodyworkTestimonials.mount();
  document
    .querySelector('.bodywork-testimonials .arrows .left_a')
    .addEventListener('click', () => {
      bodyworkTestimonials.go('<');
    });
  document
    .querySelector('.bodywork-testimonials .arrows .right_a')
    .addEventListener('click', () => {
      bodyworkTestimonials.go('>');
    });
}

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

import './js/';
// NEED import

// SCSS import
import './scss/style.scss';
//import './scss/compress.scss';
