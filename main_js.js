           /* меню mobile */


$(document).ready(function(){
    $('.menu_trigger').click(function(){
        $('.menu').slideToggle(500);
    });
    $(window).resize(function(){
       if ($(window).width() > 500){
           $('.menu').removeAttr('style');
       } 
    });
});