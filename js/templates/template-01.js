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


$(document).ready(function(){

	if($(".template-01").length)
	{
		var pickRates = [];
		var banRates= [];

		for(var i=1; i<=3; i++)
		{
			pickRates.push($(".template-01-pick-rate-"+i).text());
			banRates.push($(".template-01-ban-rate-"+i).text());
		}

		var canvas="template-01-canvas-";
		for(var i=0; i<3; i++)
		{
			arc(pickRates[i], canvas+(1+i), true); //pick rates
			arc(banRates[i], 	canvas+(4+i), false); //ban rates
		}
	}
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

$(document).on('click', '#template-01', function(){
	var html =
		'<h3 class="template-01-title">Most Picked and Banned</h3>' +
		'<h4 class="template-01-sub-title"><span class="green">Pick</span> rate and <span class="red">Ban</span> rate</h4>' +

		'<div class="row">' +
			'<div class="col-xs-4">' +
				'<div class="template-01-pick">' +
					'<span class="template-01-pick-rate-1 template-01-input-field">0</span>%' +
				'</div>' +
				'<canvas class="canvas canvas-circle" id="template-01-canvas-1" ></canvas>' +
				'<img src="img/placeholder.png" class="img-template-1 img-hero-portrait-circle template-01-pick-1-hero-icon">' +
			'</div>' +
			'<div class="col-xs-4">' +
				'<div class="template-01-pick">' +
					'<span class="template-01-pick-rate-2 template-01-input-field">0</span>%' +
				'</div>' +
				'<canvas class="canvas canvas-circle" id="template-01-canvas-2" ></canvas>' +
				'<img src="img/placeholder.png" class="img-template-1 img-hero-portrait-circle template-01-pick-2-hero-icon">' +
			'</div>' +
			'<div class="col-xs-4">' +
				'<div class="template-01-pick">' +
					'<span class="template-01-pick-rate-3 template-01-input-field">0</span>%' +
				'</div>' +
				'<canvas class="canvas canvas-circle" id="template-01-canvas-3" ></canvas>' +
				'<img src="img/placeholder.png" class="img-template-1 img-hero-portrait-circle template-01-pick-3-hero-icon">' +
			'</div>' +
		'</div>' +

		'<div class="row">' +
			'<div class="col-xs-4">' +
				'<canvas class="canvas canvas-circle" id="template-01-canvas-4" ></canvas>' +
				'<img src="img/placeholder.png" class="img-template-1 img-hero-portrait-circle template-01-ban-1-hero-icon">' +
				'<div class="template-01-ban">' +
					'<span class="template-01-ban-rate-1 template-01-input-field">0</span>%' +
				'</div>' +
			'</div>' +
			'<div class="col-xs-4">' +
				'<canvas class="canvas canvas-circle" id="template-01-canvas-5" ></canvas>' +
				'<img src="img/placeholder.png" class="img-template-1 img-hero-portrait-circle template-01-ban-2-hero-icon">' +
				'<div class="template-01-ban">' +
					'<span class="template-01-ban-rate-2 template-01-input-field">0</span>%' +
				'</div>' +
			'</div>' +
			'<div class="col-xs-4">' +
				'<canvas class="canvas canvas-circle" id="template-01-canvas-6" ></canvas>' +
				'<img src="img/placeholder.png" class="img-template-1 img-hero-portrait-circle template-01-ban-3-hero-icon">' +
				'<div class="template-01-ban">' +
					'<span class="template-01-ban-rate-3 template-01-input-field">0</span>%' +
				'</div>' +
			'</div>' +
		'</div>';

		setBodyHtml(html, this);
});
