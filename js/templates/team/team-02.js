//resizes text for player name
$(function() {
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

function getPlayerIndexById(id)
{
  var player_index=0;

  if(id=="team-02")
    player_index=0;
  else if(id=="team-03")
    player_index=1;

  return player_index;
}

$(document).on("click", "#team-02, #team-03", function(){
  var id=$(this).attr("id");
  var player_index=getPlayerIndexById(id);

  var html =
  '<table class="'+id+'-player-table">' +
		'<tr>' +
			'<td class="'+id+'-player-img-con">' +
				'<img src="img/players/n0tail.png" class="'+id+'-player-img"></img>' +
			'</td>' +
			'<td class="'+id+'-player-info">' +
				'<h3 class="'+id+'-player-name" data-player-index="'+player_index+'">N0tail</h3>' +
				'Age: <span class="'+id+'-player-age-'+player_index+'" data-player-index="'+player_index+'">23</span><br>' +
				'Role: <span class="'+id+'-player-role" data-player-index="'+player_index+'">Carry</span>' +
			'</td>' +
			'<td class="'+id+'-country-con">' +
				'<h2><span class="flag-icon flag-icon-dk" id="'+id+'-flag" data-player-index="'+player_index+'"></span></h2>' +
				'<div class="'+id+'-country-name" data-player-index="'+player_index+'">Denmark</div>' +
				'AFP: <span class="'+id+'-avg-fantasy" data-player-index="'+player_index+'">17.4</span>' +
			'</td>' +
		'</tr>' +
	'</table>' +
	'<table class="'+id+'-heroes-table">' +
		'<tr>' +
			'<td>' +
				'<span class="'+id+'-hero-text">Most Played<span>' +
			'</td>' +
			'<td>' +
				'<span class="'+id+'-hero-text">Most Successful</span>' +
			'</td>' +
		'</tr>' +
		'<tr>' +
			'<td>' +
				'<img src="img/hero-icons/axe.png" class="'+id+'-hero '+id+'-hero-left-0" data-row-index="0" data-player-index="'+player_index+'">' +
				'<span class="'+id+'-hero-win '+id+'-hero-played-win-rate-0" data-row-index="0" data-player-index="'+player_index+'">0</span><span class="'+id+'-hero-win">%</span><br>' +
				'<span class="'+id+'-hero-pick '+id+'-hero-played-pick-rate-0" data-index="0" data-player-index="'+player_index+'">0</span><span class="'+id+'-hero-pick">%</span>' +
			'</td>' +
			'<td>' +
				'<img src="img/hero-icons/axe.png" class="'+id+'-hero '+id+'-hero-right '+id+'-hero-right-0" data-row-index="0" " data-player-index="'+player_index+'">' +
				'<span class="'+id+'-hero-win '+id+'-hero-success-win-rate-0" data-row-index="0" data-player-index="'+player_index+'">0</span><span class="'+id+'-hero-win">%</span><br>' +
				'<span class="'+id+'-hero-pick '+id+'-hero-success-pick-rate-0" data-row-index="0" data-player-index="'+player_index+'">0</span><span class="'+id+'-hero-pick">%</span>' +
			'</td>' +
		'</tr>' +
		'<tr>' +
			'<td>' +
				'<img src="img/hero-icons/axe.png" class="'+id+'-hero '+id+'-hero-left-1" data-row-index="1" " data-player-index="'+player_index+'">' +
				'<span class="'+id+'-hero-win '+id+'-hero-played-win-rate-1" data-row-index="1" data-player-index="'+player_index+'">0</span><span class="'+id+'-hero-win">%</span><br>' +
				'<span class="'+id+'-hero-pick '+id+'-hero-played-pick-rate-1" data-row-index="1" data-player-index="'+player_index+'">0</span><span class="'+id+'-hero-pick">%</span>' +
			'</td>' +
			'<td>' +
				'<img src="img/hero-icons/axe.png" class="'+id+'-hero '+id+'-hero-right '+id+'-hero-right-1" data-row-index="1"  data-player-index="'+player_index+'">' +
				'<span class="'+id+'-hero-win '+id+'-hero-success-win-rate-1" data-row-index="1" data-player-index="'+player_index+'">0</span><span class="'+id+'-hero-win">%</span><br>' +
				'<span class="'+id+'-hero-pick '+id+'-hero-success-pick-rate-1" data-row-index="1" data-player-index="'+player_index+'">0</span><span class="'+id+'-hero-pick">%</span>' +
			'</td>' +
		'</tr>' +
		'<tr>' +
			'<td>' +
				'<img src="img/hero-icons/axe.png" class="'+id+'-hero '+id+'-hero-left-2" data-row-index="2" data-player-index="'+player_index+'">' +
				'<span class="'+id+'-hero-win '+id+'-hero-played-win-rate-2" data-row-index="2" data-player-index="'+player_index+'">0</span><span class="'+id+'-hero-win">%</span><br>' +
				'<span class="'+id+'-hero-pick '+id+'-hero-played-pick-rate-2" data-row-index="2" data-player-index="'+player_index+'">0</span><span class="'+id+'-hero-pick">%</span>' +
			'</td>' +
			'<td>' +
				'<img src="img/hero-icons/axe.png" class="'+id+'-hero '+id+'-hero-right '+id+'-hero-right-2" data-row-index="2" data-player-index="'+player_index+'">' +
				'<span class="'+id+'-hero-win '+id+'-hero-success-win-rate-2" data-row-index="2" data-player-index="'+player_index+'">0</span><span class="'+id+'-hero-win">%</span><br>' +
				'<span class="'+id+'-hero-pick '+id+'-hero-success-pick-rate-2" data-row-index="2" data-player-index="'+player_index+'">0</span><span class="'+id+'-hero-pick">%</span>' +
			'</td>' +
		'</tr>' +
		'<tr>' +
			'<td>' +
				'<div class="'+id+'-horz-line"></div>' +
			'</td>' +
			'<td>' +
				'<div class="'+id+'-horz-line '+id+'-hero-right"></div>' +
			'</td>' +
		'</tr>' +
	'</table>';
  player_index+=1;
  setBodyHtml(html,this);
});
