var current_section_index=0; //indexing for sections
var current_template_index=0;

$(document).ready(function(){
  genTemplateBrowserItems();

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
    genLineBreaks();
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
    hideBrowserTemplatesInUse();
  });



  /*
  - called when a template is selected
  - adds the template to the section
  - sets data variables in sidebar-browser to kow which
    section and templete were are editing
  */
  $(".sidebar-browser-template").click(function(){

    var id = $(".sidebar-browser").attr("id");
    var template_name = $(this).attr("id");
    var templateIndex = $(".sidebar-browser").data("template-index");

    var isEditing = false;

    //check to see if this template index exists
    //if it exists remove the current templete (true when editing)
    var templateIndex = $(".sidebar-browser").data("template-index");
    $("."+id+"-template").each(function(){ //section-0-templete
      if($(this).data("template-index")==templateIndex)
      {
        var templateID = $(".sidebar-browser").data("template-name");
        $("."+templateID).remove(); //remove current templete in body-container
        $(this).remove(); //remove input elements in sidebar
        isEditing = true;
      }
    });

    var html = getTemplateHtml(template_name, id, isEditing, templateIndex);


    //add
      $(".sidebar-section").each(function(){
        if(id==$(this).attr("id"))
        {
          if(isEditing && templateIndex==0)
          {
            $("#sidebar-title-"+ id).after(html);
          }
          else
            $(this).append(html);
        }
      });

    $(".sidebar-browser").hide();
  });

  //PALETTE
  $('#color-blind').click(function() {
    var checked = $(this).prop('checked');
    var postfix;

    if(checked)
      postfix="_blind";
    else
      postfix="_const";

    setColors(postfix);

    //redraws all canvases
    $(".input-number").each(function(){
      $(this).trigger('input');
    });
  });

  //color input
  $(".submit-color").click(function(){
    var name = $(this).data("name");
    var input = $("#palette-"+name).val();
    console.log("here:" + input);

    //careful no validation #LazyProgrammer

    var variableName;

    switch(name)
    {
      case "primary": variableName = "--primary";   break;
      case "secondary": variableName = "--secondary"; break;
      case "text":    variableName = "--white";     break;
      case "bg":    variableName = "--background";     break;
    }

      $(":root").css(variableName+"_const", input);
      setColors("_const");
  });

  //show and hide sidebar
  $(".hide-sidebar").click(function(){
    $(".sidebar").hide();
  });
  $(".show-sidebar").click(function(){
    $(".sidebar").show();
  });

  $("#simple-background").click(function() {
    var checked = $(this).prop('checked');
    if(checked==true)
      simpleBackground();
    else {
      gradiantBg();
    }
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
  var id = $(this).attr("id").replace("-minimize","");;
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
$(document).on('keydown.autocomplete', ".input-hero", function() {
  var id = $(this).attr("id");
    $(this).autocomplete({
      source: hero_names,
      minLength: 2
    });
});

//triggered when editing a template
$(document).on('click', '.btn-add-template', function() {
  var id = $(this).attr("id");
  var templateID = id.replace("-set","");
  var templateIndex = $(this).data("template-index");
  var sectionID = "section-" + $(this).data("section-index");

  showSidebarBrowser();
  setBrowserType(getTemplateByID(templateID).type);
  $(".sidebar-browser").attr("id", sectionID);
  $(".sidebar-browser").data("template-name", templateID);
  $(".sidebar-browser").data("template-index", templateIndex);
});

//triggered when a hero name is selected from the autocomplete
//sets the image of the hero from the specified folder
$(document).on('autocompleteselect', ".input-hero", function(event, ui) {
  var section_class = $(this).attr("id").replace("-input","");
  var hero = ui.item.value;
  var folder = "img/" + $(this).data("folder");
  var src = folder + "/" + hero + ".png";
  $("."+section_class).attr("src", src);
});

//moving hero icon
$(document).on("click", ".move-hero ", function(){
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

//remove template and raplce it with placeholder
  $(document).on("click", ".btn-remove-template", function(){
    var templateID = $(this).attr("id").replace("-remove", "");
    var templateIndex = $(this).data("template-index");
    var sectionIndex = $(this).data("section-index");

    $(".delete-menu").data("isSection", "false");
    $(".delete-menu").data("section-index", sectionIndex);
    $(".delete-menu").data("template-index", templateIndex);
    $(".delete-menu").data("template-id", templateID);

    showDeleteMenu();
  });

//removes the section
$(document).on("click", ".remove-section-btn", function(){


  var sectionIndex = $(this).data("section-index");
  $(".delete-menu").data("isSection", "true");
  $(".delete-menu").data("section-index", sectionIndex);

  showDeleteMenu();
});

$(document).on("input", ".input-team", function(){
  var input = $(this).val();
  setTeamLogo(input, this);
});

$(document).on('autocompleteselect', ".input-team", function(event, ui) {
  var team = ui.item.value;
  setTeamLogo(team, this);
});

$(document).on('keydown.autocomplete', ".input-team", function() {
    $(this).autocomplete({
      source: teams
    });
});

function setTeamLogo(input, selector)
{
  input = input.toLowerCase();
  var index = teams.indexOf(input);
  var htmlCls = $(selector).attr("id").replace("-input", "");
  var src = "img/teams/";

  if(index >= 0)
    src+=input;
  else
    src += "placeholder";

  src+=".png";

  $("."+htmlCls).attr("src", src);
}


function showDeleteMenu()
{
  $(".delete-menu").finish().toggle(100).
    css({
        top: event.pageY + "px",
        left: event.pageX + "px"
    });
}

function removeSection()
{
  var sectionIndex = $(".delete-menu").data("section-index");
  $("#section-"+sectionIndex+"-html").remove();
  $("#section-"+sectionIndex).remove();
  genLineBreaks();
}

function removeTemplate()
{
  var sectionIndex = $(".delete-menu").data("section-index");
  var templateIndex = $(".delete-menu").data("template-index");
  var templateID = $(".delete-menu").data("template-id");

  //find and remove the template
  var sidebarClass = ".section-"+sectionIndex+"-template";
  $(sidebarClass).each(function(){
    if(templateIndex == $(this).data("template-index"))
    {
      $(this).remove();
      $("."+templateID).remove();
    }
  });

  var html = getTemplateHtml("placeholder", "section-"+sectionIndex, true, templateIndex);

  if(templateIndex==0)
  {
    $("#sidebar-title-section-"+ sectionIndex).after(html);
  }
  else
  {
    $("#section-"+sectionIndex).append(html);
  }
}


//sets the image
function setImg(tag, imgName)
{
  var src = "img/"+imgName+".png";
  $(tag).attr("src", src);
}

//adds the section and displays the template browser
function addSection(id)
{
  current_template_index=0;

  var sectionID = "section-"+current_section_index;

  showSidebarBrowser();
  $(".browser-menu-item").each(function(){
    $(this).prop("disabled", false);
  });
  $(".sidebar-browser").attr("id", sectionID);
  $(".sidebar-browser").data("template-index", current_template_index);

  var sectionHtml =
    '<div class="sidebar-item sidebar-section"'+
    'id="'+sectionID+'">' +
    getSidebarButtonHtml(sectionID) +
    '<button class="sidebar-btn glyphicon glyphicon-remove remove-section-btn"'+
    ' data-section-index="'+current_section_index+'"></button>'+
    '<span id="sidebar-title-section-'+ current_section_index +'">Section Name</span>'+

    '</div>';

  current_section_index+=1;


  $(".section-list").append(sectionHtml);

  var sectionHtml = '<div class="section" id="'+sectionID+'-html"></div>';
  $("#section-container").append(sectionHtml);
}

//triggered once a template was selected
//gets the template html for the current section
function getTemplateHtml(template_name, id, isEditing, tIndex)
{
  template_name = template_name.replace(/\s/g,'');
  cls=id+ "-template";
  var templateIndex = current_template_index;
  if(isEditing)
  {
    templateIndex = tIndex;
  }

  var templateHtml=
    '<div class="sidebar-item sidebar-template '+ cls +'" '+
    ' data-template-index="' + templateIndex +'">'+
     getSidebarButtonHtml(template_name)+ getTemplateTitle(template_name) +
     getSetTemplateBtnHtml(id, template_name, templateIndex) +
     getInputFieldsHtml(template_name)+
    '</div>';

  if(isEditing==false && isSplit(template_name))
  {
    current_template_index+=1;
    templateHtml+=getTemplateHtml("placeholder", id, true, current_template_index);
  }

  return templateHtml;
}

//button for minimizing section
function getSidebarButtonHtml(id)
{
  var buttonhtml =
    '<button class="btn-minimize" id="'+id+'-minimize">'+
    '<span class="'+id+'-minibtn glyphicon glyphicon-menu-down"></span>' +
    '</button>';
  return buttonhtml;
}

function getSetTemplateBtnHtml(id, template_name, templateIndex)
{
  var sectionIndex = id.replace("section-", "");


  var removeBtnHtml = '<button class="btn-remove-template template-btn sidebar-btn glyphicon glyphicon-remove-circle"' +
   'id="'+template_name+'-remove"' +
   ' data-template-index="'+templateIndex+'" ' +
   ' data-section-index="'+sectionIndex+'"></button>';



  var editBtnHtml =
    '<button class="btn-add-template template-btn sidebar-btn glyphicon glyphicon-edit"' +
     'id="'+template_name+'-set"' +
     ' data-template-index="'+templateIndex+'" ' +
     ' data-section-index="'+sectionIndex+'"></button>';


  //button will align in opposite direction because of float right
  var btnHtml = editBtnHtml+removeBtnHtml

  return btnHtml;
}



//returns the html for all the input fields
function getInputFieldsHtml(template_name)
{
  //variables which change depending on the input type
  var num_input_index=0;
  var str_dynamic_index=0;
  var data = "";
  var cls = "";
  var input_type="";
  var fieldName="";

  var html="<div class='"+template_name+"-input'>";
  var endDiv ="</div>";

  var template = getTemplateByID(template_name);
  var fieldID = template.id;

  //loop through all fields for each input type

  for(var i=0; i<template.str_fields.length; i++)
  {
    data="";
    cls="";
    input_type="";
    fieldName = template.str_fields[i];

    html += wrapInputFieldHtml(fieldID, template_name, input_type, data, cls, fieldName);
  }

  for(var i=0; i<template.num_fields.length; i++)
  {
    input_type = "-number";
    num_input_index+=1;
    data = 'data-index="'+num_input_index+'" ';
    cls=" "+fieldID+"-input-field ";
    fieldName = template.num_fields[i];

    html += wrapInputFieldHtml(fieldID, template_name, input_type, data, cls, fieldName);
  }

  for(var i=0; i<template.img_fields.length; i++)
  {
    input_type="-img";
    data="";
    cls="";
    fieldName = template.img_fields[i];

    html += wrapInputFieldHtml(fieldID, template_name, input_type, data, cls, fieldName);
  }

  for(var i=0; i<template.hero_icon.length; i++)
  {
    input_type="-hero";
    data = 'data-folder="hero-icons" ';
    cls="";
    fieldName = template.hero_icon[i];

    html += wrapInputFieldHtml(fieldID, template_name, input_type, data, cls,  fieldName);
  }

  for(var i=0; i<template.hero_portrait.length; i++)
  {
    input_type="-hero";
    data = 'data-folder="hero-portraits" ';
    cls="";
    fieldName = template.hero_portrait[i];

    html += wrapInputFieldHtml(fieldID, template_name, input_type, data, cls, fieldName);
  }

  for(var i=0; i<template.str_dynamic.length; i++)
  {
    data = 'data-index="'+str_dynamic_index+'" ';
    cls="-dynamic-str";
    input_type="";
    fieldName = template.str_dynamic[i];
    str_dynamic_index+=1;
    html += wrapInputFieldHtml(fieldID, template_name, input_type, data, cls, fieldName);
  }

  for(var i=0; i<template.team.length; i++)
  {
    data="";
    cls="";
    fieldName = template.team[i];
    input_type="-team";

    html += wrapInputFieldHtml(fieldID, template_name, input_type, data, cls, fieldName);
  }

  return html + endDiv;
}

function wrapInputFieldHtml(fieldID, template_name, input_type, data, cls, fieldName)
{
  var html="<div class='"+fieldName+"-input'>";
  var str = fieldName;
  str = str.replace(/-/g, ' ');
  str = str.toTitleCase();

  fieldName = fieldID + "-" + fieldName;

  html+='<input type="text" class="input'+input_type+cls+'"'+
  ' id="'+fieldName+'-input" ' + data +' placeholder="'+str+'">';

  //extra html
  if(input_type=="-img")
  {
    html+="<button class='sidebar-btn add-img-btn glyphicon glyphicon glyphicon-plus' "+
    "id='"+fieldName+"-btn'> </button>";
  }
  else if(input_type=="-hero")
  {
    html+="<button class='sidebar-btn glyphicon move-hero glyphicon-chevron-left' "+
    "id='"+fieldName+"' data-direction='left'></button>";
    html+="<button class='sidebar-btn move-hero glyphicon glyphicon-chevron-right' "+
    "id='"+fieldName+"' data-direction='right'></button>";
  }

  return html+"</div>";
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
  var hideCls="";
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

//hide all sections button in sidebar sub menu
function hideAllSections()
{
  $(".btn-minimize").each(function(index, el) {
    var id = $(this).attr("id").replace("-minimize","");
    var isSectionBtn = id.indexOf("section-")>=0;
    if(isSectionBtn)
      toggleShow(id, true);
  });
}

//adds the templete html to the current section
function setBodyHtml(html, selector)
{
  var browserID = $(".sidebar-browser").attr("id");
  var templateIndex = $(".sidebar-browser").data("template-index");
  var templateHtml = getTemplateBodyHtml(selector, html);

  var selector = "#"+browserID+"-html";
  if(templateIndex==0)
    $(selector).prepend(templateHtml);
  else
    $(selector).append(templateHtml);
}

//wraps the html in the template container div
function getTemplateBodyHtml(selector, html)
{
  var id = $(selector).attr("id");
  var extraClasses = '';
  if(isSplit(id))
    extraClasses += ' width-half';

  var fullHtml =
    '<div class="container ' + id + extraClasses + '">'+html+'</div>';

  return fullHtml;
}

//if editing only enable the current template type
function setBrowserType(type)
{
  var id = "template-" + type
  $(".browser-menu-item").each(function(){
    if($(this).attr("id")==id)
    {
      $(this).prop('disabled', false);
      setActiveBrowserMenuItem(id);
      $(this).trigger("click");
    }
    else {
      $(this).prop('disabled', true);
    }
  });
}

//shows the sidebar browser with the currently available templates
function showSidebarBrowser()
{
  $(".sidebar-browser").show();
  hideBrowserTemplatesInUse();
}

//hides all template options that are already in use in the body
function hideBrowserTemplatesInUse()
{
  templates.forEach(function(element)
  {
    var id = element.id;
    if ($("."+id).length > 0)
    {
      $("#"+id).hide();
    }
  });
}

// If the document is clicked somewhere, hide the delete menu
$(document).bind("mousedown", function (e) {
    if (!$(e.target).parents(".delete-menu").length > 0) {
        $(".delete-menu").hide(100);
    }
});


// If the menu element is clicked
$(document).on("click", ".delete-menu li", function(){
  switch($(this).attr("data-action")) {
    case "delete":
      var isSection = $(".delete-menu").data("isSection");
      if(isSection=="true")
        removeSection();
      else
        removeTemplate();

    break;
  }

  // Hide it AFTER the action was triggered
  $(".delete-menu").hide(100);
});
