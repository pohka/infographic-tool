//resizes text for player name
$(function() {
    console.log("resize");
    var span = $(".team-02-player-name");
    var fontSize = parseInt(span.css('font-size'));

    do {
        fontSize--;
        span.css('font-size', fontSize.toString() + 'px');
    } while (span.width() >= 150);
});

$(document).on("input", "#team-02-flag-input", function(){
  var input = $(this).val();
  if(input.length>1)
  {
    $("#team-02-flag").removeClass();
    $("#team-02-flag").addClass('flag-icon flag-icon-'+input);
  }
})


$(document).on("click", "#team-02", function(){
  var html =
  '<table class="team-02-player-table">' +
		'<tr>' +
			'<td class="team-02-player-img-con">' +
				'<img src="img/players/n0tail.png" class="team-02-player-img"></img>' +
			'</td>' +
			'<td class="team-02-player-info">' +
				'<h3 class="team-02-player-name" data-player-index="0">N0tail</h3>' +
				'Age: <span class="team-02-player-age" data-player-index="0">23</span><br>' +
				'Role: <span class="team-02-player-role" data-player-index="0">Carry</span>' +
			'</td>' +
			'<td class="team-02-country-con">' +
				'<h2><span class="flag-icon flag-icon-dk" id="team-02-flag" data-player-index="0"></span></h2>' +
				'<div class="team-02-country-name" data-player-index="0">Denmark</div>' +
				'AFP: <span class="team-02-avg-fantasy" data-player-index="0">17.4</span>' +
			'</td>' +
		'</tr>' +
	'</table>' +
	'<table class="team-02-heroes-table">' +
		'<tr>' +
			'<td>' +
				'<span class="team-02-hero-text">Most Played<span>' +
			'</td>' +
			'<td>' +
				'<span class="team-02-hero-text">Most Successful</span>' +
			'</td>' +
		'</tr>' +
		'<tr>' +
			'<td>' +
				'<img src="img/hero-icons/axe.png" class="team-02-hero team-02-hero-left-0" data-row-index="0" data-player-index="0">' +
				'<span class="team-02-hero-win team-02-hero-played-win-rate-0" data-row-index="0" data-player-index="0">xx</span><span class="team-02-hero-win">%</span><br>' +
				'<span class="team-02-hero-pick team-02-hero-played-pick-rate-0" data-index="0" data-player-index="0">xx</span><span class="team-02-hero-pick">%</span>' +
			'</td>' +
			'<td>' +
				'<img src="img/hero-icons/axe.png" class="team-02-hero team-02-hero-right team-02-hero-right-0" data-row-index="0" data-player-index="0">' +
				'<span class="team-02-hero-win team-02-hero-success-win-rate-0" data-row-index="0" data-player-index="0">xx</span><span class="team-02-hero-win">%</span><br>' +
				'<span class="team-02-hero-pick team-02-hero-success-pick-rate-0" data-row-index="0" data-player-index="0">xx</span><span class="team-02-hero-pick">%</span>' +
			'</td>' +
		'</tr>' +
		'<tr>' +
			'<td>' +
				'<img src="img/hero-icons/axe.png" class="team-02-hero team-02-hero-left-1" data-row-index="1" data-player-index="0">' +
				'<span class="team-02-hero-win team-02-hero-played-win-rate-1" data-row-index="1" data-player-index="0">xx</span><span class="team-02-hero-win">%</span><br>' +
				'<span class="team-02-hero-pick team-02-hero-played-pick-rate-1" data-row-index="1" data-player-index="0">xx</span><span class="team-02-hero-pick">%</span>' +
			'</td>' +
			'<td>' +
				'<img src="img/hero-icons/axe.png" class="team-02-hero team-02-hero-right team-02-hero-right-1" data-row-index="1" data-player-index="0">' +
				'<span class="team-02-hero-win team-02-hero-success-win-rate-1" data-row-index="1" data-player-index="0">xx</span><span class="team-02-hero-win">%</span><br>' +
				'<span class="team-02-hero-pick team-02-hero-success-pick-rate-1" data-row-index="1" data-player-index="0">xx</span><span class="team-02-hero-pick">%</span>' +
			'</td>' +
		'</tr>' +
		'<tr>' +
			'<td>' +
				'<img src="img/hero-icons/axe.png" class="team-02-hero team-02-hero-left-2" data-row-index="2" data-player-index="0">' +
				'<span class="team-02-hero-win team-02-hero-played-win-rate-2" data-row-index="2" data-player-index="0">xx</span><span class="team-02-hero-win">%</span><br>' +
				'<span class="team-02-hero-pick team-02-hero-played-pick-rate-2" data-row-index="2" data-player-index="0">xx</span><span class="team-02-hero-pick">%</span>' +
			'</td>' +
			'<td>' +
				'<img src="img/hero-icons/axe.png" class="team-02-hero team-02-hero-right team-02-hero-right-2" data-row-index="2" data-player-index="0">' +
				'<span class="team-02-hero-win team-02-hero-success-win-rate-2" data-row-index="2" data-player-index="0">xx</span><span class="team-02-hero-win">%</span><br>' +
				'<span class="team-02-hero-pick team-02-hero-success-pick-rate-2" data-row-index="2" data-player-index="0">xx</span><span class="team-02-hero-pick">%</span>' +
			'</td>' +
		'</tr>' +
		'<tr>' +
			'<td>' +
				'<div class="team-02-horz-line"></div>' +
			'</td>' +
			'<td>' +
				'<div class="team-02-horz-line team-02-hero-right"></div>' +
			'</td>' +
		'</tr>' +
	'</table>';

  setBodyHtml(html,this);
});
