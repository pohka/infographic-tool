$(document).on('input', '.template-01-input-field', function() {
	var val= getNumberInput(this)
	val = val.clamp(100,0);
	var percent = val;

	var cls = $(this).attr("class");
	var index = $(this).data("index");
	var canvasID = "template-01-canvas-"+index;

	var id = $(this).attr("id");
	var isGreen = id.indexOf("pick") >= 0;

	arc(percent, canvasID, isGreen);
});



//percent should be 0-1 value
function arc(percent, canvasID, isGreen)
{
	var canvas = document.getElementById(canvasID);
	var context = canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);

	var lineW =14;

	var x = (canvas.width / 2);
	var y = (canvas.height / 2)-2;
	var radius = 37;

	var startAngle = 1.5 * Math.PI;
	var endAngle = (1.5+ 2*(percent/100))* Math.PI;
	var counterClockwise = false;

	context.beginPath();
	context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
	context.lineWidth = 6;


	// line color
	var lineColor;
	if(isGreen)
		lineColor= $(":root").css("--green"); //green
	else
		lineColor = $(":root").css("--red"); //red


	context.strokeStyle = lineColor;
	context.stroke();

}
