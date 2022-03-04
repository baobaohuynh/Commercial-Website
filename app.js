$(document).ready(function() {
    $(".menu-bar-image").click(function() {
        $(".nav-list-mobile").slideToggle();
    });
    $(window).resize(function() {
        var size_window = $(window).width();
        $(".nav-list-mobile").hide();
    });
    $(window).scroll(function() {
        $(".nav-list-mobile").hide();
    });
});
