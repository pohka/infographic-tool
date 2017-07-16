
$(document).on('click', '#team-00', function(){
  var html=
  '<div class="team-00-wrapper">' +
    '<div class="team-00-left">' +
      '<img src="img/teams/placeholder.png" class="team-00-logo"></img>' +
    '</div>' +
    '<div>' +
      '<h2 class="team-00-name">Team Name</h2>' +
    '</div>' +
    '<div class="team-00-right">' +
      '<img src="img/teams/placeholder.png" class="team-00-logo"></img>' +
    '</div>' +
  '</div>';

    setBodyHtml(html, this);
});
