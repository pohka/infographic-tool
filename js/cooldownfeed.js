//logo animation when you hover
$(document).ready(function() {
  $(".logo-letter-span").mouseenter(function(){
         $(".logo-letter").animate({ "padding-right": "+=30px" }, "fast" );
        $(".logo-text").fadeIn('fast');
  });

  $(".logo-letter-span").mouseleave(function(event) {

     $(".logo-letter").animate({ "padding-right": "-=50px" }, "fast" );
     $(".logo-text").hide();
  });
});
