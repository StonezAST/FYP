// JavaScript source code
var img = document.getElementById("Cover"); //Album Cover

var num = 0;

var Trap = [						//Trap Songs
    "https://docs.google.com/uc?export=download&id=1DfNnfXZOps3t5PwIItR5DINkAxDNh-wL", //DBE - Ferrari Horses
    "https://docs.google.com/uc?export=download&id=1gATffnnhaNlEu6SnBviOrvGaTAT2uGLi", // Dave - Titanium 
    "https://docs.google.com/uc?export=download&id=19fUOlSWIJL1nvunaz-Ce5V7bP5qlLF6X",
];

//Default Song
var x = new Audio(Trap[0]);
if (x = new Audio(Trap[0])) {
    img.src = 'Images/Dave.png';
    document.getElementById("Name").innerHTML = "UK Trap Mix";
}

//Change Trap name
function name() {
    if (num == 0) {
        img.src = 'Images/Dave.png';
        document.getElementById("Name").innerHTML = "DBE - Ferrari Horses";
    }
    if (num == 1) {
        img.src = 'Images/Dave.png';
        document.getElementById("Name").innerHTML = "Santan Dave - Titanium";
    }

    if (num == 2) {
        img.src = 'Images/Dave.png';
        document.getElementById("Name").innerHTML = "SL - Bad Luck";
    }
}

//Trap Mix 
function TMix() {
    pauseAudio();
    x = new Audio(Trap[0]);
    playAudio();
    img.src = 'Images/Dave.png';
    document.getElementById("Name").innerHTML = "DBE - Ferrari Horses";
}

//Next Function
function Next() {
    pauseAudio();
    if (num < 2) {
        num = num + 1;
    } else {
        num = num = 0;
    }
    x = new Audio(Trap[num]);
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