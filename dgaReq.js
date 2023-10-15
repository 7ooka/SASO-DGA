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
        console.log(currentIndex);
        $(".dropdown-content-bond").eq(currentIndex).show();
    });
}

/* 2/2 change content base on select */
$(document).ready(function () {

    $("#toRateEvent").click(function () {
        $('.toRateEL').slideDown()
        $(this).hide()
    })
    $(".closeRating").click(function () {
        $('.toRateEL').hide()
        $("#toRateEvent").show()
    })
    
    if ($('.branchesV2').length) {
        selectMenu()
    }

});
