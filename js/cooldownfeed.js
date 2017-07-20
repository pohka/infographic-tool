
$(document).ready(function() {

  //logo animation when you hover
  $(".logo-letter-span").mouseenter(function(){
         $(".logo-letter").animate({ "padding-right": "+=30px" }, "fast" );
        $(".logo-text").fadeIn('fast');
  });

  $(".logo-letter-span").mouseleave(function(event) {
     $(".logo-letter").animate({ "padding-right": "-=50px" }, "fast" );
     $(".logo-text").hide();
  });

  $(".nav-item").click(function(){
    var name = $(this).data("name");
    $(".section").each(function(index, el) {
      $(this).hide();
    });
    $("#"+name).show();
  });
});
