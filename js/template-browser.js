
//template browser toggle active menu item
$(document).on('click', '.browser-menu-item', function() {
  var id = $(this).attr("id");
  setActiveBrowserMenuItem(id);
});

//set the active menu item in the template browser
function setActiveBrowserMenuItem(id)
{
  var selector = "#"+id;
  console.log("id:" + id);
  var type = id.replace("template-", "");

  $(selector).addClass('sidebar-menu-item-selected');

  var otherSelector = "#template-";
  if(type=="full")
  {
    otherSelector+="split";
  }
  else if(type=="split")
  {
    otherSelector+="full";
  }
  $(otherSelector).removeClass('sidebar-menu-item-selected');

}


function genTemplateBrowserItems()
{
  for(var i=0; i<templates.length; i++)
  {
    var id = templates[i].id;
    var html;

    if(id!="placeholder")
    {
      var title = templates[i].name;
      var type = templates[i].type;

      html =
        '<div class="sidebar-btn sidebar-browser-template template-' + type +
        '" id="' + id + '">' +
        title +
        '<img src="img/templates/' + id + '.png"></div>'; //preview img

        $(".sidebar-browser").append(html);
    }
  }
}
