
$(document).on("input", "#temp-03-row-count-input", function(){
  var maxRows = 6;
  var rowCount = getNumberInput(this);

  rowCount = rowCount.clamp(1,maxRows);
  rowCount -=1; //0-4 value

  for(var i=0; i<maxRows; i++)
  {
    if(i<=rowCount)
    {

    }
  }

  $(".temp-03-row").each(function(){
    var rowIndex = $(this).data("row");
    if(rowIndex<=rowCount)
    {
      $(this).show();
    }
    else
    {
      $(this).hide();
    }
  });
});


$(document).on("input", ".input-dynamic-str", function(){
  //identifier for this template only
  if($(this).attr("id").indexOf("temp-03")<0)
    return;

  var input = $(this).val();
  var elements = input.split(".");
  var playerName ="";
  var teamName = "";

  for(var i=0; i<elements.length; i++)
  {
    if(i==0)
      teamName=elements[i].toLowerCase();
    else
      playerName+=elements[i].toLowerCase();
  }

  var row= $(this).data("index");
  var playerImg = "placeholder";

  //check if player image exists
  var playerIndex = players.indexOf(playerName);
  if(playerIndex>=0)
  {
    playerImg = playerName;
  }

  //set player image
  var playerSrc = "img/players/" + playerImg + ".png";
  var playerImgSelector = getElementWithData("temp-03-player-img", "row", row);
  $(playerImgSelector).attr("src", playerSrc);


  var teamImg = "placeholder";
  //check if team image exists
  var teamIndex = teams.indexOf(teamName);
  if(teamIndex>=0)
  {
    teamImg = teamName;
  }

  //set player image
  var teamSrc = "img/teams/" + teamImg + ".png";
  var teamImgSelector = getElementWithData("temp-03-team-img", "row", row);
  $(teamImgSelector).attr("src", teamSrc);

  var htmlclass =$(this).attr("id").replace("-input", "");
  $("."+htmlclass).html(input);
});


$(document).on('click', '#temp-03', function(){
  var html =
  '<div class="temp-03-player-container">' +
    '<h2 class="temp-03-title">Player Performances</h2>' +
    '<div class="temp-03-row" data-row="0">' +
      '<div class="temp-03-player-left"></div>' +
      '<div class="temp-03-row-containter temp-03-con-left">' +
        '<div class="temp-03-row-text">' +
          '<ul class="temp-03-text-0">' +
            '<li>Highest AVG GPM: 670</li>' +
            '<li>Lowest Deaths: 5</li>' +
          '</ul>' +
        '</div>' +

        '<div class="temp-03-row-img-con">' +
          '<img src="img/teams/placeholder.png" class="temp-03-team-img" data-row="0">' +
          '<img src="img/players/placeholder.png" class="temp-03-player-img" data-row="0">' +

        '</div>' +
        '<div class="temp-03-row-player-name temp-03-player-name-0" data-row="0">' +
          'Team.Name' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<div class="temp-03-row" data-row="1">' +
      '<div class="temp-03-player-right"></div>' +
      '<div class="temp-03-row-containter temp-03-con-right">' +
        '<div class="temp-03-row-player-name temp-03-row-player-name-right temp-03-player-name-1" data-row="1">' +
          'Team.Name' +
        '</div>' +

        '<div class="temp-03-row-img-con">' +
          '<img src="img/teams/placeholder.png" class="temp-03-team-img temp-03-team-img-right" data-row="1">' +
          '<img src="img/players/placeholder.png" class="temp-03-player-img" data-row="1">' +
        '</div>' +

        '<div class="temp-03-row-text temp-03-row-text-right">' +
          '<ul class="temp-03-text-1">' +
            '<li>Highest AVG GPM: 960</li>' +
            '<li>Lowest Deaths: 2</li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<div class="temp-03-row" data-row="2">' +
      '<div class="temp-03-player-left"></div>' +
      '<div class="temp-03-row-containter temp-03-con-left">' +
        '<div class="temp-03-row-text">' +
          '<ul class="temp-03-text-2">' +
            '<li>Highest AVG GPM: 420</li>' +
            '<li>Lowest Deaths: 6</li>' +
          '</ul>' +
        '</div>' +

        '<div class="temp-03-row-img-con">' +
          '<img src="img/teams/placeholder.png" class="temp-03-team-img" data-row="2">' +
          '<img src="img/players/placeholder.png" class="temp-03-player-img" data-row="2">' +
        '</div>' +
        '<div class="temp-03-row-player-name temp-03-player-name-2" data-row="2">' +
          'Team.Name' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<div class="temp-03-row" data-row="3">' +
      '<div class="temp-03-player-right"></div>' +
      '<div class="temp-03-row-containter temp-03-con-right">' +
        '<div class="temp-03-row-player-name temp-03-row-player-name-right temp-03-player-name-3" data-row="3">' +
          'Team.Name' +
        '</div>' +

        '<div class="temp-03-row-img-con">' +
          '<img src="img/teams/placeholder.png" class="temp-03-team-img temp-03-team-img-right" data-row="3">' +
          '<img src="img/players/placeholder.png" class="temp-03-player-img" data-row="3">' +
        '</div>' +

        '<div class="temp-03-row-text temp-03-row-text-right">' +
          '<ul class="temp-03-text-3">' +
            '<li>Highest AVG GPM: 960</li>' +
            '<li>Lowest Deaths: 2</li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<div class="temp-03-row" data-row="4">' +
      '<div class="temp-03-player-left"></div>' +
      '<div class="temp-03-row-containter temp-03-con-left">' +
        '<div class="temp-03-row-text">' +
          '<ul class="temp-03-text-4">' +
            '<li>Highest AVG GPM: 420</li>' +
            '<li>Lowest Deaths: 6</li>' +
          '</ul>' +
        '</div>' +

        '<div class="temp-03-row-img-con">' +
          '<img src="img/teams/placeholder.png" class="temp-03-team-img" data-row="4">' +
          '<img src="img/players/placeholder.png" class="temp-03-player-img" data-row="4">' +
        '</div>' +
        '<div class="temp-03-row-player-name temp-03-player-name-4" data-row="4">' +
          'Team.Name' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<div class="temp-03-row" data-row="5">' +
      '<div class="temp-03-player-right"></div>' +
      '<div class="temp-03-row-containter temp-03-con-right">' +
        '<div class="temp-03-row-player-name temp-03-row-player-name-right temp-03-player-name-5" data-row="5">' +
          'Team.Name' +
        '</div>' +

        '<div class="temp-03-row-img-con">' +
          '<img src="img/teams/placeholder.png" class="temp-03-team-img temp-03-team-img-right" data-row="5">' +
          '<img src="img/players/placeholder.png" class="temp-03-player-img" data-row="5">' +
        '</div>' +

        '<div class="temp-03-row-text temp-03-row-text-right">' +
          '<ul class="temp-03-text-5">' +
            '<li>Highest AVG GPM: 960</li>' +
            '<li>Lowest Deaths: 2</li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
    '</div>' +


  '</div>' +
  '<br>';

  setBodyHtml(html, this);
});
