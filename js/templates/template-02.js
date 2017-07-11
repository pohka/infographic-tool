$(document).on('input', '.template-02-input-field', function() {
	var val= getNumberInput(this)
	var percent = val.clamp(100,0);
	var id = $(this).attr("id");


	//parse id for required values
	var index;

	if(id.indexOf("1-input")>=0)
		index = 1;
	else if(id.indexOf("2-input")>=0)
		index = 2;
	else
		index = 3;

	var chartID =  "template-02-chart-"+index;
	var pickRate=0;
	var banRate=0;
	var isPick = id.indexOf("pick")>=0;
	var otherID;

	if(isPick)
	{
		pickRate = percent;
		otherID = id.replace("pick","ban");
		var otherVal = getNumberInput("#"+otherID);
		banRate = otherVal.clamp(100,0);
	}
	else
	{
		banRate = percent;
		otherID = id.replace("ban","pick");
		var otherVal = getNumberInput("#"+otherID);
		pickRate = otherVal.clamp(100,0);
	}

	calculateChart(pickRate/100, banRate/100, chartID);
});

//pickRate and banRate are 0-1 values
function calculateChart(pickRate, banRate, id)
{
	console.log("pickRate:"+ pickRate + " banRate:" + banRate + " id:" + id);

	if(banRate==0)
		banRate=0.0000000001; //this fixes a css problem

	var chartH=180;
	var total = pickRate+banRate;
	var emptyRate= (1-pickRate-banRate);

	var pickH = chartH * pickRate;
	var banH = chartH * banRate;
	var emptyH = chartH * emptyRate;
	var totalH = chartH * total;

	var pickMargin = chartH*(1-pickRate);
	var banMargin = chartH*(1-banRate)-chartH-pickH;
	var emptyMargin = chartH*(1-emptyRate)-chartH-banH;

	var totalMargin = 0;
	var imgMargin = -chartH;

	var redID = "#"+id+"-red";
	var greenID = "#"+id+"-green";
	var emptyID = "#"+id+"-empty";
	var imgID = "#"+id+"-image";
	var totalID = "#"+id+"-total";

	$(greenID).height(pickH);
	$(greenID).css("margin-top", pickMargin);
	$(redID).height(banH);
	$(redID).css("margin-top", banMargin);
	$(emptyID).height(emptyH);
	$(emptyID).css("margin-top", emptyMargin);
	$(totalID).height(totalH);
	$(totalID).css("margin-top", totalMargin);
	$(imgID).css("margin-top", imgMargin);

	var pickTextID = "#"+id+"-text-pick";
	var banTextID = "#"+id+"-text-ban";
	var totalTextID = "#"+id+"-text-total";

	$(pickTextID).text(Math.round(pickRate*100)+"%");
	$(banTextID).text(Math.round(banRate*100)+"%");
	$(totalTextID).text(Math.round(total*100)+"%");
}


$(document).on('click', '#template-02', function(){
	var id = $(this).attr("id");

	var html =
		'<!--TEMPLATE 2 HALF SECTION-->' +
		'<div class="container '+id+' width-half">' +
			'<h3>Most Contested</h3>' +
			'<h4>Most <span class="green">picked</span> and <span class="red">banned</span></h4>' +

			'<div class="row">' +
				'<div class="col-md-3 template-02-chart" id="template-02-chart-1">' +
					'<div class="template-02-inner template-02-inner-green " id="template-02-chart-1-green"></div>' +
					'<div class="template-02-inner template-02-inner-red" id="template-02-chart-1-red"></div>' +
					'<div class="template-02-inner template-02-inner-empty" id="template-02-chart-1-empty"></div>' +
					'<div class="template-02-inner template-02-inner-total" id="template-02-chart-1-total"></div>' +
					'<div class="template-02-inner template-02-inner-image" id="template-02-chart-1-image">' +
						'<img class="template-02-hero-1" src="img/hero-portraits/rubick.png" >' +
					'</div>' +
					'<div class="template-02-underline"></div>' +

					'<div class="template-02-text">' +
						'<span class="green" id="template-02-chart-1-text-pick">50%</span>&nbsp&nbsp&nbsp&nbsp<span class="red" id="template-02-chart-1-text-ban">32%</span><br>' +
						'<p class="template-02-text-lg" id="template-02-chart-1-text-total"> 82%</p>' +
					'</div>' +
				'</div>' +

				'<div class="col-md-3 template-02-chart" id="template-02-chart-2">' +
					'<div class="template-02-inner template-02-inner-green" id="template-02-chart-2-green"></div>' +
					'<div class="template-02-inner template-02-inner-red" id="template-02-chart-2-red"></div>' +
					'<div class="template-02-inner template-02-inner-empty" id="template-02-chart-2-empty"></div>' +
					'<div class="template-02-inner template-02-inner-total" id="template-02-chart-2-total"></div>' +
					'<div class="template-02-inner template-02-inner-image" id="template-02-chart-2-image">' +
						'<img class="template-02-hero-2 template-02-hero" src="img/hero-portraits/puck.png" >' +
					'</div>' +
					'<div class="template-02-underline"></div>' +

					'<div class="template-02-text">' +
						'<span class="green" id="template-02-chart-2-text-pick">50%</span>&nbsp&nbsp&nbsp&nbsp<span class="red" id="template-02-chart-2-text-ban">32%</span><br>' +
						'<p class="template-02-text-lg" id="template-02-chart-2-text-total"> 82%</p>' +
					'</div>' +
				'</div>' +

				'<div class="col-md-3 template-02-chart" id="template-02-chart-3">' +
					'<div class="template-02-inner template-02-inner-green" id="template-02-chart-3-green"></div>' +
					'<div class="template-02-inner template-02-inner-red" id="template-02-chart-3-red"></div>' +
					'<div class="template-02-inner template-02-inner-empty" id="template-02-chart-3-empty"></div>' +
					'<div class="template-02-inner template-02-inner-total" id="template-02-chart-3-total"></div>' +
					'<div class="template-02-inner template-02-inner-image" id="template-02-chart-3-image">' +
						'<img class="template-02-hero-3" src="img/hero-portraits/lina.png" >' +
					'</div>' +
					'<div class="template-02-underline"></div>' +

					'<div class="template-02-text">' +
						'<span class="green" id="template-02-chart-3-text-pick">50%</span>&nbsp&nbsp&nbsp&nbsp<span class="red" id="template-02-chart-3-text-ban">32%</span><br>' +
						'<p class="template-02-text-lg" id="template-02-chart-3-text-total"> 82%</p>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>';

		setBodyHtml(html);
});
