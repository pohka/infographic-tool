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
  var val=this;
  if(val<min)
    val=min;
  else if(val>max)
    val=max;

  return val;
}
