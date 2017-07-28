
$(document).on("input", ".team-01-input-field", function(){
  var id = $(this).attr("id");
  if(id.indexOf("place")>=0)
  {
    setPlacement(this);
  }
  else if(id.indexOf("row-count")>=0)
  {
    setRows(this);
  }
});



//show only the amount of elements as specified, range(1-6)
function setRows(selector)
{
  var val = getNumberInput(selector);
  val-=1;
  var max = 5;
  maxIndex = val.clamp(0,max);

  $(".team-01-achieve").each(function(){
    if(maxIndex < $(this).data("index"))
    {
      $(this).hide();
    }
    else {
      $(this).show();
    }
  });
}

function setPlacement(selector)
{
  var val = getNumberInput(selector);
  var index = $(selector).data("index") -1;
  var text = val;
  var cls = ".team-01-achieve-place-"+index;

  $(cls).removeClass("gold silver bronze");

  switch(val)
  {
    case 1: text+="st";
            $(cls).addClass("gold");
      break;
    case 2:
      text+="nd";
      $(cls).addClass("silver");
      break;
    case 3:
      text+="rd";
      $(cls).addClass("bronze");
      break;
    default: text+="th"; break;
  }
  $(cls).html(text);
}

$(document).on("click", "#team-01", function(){
  var html =
  '<h3>Recent Results</h3>'+
  '<div class="team-01-achieve-con">' +
    '<div class="team-01-achieve"  data-index="0">' +
      '<div class="team-01-achieve-place team-01-achieve-place-0" data-index="0">1st</div>' +
      '<div class="team-01-achieve-name-parent">' +
        '<div class="team-01-achieve-name team-01-achieve-name-0">epicenter</div>' +
      '</div>' +
      '<div class="team-01-achieve-info">' +
        '<div class="team-01-achieve-date team-01-achieve-date-0">3rd July</div>' +
        '<div class="team-01-achieve-prize team-01-achieve-prize-0">$100k</div>' +
      '</div>' +
    '</div>' +
    '<div class="team-01-achieve"  data-index="1">' +
      '<div class="team-01-achieve-place team-01-achieve-place-1" data-index="1">1st</div>' +
      '<div class="team-01-achieve-name-parent">' +
        '<div class="team-01-achieve-name team-01-achieve-name-1">epicenter</div>' +
      '</div>' +
      '<div class="team-01-achieve-info">' +
        '<div class="team-01-achieve-date team-01-achieve-date-1">3rd July</div>' +
        '<div class="team-01-achieve-prize team-01-achieve-prize-1">$100k</div>' +
      '</div>' +
    '</div>' +
    '<div class="team-01-achieve"  data-index="2">' +
      '<div class="team-01-achieve-place team-01-achieve-place-2" data-index="2">1st</div>' +
      '<div class="team-01-achieve-name-parent">' +
        '<div class="team-01-achieve-name team-01-achieve-name-2">epicenter</div>' +
      '</div>' +
      '<div class="team-01-achieve-info">' +
        '<div class="team-01-achieve-date team-01-achieve-date-2">3rd July</div>' +
        '<div class="team-01-achieve-prize team-01-achieve-prize-2">$100k</div>' +
      '</div>' +
    '</div>' +
    '<br>' +
    '<div class="team-01-achieve"  data-index="3">' +
      '<div class="team-01-achieve-place team-01-achieve-place-3" data-index="3">1st</div>' +
      '<div class="team-01-achieve-name-parent">' +
        '<div class="team-01-achieve-name team-01-achieve-name-3">epicenter</div>' +
      '</div>' +
      '<div class="team-01-achieve-info">' +
        '<div class="team-01-achieve-date team-01-achieve-date-3">3rd July</div>' +
        '<div class="team-01-achieve-prize team-01-achieve-prize-3">$100k</div>' +
      '</div>' +
    '</div>' +
    '<div class="team-01-achieve"  data-index="4">' +
      '<div class="team-01-achieve-place team-01-achieve-place-4" data-index="4">1st</div>' +
      '<div class="team-01-achieve-name-parent">' +
        '<div class="team-01-achieve-name team-01-achieve-name-4">epicenter</div>' +
      '</div>' +
      '<div class="team-01-achieve-info">' +
        '<div class="team-01-achieve-date team-01-achieve-date-4">3rd July</div>' +
        '<div class="team-01-achieve-prize team-01-achieve-prize-4">$100k</div>' +
      '</div>' +
    '</div>' +
    '<div class="team-01-achieve"  data-index="5">' +
      '<div class="team-01-achieve-place team-01-achieve-place-5" data-index="5">1st</div>' +
      '<div class="team-01-achieve-name-parent">' +
        '<div class="team-01-achieve-name team-01-achieve-name-5">epicenter</div>' +
      '</div>' +
      '<div class="team-01-achieve-info">' +
        '<div class="team-01-achieve-date team-01-achieve-date-5">3rd July</div>' +
        '<div class="team-01-achieve-prize team-01-achieve-prize-5">$100k</div>' +
      '</div>' +
    '</div>' +
  '</div>';
  setBodyHtml(html, this);
});
