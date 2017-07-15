
function gen()
{
  var text = document.getElementById("paste-area").value;
  text = text.replace(/^\s*\n/gm, ""); //remove empty lines

  text = "'" + text.replace(/(\r\n|\n|\r)/gm,"' +\n'") +"';";

  document.getElementById("copy-area").value=text;
}

function copy()
{
  gen();
  var copyTextarea = document.querySelector('#copy-area');
	copyTextarea.select();
	document.execCommand('copy');
}
