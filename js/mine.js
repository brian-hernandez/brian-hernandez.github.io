function lights() {
    var checkbox = document.getElementById("lights");
    var body = document.getElementById("mybody");
    var nav = document.getElementById("mynav");
    var img = document.getElementById("ci");
    var img2 = document.getElementById("ci2");
    var jumbo = document.getElementById("main");

    console.log(img);
    var currNav = nav.className;
    console.log(currNav);

    if (checkbox.checked) {
        console.log("Its checked");
        body.style["color"] = "white";
        body.style["background"] = "black";
        jumbo.style["background"] = "#0D0D0D";
        nav.className = "navbar navbar-inverse navbar-fixed-top";
        img.src = "LA.jpg";
        img2.src = "LA.jpg";
    } else {
        console.log("Its not checked");
        body.style["color"] = "black";
        body.style["background"] = "white";
        jumbo.style["background"] = "#F2F2F2";
        nav.className = "navbar navbar-default navbar-fixed-top";
        img.src = "city-630101_1920.jpg";
        img2.src = "city-630101_1920.jpg";
    }
}

function alertmMe() {
    alert("Hey");
}

$(function () {
    $('.list-group a').click(function (e) {
        e.preventDefault()
        $that = $(this);
        console.log($that);
        var art1 = document.getElementById("art1");
        var art2 = document.getElementById("art2");
        var art3 = document.getElementById("art3");

        if (this.id == "a1") {
            art1.style["display"] = "block";
            art2.style["display"] = "none";
            art3.style["display"] = "none";
        } else if (this.id == "a2") {
            art1.style["display"] = "none";
            art2.style["display"] = "block";
            art3.style["display"] = "none";
        } else {
            art1.style["display"] = "none";
            art2.style["display"] = "none";
            art3.style["display"] = "block";
        }

        $that.parent().find('a').removeClass('active');
        $that.addClass('active');
    });
})