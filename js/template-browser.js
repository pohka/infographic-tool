
//template browser toggle active menu item
$(document).on('click', '.browser-menu-item', function() {
  $(".browser-menu-item").each(function(){
    $(this).removeClass('sidebar-menu-item-selected');
  });

  $(this).addClass('sidebar-menu-item-selected');
});


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
