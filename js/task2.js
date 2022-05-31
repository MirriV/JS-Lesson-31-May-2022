var greenBox = document.getElementById("green");
var redBox = document.getElementById("red");

var greenButton = document.getElementById("greenButton");
var redButton = document.getElementById("redButton");

greenButton.addEventListener('click', function(){
    greenBox.style.backgroundColor="green";

});

redButton.addEventListener('click', function(){
    redBox.style.backgroundColor= "red";
})