
$(document).ready(function() {

  $(".logo-letter-span").mouseenter(function(){
      //  $(".logo-letter-span").css("width", "215px");
         $(".logo-letter").animate({ "padding-right": "+=30px" }, "fast" );
         $(".cdf-navitems").animate({ "padding-left": "+=150px" }, "fast" )
        $(".logo-text").fadeIn('fast');
  });

  $(".logo-letter-span").mouseleave(function(event) {

     $(".logo-letter").animate({ "padding-right": "-=50px" }, "fast" );
     $(".cdf-navitems").animate({ "padding-left": "-=150px" }, "fast" )
     $(".logo-text").hide();
    // $(".logo-letter-span").css("width", "100px");
  });

});
