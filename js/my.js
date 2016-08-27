function myFunction() {
    // var xhr = new XMLHttpRequest();
    // xhr.open("GET", "https://api.discogs.com/database/search?q=Nirvana&key=KyadyLRNlEcmPkuGSwup&secret=UOGgnAGWOgGASqQNfZrIaEpgUEZoyKdQ", false);
    // xhr.send();
    //
    // console.log(xhr.status);
    // console.log(xhr.statusText);
    // console.log(xhr.responseText);
    console.log("hello, you ran myFunction()");
    myFunction2();
    var artistInput = document.getElementById('artistInput').value;
    if (artistInput.length != 0) {
        $.getJSON("https://api.discogs.com/database/search?q=" + artistInput + "&key=KyadyLRNlEcmPkuGSwup&secret=UOGgnAGWOgGASqQNfZrIaEpgUEZoyKdQ", function (data) {
            $.each(data.results, function (i, f) {
                // var tblRow = "<tr>" + "<td>" + "<img src='" + f.thumb + "'>" + "</td>" + "</tr>"
                var tblRow = "<a target='_blank' href='http://www.discogs.com" + f.uri + "'><img class='gridImages'" +
                    " src='" + f.thumb + "'></a>";
                $(tblRow).appendTo(".grid-item");
                // $(tblRow).appendTo("#userdata tbody");
            });
        });

        // Clears user input
        $("#artistInput").val('');
    } else {
        document.getElementById("warning").style.visibility = "visible";
        $(document)
        {
            $("#warning").effect("shake");
        }
        setTimeout(invisible, 5000);
    }

}

function invisible() {
    document.getElementById("warning").style.visibility = "hidden";
}

function myFunction2() {
    console.log("hello, you ran myFunction2()");
    var images = document.getElementsByClassName('gridImages');
    console.log(images);
    var l = images.length;
    console.log(l);
    for (var i = 0; i < l; i++) {
        images[0].parentNode.removeChild(images[0]);
    }
}

function myFunction3() {
    console.log("hello");
    if (event.keyCode == 13) {
        document.getElementById('matrixBtn').click();
    }
}