
$(document).ready(function(){
  randomBackground();
  setColors("_const");
  loadTemplates();
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

function simpleBackground()
{
  var white = $(":root").css("--white");
  $("html").css("background", "");
  $("html").css("background-color", white);
}

function genLineBreaks()
{
  var hrHtml = "<hr class='section-hr faded'>";

  //remove all current line breaks
  $(".section-hr").each(function(){
    $(this).remove();
  });

  var sectionCount = $('.section').length;
  var index=0;
  $(".section").each(function(){
    if(index>0)
    {
      $(this).before(hrHtml);
    }
    index+=1;
  });
}
