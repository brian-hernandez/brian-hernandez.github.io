var $ = require('jquery');
window.$ = $;
require('bootstrap');

// Will be true if bootstrap is loaded, false otherwise
var bootstrap_enabled = (typeof $().modal == 'function');