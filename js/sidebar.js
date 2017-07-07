var current_section_index=0; //indexing for sections

$(document).ready(function(){

  //changing menu items
  $(".sidebar-menu-item").click(function(){
    //change menu selected
    $(".sidebar-menu-item-selected").removeClass("sidebar-menu-item-selected");
    $(this).addClass("sidebar-menu-item-selected");

    //toggle menu columns
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

  //SUB MENU ITEMS
  $("#sidebar-add-section").click(function(){
    addSection($(this));
  });

  $("#sidebar-hide-sections").click(function(){
    hideAllSections();
  });

  //TEMPLATE BROWSER
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

  //called when a template is selected
  //adds the template to the section
  $(".sidebar-browser-template").click(function(){

    var id = $(".sidebar-browser").attr("id");
    var template_name = $(this).attr("id");

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

  //PALETTE
  $('#color-blind').click(function() {
    var checked = $(this).prop('checked');

    if(checked)
    {
      $(":root").css("--green", "#a4beff");
      $(":root").css("--red", "#0048ff");
      $(":root").css("--secondary", "#f6f9ff");
    }
    else
    {
      var green = $(":root").css("--green_const");
      var red = $(":root").css("--red_const");
      var secondary = $(":root").css("--secondary_const");
      $(":root").css("--green", green);
      $(":root").css("--red", red);
      $(":root").css("--secondary", secondary);
    }

    //redraws all canvases
    $(".input-number").each(function(){
      $(this).trigger('input');
    });
  });

});

/*
DYNAMIC ELEMENTS
----------------------
*/
//taking input
$(document).on('input', '.input', function() {
    var inputText = $(this).val();
    var id = $(this).attr("id");
    var section_cls = "."+id.replace("-input","");
    $(section_cls).html(inputText)
});

//taking number input which will have functionality
$(document).on('input', '.input-number', function() {
  var inputText = $(this).val();
  var val = Number(inputText.toNumber());

  var id = $(this).attr("id");
  var section_cls = "."+id.replace("-input","");

  $(section_cls).html(val);
});

//taking input for an image
$(document).on('input', '.input-img', function() {
    var inputText = $(this).val();
    var id = $(this).attr("id");
    var section_cls = "."+id.replace("-input","");
    var src = "img/tournament/"+inputText+".png";
    $(section_cls).attr("src", );
});

//when a minimze button is clicked
$(document).on('click', ".btn-minimize", function(){
  var id = $(this).attr("id");
  toggleShow(id, false);
});

//when the image add button is clicked
$(document).on("click", ".add-img-btn", function(){
  var this_id = $(this).attr("id").replace("-btn", "");
  var imgName = $("#"+this_id+"-input").val();
  var cls = "."+this_id;
  setImg(cls, imgName);
});

//inputing a hero name with autocomplete
$(document).on('keydown.autocomplete', ".input-hero-icons", function() {
  var id = $(this).attr("id");
    $(this).autocomplete({
      source: hero_names,
      minLength: 2
    });
});

//triggered when a hero name is selected from the autocomplete
//sets the image of the hero from the specified folder
$(document).on('autocompleteselect', ".input-hero-icons", function(event, ui) {
  var section_class = $(this).attr("id").replace("-input","");
  var hero = ui.item.value;
  var folder = "img/" + $(this).data("folder");
  var src = folder + "/" + hero + ".png";
  $("."+section_class).attr("src", src);
});

//moving hero icon
$(document).on("click", ".move-hero-icon ", function(){
  var direction = $(this).data("direction");

  var moveAmount=2;
  if(direction=="left")
  {
    moveAmount*=-1;
  }

  var section_class =  $(this).attr("id");

  var positionStr = $("."+section_class).css("object-position");

  //parse object-position string
  var elements = positionStr.split(" ");

  var positions = [];
  for(var i=0; i<elements.length; i++)
  {
    if(elements[i].indexOf("px"))
    {
      var num = elements[i].replace("px");
      var num = num.replace("undefined","");
      positions.push(Number(num));
    }
  }

  positions[0]+=moveAmount;
  var posAsStr = positions[0]+"px";

  $("."+section_class).css("object-position", posAsStr);
});


//sets the image
function setImg(tag, imgName)
{
  var src = "img/"+imgName+".png";
  $(tag).attr("src", src);
}

//adds the section and displays the template browser
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



//returns the html for all the input fields
function getInputFieldsHtml(template_name)
{
  var num_input_index=0;
  var data = "";
  var cls = "";
  var input_type="";

  var html="<div class='"+template_name+"-input'>";
  var endDiv ="</div>";


  for(var i = 0; i < template_fields.length; i++) {
    var row_of_fields = template_fields[i];
    if(row_of_fields[0]==template_name)
    {
      for(var j = 1; j < row_of_fields.length; j++) {
          data="";
          cls="";
          input_type="";

          if(isFieldType(template_name, row_of_fields[j], template_fields_number))
          {
            input_type = "-number";
            num_input_index+=1;
            cls=" template-01-input-field ";
            data += 'data-index="'+num_input_index+'" ';
          }
          else if(isFieldType(template_name, row_of_fields[j], template_fields_img))
          {
            input_type="-img";
          }
          else if(isFieldType(template_name, row_of_fields[j], template_fields_hero_icons))
          {
            input_type="-hero-icons";
            data += 'data-folder="hero-icons" ';
          }


          var str = row_of_fields[j].replace(row_of_fields[0]+"-","")
          str = str.replace(/-/g, ' ');
          str = str.toTitleCase();

          html+='<input type="text" class="input'+input_type+cls+'"'+
          ' id="'+row_of_fields[j]+'-input" ' + data +' placeholder="'+str+'">';

          //extra html
          if(input_type=="-img")
          {
            html+="<span class='sidebar-btn add-img-btn glyphicon glyphicon glyphicon-plus' "+
            "id='"+row_of_fields[j]+"-btn'> </span>";
          }
          else if(input_type=="-hero-icons")
          {
            html+="<button class='sidebar-btn glyphicon move-hero-icon glyphicon-chevron-left' "+
            "id='"+row_of_fields[j]+"' data-direction='left'></button>";
            html+="<button class='sidebar-btn move-hero-icon glyphicon glyphicon-chevron-right' "+
            "id='"+row_of_fields[j]+"' data-direction='right'></button>";
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
function toggleShow(id, forceMinimize)
{
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

  if(isVisible || forceMinimize)
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

function hideAllSections()
{
  $(".btn-minimize").each(function(index, el) {
    var id = $(this).attr("id");
    var isSectionBtn = id.indexOf("section-")>=0;
    if(isSectionBtn)
      toggleShow(id, true);
  });
}
