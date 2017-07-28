//functions that help with formatting

//converts string to title case
String.prototype.toTitleCase = function ()
{
  var str = this;
  var i=-1;
  return str.replace(/\w\S*/g, function(txt){
    i+=1;
    if(i==0 || txt.length>=4)
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    else
      return txt.toLowerCase();
  });
};

//converts string to number
String.prototype.toNumber = function()
{
  var str =this;
  var index=-1;

  //removes multiple occurances of decimal place
  str = str.replace( /^([^.]*\.)(.*)$/, function ( a, b, c ) {
        return b + c.replace( /\./g, '' );
    });

  return str.replace(/[^0-9.]/g, "");
}

Number.prototype.clamp = function(max,min)
{
  if(min>max)
  {
    var temp = min;
    min=max;
    max=temp;
  }
  var val=this;
  if(val<min)
    val=min;
  else if(val>max)
    val=max;

  return val;
}

function getElementWithData(cls, dataType, dataVal)
{
  var selector;

  $("."+cls).each(function() {
    var val = $(this).data(dataType);
    if(val==dataVal)
      selector = this;
  });

    if(selector==null || selector===null)
      console.error("ElementWithData: No element found! DataType:"+ dataType + " Val:"+ dataVal);

    return selector;
}

function imgExists(imageSrc, good, bad) {
    var img = new Image();
    img.onload = good;
    img.onerror = bad;
    img.src = imageSrc;
}
