
function recentNews(){
    $(".recentNews-modal").fadeIn('d-block');
    $(".popup-Overlay").fadeToggle('d-block');
}

$(document).ready(function(){
  $(".close-popup").click(function () {
      console.log("55");
    $(".recentNews-modal").fadeOut('d-block');
    $(".popup-Overlay").fadeToggle('d-block');

  })

})

function timeModal(){
    $(".time-modal").fadeToggle('d-block');
    $(".popup-Overlay").fadeToggle('d-block');
    // $(".tooltip").removeClass("show");
    // $(".tooltip").removeClass("show");
    // window.open('https://time.saso.gov.sa/', '_blank');
}
function onblurfunc(){
    $(".tooltip").removeClass("show");
    console.log("444444444444");
}
function calenderModal(){
    $(".calender-modal").fadeToggle('d-block');
    $(".popup-Overlay").fadeToggle('d-block');
    $(".tooltip").removeClass("show");
}

$(document).ready(function(){
  $(".popup-Overlay").click(function () {
      console.log("777");
      $(".recentNews-modal").fadeOut('d-block');
    $(".time-modal").fadeOut('d-block');
    $(".calender-modal").fadeOut('d-block');
    $(".popup-Overlay").fadeToggle('d-block');
  })

})

// function dateHover(){
//     console.log("xxx");
//     $(".cal-date-hover").fadeIn('d-block');
// }
// $(document).ready(function(){
//     $(".cal-onhover-a").hover(function () {
//         console.log("xxx");
//         $(".cal-date-hover").fadeToggle('d-block');
//     })
  
//   })
$(document).ready(function(){
    // document.getElementsByClassName("cal-date-hover").onHover(function () {
    //     console.log("xxx");
    //     $(".cal-date-hover").fadeToggle('d-block');
    // })
    console.log("readyyy");
  })
//   document.addEventListener("DOMContentLoaded", function() {
//     // Your code to run since DOM is loaded and ready
//     console.log(" Your code to run since DOM is loaded and ready");
// });
// $(function() {
//     console.log("ready!");
//     $(".cal-onhover-a").hover(function () {
//                 console.log("xxx");
//                 $(".cal-date-hover").fadeToggle('d-block');
//             })
// });





function initScript() {

    //------- News slider at home page ----//
    if ($('.newsSlider-new').length > 0) {
        // it exists
        var swiper3 = new Swiper('.newsSlider-new', {
            // slidesPerView: 5,
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            initialSlide: 2,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 500,
              modifier: 1,
              slideShadows: false
            },
            pagination: {
              el: ".news-section .swiper-pagination",
              dynamicBullets: true
            }
            // Responsive breakpoints
            // breakpoints: {
            //     768: {
            //         slidesPerView: 2,
            //         spaceBetween: 10,
            //         slidesPerGroup: 2,
            //     }
            // }

        });
    }


    if ($('.download-swiper').length > 0) {
        var download = new Swiper(".download-swiper", {
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 1,
            initialSlide: 1,
            loop: true,
            autoplay: 
            {
              delay: 0,
            },
            speed:3000,
        });
    }

    if ($('.download-swiper-2').length > 0) {
      var download = new Swiper(".download-swiper-2", {
          centeredSlides: true,
          slidesPerView: 1,
          spaceBetween: 1,
          initialSlide: 0,
          loop: true,
          autoplay: 
          {
            delay: 0,
          },
          speed:3000,
      });
  }


    if ($('.mainslider').length > 0) {
        // it exists
        // $('.mainslider').height($(window).height());
        $(window).resize(function () {
            $('.mainslider').height($(window).height());
        });

        var swiper1 = new Swiper('.mainslider-container', {
            speed: 2000,
            // Enable lazy loading
            lazy: true,
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: true,
              },
            navigation: {
                nextEl: '.mainslider .swiper-button-next',
                prevEl: '.mainslider .swiper-button-prev',
            },
            /*autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },*/
            effect: 'slide',
            watchOverflow: true,

        });

        /*---Pause the main slider on mouse hover start---*/
        /*
                $(".main_slider").hover(function() {
                    swiper1.autoplay.stop();
                }, function() {
                    swiper1.autoplay.start();
                });
        */
        /*---Pause the main slider on mouse hover end---*/

    }


    // scroll btn on the main slider
    $('.scroller').on('click', function () {
        $('body, html, #s4-workspace').animate({ scrollTop: $("#home-content").offset().top }, 1000);
        return false;
    });
}

$(document).ready(function () {
    initScript();
});