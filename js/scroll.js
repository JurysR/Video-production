// scroll function
$(function () {
    $(document).scroll(function () {
    var $nav = $(".menu");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $("#intro").height());
    });
});

// $nav.height())
