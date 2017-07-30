$(document).on("input", ".team-08-input-field", function(){
  var id=$(this).attr("id");
  if(id.indexOf("radiant-wr")>=0)
  {
    setWrBar(this, true);
  }
  else if(id.indexOf("dire-wr")>=0)
  {
    setWrBar(this, false);
  }
});


//sets the win rate bar
function setWrBar(selector, isRadiant)
{
  var val = getNumberInput(selector);
  val = val.clamp(0,100);

  if(isRadiant)
  {
    $("#team-08-radiant-wr").text(val);
    $(".team-08-bar-green").css("width", val+"%");
  }
  else {
    $("#team-08-dire-wr").text(val);
    $(".team-08-bar-red").css("width", val+"%");
  }
}

$(document).on("click", "#team-08", function(){
  var html=
  '<h3 class="team-08-title-1 team-08-center">Win Rate Per Side</h3>' +
  '<table>' +
    '<tr>' +
      '<td class="team-08-table-left green">' +
        'Radiant <span id="team-08-radiant-wr">100</span>%' +
      '</td>' +
      '<td class="team-08-table-right" >' +
        '<div class="team-08-bar-green"></div>' +
      '</td>' +
    '</tr>' +
    '<tr>' +
      '<td class="team-08-table-left red">' +
        'Dire <span id="team-08-dire-wr">100</span>%' +
      '</td>' +
      '<td class="team-08-table-right">' +
        '<div class="team-08-bar-red"></div>' +
      '</td>' +
    '</tr>' +
  '</table>' +
  '<h3 class="team-08-title-2 team-08-center">Vision Heat Map</h3>' +
  '<h4 class="team-08-sub-title-2 team-08-center">' +
    'Observer ward locations before 10mins' +
    '<br>from the last 10 matches' +
  '</h4>' +
  '<img src="img/ti7minimap/legend.png"/>'+
  '<div class="team-08-minimap-con">' +
    '<img src="img/minimap.png" class="team-08-minimap"/>' +
  '</div>';
  setBodyHtml(html,this);
});
