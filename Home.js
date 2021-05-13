// JavaScript source code
var img = document.getElementById("Cover"); //Album Cover

var num = 0;

var Trap = [						//Trap Songs
    "https://docs.google.com/uc?export=download&id=1DfNnfXZOps3t5PwIItR5DINkAxDNh-wL", //DBE - Ferrari Horses
    "https://docs.google.com/uc?export=download&id=1gATffnnhaNlEu6SnBviOrvGaTAT2uGLi", // Dave - Titanium 
];

var AfroSwing = [					//AfroSwing Songs
    "https://docs.google.com/uc?export=download&id=1wp3nJ3JA8JDcq6FJAR33Yoox4KI31Ecn", // S1mba - Rover (remix)
    "https://docs.google.com/uc?export=download&id=1wJoA1fPXdqh0lmmJFI8hgDXOtm5Ua5Pr", //Young T & Bugsy - Dont Rush
];

var UKDrill = [						//UK Drill Songs
    "https://docs.google.com/uc?export=download&id=1g8cvM6EDAa1VPkVD4sOGGldZeBcFX224", //CB (7th) - Take That Risk
    "https://docs.google.com/uc?export=download&id=12fhpzqTah-f5XrzyRdhCNd5PkyK5gyoM",//OFB - Ambush
];

var Garage = [						//UK Garage Songs
    "https://docs.google.com/uc?export=download&id=1xluIwr3m1hCHtXxVyRKtb6nETgVfBqd_", //West Ten
    "https://docs.google.com/uc?export=download&id=1BBhPdTGU3ixS1yhV1K9bWEyDvlbVeq81", //On My Mind
];

var Christian = [					//UK Christian Songs
    "https://docs.google.com/uc?export=download&id=1OhORl4DDqvnnnTGsmWvZHB5MrCJ9BsFV", //Handy
    "https://docs.google.com/uc?export=download&id=1fGT3i1n66Ibjs4qI0KeJCY_gLZ1KTqLF", //Flavour
];

//Default Song
var x = new Audio(Trap[0]);
if (x = new Audio(Trap[0])) {
    img.src = 'Images/DBE.jpg';
    document.getElementById("Name").innerHTML = "D-Block Europe - Ferrari Horses";
}

//Santan Dave - Titanium
function Titanium() {
    pauseAudio();
    x = new Audio(Trap[1]);
    playAudio();
    img.src = 'Images/Titanium.png';
    document.getElementById("Name").innerHTML = "Santan Dave - Titanium";
}

//DBE - Ferrari Horses
function Ferrari() {
    pauseAudio();
    x = new Audio(Trap[0]);
    playAudio();
    img.src = 'Images/DBE.jpg';
    document.getElementById("Name").innerHTML = "D-Block Europe - Ferrari Horses";
}

//S1mba - Rover(remix)
function Rover() {
    pauseAudio();
    x = new Audio(AfroSwing[0]);
    playAudio();
    img.src = 'Images/Rover.png';
    document.getElementById("Name").innerHTML = "S1mba - Rover (Remix) (ft. Poundz, ZieZie & Ivorian Doll)";
}

//S1mba - Rover(remix)
function Rush() {
    pauseAudio();
    x = new Audio(AfroSwing[1]);
    playAudio();
    img.src = 'Images/Rush.jpg';
    document.getElementById("Name").innerHTML = "Young T & Bugsey - Don't Rush (ft. Headie One)";
}

//CB - Take That Risk
function CB() {
    pauseAudio();
    x = new Audio(UKDrill[0]);
    playAudio();
    img.src = 'Images/Risk.jpg';
    document.getElementById("Name").innerHTML = "CB (7th) - Take That Risk";
}

//OFB - Ambush
function OFB() {
    pauseAudio();
    x = new Audio(UKDrill[1]);
    playAudio();
    img.src = 'Images/FrontStreet.jpg';
    document.getElementById("Name").innerHTML = "OFB - Ambush";
}

//AJ Tracey - West Ten
function West() {
    pauseAudio();
    x = new Audio(Garage[0]);
    playAudio();
    img.src = 'Images/west ten.jpg';
    document.getElementById("Name").innerHTML = "AJ Tracy & Mabel - West Ten";
}

//Jorja Smith - On My Mind
function Mind() {
    pauseAudio();
    x = new Audio(Garage[1]);
    playAudio();
    img.src = 'Images/On My.jpg';
    document.getElementById("Name").innerHTML = "Jorja Smith - On My Mind";
}

//Nos x GK Moe - Handy
function Handy() {
    pauseAudio();
    x = new Audio(Christian[0]);
    playAudio();
    img.src = 'Images/Handy.jpg';
    document.getElementById("Name").innerHTML = "Nos x GK Moe - Handy";
}

//GK Moe x Nos x FT - Flavour
function Flavour() {
    pauseAudio();
    num = num + 1;
    x = new Audio(Christian[num]);
    playAudio();
    img.src = 'Images/Flavour.jpg';
    document.getElementById("Name").innerHTML = "GK Moe x Nos x FT - Flavour";
}

//Trap Mix 
function TMix() {
    pauseAudio();
    x = new Audio(Trap[0]);
    playAudio();
    img.src = 'Images/Dave.png';
    document.getElementById("Name").innerHTML = "UK Trap Mix";
}

//Next Function
function Next() {
    pauseAudio();
    if (num < 2) {
        num = num + 1;
    } else {
        num = num = 0;
    }
    x = new Audio(Christian[num]);
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