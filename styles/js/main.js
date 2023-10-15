// Assets
/* Responsive tabs fakewaffle*/
var fakewaffle = function (p, s) { "use strict"; return s.responsiveTabs = function (a) { s.currentPosition = "tabs"; var e = p(".nav-tabs.responsive"), t = "", n = "", r = ""; void 0 === a && (a = ["xs", "sm"]), p.each(a, function () { t += " hidden-" + this, n += " visible-" + this }), p.each(e, function (a) { var o, i = p(this), e = i.find("li a"); void 0 === i.attr("id") && i.attr("id", "tabs-" + a), o = p("<div></div>", { class: "panel-group responsive" + n, id: "collapse-" + i.attr("id") }), p.each(e, function () { var a = p(this), e = void 0 === a.attr("class") ? "" : a.attr("class"), t = "accordion-toggle", n = void 0 === a.parent().attr("class") ? "" : a.parent().attr("class"), s = "panel panel-default", l = a.get(0).hash.replace("#", "collapse-"); 0 < e.length && (t += " " + e), 0 < n.length && (s = (s = (s += " " + (n = n.replace(/\bactive\b/g, ""))).replace(/\s{2,}/g, " ")).replace(/^\s+|\s+$/g, "")), a.parent().hasClass("active") && (r = "#" + l), o.append(p("<div>").attr("class", s).html(p("<div>").attr("class", "panel-heading").html(p("<h4>").attr("class", "panel-title").html(p("<a>", { class: t, "data-toggle": "collapse", "data-parent": "#collapse-" + i.attr("id"), href: "#" + l, html: a.html() })))).append(p("<div>", { id: l, class: "panel-collapse collapse" }))) }), i.next().after(o), i.addClass(t), p(".tab-content.responsive").addClass(t), r && p(r).collapse("show") }), s.checkResize(), s.bindTabToCollapse() }, s.checkResize = function () { !0 === p(".panel-group.responsive").is(":visible") && "tabs" === s.currentPosition ? (s.tabToPanel(), s.currentPosition = "panel") : !1 === p(".panel-group.responsive").is(":visible") && "panel" === s.currentPosition && (s.panelToTab(), s.currentPosition = "tabs") }, s.tabToPanel = function () { var a = p(".nav-tabs.responsive"); p.each(a, function (a, e) { var t = p(e).next(".tab-content").find(".tab-pane"); p.each(t, function (a, e) { var t = p(e).attr("id").replace(/^/, "#collapse-"); p(e).removeClass("tab-pane").addClass("panel-body fw-previous-tab-pane").appendTo(p(t)) }) }) }, s.panelToTab = function () { var a = p(".panel-group.responsive"); p.each(a, function (a, e) { var t = p(e).attr("id").replace("collapse-", "#"), n = p(t).next(".tab-content")[0]; p(e).find(".panel-body.fw-previous-tab-pane").removeClass("panel-body fw-previous-tab-pane").addClass("tab-pane").appendTo(p(n)) }) }, s.bindTabToCollapse = function () { var a = p(".nav-tabs.responsive").find("li a"), e = p(".panel-group.responsive").find(".panel-collapse"); a.on("shown.bs.tab", function (a) { "tabs" === s.currentPosition && (p(a.currentTarget.hash.replace(/#/, "#collapse-")).collapse("show"), a.relatedTarget && p(a.relatedTarget.hash.replace(/#/, "#collapse-")).collapse("hide")) }), e.on("shown.bs.collapse", function (a) { if ("panel" === s.currentPosition) { var e = p(a.target).context.id.replace(/collapse-/g, "#"); p('a[href="' + e + '"]').tab("show"); var t = p(a.currentTarget).closest(".panel-group.responsive"); p(t).find(".panel-body").removeClass("active"), p(a.currentTarget).find(".panel-body").addClass("active") } }) }, p(window).resize(function () { s.checkResize() }), s }(window.jQuery, fakewaffle || {});


//=========================================================//


$(document).ready(function () {
    initMainScript();
});


/*
var prm = Sys.WebForms.PageRequestManager.getInstance();
prm.add_endRequest(function () {

    //------ Photo Album Fancybox ----//
    if ($('.fancybox-media').length > 0) {
        $('.fancybox-media')
            .attr('rel', 'media-gallery')
            .fancybox({
                padding: 0,
                arrows: true
            });
    }

    //------ Video listing Fancybox ----//
    if ($('.videoLnk').length > 0) {

        // Add Autoplay to the video URL
        $('.videoLnk').each(function () {
            this.href += '?autoplay=1';
        })


        $(".videoLnk").fancybox({
            type: "iframe", //<--added
            maxWidth: 800,
            maxHeight: 600,
            fitToView: false,
            width: '95%',
            height: '95%',
            autoSize: false,
            closeClick: false,
            openEffect: 'none',
            closeEffect: 'none',
            padding: 0,
            aspectRatio: true,


        });
    }

});
*/

function initMainScript() {
    AOS.init();
    //stickynav script


    var stickynav = $(".topnav");

    $(window).bind('scroll', stickynavScrollHandler);
    $('#s4-workspace').bind('scroll', stickynavScrollHandler);

    function stickynavScrollHandler(event) {
        var scroll = $(event.target).scrollTop();

        if (scroll >= 130) {

            if ($('.showhidenav').length) {
                stickynav.removeClass('openednav');
                $('.topnav .navbar').hide();
                $('.showhidenav').removeClass('hidenav');
                $('.showhidenav').addClass('shownav');

            }

            stickynav.addClass('sticynav');


        } else {
            stickynav.removeClass('sticynav');
        }
    }

    $('body').on('click', '.showhidenav', function () {
        if ($(window).width() > 990) {
            if ($(this).hasClass('shownav')) {
                stickynav.addClass('openednav');
                $('.topnav .navbar').show();
                $('.showhidenav').removeClass('shownav');
                $('.showhidenav').addClass('hidenav');
            }
            else if ($(this).hasClass('hidenav')) {
                stickynav.removeClass('openednav');
                $('.topnav .navbar').hide();
                $('.showhidenav').removeClass('hidenav');
                $('.showhidenav').addClass('shownav');
            }
        }
    });



    /*
    // mainslider scroll effect
    
        $.scrollify({
            section : ".homepanel",
            sectionName : ".homepanel",
            interstitialSection : "",
            // easing: "easeOutExpo",
            scrollSpeed: 1100,
            offset : 0,
            // scrollbars: true,
            // standardScrollElements: "",
            setHeights: true,
            // overflowScroll: true,
            updateHash: false,
               touchScroll:true,
            // before:function() {},
            // after:function() {},
            // afterResize:function() {},
            // afterRender:function() {}
            
          });
    */
    // mainslider scroll down on click

    $('.scroller').on('click', function () {
        $('body, html, #s4-workspace').animate({ scrollTop: $("#home-content").offset().top }, 1000);
        return false;
    });



    // print
    $("#print").on("click", function () {
        window.print();
    });

    // Add to favorite
    $('#addfavorite').click(function (e) {
        var bookmarkURL = window.location.href;
        var bookmarkTitle = document.title;

        if ('addToHomescreen' in window && addToHomescreen.isCompatible) {
            // Mobile browsers
            addToHomescreen({ autostart: false, startDelay: 0 }).show(true);
        } else if (window.sidebar && window.sidebar.addPanel) {
            // Firefox <=22
            window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
        } else if ((window.sidebar && /Firefox/i.test(navigator.userAgent)) || (window.opera && window.print)) {
            // Firefox 23+ and Opera <=14
            $(this).attr({
                href: bookmarkURL,
                title: bookmarkTitle,
                rel: 'sidebar'
            }).off(e);
            return true;
        } else if (window.external && ('AddFavorite' in window.external)) {
            // IE Favorites
            window.external.AddFavorite(bookmarkURL, bookmarkTitle);
        } else {
            // Other browsers (mainly WebKit & Blink - Safari, Chrome, Opera 15+)
            alert('فضلا إضغط ' + (/Mac/i.test(navigator.platform) ? 'Cmd' : 'Ctrl') + '+D لكي تضيف هذة الصفحة إلى المفضلة.');
        }

        return false;
    });

    // burger icon x animation fire;
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });
    //top nav hover action

    if ($(window).width() > 1175) {
        $('.navbar .dropdown').hover(function () {
            $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideDown(200);
        }, function () {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp(10)
        });
    }
    //top nav remove data-toggle attribute 
    if ($(window).width() > 1024) {
        $(".dropdown a.dropdown-toggle").removeAttr("data-toggle");
    }
    $(window).resize(function () {
        if ($(window).width() > 1024) {
            $(".dropdown a.dropdown-toggle").removeAttr("data-toggle");
        } else if ($(window).width() < 1024) {
            $(".dropdown a.dropdown-toggle").attr("data-toggle", "dropdown");
        }
    });

    //show search action
    $('#searchshow').click(function (e) {
        e.stopPropagation();
        $(".searchbox").fadeToggle("fast", function () {
            $(".search-input").focus();
            // Animation complete.


        });
    });
    $(document).click(function (e) {
        if (!$(e.target).is('.searchbox, .searchbox *')) {
            $(".searchbox").hide();
            //$(".search-input").val("");
        }
    });
    $('.closeSearch').click(function (e) {

        $(".searchbox").hide();
        $(".search-input").val("");

    });

    //blindness accissblity option
    $('.blindness').click(function () {
        $("html").toggleClass('high-contrast');
        /*  $("img").each(function(indx , item){
      
              if($(item).width() > 0 && $(item).height()>0 ){
                     $(item).wrap("<span class='bwWrapper'></span>");
              }
      
      
          });
          
          
       
      
          $('.bwWrapper').BlackAndWhite({
              hoverEffect: false, // default true
              // set the path to BnWWorker.js for a superfast implementation
              webworkerPath: false,
              // to invert the hover effect
              invertHoverEffect: false,
              // this option works only on the modern browsers ( on IE lower than 9 it remains always 1)
              intensity: 1,
              speed: { //this property could also be just speed: value for both fadeIn and fadeOut
                  fadeIn: 200, // 200ms for fadeIn animations
                  fadeOut: 800 // 800ms for fadeOut animations
              },
              onImageReady: function (img) {
                  // this callback gets executed anytime an image is converted
              }
          });*/


    });


    //main slider at home page

    // if ($('.mainslider').length > 0) {
    //     // it exists
    //     // $('.mainslider').height($(window).height());
    //     $(window).resize(function () {
    //         $('.mainslider').height($(window).height());
    //     });

    //     var swiper1 = new Swiper('.mainslider-container', {
    //         speed: 2000,
    //         // Enable lazy loading
    //         lazy: true,
    //         pagination: {
    //             el: ".swiper-pagination",
    //             dynamicBullets: true,
    //           },
    //         navigation: {
    //             nextEl: '.mainslider .swiper-button-next',
    //             prevEl: '.mainslider .swiper-button-prev',
    //         },
    //         /*autoplay: {
    //             delay: 5000,
    //             disableOnInteraction: false,
    //         },*/
    //         effect: 'slide',
    //         watchOverflow: true,

    //     });

    //     /*---Pause the main slider on mouse hover start---*/
    //     /*
    //             $(".main_slider").hover(function() {
    //                 swiper1.autoplay.stop();
    //             }, function() {
    //                 swiper1.autoplay.start();
    //             });
    //     */
    //     /*---Pause the main slider on mouse hover end---*/

    // }


    //------- events slider at home page ----//
    if ($('.eventsslider').length > 0) {
        // it exists
        var swiper4 = new Swiper('.eventsslider', {

            loop: false,
            navigation: {
                nextEl: '.home-events .swiper-button-next',
                prevEl: '.home-events .swiper-button-prev',
            },
            speed: 1500,
            watchOverflow: true
        });
    }

    if ($('.main_slider_mobile').length > 0) {
        // it exists
        var swiper2 = new Swiper('.main_slider_mobile', {
            speed: 2000,
            pagination: {
                el: '.main_slider_mobile .main_slider_pager',
                clickable: true,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            effect: 'fade',
            watchOverflow: true,

        });
    }


    //------- News slider at home page ----//
    if ($('.homenewsSlider').length > 0) {
        // it exists
        var swiper3 = new Swiper('.homenewsSlider', {
            slidesPerView: 1,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: false,
            loopFillGroupWithBlank: true,
            pagination: {
                el: '.newswrapper .swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.newswrapper .swiper-button-next',
                prevEl: '.newswrapper .swiper-button-prev',
            },
            //autoplay: {
            //    delay: 4000,
            //    disableOnInteraction: true,
            //},
            speed: 1500,
            watchOverflow: true,
            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 768px
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    slidesPerGroup: 2,
                }
            }

        });
    }



    //------- News slider at home page ----//
    // if ($('.newsSlider-new').length > 0) {
    //     // it exists
    //     var swiper3 = new Swiper('.newsSlider-new', {
    //         // slidesPerView: 5,
    //         effect: "coverflow",
    //         grabCursor: true,
    //         centeredSlides: true,
    //         slidesPerView: "auto",
    //         initialSlide: 2,
    //         coverflowEffect: {
    //           rotate: 0,
    //           stretch: 0,
    //           depth: 500,
    //           modifier: 1,
    //           slideShadows: false
    //         },
    //         pagination: {
    //           el: ".news-section .swiper-pagination",
    //           dynamicBullets: true
    //         }
    //         // Responsive breakpoints
    //         // breakpoints: {
    //         //     768: {
    //         //         slidesPerView: 2,
    //         //         spaceBetween: 10,
    //         //         slidesPerGroup: 2,
    //         //     }
    //         // }

    //     });
    // }




    //-------  slider at home page ----//
    if ($('.homeEventsSlider').length > 0) {
        // it exists
        var swiper5 = new Swiper('.homeEventsSlider', {
            slidesPerView: 1,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: false,
            loopFillGroupWithBlank: true,
            pagination: {
                el: '.homeEventsWrapper .swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.homeEventsWrapper .swiper-button-next',
                prevEl: '.homeEventsWrapper .swiper-button-prev',
            },
            //autoplay: {
            //    delay: 4000,
            //    disableOnInteraction: true,
            //},
            speed: 1500,
            watchOverflow: true,

        });
    }

    //------- slider at home page ----//
    if ($('.homeCustomerAwarenessSlider1').length > 0) {
        // it exists
        var swiper7 = new Swiper('.homeCustomerAwarenessSlider1', {
            slidesPerView: 1,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: false,
            loopFillGroupWithBlank: true,
            //pagination: {
            //    el: '.homeCustomerAwarenessSlider1Wrapper .swiper-pagination',
            //    clickable: true,
            //    dynamicBullets: true,
            //},
            navigation: {
                nextEl: '.homeCustomerAwarenessSlider1Wrapper .swiper-button-next',
                prevEl: '.homeCustomerAwarenessSlider1Wrapper .swiper-button-prev',
            },
            //autoplay: {
            //    delay: 4000,
            //    disableOnInteraction: true,
            //},
            speed: 1500,
            watchOverflow: true,

        });
    }


    //------- Related sites slider at home page ----//
    if ($('.relatedslider').length > 0) {
        // it exists
        var swiper6 = new Swiper('.relatedslider', {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 2,
            loop: false,
            clickable: true,
            navigation: {
                nextEl: '.sites-wrapper .swiper-button-next',
                prevEl: '.sites-wrapper .swiper-button-prev',
            },
            //autoplay: {
            //    delay: 4000,
            //    disableOnInteraction: true,
            //},
            speed: 1500,
            watchOverflow: true,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                520: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
            }

        });
    }

    //------- Related sites slider at home page ----//
    if ($('.partnersslider').length > 0) {
        // it exists
        var swiper8 = new Swiper('.partnersslider', {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 2,
            loop: false,
            clickable: true,
            navigation: {
                nextEl: '.partnerssites-wrapper .swiper-button-next',
                prevEl: '.partnerssites-wrapper .swiper-button-prev',
            },
            //autoplay: {
            //    delay: 4000,
            //    disableOnInteraction: true,
            //},
            speed: 1500,
            watchOverflow: true,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                520: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
            }

        });
    }


    //------- slider at home page ----//
    if ($('.homeCustomerAwarenessSlider2').length > 0) {
        // it exists
        var swiper9 = new Swiper('.homeCustomerAwarenessSlider2', {
            slidesPerView: 1,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: false,
            observer: true,
            observeParents: true,
            loopFillGroupWithBlank: true,

            navigation: {
                nextEl: '.homeCustomerAwarenessSlider2Wrapper .swiper-button-next',
                prevEl: '.homeCustomerAwarenessSlider2Wrapper .swiper-button-prev',
            },
            speed: 1500,
            watchOverflow: true,
            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 768px
                768: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                    slidesPerGroup: 4,
                }
            }
        });
    }

    //------- slider at home page ----//
    if ($('.homeCustomerAwarenessSlider3').length > 0) {
        // it exists
        var swiper10 = new Swiper('.homeCustomerAwarenessSlider3', {
            slidesPerView: 1,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: false,
            observer: true,
            observeParents: true,
            loopFillGroupWithBlank: true,

            navigation: {
                nextEl: '.homeCustomerAwarenessSlider3Wrapper .swiper-button-next',
                prevEl: '.homeCustomerAwarenessSlider3Wrapper .swiper-button-prev',
            },
            speed: 1500,
            watchOverflow: true,
            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 768px
                768: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                    slidesPerGroup: 4,
                }
            }
        });
    }


    //------ Font Size Function ----//
    if ($('#fontLarge').length > 0) {
        var resizabletxt = ':root';
        $.creaseFont({
            content: resizabletxt,
            unit: 'px',
            defaultSize: 10,
            maxSize: 12,
            minSize: 8,
            bFontLarge: '#fontLarge',
            bFontDefault: '#fontDefault',
            bFontSmall: '#fontSmall',
            animate: false,
            cookieLifetime: 0,
            stepSize: 1
        });
    }




    //------ Responsive tabs to accordion Function ----//
    if ($('.nav-tabs').length > 0) {
        fakewaffle.responsiveTabs(['xs', 'sm']);

    }

    //----------Counter Up -2 ------//
    jQuery(function ($) {
        "use strict";

        var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

        var $counters = $(".homeStatisticsItemNo");



        /* Start counting, do this on DOM ready or with Waypoints. */
        $counters.each(function (ignore, counter) {
            var waypoint = new Waypoint({
                element: $(this),
                handler: function () {
                    counterUp(counter, {
                        duration: 2000,
                        delay: 10
                    });
                    this.destroy();
                },
                offset: 'bottom-in-view',
            });
        });

    });

    //------ Photo Album Fancybox ----//
    if ($('.fancybox-media').length > 0) {
        $('.fancybox-media')
            .attr('rel', 'media-gallery')
            .fancybox({
                //openEffect: 'none',
                //closeEffect: 'none',
                //prevEffect: 'none',
                //nextEffect: 'none',
                //beforeShow: function() {
                //    if (this.title) {
                //        var URL = encodeURIComponent(_spPageContextInfo.siteAbsoluteUrl + '' + encodeURI(this.href));
                //        var title = this.title;
                //        // Add Socail Div start
                //        this.title = "<span class='ImgTitle'>";
                //        this.title += title;
                //        this.title += "</span>";
                //        this.title += '<div class="sharePhoto fB">';

                //        // Add Socail Share links
                //        this.title += '<a href="http://www.facebook.com/sharer.php?u=' + URL + '" target="_blank"><i class="fa fa-facebook-square"></i></a>';
                //        this.title += '<a href="https://twitter.com/intent/tweet?url=' + URL + '" target="_blank"><i class="fa fa-twitter-square"></i></a>';
                //        this.title += '<a href="https://plus.google.com/share?url=' + URL + '" target="_blank"><i class="fa fa-google-plus-square"></i></a>';
                //        this.title += '<a href="mailto:?subject=' + title + '&body=' + _spPageContextInfo.siteAbsoluteUrl + '' + this.href + '" target="_blank"><i class="fa fa-envelope-o"></i></a>';

                //        // Add Socail Div end
                //        this.title += '</div>';
                //    }
                //},

                padding: 0,
                arrows: true
            });
    }

    //------ Video listing Fancybox ----//
    if ($('.videoLnk').length > 0) {

        // Add Autoplay to the video URL
        $('.videoLnk').each(function () {
            this.href += '?autoplay=1';
        })


        $(".videoLnk").fancybox({
            type: "iframe", //<--added
            maxWidth: 800,
            maxHeight: 600,
            fitToView: false,
            width: '95%',
            height: '95%',
            autoSize: false,
            closeClick: false,
            openEffect: 'none',
            closeEffect: 'none',
            padding: 0,
            aspectRatio: true,


        });
    }









    //-------MC Photo Albums ------//

    if ($('.photoalbum-mc').length > 0) {
        // it exists
        var swiper4 = new Swiper('.mc-photoalbums', {
            spaceBetween: 15,
            navigation: {
                nextEl: '.photoalbum-next',
                prevEl: '.photoalbum-prev',
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },

        });
    }

    //----Exams Tabs Slide Down---//

    $('.exam-tabs2 a').click(function (e) {
        e.preventDefault();

        var currentHref = $(this).attr('href');

        if (!$(currentHref).hasClass('active')) {

            $('.tab-pane').hide();
            $('.tab-pane').removeClass('active');
            $('.exam-tabs2 li').removeClass('active');

            $(this).parent().addClass('active');


            $(currentHref).slideDown('slow');
            $(currentHref).addClass('active');

        }

    })


    //----Back to top show and hide based on scroll ammount---//


    $('#s4-workspace').bind('scroll', scrollhandler);
    $(window).bind('scroll', scrollhandler);



    function scrollhandler(event) {

        //alert(scrollingelem);

        var scroll = $(event.target).scrollTop();

        if (scroll >= 400) {

            $('.gototop').addClass('show');
        } else {
            $('.gototop').removeClass('show');
        }
    }
    //var scrollingelem = $(window ,'#s4-workspace');


    // backto top function

    // var content = $([window , '#s4-workspace']);

    $('.gototop').on('click', function () {
        $('body , html').animate({ scrollTop: 0 }, 800);
        $('#s4-workspace').animate({ scrollTop: 0 }, 800);
        return false;
    });

    /*------*/

    $('.nav-tabs a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
    //$('.dropdown-toggle').dropdown();
    $('[data-toggle="tooltip"]').tooltip();

    //$( ".accordion" ).accordion({
    //    collapsible: true,
    //    heightStyle: "content"
    //});
    $("select").not('.not-select2,.UserSelect').select2({
        language: "ar",
        dir: "rtl",
        minimumResultsForSearch: -1
    });
    $(".slider-service").height($('.slider-wrapper').height() - $('.header-wrapper').height());

    $(window).resize(function () {
        $(".slider-service").height($('.slider-wrapper').height() - $('.header-wrapper').height());
    });

    $(window).scroll(function () {
        if ($('.sideFloatingLinksWrapper').length > 0) {
            if ($(this).scrollTop() > ($('.home-content').offset().top - 100)) {
                $('.sideFloatingLinksWrapper').addClass("show");
            } else {
                $('.sideFloatingLinksWrapper').removeClass("show");
            }
        }
    });
    $('.gotoid').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: ($($(this).attr('href')).offset().top) - 10
        }, 500, 'linear');
    });

    $(".breadCrumbShareWrapper-dropdown").find(".breadCrumbShareWrapper-toggle").click(function () {
        $(this).parent().find(".breadCrumbShareWrapper-toggle").toggleClass('active');
        $(this).parent().find(".share-list").slideToggle('fast');
    });

    $(".SASO-News").click(function () {
        $(this).addClass('active');
    });
    $(".SASO-closeBtn").click(function (e) {
        e.stopPropagation();
        $(".SASO-News").removeClass('active');
    });

    //$( "#footeraccordion" ).accordion({
    //    collapsible: true,
    //    heightStyle: "content",
    //    active: 1
    //});


    //End of Script file
}

function createCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}




// function recentNews(){
//     $(".recentNews-modal").fadeIn('d-block');
//     $(".popup-Overlay").fadeToggle('d-block');
// }

// $(document).ready(function(){
//   $(".close-popup").click(function () {
//       console.log("55");
//     $(".recentNews-modal").fadeOut('d-block');
//     $(".popup-Overlay").fadeToggle('d-block');

//   })

// })

// function timeModal(){
//     $(".time-modal").fadeToggle('d-block');
//     $(".popup-Overlay").fadeToggle('d-block');
// }

// function calenderModal(){
//     $(".calender-modal").fadeToggle('d-block');
//     $(".popup-Overlay").fadeToggle('d-block');
// }

// $(document).ready(function(){
//   $(".popup-Overlay").click(function () {
//       console.log("777");
//       $(".recentNews-modal").fadeOut('d-block');
//     $(".time-modal").fadeOut('d-block');
//     $(".calender-modal").fadeOut('d-block');
//     $(".popup-Overlay").fadeToggle('d-block');
//   })

// })

