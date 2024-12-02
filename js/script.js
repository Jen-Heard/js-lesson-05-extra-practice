var friends = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");

friends.addEventListener("mouseover", function(){
    friends.innerText = "123K";
});

fish.addEventListener("mouseover", function() {
    fish.innerText = " 47K";
});

pets.addEventListener("mouseover", function() {
    pets.innerText = "20K";
});