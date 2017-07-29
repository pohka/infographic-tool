$(document).on("click", "#footer2", function(){
  var html=
  '<div class="footer2-creator">'+
    '<a href="https://twitter.com/pohkadota" target="_blank">'+
    '<span class="footer2-creator-name">twitter.com/PohkaDota</span></a>'+
  '</div>'+
  '<div class="cdf-logo">'+
    '<a href="home.html"><img src="../img/logo/logo_sm.png"></a>'+
  '</div>';

  setBodyHtml(html, this);
});
