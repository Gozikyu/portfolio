$(window).on("load scroll", function (){

  const elem = $(".animate__animated");
  
  elem.each(function (){
    const isAnimate = $(this).data("animate");
    const elemOffset = $(this).offset().top;
    const scrollPosition = $(window).scrollTop();
    const windowsHeight = window.innerHeight;

    if(scrollPosition + windowsHeight -100 > elemOffset){
      $(this).addClass(isAnimate);
    }
  });
})