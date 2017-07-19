//resizes text for player name
$(function() {
    console.log("resize");
    var span = $(".team-02-player-name");
    var fontSize = parseInt(span.css('font-size'));

    do {
        fontSize--;
        span.css('font-size', fontSize.toString() + 'px');
    } while (span.width() >= 150);
});
