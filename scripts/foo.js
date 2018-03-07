var $ = require('jquery');
window.$ = $;
require('bootstrap');

var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});


// Will be true if bootstrap is loaded, false otherwise
var bootstrap_enabled = (typeof $().modal == 'function');