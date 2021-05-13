// JavaScript source code
var img = document.getElementById("Cover"); //Album Cover

var num = 0;

var Garage = [						//Trap Songs
    "https://docs.google.com/uc?export=download&id=1xluIwr3m1hCHtXxVyRKtb6nETgVfBqd_", //West Ten
    "https://docs.google.com/uc?export=download&id=1BBhPdTGU3ixS1yhV1K9bWEyDvlbVeq81", //On My Mind
    "https://docs.google.com/uc?export=download&id=1uGPXDjJ43uLCF_Sc54Kw_64z8cwvaPAQ",//Be The One
    "https://docs.google.com/uc?export=download&id=1CDisR6lirNAVPOlQn7TGd3lfg4xwz6x7", //Mean That Much
];

//Default Song
var x = new Audio(Garage[num]);
if (x = new Audio(Garage[num])) {
    img.src = 'Images/Rudimental.png';
    document.getElementById("Name").innerHTML = "UK Garage Mix";
}

//Change Song name
function Gname() {
    if (num == 0) {
        img.src = 'Images/Rudimental.png';
        document.getElementById("Name").innerHTML = "AJ Tracy & Mabel - West Ten";
    }
    if (num == 1) {
        img.src = 'Images/Rudimental.png';
        document.getElementById("Name").innerHTML = "Jorja Smith x Preditah - On My Mind";
    }
    if (num == 2) {
        img.src = 'Images/Rudimental.png';
        document.getElementById("Name").innerHTML = "Rudimental - Be The One (ft. MORGAN, Digga D & TIKE)";
    }
    if (num == 3) {
        img.src = 'Images/Rudimental.png';
        document.getElementById("Name").innerHTML = "Rudimental & Preditah - Mean That Much (ft. Morgan)";
    }
}

//Garage Mix 
function GMix() {
    pauseAudio();
    x = new Audio(Garage[0]);
    playAudio();
    img.src = 'Images/Rudimental.png';
    document.getElementById("Name").innerHTML = "AJ Tracy & Mabel - West Ten";
}

//Next Function
function Next() {
    pauseAudio();
    if (num < 3) {
        num = num + 1;
    } else {
        num = num = 0;
    }
    x = new Audio(Garage[num]);
    Gname();
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