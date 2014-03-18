// ==UserScript==
// @name       Tomnod photo slides changer
// @namespace  http://anee.me/
// @version    0.1
// @description This script is basically a really dumb user who presses up, down, left, right keys at random and then jumps to a random location and continue the same thing. The goal of this script is to traverse over the map tiles randomly, so as to remove any user interaction. Basically, I was too lazy to press the buttons!
// @match      http://www.tomnod.com/nod/challenge/malaysiaairsar2014/map/*
// @copyright  2014+, Aneesh Dogra
// ==/UserScript==

var count = 0;
var threshold = 10;
function some_function(){
    if (count > threshold) {
    	$(".info-panel-group > p:eq(1) > a:eq(1)").click();
    	count = 0;
        return;
    }
    var e = jQuery.Event("keyup");
    e.which = 37 + Math.floor((Math.random()*4));;
    jQuery("#map-canvas").trigger( e );
    count += 1;
}

// load jQuery and execute the main function
var interval_handle = window.setInterval(function() {
			some_function();
}, 10000);
$(".tagger-progress-view").append("<a href='#' data-handle='" + interval_handle + "' onclick='clearInterval($(this).data(\"handle\"))' id='stopMoving'>Stop Moving</a>");