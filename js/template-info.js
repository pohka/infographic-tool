//data file
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
  tournament.str_fields.push("title","date","prize-pool", "heroes-picked", "matches", "winner");
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

  var template3 = jQuery.extend(true, {}, template);
  template3.set("temp-03", "Player Profiles", "full");
  template3.str_fields.push(
    "text-0", "player-name-0",
    "text-1", "player-name-1",
    "text-2", "player-name-2",
    "text-3", "player-name-3",
    "text-4", "player-name-4"
  );
  templates.push(template3);


  var placeholder = jQuery.extend(true, {}, template);
    placeholder.set("placeholder", "Placeholder", "split");
  templates.push(placeholder);
}

function getTemplateByID(id)
{
  for(var i=0; i<templates.length; i++)
  {
    if(id==templates[i].id)
      return templates[i];
  }
  console.error("No template ID of this type found: " + id);
  return null;
}

function isSplit(template_id)
{
  var type = getTemplateByID(template_id).type;
  return type=="split";
}

function getTemplateTitle(template_id)
{
  return getTemplateByID(template_id).name;
}
