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
    str_dynamic: [],
    team: [],
    player: [],
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
  template3.set("temp-03", "Player Performances", "full");
  template3.str_fields.push(
    "text-0", "text-1", "text-2",
    "text-3","text-4", "text-5"
  );
  template3.str_dynamic.push(
    "player-name-0", "player-name-1", "player-name-2",
    "player-name-3", "player-name-4", "player-name-5"
  );
  template3.num_fields.push("row-count");
  templates.push(template3);

  var teaminfo0 = jQuery.extend(true, {}, template);
  teaminfo0.set("team-00", "Team Title", "full");
  teaminfo0.str_fields.push("name");
  teaminfo0.team.push("logo");
  templates.push(teaminfo0);

  var teaminfo1 = jQuery.extend(true, {}, template);
  teaminfo1.set("team-01", "Team Brief", "split");
  teaminfo1.str_fields.push(
    "achieve-name-0", "achieve-date-0", "achieve-prize-0",
    "achieve-name-1", "achieve-date-1", "achieve-prize-1",
    "achieve-name-2", "achieve-date-2", "achieve-prize-2",
    "achieve-name-3", "achieve-date-3", "achieve-prize-3",
    "achieve-name-4", "achieve-date-4", "achieve-prize-4",
    "achieve-name-5", "achieve-date-5", "achieve-prize-5",
  );
  teaminfo1.num_fields.push(
    "achieve-place-0","achieve-place-1", "achieve-place-2",
    "achieve-place-3","achieve-place-4", "achieve-place-5",
    "row-count"
  );
  templates.push(teaminfo1);

  var teaminfo2 = jQuery.extend(true, {}, template);
  teaminfo2.set("team-02", "Player Profile 1", "split");
  teaminfo2.str_fields.push(
    "player-age", "player-role",
    "country-name", "avg-fantasy",
    "hero-played-win-rate-0", "hero-played-pick-rate-0",
    "hero-played-win-rate-1", "hero-played-pick-rate-1",
    "hero-played-win-rate-2", "hero-played-pick-rate-2",
    "hero-success-win-rate-0", "hero-success-pick-rate-0",
    "hero-success-win-rate-1", "hero-success-pick-rate-1",
    "hero-success-win-rate-2", "hero-success-pick-rate-2"
  );
  teaminfo2.hero_icon.push(
    "hero-left-0", "hero-left-1", "hero-left-2",
    "hero-right-0", "hero-right-1", "hero-right-2"
  );
  teaminfo2.str_dynamic.push("flag", "player-name");
  templates.push(teaminfo2);

  var teaminfo3 = jQuery.extend(true, {}, template);
  teaminfo3.set("team-03", "Player Profile 2", "split");
  teaminfo3.str_fields.push(
    "player-age", "player-role",
    "country-name", "avg-fantasy",
    "hero-played-win-rate-0", "hero-played-pick-rate-0",
    "hero-played-win-rate-1", "hero-played-pick-rate-1",
    "hero-played-win-rate-2", "hero-played-pick-rate-2",
    "hero-success-win-rate-0", "hero-success-pick-rate-0",
    "hero-success-win-rate-1", "hero-success-pick-rate-1",
    "hero-success-win-rate-2", "hero-success-pick-rate-2"
  );
  teaminfo3.hero_icon.push(
    "hero-left-0", "hero-left-1", "hero-left-2",
    "hero-right-0", "hero-right-1", "hero-right-2"
  );
  teaminfo3.str_dynamic.push("flag", "player-name");
  templates.push(teaminfo3);

  var teaminfo4 = jQuery.extend(true, {}, template);
  teaminfo4.set("team-04", "Player Profile 3", "split");
  teaminfo4.str_fields.push(
    "player-age", "player-role",
    "country-name", "avg-fantasy",
    "hero-played-win-rate-0", "hero-played-pick-rate-0",
    "hero-played-win-rate-1", "hero-played-pick-rate-1",
    "hero-played-win-rate-2", "hero-played-pick-rate-2",
    "hero-success-win-rate-0", "hero-success-pick-rate-0",
    "hero-success-win-rate-1", "hero-success-pick-rate-1",
    "hero-success-win-rate-2", "hero-success-pick-rate-2"
  );
  teaminfo4.hero_icon.push(
    "hero-left-0", "hero-left-1", "hero-left-2",
    "hero-right-0", "hero-right-1", "hero-right-2"
  );
  teaminfo4.str_dynamic.push("flag", "player-name");
  templates.push(teaminfo4);

  var teaminfo5 = jQuery.extend(true, {}, template);
  teaminfo5.set("team-05", "Player Profile 4", "split");
  teaminfo5.str_fields.push(
    "player-age", "player-role",
    "country-name", "avg-fantasy",
    "hero-played-win-rate-0", "hero-played-pick-rate-0",
    "hero-played-win-rate-1", "hero-played-pick-rate-1",
    "hero-played-win-rate-2", "hero-played-pick-rate-2",
    "hero-success-win-rate-0", "hero-success-pick-rate-0",
    "hero-success-win-rate-1", "hero-success-pick-rate-1",
    "hero-success-win-rate-2", "hero-success-pick-rate-2"
  );
  teaminfo5.hero_icon.push(
    "hero-left-0", "hero-left-1", "hero-left-2",
    "hero-right-0", "hero-right-1", "hero-right-2"
  );
  teaminfo5.str_dynamic.push("flag", "player-name");
  templates.push(teaminfo5);

  var teaminfo6 = jQuery.extend(true, {}, template);
  teaminfo6.set("team-06", "Player Profile 5", "split");
  teaminfo6.str_fields.push(
    "player-age", "player-role",
    "country-name", "avg-fantasy",
    "hero-played-win-rate-0", "hero-played-pick-rate-0",
    "hero-played-win-rate-1", "hero-played-pick-rate-1",
    "hero-played-win-rate-2", "hero-played-pick-rate-2",
    "hero-success-win-rate-0", "hero-success-pick-rate-0",
    "hero-success-win-rate-1", "hero-success-pick-rate-1",
    "hero-success-win-rate-2", "hero-success-pick-rate-2"
  );
  teaminfo6.hero_icon.push(
    "hero-left-0", "hero-left-1", "hero-left-2",
    "hero-right-0", "hero-right-1", "hero-right-2"
  );
  teaminfo6.str_dynamic.push("flag", "player-name");
  templates.push(teaminfo6);

  var teaminfo7 = jQuery.extend(true, {}, template);
  teaminfo7.set("team-07", "Counter Picks", "split");
  teaminfo7.str_fields.push("title", "sub-title");
  teaminfo7.num_fields.push(
    "win-rate-1", "win-rate-2", "win-rate-3",
    "win-rate-4", "win-rate-5"
  );
  teaminfo7.hero_icon.push(
    "hero-1", "hero-2", "hero-3",
    "hero-4", "hero-5"
  );
  templates.push(teaminfo7);

  var teaminfo8 = jQuery.extend(true, {}, template);
  teaminfo8.set("team-08", "Strategy", "split");
  teaminfo8.str_fields.push(
    "title-1", "sub-title-1","title-2", "sub-title-2"
  );
  teaminfo8.num_fields.push("radiant-wr", "dire-wr");
  teaminfo8.img_fields.push("minimap");
  templates.push(teaminfo8);

  var teaminfo9 = jQuery.extend(true, {}, template);
  teaminfo9.set("team-09", "Best Combos", "split");
  teaminfo9.num_fields.push(
    "winrate-1","winrate-2",
    "winrate-3","winrate-4"
  );
  teaminfo9.hero_portrait.push(
    "hero-left-1", "hero-right-1",
    "hero-left-2", "hero-right-2",
    "hero-left-3", "hero-right-3",
    "hero-left-4", "hero-right-4"
  );
  templates.push(teaminfo9);


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
