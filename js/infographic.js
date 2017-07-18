
$(document).ready(function(){
  setColors("_const");
  loadTemplates();
});

function setColors(postfix)
{
  var colors = [
    "--primary", "--secondary",
    "--red", "--green", "--white",
    "--background"];

  for(var i=0; i<colors.length; i++)
  {
    var col = $(":root").css(colors[i] + postfix);
    $(":root").css(colors[i], col);
  }
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
