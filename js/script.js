/*global $ ,document ,window */
// main caruosel

$('body > .carousel').carousel({

    interval: 2500

});
$(document).ready(function () {

    'use strict';
    if ($(window).height() > 500) {
        $(".carousel-inner > .item > img, .carousel-inner > .item > a > img").css("height", $(window).height());
    } else {
        $(".carousel-inner > .item > img, .carousel-inner > .item > a > img").css("height",'600px');
    }

});
$(window).resize(function () {

    'use strict';

    if ($(window).height() > 500) {
        $(".carousel-inner > .item > img, .carousel-inner > .item > a > img").css("height", $(window).height());
    } else {
        $(".carousel-inner > .item > img, .carousel-inner > .item > a > img").css("height",'600px');
    }
});
// carousel of testimonial
$('#Testimonialslider').carousel({

    interval: 2500

});

