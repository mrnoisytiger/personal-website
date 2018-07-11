$(document).ready(function() {
    $('#splash-scroll-icon').click(function() {
        $('body').velocity({
            scrollTop: ($('#about').offset().top)
        },500,[0.16,0.43,0.74,0.49]);
    });

    $('#splash-scroll-pictures').click(function() {
        $('body').velocity({
            scrollTop: ($('#pictures').offset().top)
        },500);
    });
});