
$(document).ready(function(){
  randomBackground();
});

function randomBackground()
{
  var index = Math.round(Math.random()*(imgCount-1));
  console.log("index:" + index);
  $("html").css("background", "url(img/backgrounds/"+index+".png)");
}
