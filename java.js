$( document ).ready(function() {
    console.log( "ready!" );


var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", "push.wav");

var sum1 = parseInt($("#shownumber1"));
console.log(sum1);

var sum2 = parseInt($("#shownumber2"));
console.log(sum2);

var counter = 0
var total = 0
var counter2 = 0


$(".label1").click(function () {
	 audioElement.play();
counter+=5
total+=5
$(".total").text(total);
$("#shownumber1").text(counter);
 });



$(".label2").click(function () {
    counter2+=25
    total+=25
    $(".total").text(total);
$("#shownumber2").text(counter2);
    audioElement.play();
});

console.log(total);



});