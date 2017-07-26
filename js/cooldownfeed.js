var hovering={a:false,b:false};
var lastOffset=0;

$(document).ready(function() {
  lastOffset=$(document).scrollTop();
  changeToMobile(window.screen.availWidth<=992);

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

  //optional class to start navbar hidden
  $(".cdf-navbar-start-hidden").slideUp();
});




//navbar scrolling
$(window).scroll(function() {
  var y = $(document).scrollTop();
  var distFromBottom=120;

  if (y <= lastOffset) //scrolling up
  {
    $(".cdf-navbar").slideDown("fast");
  }
  else//scolling down
  {
    //show navbar if reached the bottom of page
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight-distFromBottom)
    {
      $(".cdf-navbar").slideDown("fast");
    }
    else
      $(".cdf-navbar").slideUp("fast");
  }
  lastOffset=y;
 });

 $(window).resize(function() {
   changeToMobile(window.screen.availWidth<=992);
 });

 function changeToMobile(isMobile)
 {
   var currentDevice = $("#navbar-logo-btn").data("device");

   if(isMobile && currentDevice!="mobile")
   {
     $("#navbar-logo-btn").attr("href","javascript:;");
     $("#navbar-logo-btn").data("device", "mobile");
   }
   else if(!isMobile && currentDevice!="pc") {
     $("#navbar-logo-btn").attr("href","home.html");
     $("#navbar-logo-btn").data("device", "pc");
   }
 }

function hideDropDown()
{
  console.log(hovering["dropDownBtn"] +","+ hovering["dropDownMenu"]);
  if(hovering["dropDownBtn"]==false && hovering["dropDownMenu"]==false)
    $(".nav-dropdown-menu").hide();
}
