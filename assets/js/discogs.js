function myFunction() {
    myFunction2();
    var artistInput = document.getElementById('artistInput').value;
    console.log("artInp: " + artistInput);
    var thumbStf;

    $.getJSON("https://api.discogs.com/database/search?q=" + artistInput + "&key=KyadyLRNlEcmPkuGSwup&secret=UOGgnAGWOgGASqQNfZrIaEpgUEZoyKdQ").then(function (data) {
        console.log(data.results[0].id);
        var artistID = data.results[0].id;
        console.log("The artistID of " + artistInput + " is " + artistID);
        var artistThumb = data.results[0].thumb;
        var artistLink = data.results[0].uri;
        thumbStf = "<div class='jumbotron stupid'><a target='_blank' href='http://www.discogs.com" + artistLink + "'><img " +
            " src='" + artistThumb + "'></a>";
        if (artistInput.length < 1) {
            document.getElementById("warning").style.visibility = "visible";
            $(document)
            {
                $("#warning").effect("shake");
            }
            setTimeout(invisible, 5000);
        }
        return $.getJSON("https://api.discogs.com/artists/" + artistID);

    }).then(
        function (data) {
            console.log(data.profile);
            var tblRow = "<div class='profile'><h1>" + data.name + "</h1><h5>" + data.profile + "</h5></div></div>";
            $(thumbStf + tblRow).appendTo(".grid-item");
            // Clears user input
            $("#artistInput").val('');
        },
        function () {
            console.log("FAIL!");
        }
    );


    function invisible() {
        document.getElementById("warning").style.visibility = "hidden";
    }

    function myFunction2() {
        // console.log("hello, you ran myFunction2()");
        // var el = document.getElementsByTagName("h1");
        // console.log(el2);
        // var el2 = document.getElementsByTagName("h5");
        // console.log(el2);
        // var el3 = document.getElementsByTagName("img");
        // console.log(el3);
        // var l = el.length;
        // console.log(l);
        // for (var i = 0; i < l; i++) {
        //     el[0].parentNode.removeChild(el[0]);
        //     el2[0].parentNode.removeChild(el2[0]);
        //     el3[0].parentNode.removeChild(el3[0]);
        // }

        $(".grid-item").empty();

    }

    function myFunction3() {
        //console.log("hello");
        if (event.keyCode == 13) {
            document.getElementById('matrixBtn').click();
        }
    }


}

function invisible() {
    document.getElementById("warning").style.visibility = "hidden";
}

function myFunction2() {
    // console.log("hello, you ran myFunction2()");
    // var el = document.getElementsByTagName("h1");
    // console.log(el2);
    // var el2 = document.getElementsByTagName("h5");
    // console.log(el2);
    // var el3 = document.getElementsByTagName("img");
    // console.log(el3);
    // var l = el.length;
    // console.log(l);
    // for (var i = 0; i < l; i++) {
    //     el[0].parentNode.removeChild(el[0]);
    //     el2[0].parentNode.removeChild(el2[0]);
    //     el3[0].parentNode.removeChild(el3[0]);
    // }

    $(".grid-item").empty();

}

function myFunction3() {
    //console.log("hello");
    if (event.keyCode == 13) {
        document.getElementById('matrixBtn').click();
    }
}

