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
// select-box
$('.gear-icon').click(function () {
$('.selection-box').toggleClass('in');
});
//
$('.selection-box .color-box ul li:first-of-type').click(function () {
    $(':root').css('--maincolors', '#27ae62');
});
$('.selection-box .color-box ul li:nth-of-type(2)').click(function () {
    $(':root').css('--maincolors', '#c33e26');
});
$('.selection-box .color-box ul li:nth-of-type(3)').click(function () {
    $(':root').css('--maincolors', '#2778ae');
});
$('.selection-box .color-box ul li:nth-of-type(4)').click(function () {
    $(':root').css('--maincolors', '#ae2744');
});
//loading window
window.onload = function () {
    'use strict';
    $('.loading').delay(500).fadeOut(1500, function () {
        $('body').css('overflow', 'auto');
        $(this).remove();
    });
};
// scroll to top
$(window).scroll(function () {
    'use strict';
    if ($(window).scrollTop() > 700) {
        $('.sctop').fadeIn(1000);
        $('.sctop i').slideDown(1000);
    } else {
        $('.sctop i').slideUp(1000);
        $('.sctop').fadeOut(1000);
    }
});
$('.sctop').click(function () {
    $('html , body').animate({
        scrollTop:0
    }, 2000);
});
//wow
new WOW().init();