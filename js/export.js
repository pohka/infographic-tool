$(document).on("click", "#sidebar-export", function(){
  downloadInnerHtml(fileName, 'main','text/html');
});

function downloadInnerHtml(filename, elId, mimeType) {
    //var elHtml = $("#section-container")[0].outerHTML;
    var elHtml = $('html')[0].outerHTML
    elHtml = removeSidebar(elHtml);
    elHtml = removeJqueryUI(elHtml);
    var link = document.createElement('a');
    mimeType = mimeType || 'text/plain';


    link.setAttribute('download', filename);
    link.setAttribute('href', 'data:' + mimeType  +  ';charset=utf-8,' + encodeURIComponent(elHtml));
    link.click();
}
var fileName =  'export.html'; // You can use the .txt extension if you want


//removes the html, js and css from the sideba
function removeSidebar(html)
{
  var sidebarStart = '<!--SIDEBAR-->';
  var sidebarEnd = '<!--END OF SIDEBAR-->';
  var startIndex = html.indexOf(sidebarStart);
  var endIndex = html.indexOf(sidebarEnd);

  //remove html
  html = html.replace(html.substring(startIndex, endIndex), "");
  html = html.replace(sidebarEnd, "");

  //remove css
  html.replace('<link rel="stylesheet" href="css/sidebar.css">', '');

  //remove js
  var sidebarjsStart = '<!--sidebar-js-->';
  var sidebarjsEnd = '<!--end of sidebar-js->';
  var startjsIndex = html.indexOf(sidebarjsStart);
  var endjsIndex = html.indexOf(sidebarjsEnd);
  html = html.replace(html.substring(startjsIndex, endjsIndex), "");
  html = html.replace(sidebarjsEnd, "");

  return html;
}

function removeJqueryUI(html)
{
  var start = "<!--ENDOFALL-->";
  var end =  "</body>";
  var startIndex = html.indexOf(start);
  var endIndex = html.indexOf(end);
  html = html.replace(html.substring(startIndex, endIndex), "");
  return html;
}
