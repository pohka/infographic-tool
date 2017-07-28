$(document).on("input", ".team-07-input-field", function(){
  var val = getNumberInput(this);
	val = val.clamp(100,0);
	var percent = val;

	var index = $(this).data("index");
	var canvasID = "team-07-canvas-"+index;
	var isGreen = true;

  var size;
  if(index==1)
    size=50;
  else if(index==2)
    size=42 ;

	arc(percent, canvasID, isGreen, size);
});
