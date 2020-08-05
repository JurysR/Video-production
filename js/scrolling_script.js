// working
$(function () {
    $(document).scroll(function () {
    var $nav = $(".menu");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

// $(document).ready(function(){       
//    var scroll_start = 0;
//    var startchange = $('#startchange');
//    var offset = startchange.offset();
//    $(document).scroll(function() { 
//       scroll_start = $(this).scrollTop();
//       if(scroll_start > offset.top) {
//           $('.menu').css('nav-colored', '#f0f0f0');
//        } else {
//           $('.menu').css('nav-transparent', 'transparent');
//        }
//    });
// });

// skoro fungoval podivat se na to pozdeji

// var nav = document.getElementById('nav');
// window.onscroll = function () { 
//     "use strict";
//     if (document.body.scrollTop >= 980px ) {
//         nav.classList.add("nav-colored");
//         nav.classList.remove("nav-transparent");
//     } 
//     else {
//         nav.classList.add("nav-transparent");
//         nav.classList.remove("nav-colored");
//     }
// };


// window.addEventListener("scroll", function() {
//   let mainNav = document.getElementById("mainNav");

//   if (window.pageYOffset > 0) {
//     mainNav.classList.add("is-sticky");
//   } else {
//     mainNav.classList.remove("is-sticky");
//   }
// });