
$(document).on('click', '#footer', function(){
	var html =
    '<div class="row">' +
      '<div class="col-md-3">' +
				'<a href="https://twitter.com/PohkaDota" target="_blank">' +
        '<img src="img/footer/twitter_icon.png" class="twitter"></a>' +
      '</div>' +
      '<div class="col-md-6 footer-text">' +
        'twitter.com/PohkaDota' +
      '</div>' +
      '<div class="col-md-3">' +
        '<img src="img/footer/ogre.png" class="avatar">' +
      '</div>' +
    '</div>' +
		'<div><img src="../img/logo/logo_sm.png" height="20"></div>';

    setBodyHtml(html, this);
});
