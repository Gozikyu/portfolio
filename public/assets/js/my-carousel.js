const carouselModule = (() =>{
  return {
    configure: () => {
      const mySwiper = new Swiper('.swiper-container',{
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 5000,
        },

        pagination: { 
          el: '.swiper-pagination' 
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints: {
         1023: {
           slidesPerView: 3,
           spaceBetween: 10,
           autoplay: {
             delay: 3000,
           }
         }
        }

      });
    }
  }
})();

carouselModule.configure()