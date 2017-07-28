//resizes text for player name
$(function() {
    var span = $(".pp-player-name");
    var fontSize = parseInt(span.css('font-size'));

    do {
        fontSize--;
        span.css('font-size', fontSize.toString() + 'px');
    } while (span.width() >= 150);
});

$(document).on("input",
"#team-02-flag-input, #team-03-flag-input, #team-04-flag-input, #team-05-flag-input, #team-06-flag-input",
function(){
  var templateID = $(this).attr("id").replace("-flag-input","");
  var input = $(this).val();
  if(input.length>1)
  {
    $("#" + templateID + "-flag").removeClass();
    $("#" + templateID + "-flag").addClass('flag-icon flag-icon-'+input);
  }
})





$(document).on("input",
"#team-02-player-name-input, #team-03-player-name-input, #team-04-player-name-input, "+
"#team-05-player-name-input, #team-06-player-name-input",
function(){
  var input = $(this).val();
  var img_url = "img/players/" + input + ".png";
  var templateID = $(this).attr("id").replace("-player-name-input","");
  var selector = "."+templateID+"-player-img";
  var flag = imgExists(img_url,
    function(){
      $(selector).attr("src", img_url);
    },
    function(){
      $(selector).attr("src", "img/players/placeholder.png");
    }
  );
});

function getPlayerIndexById(id)
{
  var player_index=0;

  if(id=="team-02")
    player_index=0;
  else if(id=="team-03")
    player_index=1;

  return player_index;
}

$(document).on("click", "#team-02, #team-03, #team-04, #team-05, #team-06", function(){
  var id=$(this).attr("id");
  var player_index=getPlayerIndexById(id);

  var html =
  '<table class="'+id+'-player-table  pp-player-table">' +
		'<tr>' +
			'<td class="'+id+'-player-img-con pp-img-con">' +
				'<img src="img/players/n0tail.png" class="'+id+'-player-img pp-player-img"></img>' +
			'</td>' +
			'<td class="'+id+'-player-info pp-player-info">' +
				'<h3 class="'+id+'-player-name pp-player-name">N0tail</h3>' +
				'Age: <span class="'+id+'-player-age">23</span><br>' +
				'Role: <span class="'+id+'-player-role">Carry</span>' +
			'</td>' +
			'<td class="'+id+'-country-con pp-country-con">' +
				'<h2><span class="flag-icon flag-icon-dk" id="'+id+'-flag"></span></h2>' +
				'<div class="'+id+'-country-name pp-country-name">Denmark</div>' +
				'AFP: <span class="'+id+'-avg-fantasy">17.4</span>' +
			'</td>' +
		'</tr>' +
	'</table>' +
	'<table class="'+id+'-heroes-table pp-heroes-table">' +
		'<tr>' +
			'<td>' +
				'<span class="'+id+'-hero-text pp-hero-text">Most Played<span>' +
			'</td>' +
			'<td>' +
				'<span class="'+id+'-hero-text pp-hero-text">Most Successful</span>' +
			'</td>' +
		'</tr>' +
		'<tr>' +
			'<td>' +
				'<img src="img/hero-icons/axe.png" class="'+id+'-hero pp-hero '+id+'-hero-left-0" data-row-index="0">' +
				'<span class="'+id+'-hero-win pp-hero-win '+id+'-hero-played-win-rate-0" data-row-index="0">0</span><span class="'+id+'-hero-win pp-hero-win">%</span><br>' +
				'<span class="'+id+'-hero-pick pp-hero-pick '+id+'-hero-played-pick-rate-0" data-index="0">0</span><span class="'+id+'-hero-pick pp-hero-pick">%</span>' +
			'</td>' +
			'<td>' +
				'<img src="img/hero-icons/axe.png" class="'+id+'-hero pp-hero '+id+'-hero-right pp-hero-right '+id+'-hero-right-0" data-row-index="0" ">' +
				'<span class="'+id+'-hero-win pp-hero-win '+id+'-hero-success-win-rate-0" data-row-index="0">0</span><span class="'+id+'-hero-win pp-hero-win">%</span><br>' +
				'<span class="'+id+'-hero-pick pp-hero-pick '+id+'-hero-success-pick-rate-0" data-row-index="0">0</span><span class="'+id+'-hero-pick pp-hero-pick">%</span>' +
			'</td>' +
		'</tr>' +
		'<tr>' +
			'<td>' +
				'<img src="img/hero-icons/axe.png" class="'+id+'-hero pp-hero '+id+'-hero-left-1" data-row-index="1" ">' +
				'<span class="'+id+'-hero-win pp-hero-win '+id+'-hero-played-win-rate-1" data-row-index="1">0</span><span class="'+id+'-hero-win pp-hero-win">%</span><br>' +
				'<span class="'+id+'-hero-pick pp-hero-pick '+id+'-hero-played-pick-rate-1" data-row-index="1">0</span><span class="'+id+'-hero-pick pp-hero-pick">%</span>' +
			'</td>' +
			'<td>' +
				'<img src="img/hero-icons/axe.png" class="'+id+'-hero pp-hero '+id+'-hero-right pp-hero-right '+id+'-hero-right-1" data-row-index="1" >' +
				'<span class="'+id+'-hero-win pp-hero-win '+id+'-hero-success-win-rate-1" data-row-index="1">0</span><span class="'+id+'-hero-win pp-hero-win">%</span><br>' +
				'<span class="'+id+'-hero-pick pp-hero-pick '+id+'-hero-success-pick-rate-1" data-row-index="1">0</span><span class="'+id+'-hero-pick pp-hero-pick">%</span>' +
			'</td>' +
		'</tr>' +
		'<tr>' +
			'<td>' +
				'<img src="img/hero-icons/axe.png" class="'+id+'-hero pp-hero '+id+'-hero-left-2" data-row-index="2">' +
				'<span class="'+id+'-hero-win pp-hero-win '+id+'-hero-played-win-rate-2" data-row-index="2">0</span><span class="'+id+'-hero-win pp-hero-win">%</span><br>' +
				'<span class="'+id+'-hero-pick pp-hero-pick '+id+'-hero-played-pick-rate-2" data-row-index="2">0</span><span class="'+id+'-hero-pick pp-hero-pick">%</span>' +
			'</td>' +
			'<td>' +
				'<img src="img/hero-icons/axe.png" class="'+id+'-hero pp-hero '+id+'-hero-right pp-hero-right '+id+'-hero-right-2" data-row-index="2">' +
				'<span class="'+id+'-hero-win pp-hero-win '+id+'-hero-success-win-rate-2" data-row-index="2">0</span><span class="'+id+'-hero-win pp-hero-win">%</span><br>' +
				'<span class="'+id+'-hero-pick pp-hero-pick '+id+'-hero-success-pick-rate-2" data-row-index="2">0</span><span class="'+id+'-hero-pick pp-hero-pick">%</span>' +
			'</td>' +
		'</tr>' +
		'<tr>' +
			'<td>' +
				'<div class="'+id+'-horz-line pp-horz-line"></div>' +
			'</td>' +
			'<td>' +
				'<div class="'+id+'-horz-line pp-horz-line '+id+'-hero-right pp-hero-right"></div>' +
			'</td>' +
		'</tr>' +
	'</table>';
  player_index+=1;
  setBodyHtml(html,this);
});
