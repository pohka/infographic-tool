
$(document).on('input', '#tournament-radiant-winrate-input', function() {
  tournamentSideWinrate(getNumberInput(this));
});


function tournamentSideWinrate(radiant_wr)
{
  radiant_wr = radiant_wr.clamp(100,0);

  var border=14;
  var maxWidth = 300-border-border;
  var width = (radiant_wr/100)*maxWidth+border;

  $(".inner-green").css("width", width);
  $(".tournament-dire-winrate").html(100-radiant_wr);
}

//adding html for tournament template
$(document).on('click', '#tournament', function(){
    var html =
    '<!--HEADER-->' +
    '<div class="row">' +
      '<div class="col-md-4 tournament-info">' +
        '<span class="tournament-title">title here</span><br>' +
        '<span class="tournament-date">xx-xxth July</span><br>' +
        'Prize Pool <span class="tournament-prize-pool">$xxxk</span>' +
      '</div>' +
      '<div class="col-md-4">' +
        '<img src="img/tournament/placeholder.png" class="tournament-logo">' +
      '</div>' +
      '<div class="col-md-4 tournament-overview">' +
        '<span class="tournament-heroes-picked">xx</span> <span class="header-stat">Heroes picked</span><br>' +
        '<span class="tournament-matches">xx</span>  <span class="header-stat">Matches</span><br>' +
        '<span class="tournament-winner">xx</span>  <span class="header-stat">Winner</span>' +
      '</div>' +
    '</div>'+
    '<!--SIDE WIN RATE BAR-->' +
    '<div class="wr-bar-con">' +
      '<div class="wr-bar-text row">' +
        '<div class="radiant col-md-3">' +
          'Radiant &nbsp<span class="tournament-radiant-winrate number-field">50</span>%' +
        '</div>' +
        '<div class="col-md-6">' +
          '<div class="wr-bar ">' +
            '<div class="inner-bar inner-red"></div>' +
            '<div class="inner-bar inner-green"></div>' +
            '<div class="inner-bar center-bar"></div>' +
          '</div>' +
        '</div>' +
        '<div class="dire col-md-3">' +
            '<span class="tournament-dire-winrate">50</span>% &nbspDire' +
        '</div>' +
      '</div>';

    var id = $(this).attr("id");
    var openingHtml =
    '<div class="section" id="0">' +
			'<div class="container ' + id + '">';

    var closingHtml = '</div><hr class="faded"></div>';

    var combinedHtml = html = $.parseHTML(openingHtml + html + closingHtml);

    console.log(combinedHtml);

    $(".body-container").append(combinedHtml);
});
