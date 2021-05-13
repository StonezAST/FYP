// JavaScript source code
var img = document.getElementById("Cover"); //Album Cover

var num = 0;

var Trap = [						//New Rap Songs
    "https://docs.google.com/uc?export=download&id=1dk36mwiiWXBBRYuX7Rqo9RKU9d-LAFzi", //The Great Escape
    "https://docs.google.com/uc?export=download&id=1rcvUD67SDPV-p-Gus08oSz_abW11dv5u", //Body Remix
    "https://docs.google.com/uc?export=download&id=1Tn1P1s3i4rMg1GA9PUPCex8XXpsBtweQ", //Back In Blood
    "https://docs.google.com/uc?export=download&id=1x9NNUhHABbWQVJmUUggYEPxoNxVcjrT-", //Little More Love
];

//Default Song
var x = new Audio(Trap[0]);
if (x = new Audio(Trap[0])) {
    img.src = 'Images/Russ.png';
    document.getElementById("Name").innerHTML = "New UK Rap Mix";
}

//Change Trap name
function name() {
    if (num == 0) {
        img.src = 'Images/Russ.png';
        document.getElementById("Name").innerHTML = "Blanco - The Great Escape (ft. Central Cee)";
    }
    if (num == 1) {
        img.src = 'Images/Russ.png';
        document.getElementById("Name").innerHTML = "Tion Wayne x Russ Millions - Body Remix (Ft. Arrdee, E1, Bugzy , Fivio Foreign, ZT, Darkoo, Buni)";
    }

    if (num == 2) {
        img.src = 'Images/Russ.png';
        document.getElementById("Name").innerHTML = "C1 - Back In Blood";
    }
    if (num == 3) {
        img.src = 'Images/Russ.png';
        document.getElementById("Name").innerHTML = "AJ Tracey - Little More Love";
    }
}

//New Songs Mix 
function TMix() {
    pauseAudio();
    x = new Audio(Trap[0]);
    playAudio();
    img.src = 'Images/Russ.png';
    document.getElementById("Name").innerHTML = "Blanco - The Great Escape (ft. Central Cee)";
}

//Next Function
function Next() {
    pauseAudio();
    if (num < 3) {
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

