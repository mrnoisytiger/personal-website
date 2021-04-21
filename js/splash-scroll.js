$(document).ready(function() {
    $('#splash-scroll-icon').click(function() {
        $('html, body').animate({
            scrollTop: ($('#about').offset().top)
        },500);
    });

    $('#splash-scroll-pictures').click(function() {
        $('html, body').animate({
            scrollTop: ($('#pictures').offset().top - 100)
        },500);
    });

    $('#splash-scroll-videos').click(function() {
        $('html, body').animate({
            scrollTop: ($('#videos').offset().top - 100)
        },500);
    });
});