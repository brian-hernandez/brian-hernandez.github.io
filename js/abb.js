$.getJSON('../drummers.json', function (data) {
    $.each(data.drummers, function (i, f) {
        var imgs = "<div class='col-md-3'><a target='_blank' class='thumbnail darken' href='" + f.yt_url + "'><img" +
            " class='img-responsive' src='" + f.pic_url + "'></a></div>";
        $(imgs).appendTo(".gri");
    })
});