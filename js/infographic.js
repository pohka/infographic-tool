
$(document).ready(function(){
  randomBackground();
});

function randomBackground()
{
  var imgCount=10;
  var index = Math.round(Math.random()*(imgCount));
  $("html").css("background", "url(img/backgrounds/"+index+".png)");
}
