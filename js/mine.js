function lights() {
    var checkbox = document.getElementById("lights");
    var body = document.getElementById("mybody");
    var nav = document.getElementById("mynav");
    var img = document.getElementById("ci");
    var img2 = document.getElementById("ci2");

    console.log(img);
    var currNav = nav.className;
    console.log(currNav);

    if (checkbox.checked) {
        console.log("Its checked");
        body.style["color"] = "white";
        body.style["background"] = "black";
        nav.className = "navbar navbar-inverse navbar-fixed-top";
        img.src = "LA.jpg";
        img2.src = "LA.jpg";
    } else {
        console.log("Its not checked");
        body.style["color"] = "black";
        body.style["background"] = "white";
        nav.className = "navbar navbar-default navbar-fixed-top";
        img.src = "city-630101_1920.jpg";
        img2.src = "city-630101_1920.jpg";
    }
}

function alertmMe(){
    alert("Hey");
}