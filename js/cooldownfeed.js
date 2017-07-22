var hovering={a:false,b:false};
var lastOffset=0;

$(document).ready(function() {
  lastOffset=$(document).scrollTop();
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

  if (y <= lastOffset) //scrolling up
  {
    $(".cdf-navbar").slideDown("fast");
  }
  else//scolling down
  {
    //show navbar if reached the bottom of page
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight-300)
    {
      $(".cdf-navbar").slideDown("fast");
    }
    else
      $(".cdf-navbar").slideUp("fast");
  }
  lastOffset=y;
 });

function hideDropDown()
{
  console.log(hovering["dropDownBtn"] +","+ hovering["dropDownMenu"]);
  if(hovering["dropDownBtn"]==false && hovering["dropDownMenu"]==false)
    $(".nav-dropdown-menu").hide();
}
