
$(document).ready(function(){
  randomBackground();
  setColors("_const");
});

function randomBackground()
{
  var imgCount=10;
  var index = Math.round(Math.random()*(imgCount));
  $("html").css("background", "url(img/backgrounds/"+index+".png)");
}

function setColors(postfix)
{
  var primary = $(":root").css("--primary" + postfix);
  var secondary = $(":root").css("--secondary" + postfix);
  var green = $(":root").css("--green" + postfix);
  var red = $(":root").css("--red" + postfix);

  $(":root").css("--primary", primary);
  $(":root").css("--secondary", secondary);
  $(":root").css("--green", green);
  $(":root").css("--red", red);
}
