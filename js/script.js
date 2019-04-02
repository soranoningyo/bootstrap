/*global $ ,document ,window */
$('.carousel').carousel({

    interval: 2500

});
$(document).ready(function () {
    'use strict';
    $(".carousel-inner > .item > img, .carousel-inner > .item > a > img").css("height", $(window).height());
});
$(window).resize(function () {
    'use strict';
    $(".carousel-inner > .item > img, .carousel-inner > .item > a > img").css("height", $(window).height());
});