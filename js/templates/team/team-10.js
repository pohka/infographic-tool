$(document).on("click", "#team-10", function(){
  var html=
    '<h2 class="team-10-title">Players Profiles</h2>'+
    '<h4 class="team-10-sub-title">'+
    'AFP = Average fantasy points<br>'+
    '<span class="green">win</span> rate'+
    ' and <span class="secondary">pick</span> rate</h4>';
  setBodyHtml(html,this);
});
