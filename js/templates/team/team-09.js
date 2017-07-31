$(document).on("click",
"#team-09-hero-left-1, #team-09-hero-right-1,"+
"#team-09-hero-left-2, #team-09-hero-right-2,"+
"#team-09-hero-left-3, #team-09-hero-right-3,"+
"#team-09-hero-left-4, #team-09-hero-right-4",
 function(){
  var direction = $(this).data("direction");
  var id = $(this).attr("id");
  var increment=2;
  if(direction=="left"){
    increment*=-1;
  }

  $("."+id).css('margin-left', function (index, curValue) {
    return parseInt(curValue, 10) + increment + 'px';
});
});

$(document).on("click", "#team-09", function(){
  var html=
  '<h3 class="team-09-title">Best Combos</h3>' +
  '<h4 class="team-09-sub-title">Highest <span class="green">win rate</span> with at least 5 matches</h4>' +
  '<div class="team-09-content">' +
    '<div class="team-09-mid-text-con team-09-mid-text-lg">' +
      '<span class="team-09-mid-text team-09-winrate-1">80</span>%' +
    '</div>' +
    '<div class="container">' +
      '<div class="row">' +
        '<div class="col-xs-5 team-09-hero">' +
          '<img src="img/hero-portraits/arc_warden.png" class="team-09-hero-left-1"/>' +
        '</div>' +
        '<div class="col-xs-2">' +
        '</div>' +
        '<div class="col-xs-5 team-09-hero">' +
          '<img src="img/hero-portraits/alchemist.png" class="team-09-hero-right-1"/>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="team-09-mid-text-con team-09-mid-text-md">' +
      '<span class="team-09-mid-text team-09-winrate-2">80</span>%' +
    '</div>' +
    '<div class="container">' +
      '<div class="row">' +
        '<div class="col-xs-5 team-09-hero">' +
          '<img src="img/hero-portraits/arc_warden.png" class="team-09-hero-left-2"/>' +
        '</div>' +
        '<div class="col-xs-2"></div>' +
        '<div class="col-xs-5 team-09-hero">' +
          '<img src="img/hero-portraits/sand_king.png" class="team-09-hero-right-2"/>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="team-09-mid-text-con">' +
      '<span class="team-09-mid-text team-09-winrate-3">80</span>%' +
    '</div>' +
    '<div class="container">' +
      '<div class="row">' +
        '<div class="col-xs-5 team-09-hero">' +
          '<img src="img/hero-portraits/arc_warden.png" class="team-09-hero-left-3"/>' +
        '</div>' +
        '<div class="col-xs-2">' +
        '</div>' +
        '<div class="col-xs-5 team-09-hero">' +
          '<img src="img/hero-portraits/sand_king.png" class="team-09-hero-right-3"/>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="team-09-mid-text-con">' +
      '<span class="team-09-mid-text team-09-winrate-4">80</span>%' +
    '</div>' +
    '<div class="container">' +
      '<div class="row">' +
        '<div class="col-xs-5 team-09-hero">' +
          '<img src="img/hero-portraits/arc_warden.png" class="team-09-hero-left-4"/>' +
        '</div>' +
        '<div class="col-xs-2">' +
        '</div>' +
        '<div class="col-xs-5 team-09-hero">' +
          '<img src="img/hero-portraits/sand_king.png" class="team-09-hero-right-4"/>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>';
  setBodyHtml(html,this);
});
