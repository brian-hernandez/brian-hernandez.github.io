function lights() {
    var checkbox = document.getElementById("lights");
    var body = document.getElementById("mybody");
    var nav = document.getElementById("mynav");

    var currNav = nav.className;
    console.log(currNav);

    if (checkbox.checked) {
        console.log("Its checked");
        body.style["color"] = "white";
        body.style["background"] = "black";
        nav.className = "navbar navbar-inverse navbar-fixed-top";
    } else {
        console.log("Its not checked");
        body.style["color"] = "black";
        body.style["background"] = "white";
        nav.className = "navbar navbar-default navbar-fixed-top";
    }
}