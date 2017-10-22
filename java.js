$( document ).ready(function() {
    console.log( "ready!" );

var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", "push.wav");


$(".label1").click(function () {
    $(".shownumber1").text(function(){return ~~$(this).text() + 5});
    audioElement.play();
});




$(".label2").click(function () {
    $(".shownumber2").text(function(){return ~~$(this).text() + 25});
    audioElement.play();
});


});