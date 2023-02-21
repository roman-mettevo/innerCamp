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
