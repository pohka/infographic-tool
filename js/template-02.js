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
