function initialScript() {

//------- سلع غير مطابقة  slider at home page ----//
    if ($('.nonConformingSlider').length > 0) {
        // it exists
        var nonConformingSwiper = new Swiper('.nonConformingSlider', {
            // slidesPerView: 5,
            grabCursor: true,
            centeredSlides: false,
            slidesPerView: "1",
            // initialSlide: 1,
           
            pagination: {
              el: ".non-Conforming .swiper-pagination",
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




//-------   رسائل توعوية  slider at home page ----//
if ($('.msgzSlider').length > 0) {
    // it exists
    var nonConformingSwiper = new Swiper('.msgzSlider', {
        // slidesPerView: 5,
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: "1",
        // initialSlide: 2,
       
        pagination: {
          el: ".msgz .swiper-pagination",
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


//-------  فيديوهات توعوية slider at home page ----//
if ($('.vidSlider').length > 0) {
    // it exists
    var nonConformingSwiper = new Swiper('.vidSlider', {
        // slidesPerView: 5,
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: "1",
        // initialSlide: 2,
       
        pagination: {
          el: ".vids .swiper-pagination",
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








        // $('.onload-image').addClass('show')


    $('.showOnLoad').on('click', function () {
        $('.onload-image').fadeOut('show')
    });

    // close popups when click anywhere out of ".map-bg"

    $(document).click(function (e) {
        if (!$(e.target).is('.onload-image .content .img-box , .onload-image .content .img-box *')) {
            $('.onload-image').fadeOut('show')
            console.log("hhhhhhhhhhh");
        }
    });


//   show popup
$(".card-levelOne a.stretched-link").on("click", function () {
    // $(".map-popup").addClass("hide");
    $(this).closest('div.card-levelOne').find('.hidden-content').addClass("view")
    // $(".hidden-content").fadeIn("view");

    console.log("1111");
   
  })


// close popups
  $(".close-sec").on("click", function () {
    // $(".hidden-content").fadeOut("view");
    $(".hidden-content").removeClass("view");
  })
  



//   show popup
$(".servey a.servey-a").on("click", function () {
    // $(".map-popup").addClass("hide");
    $(this).closest('div.servey').find('.pollWp').removeClass("hidden-servey")
    // $(".pollWp").fadeIn("hidden-servey");

    console.log("1111");
   
  })

  $(document).click(function (e) {
    if (!$(e.target).is('div.servey , div.servey *')) {
        // $('.pollWp').fadeOut('hidden-servey')
        $('.pollWp').addClass('hidden-servey')
        console.log("hhhhhhhhhhh");
    }
});

}


$(document).ready(function () {
    initialScript();


    
});

$(document).ready(function() {

	/* This is basic - uses default settings */
	
	$("a#single_image").fancybox();
	
	/* Using custom settings */
	
	$("a.grouped_elements").fancybox();

	/* Apply fancybox to multiple items */
	
	$("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
	$("a.vids").fancybox({
        'zoomSpeedIn': 300,
        'zoomSpeedOut': 300,
        'overlayShow': false,
        'autoScale': false,
        'type': 'iframe',
        'centerOnScroll':true
    });
});






