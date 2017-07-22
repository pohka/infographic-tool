var hovering={a:false,b:false};

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


  $(".nav-dropdown-btn").hover(function(){
    $(".nav-dropdown-menu").show();
  });

  $('#a, #b').mouseover(function(){
    hovering [$(this).attr('id')] = true;
  });

  $('#a, #b').mouseout(function(){
      hovering [$(this).attr('id')] = false;

      setTimeout(function(){
            if(!hovering.a && !hovering.b)
                $('.nav-dropdown-menu').fadeOut(200)
      },100);
  });

  
});

function hideDropDown()
{
  console.log(hovering["dropDownBtn"] +","+ hovering["dropDownMenu"]);
  if(hovering["dropDownBtn"]==false && hovering["dropDownMenu"]==false)
    $(".nav-dropdown-menu").hide();
}
