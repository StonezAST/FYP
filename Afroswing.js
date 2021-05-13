// JavaScript source code
var img = document.getElementById("Cover"); //Album Cover

var num = 0;

var AfroSwing = [						//Afroswing songs
    "https://docs.google.com/uc?export=download&id=1wJoA1fPXdqh0lmmJFI8hgDXOtm5Ua5Pr", //Young T & Bugsy - Dont Rush
    "https://docs.google.com/uc?export=download&id=1wp3nJ3JA8JDcq6FJAR33Yoox4KI31Ecn", // S1mba - Rover (remix)
    "https://docs.google.com/uc?export=download&id=1kDSRd-sopKFUmcUvj5tXC6aoy2Y5UMGH", //Butterflies
    "https://docs.google.com/uc?export=download&id=1rt3pNXfP67_xBRKt9ubjNdbiQuTlhZoY", //4 Nothin'
    "https://docs.google.com/uc?export=download&id=18fcexALZ6fQwFiyiSCQtpO3w56WX77U3", //Fine Girl
];

//Default Song
var x = new Audio(AfroSwing[0]);
if (x = new Audio(AfroSwing[0])) {
    img.src = 'Images/J Hus.png';
    document.getElementById("Name").innerHTML = "UK Afrowswing Mix";
}

//Change Song name
function name() {
    if (num == 0) {
        img.src = 'Images/J Hus.png';
        document.getElementById("Name").innerHTML = "Young T & Bugsey - Don't Rush (ft. Headie One)";
    }
    if (num == 1) {
        img.src = 'Images/J Hus.png';
        document.getElementById("Name").innerHTML = "S1mba - Rover (Remix) (ft. Poundz, ZieZie & Ivorian Doll)";
    }
    if (num == 2) {
        img.src = 'Images/J Hus.png';
        document.getElementById("Name").innerHTML = "AJ Tracey ft. Not3s - Butterflies";
    }
    if (num == 3) {
        img.src = 'Images/J Hus.png';
        document.getElementById("Name").innerHTML = "melvitto & Gabzy - 4 Nothin'";
    }
    if (num == 4) {
        img.src = 'Images/J Hus.png';
        document.getElementById("Name").innerHTML = "ZieZie - Fine Girl";
    }
}

//AfroSwing Mix 
function AMix() {
    pauseAudio();
    x = new Audio(AfroSwing[0]);
    playAudio();
    img.src = 'Images/J Hus.png';
    document.getElementById("Name").innerHTML = "Young T & Bugsey - Don't Rush (ft. Headie One)";
}

//Next Function
function Next() {
    pauseAudio();
    if (num < 4) {
        num = num + 1;
    } else {
        num = num = 0;
    }
    x = new Audio(AfroSwing[num]);
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
