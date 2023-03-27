$(document).ready(function(){

     $(window).scroll(function () {
          var sticky = $('.sticky'),
               scroll = $(window).scrollTop();

          if (scroll >= 300) sticky.addClass('fixed');
          else sticky.removeClass('fixed');
     });


     $('#Testimonial-slider').owlCarousel({
          loop: true,
          margin: 10,
          nav: false,
          dots:false,
          responsive: {
               0: {
                    items: 1
               },
               600: {
                    items: 3
               },
               1000: {
                    items: 1
               }
          }
     })
     


     // $('.mob_main_menu').hide();
     $('.mob_main_menu > li > a').click(function(){
          $('.mob_main_menu').toggleClass('open close');
     })
     
     $('.nav_bar').click(function(){
          // $('.menu_open').toggleClass('fa-times fa-bars');
          $('.mob_main_menu').toggleClass('open close');
     })
     
     $('.bar_close').click(function(){
          $('.mob_main_menu').toggleClass('open close');
     })
});

