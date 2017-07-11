//data file

//image file is same as name
var template_info = [
  ["tournament", "full", "tournament"],
  ["footer", "full", "footer"],
  ["template-01", "split", "template 1"],
  ["template-02", "split", "template 2"],
  ["placeholder", "split", "placeholder for right side"]
];

var template_fields = [
  [
    "tournament",
    "tournament-title","tournament-date","tournament-prize-pool",
    "tournament-heroes-picked", "tournament-matches", "tournament-winner",
    "tournament-radiant-winrate", "tournament-logo"
  ],
  [
    "template-01",
    "template-01-title", "template-01-sub-title",
    "template-01-pick-1-hero-icon", "template-01-pick-rate-1",
    "template-01-pick-2-hero-icon", "template-01-pick-rate-2",
    "template-01-pick-3-hero-icon", "template-01-pick-rate-3",
    "template-01-ban-1-hero-icon", "template-01-ban-rate-1",
    "template-01-ban-2-hero-icon", "template-01-ban-rate-2",
    "template-01-ban-3-hero-icon", "template-01-ban-rate-3"
  ],
  [ "template-02",
    "template-02-hero-1", "template-02-pick-rate-1", "template-02-ban-rate-1",
    "template-02-hero-2", "template-02-pick-rate-2", "template-02-ban-rate-2",
    "template-02-hero-3", "template-02-pick-rate-3", "template-02-ban-rate-3"
  ]
];

//if any of these match template_text, the input will be for numbers
var template_fields_number =[
  ["template-01",
    "template-01-pick-rate-1", "template-01-pick-rate-2",
    "template-01-pick-rate-3", "template-01-ban-rate-1",
    "template-01-ban-rate-2","template-01-ban-rate-3"
  ],
  ["tournament", "tournament-radiant-winrate"],
  [ "template-02",
    "template-02-pick-rate-1", "template-02-ban-rate-1",
    "template-02-pick-rate-2", "template-02-ban-rate-2",
    "template-02-pick-rate-3", "template-02-ban-rate-3"
  ]
];

var template_fields_img =[
  ["tournament", "tournament-logo"]
];

var template_fields_hero_icons =[
  ["template-01",
    "template-01-pick-1-hero-icon", "template-01-pick-2-hero-icon",
    "template-01-pick-3-hero-icon", "template-01-ban-1-hero-icon",
    "template-01-ban-2-hero-icon","template-01-ban-3-hero-icon"
  ]
];

var template_fields_hero_portrait = [
  [ "template-02",
    "template-02-hero-1", "template-02-hero-2","template-02-hero-3"
  ]
];

var template = {
    id: "",
    name: "",
    type: "",
    str_fields: [],
    num_fields: [],
    img_fields: [],
    hero_icon: [],
    hero_portrait: [],
    set: function(id, name, split){
      this.id = id;
      this.name = name;
      this.type = split;
    }
};

var templates = [];

function loadTemplates()
{
  var tournament = jQuery.extend(true, {}, template);
  tournament.set("tournament", "Tournament", "full");
  tournament.str_fields.push("title","date","prize-pool", "heroes-picked", "matches", "winner",);
  tournament.num_fields.push("radiant-winrate");
  tournament.img_fields.push("logo");
  templates.push(tournament);

  var footer = jQuery.extend(true, {}, template);
  footer.set("footer", "Footer", "full");
  templates.push(footer);

  var template1 = jQuery.extend(true, {}, template);
  template1.set("template-01", "Template 1", "split");
  template1.str_fields.push("title", "sub-title");
  template1.num_fields.push(
    "pick-rate-1", "pick-rate-2","pick-rate-3",
    "ban-rate-1", "ban-rate-2","ban-rate-3");
  template1.hero_icon.push(
    "pick-1-hero-icon", "pick-2-hero-icon", "pick-3-hero-icon",
    "ban-1-hero-icon", "ban-2-hero-icon","ban-3-hero-icon");
  templates.push(template1);

  var template2 = jQuery.extend(true, {}, template);
  template2.set("template-02", "Template 2", "split");
  template2.num_fields.push(
    "pick-rate-1", "ban-rate-1",
    "pick-rate-2", "ban-rate-2",
    "pick-rate-3", "ban-rate-3")
  template2.hero_portrait.push("hero-1", "hero-2", "hero-3");
  templates.push(template2);

  var placeholder = jQuery.extend(true, {}, template);
    placeholder.set("placeholder", "Placeholder", "split");
  templates.push(placeholder);
}



function isSplit(template_id)
{
  for(var i=0; i<template_info.length; i++)
  {
    if(template_info[i][0]==template_id)
    {
      return template_info[i][1]=="split";
    }
  }
  return false;
}

function getTemplateTitle(template_id)
{
  for(var i=0; i<template_info.length; i++)
  {
    if(template_info[i][0]==template_id)
      return template_info[i][2];
  }
  return template_id;
}
