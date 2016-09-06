/**
 * Created by Brian on 9/5/16.
 */



$(window).scroll(function () {

    console.log($(window).scrollTop());
});


$(document).ready(function () {
    var scroll = 0;
    var startAt = $('.s2');
    var offset = startAt.offset();

    if (startAt.length) {
        $(document).scroll(function () {
            startAt = $(this).scrollTop();
            if (startAt != 0) {
                $(".navbar-default").css('background-color', '#040404')
                //document.getElementById("navL").className = "fa fa-instagram fa-2x FA";
            } else {
                $(".navbar-default").css('background-color', 'transparent')
                //document.getElementById("navL").className = "";
            }
        })
    }
});

