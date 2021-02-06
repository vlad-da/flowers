$(document).ready(function () {
  const flowersSlider = new Swiper('.flowers-slider', {
  // Параметры слайдера
  loop: true,
  slidesPerView: 6,

  // Стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //Настройки адаптивной версии
  breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 6,
      }
    }

  });

  const reviewsSlider = new Swiper('.reviews-slider', {
    // Параметры слайдера
    loop: true,
    slidesPerView: 1,

    // Стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  $("#review-1").on('click', function() {

  $.fancybox.open([
    {
      src  : 'https://myfamilyvalues.ru/images/detailed/2/IMG_5869.jpg',
      opts : {
        caption : 'First caption',
        thumb   : 'https://myfamilyvalues.ru/images/detailed/2/IMG_5869.jpg'
      }
    },
    {
      src  : 'https://krasnodar.aipa.ru/150832-thickbox_default/nezhnyy-buket-raskraska-kartina-po-nomeram-na-holste.jpg',
      opts : {
        caption : 'Second caption',
        thumb   : 'https://krasnodar.aipa.ru/150832-thickbox_default/nezhnyy-buket-raskraska-kartina-po-nomeram-na-holste.jpgы'
      }
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });

});
});