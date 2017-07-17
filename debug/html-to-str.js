
function gen()
{
  var text = document.getElementById("paste-area").value;
  text = text.replace(/^\s*\n/gm, ""); //remove empty lines
  text = quotes(text);

  document.getElementById("copy-area").value=text;
}

//adds quotes to string for javascript variable
function quotes(text)
{
  var elements = text.split("\n");
  //iterate through each line until it finds a character that is not space
  for(var i=0; i<elements.length; i++)
  {
    var flag=false;
    for(var j=0; j<elements[i].length && flag==false; j++)
    {
      if(elements[i].charCodeAt(j)==32 || elements[i].charCodeAt(j)==9)
      {}
      else {
        elements[i] = elements[i].slice(0, j) + "'" + elements[i].slice(j, elements[i].length);
        flag=true;
      }
    }
  }
  text = elements.join("\n");
  text = text.replace(/(\r\n|\n|\r)/gm,"' +\n") +"';"; //ending quotes

  return text;
}

//copy to clipboard
function copy()
{
  gen();
  var copyTextarea = document.querySelector('#copy-area');
	copyTextarea.select();
	document.execCommand('copy');
}
