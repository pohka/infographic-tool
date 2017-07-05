var current_section_index=0;

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

  $(".sidebar-add-section").click(function(){
    addSection($(this));
  });

  $(".browser-menu-item").click(function() {
    var id = $(this).attr("id");
    if(id=="template-full")
    {
      $(".template-full").show();
      $(".template-split").hide();
    }
    else
    {
      $(".template-full").hide();
      $(".template-split").show();
    }
  });

  //when template is selected
  $(".sidebar-browser-template").click(function(){

    var id = $(".sidebar-browser").attr("id");
    var template_name = $(this).text();

    //find the currnet section
    $(".sidebar-section").each(function(){
      if(id==$(this).attr("id"))
      {
        var html = getTemplateHtml(template_name, id);
        $(this).append(html);

        $(".sidebar-browser").hide();
      }
    });
  });


  $(".btn-minimize").click(function(){
    console.log("clicked");
    var id = $(this).attr("id");
    toggleShow(id);
  });

});



//adds the section and displays the templay browser
function addSection(id)
{
  var sectionID = "section-"+current_section_index;

  $(".sidebar-browser").show();
  $(".sidebar-browser").attr("id", sectionID);

  var sectionHtml =
    '<div class="sidebar-item sidebar-section"'+
    'id="'+sectionID+'">' +
    getSidebarButtonHtml(sectionID) +
    'Section Name</div>';

  current_section_index+=1;

  $(id).before(sectionHtml);
}

//triggered one a template was selected
//adds the template to the current section
function getTemplateHtml(template_name, id)
{
  template_name = template_name.replace(/\s/g,'');
  var templateHtml=
    '<div class="sidebar-item sidebar-template '+id+'">'+
     getSidebarButtonHtml(template_name)+template_name+
     getInputFieldsHtml(template_name)+
    '</div>';
  return templateHtml;
}

//button for minimizing section
function getSidebarButtonHtml(id)
{
  var buttonhtml =
    '<button class="btn-minimize" id="'+id+'">'+
    '<span class="glyphicon glyphicon-menu-down"></span>'+
    '</button>';
  return buttonhtml;
}

//generating all the buttons on load (can remove this later)
function addSidebarButtons()
{
   $(".sidebar-item").each(function(){
     $(this).prepend(getSidebarButtonHtml());
   });
}



function getInputFieldsHtml(template_name)
{
  var html="";
  for(var i = 0; i < template_text.length; i++) {
    var text = template_text[i];
    console.log(text[0]+","+template_name);
    if(text[0]==template_name)
    {
      for(var j = 1; j < text.length; j++) {
          var str = text[j].replace(text[0]+"-","")
          html+='<input type="text" class="'+template_name+'-input" placeholder="'+str+'">';
      }
    }
  }
  return html;
}

//todo
function toggleShow(id)
{
  console.log(id);
  if(id.indexOf("section-") >=0)
  {
    console.here("here");
  }
}
