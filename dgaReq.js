$("body").on("click", ".ds-navdropdown-header", function () {
    if ($(this).hasClass("active")) {
        $(this)
            .next()
            .slideToggle(400);
        $(this).removeClass("active");
        $(this)
            .children()
            .css("transition", "transform 0.2s linear");
    } else {
        $(this)
            .next()
            .slideToggle(400);
        $(this).addClass("active");
        $(this)
            .children()
            .css("transition", "transform 0.2s linear");
    }
});


function selectMenu() {
    const deafultValue = 0; /* set Active: index start from zero */
    /* set the deafult select-menu value */
    $('#search-select').prop('selectedIndex', deafultValue);
    //hides dropdown content
    $(".dropdown-content-bond").hide();
    //unhides index option content
    $(".dropdown-content-bond").eq(deafultValue).show();
    //listen to dropdown for change
    $("#search-select").change(function () {
        //rehide content on change
        $('.dropdown-content-bond').hide();
        //unhides current item
        var currentIndex = $(this).prop('selectedIndex');
        // console.log(currentIndex);
        $(".dropdown-content-bond").eq(currentIndex).show();
    });
}


$(document).ready(function () {

    $("#toRateEvent").click(function () {
        $('.toRateEL').slideDown()
        $(this).hide()
    })
    $(".closeRating").click(function () {
        $('.toRateEL').hide()
        $("#toRateEvent").show()
    })
    // AO select dropdown menu
    if ($('.branchesV2').length) {
        selectMenu()
    }
    if ($('.serveyV2').length) {
        $(".serveyV2 .servey-a").click(function () {
            $('.serveyBoxRate').children().addClass('show-servey')
        })
        $(".closeRateUs").click(function () {
            $('.serveyBoxRate').children().removeClass('show-servey')
        })
    }
    // AO jumping links
    if ($('.ds-sideNavigation-content').length) {
  
        const menuLinks = $('.JumpLink  a');

        menuLinks.on('click', function (event) {
            event.preventDefault();
            const targetId = $(this).attr('href');
            const targetSection = $(targetId);

            $('html, body').animate({
                scrollTop: targetSection.offset().top + -80
            }, 'slow');
        });

        $(window).on('scroll', function () {
            const currentScrollPos = $(window).scrollTop();

            menuLinks.each(function () {
                const targetId = $(this).attr('href');
                const targetSection = $(targetId);
                // console.log(targetSection.offset().top)
                if (targetSection.offset().top - 80 <= currentScrollPos && (targetSection.offset().top - 80 + targetSection.height()) > currentScrollPos) {
                    $(this).parent().addClass('active');
                } else {
                    $(this).parent().removeClass('active');
                }
            });
        });
  
        if($(window).width() < 992) {
            $('.ds-sideNavigation-content').append('<i class="icon-tiny-arrow-down"></i>');
            $('.ds-sideNavigation-content .icon-tiny-arrow-down').click(function() {
                $('.ds-sideNavigation-content').toggleClass('showJubingList')
            })
        }
    }
  
    // <!-- Initialize Swiper -->
    let swiperNewsHome = new Swiper(".swiperNewsHome", {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            // When viewport width is 576px or less
            300: {
              slidesPerView:1,
            },
            // When viewport width is 992px or less
            772: {
              slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
              },
          }
      });
    let awareness1 = new Swiper(".awareness1", {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    let awareness2 = new Swiper(".awareness2", {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    let awareness3 = new Swiper(".awareness3", {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });




});









$(document).ready(function () {

});
