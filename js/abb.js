$.getJSON('../drummers.json', function (data) {
    $.each(data.drummers, function (i, f) {
        var imgs = "<div class='col-md-3'><a target='_blank' class='thumbnail darken' href='" + f.yt_url + "'><img" +
            " class='img-responsive' src='" + f.pic_url + "'></a></div>";
        $(imgs).appendTo(".gri");
        console.log(imgs);
    })
});



$(function () {

// Run the effect
    $("#mynav").hover(function() {
        console.log("GET OFF ME");
       $("#effect").show("blind", {"direction": "left"}, 100);
    }, function () {
        console.log("GET ON ME");
        $("#effect").hide("blind", {"direction": "left"}, 100);
    });

    $("#mynav2").hover(function() {
        console.log("GET OFF ME");
        $("#effect").hide("blind", {"direction": "left"}, 100);
    }, function () {
        console.log("GET ON ME");
        $("#effect").show("blind", {"direction": "left"}, 100);
    });
});

