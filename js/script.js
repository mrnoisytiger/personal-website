
$(document).ready(function() {
    $('#splash-scroll-icon').click(function() {
        $('body').animate({
            scrollTop: ($('#about').offset().top)
        },500);
    });
});