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

});

/*
DYNAMIC ELEMENTS
----------------------
*/
$(document).on('input', '.input', function() {
    var inputText = $(this).val();
    var id = $(this).attr("id");
    var section_cls = "."+id.replace("-input","");
    $(section_cls).html(inputText)
});

$(document).on('input', '.input-number', function() {
  var inputText = $(this).val();
  var val = Number(inputText.toNumber());

  var id = $(this).attr("id");
  var section_cls = "."+id.replace("-input","");

  $(section_cls).html(val);
});

$(document).on('input', '.input-img', function() {
    var inputText = $(this).val();
    var id = $(this).attr("id");
    var section_cls = "."+id.replace("-input","");
    var src = "img/tournament/"+inputText+".png";
    $(section_cls).attr("src", );
});

$(document).on('click', ".btn-minimize", function(){
  var id = $(this).attr("id");
  toggleShow(id);
});

$(document).on("click", ".add-img-btn", function(){
  var this_id = $(this).attr("id").replace("-btn", "");
  var imgName = $("#"+this_id+"-input").val();
  var cls = "."+this_id;
  setImg(cls, imgName);
});

function setImg(tag, imgName)
{
  var src = "img/tournament/"+imgName+".png";
  $(tag).attr("src", src);
}

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

  $(".section-list").append(sectionHtml);
}

//triggered one a template was selected
//adds the template to the current section
function getTemplateHtml(template_name, id)
{
  template_name = template_name.replace(/\s/g,'');
  id+="-template";

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
    '<span class="'+id+'-minibtn glyphicon glyphicon-menu-down"></span>'+
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
  var html="<div class='"+template_name+"-input'>";
  var endDiv ="</div>";
  for(var i = 0; i < template_fields.length; i++) {
    var row_of_fields = template_fields[i];
    if(row_of_fields[0]==template_name)
    {
      for(var j = 1; j < row_of_fields.length; j++) {

          var input_type="";

          if(isFieldType(template_name, row_of_fields[j], template_fields_number))
          {
            input_type = "-number";
          }
          else if(isFieldType(template_name, row_of_fields[j], template_fields_img))
          {
            input_type="-img";
          }

          var str = row_of_fields[j].replace(row_of_fields[0]+"-","")
          str = str.replace(/-/g, ' ');
          str = str.toTitleCase();

          html+='<input type="text" class="input'+input_type+'"'+
          ' id="'+row_of_fields[j]+'-input" placeholder="'+str+'">';

          if(input_type=="-img")
          {
            html+="<span class='sidebar-btn add-img-btn glyphicon glyphicon glyphicon-plus' "+
            "id='"+row_of_fields[j]+"-btn'> </span>";
          }
      }
      return html + endDiv;
    }
  }
  return html + endDiv;
}

//returns the value of this input field as a number
function getNumberInput(cls)
{
  var inputText = $(cls).val();
  return Number(inputText.toNumber());
}

//returns true if the field is in the specified field type
function isFieldType(template_name, field_name, field_type)
{
  for(var i = 0; i < field_type.length; i++) {
    var row_of_fields = field_type[i];
    if(row_of_fields[0]==template_name)
    {
      for(var j = 1; j < row_of_fields.length; j++) {
          if(field_name==row_of_fields[j])
            return true;
      }
      return false;
    }
  }
  return false;
}



//toggle visibility of input fields
function toggleShow(id)
{
  console.log("btn-id:"+id);
  var hideClas="";
  if(id.indexOf("section-") >=0)
  {
    hideCls = "." + id + "-template";
  }
  else {
    hideCls = "." + id + "-input";
  }

  //toggle visibility and the glyphicon
  var isVisible = $(hideCls).is(":visible");
  var minibtn = "."+id+"-minibtn";

  if(isVisible)
  {
    $(hideCls).hide();
    $(minibtn).removeClass("glyphicon-menu-down");
    $(minibtn).addClass('glyphicon-menu-right');
  }
  else
  {
    $(hideCls).show();
    $(minibtn).removeClass("glyphicon-menu-right");
    $(minibtn).addClass('glyphicon-menu-down');
  }

}
