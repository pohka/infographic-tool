var hovering={a:false,b:false};

$(document).ready(function() {

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
