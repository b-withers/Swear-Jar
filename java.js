$( document ).ready(function() {
    console.log( "ready!" );


var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", "push.wav");

var counter = 0
var total = 0
var counter2 = 0


$(".label1").click(function () {
audioElement.play();
counter+=5
total+=5
$(".total").text(total);
$("#shownumber1").text(counter);
localStorage.setItem("nickel", counter);
localStorage.setItem("total", total);
 });



$(".label2").click(function () {
audioElement.play();
counter2+=25
total+=25
$(".total").text(total);
$("#shownumber2").text(counter2);
localStorage.setItem("quarter", counter2);
localStorage.setItem("total", total);
});

var random = localStorage.getItem("nickel");
console.log(random);


});


