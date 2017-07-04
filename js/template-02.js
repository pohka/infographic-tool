


//pickRate and banRate are 0-1 values
function calculateChart(pickRate, banRate, id)
{
	console.log("here");
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