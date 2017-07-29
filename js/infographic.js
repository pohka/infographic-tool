
$(document).ready(function(){
  setColors("_const");
  if (typeof loadTemplates !== "undefined") {
    loadTemplates();
  }
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
  $("html").css("background", white);

}

function gradiantBg()
{
  var bg = $(":root").css("--html-bg");
  $("html").css("background", bg);

}


function genLineBreaks()
{
  var hrHtml = "<hr class='section-hr faded'>";

  //remove all current line breaks
  $(".section-hr").each(function(){
    $(this).remove();
  });

  var sectionCount = $('.section').length;
  $(".section").each(function(){
      var sectionSelector = this;
      //find the matching line break button
      var id = $(this).attr("id").replace("-html", "");
      var sectionIndex = id.replace("section-", "");
      $(".toggle-linebreak").each(function(){
        var thisIndex = $(this).data("section-index");
        if(thisIndex==sectionIndex)
        {
          //check is linebreak is disabled
          if($(this).hasClass('toggle-linebreak-off')==false)
          {
            $(sectionSelector).after(hrHtml);
          }
        }
      });
  });
}
