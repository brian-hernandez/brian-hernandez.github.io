/**
 * Created by Brian on 9/5/16.
 */

$(document).ready(function () {
    var scroll = 0;
    var startAt = $('.myBackground');
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

$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});

var a = false;
function gallery(id) {
    document.getElementById('preview').src = document.getElementById(id).src;
}
function gallery2(id) {
    document.getElementById('preview2').src = document.getElementById(id).src;
}
function gallery3(id) {
    document.getElementById('preview3').src = document.getElementById(id).src;
}