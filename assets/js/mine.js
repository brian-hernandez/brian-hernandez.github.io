/*
 The lights definition

 This function changes the page theme to a 'Dark Mode' and 'Light Mode'

 */

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
        jumbo.style["background"] = "#DA230F";
        nav.className = "navbar navbar-inverse navbar-fixed-top";
        img.src = "img/NY.jpg";
        img2.src = "img/LA2.jpg";
    } else {
        console.log("Its not checked");
        body.style["color"] = "black";
        body.style["background"] = "white";
        jumbo.style["background"] = "#F2F2F2";
        nav.className = "navbar navbar-default navbar-fixed-top";
        img.src = "img/LA2.jpg";
        img2.src = "img/NY.jpg";
    }
}

/*
 The Choice definition

 @param {String} id - The ID of the selected tag.

 This function sets the style.display of the 'inactive' Articles
 to 'none' and the 'active' article to 'block.
 */
var Choice = function (id) {

    var art1 = document.getElementById("art1");
    var art2 = document.getElementById("art2");
    var art3 = document.getElementById("art3");

    if (id == "a1") {
        art1.style["display"] = "block";
        art2.style["display"] = "none";
        art3.style["display"] = "none";
    } else if (id == "a2") {
        art1.style["display"] = "none";
        art2.style["display"] = "block";
        art3.style["display"] = "none";
    } else {
        art1.style["display"] = "none";
        art2.style["display"] = "none";
        art3.style["display"] = "block";
    }
}

/*
 Function that checks for which group-item was clicked on
 and runs Choice function to display corresponding article
 * Makes use of JQuery *
 */
$(function () {
    $('.list-group a').click(function (e) {
        e.preventDefault();
        $that = $(this);
        Choice(this.id);
        $that.parent().find('a').removeClass('active');
        $that.addClass('active');

        console.log(e.result);
    });
})