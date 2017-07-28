$(document).on("input", ".team-07-input-field", function(){
  var val = getNumberInput(this);
	val = val.clamp(100,0);
	var percent = val;

	var index = $(this).data("index");
	var canvasID = "team-07-canvas-"+index;
	var isGreen = true;

  var size;
  if(index==1)
    size=50;
  else if(index==2)
    size=42 ;

	arc(percent, canvasID, isGreen, size);
});


$(document).on("click", "#team-07", function(){
  var html=
  '<div class="container width-half">' +
    '<h3 class="team-07-title">Best Counter Picks</h3>' +
    '<h4 class="team-07-sub-title">Opponent\'s <span class="green">win</span> rate</h4>' +
    '<div class="row">' +
      '<div class="col-xs-1"></div>' +
      '<div class="col-xs-5 team-07-top-row">' +
        '<div class="team-07-win team-07-win-lg">' +
          '<span class="team-07-win-rate team-07-win-rate-1">0</span>%' +
        '</div>' +
        '<canvas class="canvas canvas-circle" id="team-07-canvas-1"></canvas>' +
        '<img src="img/hero-icons/pudge.png" class="team-07-win-icon team-07-win-icon-lg team-07-hero-1">' +
      '</div>' +
      '<div class="col-xs-5">' +
        '<div class="team-07-win team-07-win-md">' +
          '<span class="team-07-win-rate team-07-win-rate-2">0</span>%' +
        '</div>' +
        '<canvas class="canvas canvas-circle" id="team-07-canvas-2"></canvas>' +
        '<img src="img/hero-icons/pudge.png" class="team-07-win-icon team-07-win-icon-md  team-07-hero-2">' +
      '</div>' +
      '<div class="col-xs-1"></div>' +
    '</div>' +
    '<div class="row">' +
      '<div class="col-xs-4">' +
        '<div class="team-07-win">' +
          '<span class="team-07-win-rate team-07-win-rate-3">0</span>%' +
        '</div>' +
        '<canvas class="canvas canvas-circle" id="team-07-canvas-3"></canvas>' +
        '<img src="img/placeholder.png" class="team-07-win-icon  team-07-hero-3">' +
      '</div>' +
      '<div class="col-xs-4">' +
        '<div class="team-07-win">' +
          '<span class="team-07-win-rate team-07-win-rate-4">0</span>%' +
        '</div>' +
        '<canvas class="canvas canvas-circle" id="team-07-canvas-4"></canvas>' +
        '<img src="img/placeholder.png" class="team-07-win-icon  team-07-hero-4">' +
      '</div>' +
      '<div class="col-xs-4">' +
        '<div class="team-07-win">' +
          '<span class="team-07-win-rate team-07-win-rate-5">0</span>%' +
        '</div>' +
        '<canvas class="canvas canvas-circle" id="team-07-canvas-5"></canvas>' +
        '<img src="img/placeholder.png" class="team-07-win-icon  team-07-hero-5">' +
      '</div>' +
    '</div>' +
  '</div>';

  setBodyHtml(html, this);
});
