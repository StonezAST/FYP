// JavaScript source code
var img = document.getElementById("Cover"); //Album Cover

var num = 0;

var Christian = [						//Christian Songs
    "https://docs.google.com/uc?export=download&id=1OhORl4DDqvnnnTGsmWvZHB5MrCJ9BsFV", //Nos x GK Moe - Handy
    "https://docs.google.com/uc?export=download&id=1fGT3i1n66Ibjs4qI0KeJCY_gLZ1KTqLF", //Flavour
    "https://docs.google.com/uc?export=download&id=1DWeWTCGv8qpcROqXbF7S5ckh22L1y8aM", //Guvna B - Nothing But The Blood
];

//Default Song
var x = new Audio(Christian[num]);
if (x = new Audio(Christian[0])) {
    img.src = 'Images/Guvna B.png';
    document.getElementById("Name").innerHTML = "UK Christian Rap Mix";
}

//Change Song name
function name() {
    if (num == 0) {
        img.src = 'Images/Guvna B.png';
        document.getElementById("Name").innerHTML = "Nos x GK Moe - Handy";
    }
    if (num == 1) {
        document.getElementById("Name").innerHTML = "GK Moe x Nos x FT - Flavour";
    }

    if (num == 2) {
        document.getElementById("Name").innerHTML = "Guvna B - Nothing But The Blood (ft. Deitrick Haddon)";
    }
}

//Trap Mix 
function TMix() {
    pauseAudio();
    x = new Audio(Christian[0]);
    playAudio();
    img.src = 'Images/Guvna B.png';
    document.getElementById("Name").innerHTML = "Nos x GK Moe - Handy";
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