
                /* задаем классы при навидении на блоки */
$(document).ready(function(){
    $('.div2').hover(function(){
        $('.div2 div').removeClass('arrow');
        $('.div2 div').addClass('divArr');
        
           
    },function(){
        $('.div2 div').addClass('arrow');
        $('.div2 div').removeClass('divArr');
           
    });
    
        
    $('.div3').hover(function(){
        $('.div3 div').removeClass('arrow');
        $('.div3 div').addClass('divArr');
        
           
    },function(){
        $('.div3 div').addClass('arrow');
        $('.div3 div').removeClass('divArr');
           
    });
});
        