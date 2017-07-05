

$(document).ready(function(){
  addSidebarButtons();

  //changing menu items
  $(".sidebar-menu-item").click(function(){

      //change menu selected
      $(".sidebar-menu-item-selected").removeClass("sidebar-menu-item-selected");
      $(this).addClass("sidebar-menu-item-selected");

      //toggle columns
      var id = $(this).attr("id") + "-column";
      $( ".sidebar-column" ).each(function() {
          if($(this).attr("id")==id)
          {
            $(this).show();
          }
          else {
            $(this).hide();
          }
      });

  });
});

function addSidebarButtons()
{
  var buttonhtml = '<button class="btn-minimize">'+
                   '<span class="glyphicon glyphicon-menu-down"></span>'+
                   '</button>';
   $(".sidebar-item").each(function(){
     $(this).prepend(buttonhtml);
   });
}
