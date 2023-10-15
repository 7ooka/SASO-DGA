function initScript() {
    if ($('.innerMainslider').length > 0) {
        // it exists
        // $('.innerMainslider').height($(window).height());
        $(window).resize(function () {
            $('.innerMainslider').height($(window).height());
        });

        var swiper1 = new Swiper('.innerMainslider-container', {
            speed: 2000,
            // Enable lazy loading
            lazy: true,
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: true,
              },
            navigation: {
                nextEl: '.innerMainslider .swiper-button-next',
                prevEl: '.innerMainslider .swiper-button-prev',
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
    $('.inner-scroller .scroll-me').on('click', function () {
        console.log("123");
        $('body, html, #s4-workspace').animate({ scrollTop: $("#quality-slider").offset().top -100 }, 1000);
        return false;
    });





    if ($('.gawdaSlider').length > 0) {
        // it exists
        // $('.gawdaSlider').height($(window).height());
        $(window).resize(function () {
            $('.gawdaSlider').height($(window).height());
        });

        var swiper1 = new Swiper('.gawdaSlider-container', {
            // speed: 2000,
            slidesPerView: 6,
            spaceBetween: 20,
            navigation: {
                nextEl: '.gawdaSlider .swiper-button-next',
                prevEl: '.gawdaSlider .swiper-button-prev',
            },
            /*autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },*/

              // Responsive breakpoints
              breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                1400: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                }
            }


        });

      

    }


    $(".gawdaSlider .item .nav-link").on("click", function () {
        $(".gawdaSlider .item .nav-link").removeClass('active')
        // $(this).addClass('active')
    
        console.log("1111");
       
      })


      if ($('.tabsSlider').length > 0) {
        // it exists
        // $('.tabsSlider').height($(window).height());
        $(window).resize(function () {
            $('.tabsSlider').height($(window).height());
        });

        var swiper1 = new Swiper('.tabsSlider-container', {
            // speed: 2000,
            slidesPerView: 6,
            spaceBetween: 20,
            navigation: {
                nextEl: '.tabsSlider .swiper-button-next',
                prevEl: '.tabsSlider .swiper-button-prev',
            },
            /*autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },*/

             // Responsive breakpoints
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                // 575: {
                //     slidesPerView: 2,
                //     spaceBetween: 10,
                // },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1400: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                }
            }

        });

        
    }
    $(".tabsSlider .item .nav-link").on("click", function () {
        $(".tabsSlider .item .nav-link").removeClass('active')
        // $(this).addClass('active')
    
        console.log("1111");
       
      })      

      $( '.silder-item' ).on( 'click', '.vid', function () {
        // $( this ).siblings( 'video' ).show();
        $( '.silder-item .video-content' ).addClass('show')
        $( '.silder-item .x-btn' ).addClass('show')
        console.log("555");
    });

    $( '.silder-item' ).on( 'click', '.x-btn', function () {
        // $( this ).siblings( 'video' ).show();
        $( '.silder-item .video-content' ).removeClass('show')
        $( '.silder-item .x-btn' ).removeClass('show')
        console.log("555");
    });
}

$(document).ready(function () {
    initScript();
});

