// scroll function
$(function () {
    $(document).scroll(function () {
    var $nav = $(".menu");
    var $logo = $(".logo");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $logo.toggleClass('scrolled', $(this).scrollTop() > $nav.height()); 
    });
});

// $nav.height()) 
// $("#intro").height())
