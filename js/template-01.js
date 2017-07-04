
//percent should be 0-1 value
function arc(percent, canvasID, isGreen)
{
	var canvas = document.getElementById(canvasID);
	var context = canvas.getContext('2d');
	var lineW =14;
	  
	var x = (canvas.width / 2);
	var y = (canvas.height / 2)-2;
	var radius = 37;
	
	var startAngle = 1.5 * Math.PI;
	var endAngle = (1.5+ 2*percent)* Math.PI;
	var counterClockwise = false;

	context.beginPath();
	context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
	context.lineWidth = 6;
	 
	
	// line color
	var lineColor;
	if(isGreen)
		lineColor="#5ca202"; //green
	else
		lineColor = "#e30000"; //red
	
	
	context.strokeStyle = lineColor;
	context.stroke();
	
}

