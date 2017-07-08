
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
