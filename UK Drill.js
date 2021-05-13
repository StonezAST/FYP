// JavaScript source code
var img = document.getElementById("Cover"); //Album Cover

var num = 0;

//Drill Songs
var Drill = [
    "https://docs.google.com/uc?export=download&id=1g8cvM6EDAa1VPkVD4sOGGldZeBcFX224", //CB (7th) - Take That Risk
    "https://docs.google.com/uc?export=download&id=12fhpzqTah-f5XrzyRdhCNd5PkyK5gyoM",//OFB - Ambush
    "https://docs.google.com/uc?export=download&id=1VgSKzcUvy53xDfeNo4GHSXC2rUADUf24", //NPK - True Story
    "https://docs.google.com/uc?export=download&id=1jyhgLhFMDXm0GsilhAiRJwQjEQUo2GoF", //YOO - Bandokay
    "https://docs.google.com/uc?export=download&id=1q9zGolG0FjrvzsltouMO7vtJPxzQ6_f-", //Youngest In Charge - SJ
];

//Default Song
var x = new Audio(Drill[num]);
if (x = new Audio(Drill[num])) {
    img.src = 'Images/Digga D.png';
    document.getElementById("Name").innerHTML = "UK Drill Mix";
}

//Change Trap name
function name() {
    if (num == 0) {
        img.src = 'Images/Digga D.png';
        document.getElementById("Name").innerHTML = "CB (7th) - Take That Risk";
    }
    if (num == 1) {
        img.src = 'Images/Digga D.png';
        document.getElementById("Name").innerHTML = "OFB - Ambush";
    }
    if (num == 2) {
        img.src = 'Images/Digga D.png';
        document.getElementById("Name").innerHTML = "NPK - True Story";
    }
    if (num == 3) {
        img.src = 'Images/Digga D.png';
        document.getElementById("Name").innerHTML = "Bandokay (OFB) - YOO";
    }
    if (num == 4) {
        img.src = 'Images/Digga D.png';
        document.getElementById("Name").innerHTML = "SJ (OFB) - Youngest In Charge";
    }
}

//Drill Mix 
function DMix() {
    pauseAudio();
    x = new Audio(Drill[num]);
    playAudio();
    img.src = 'Images/Digga D.png';
    document.getElementById("Name").innerHTML = "CB (7th) - Take That Risk";
}

//Next Function
function Next() {
    pauseAudio();
    if (num < 4) {
        num = num + 1;
    } else {
        num = num = 0;
    }
    x = new Audio(Drill[num]);
    name();
    playAudio();
}

//Play Button 
function playAudio() { 
    x;
    x.play();
}

//Pasue Button
function pauseAudio() {
    x;
    x.pause();
}

function connect() {
    var x = navigator.onLine;
    if (x == false) {
        alert("You Need Internet Connection To Listen To Music");
    }
}