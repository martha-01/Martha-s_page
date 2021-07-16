let myKeys = document.querySelectorAll(".key");

/* Setting the function with which the user can 
   play the sounds by clicking on the HTML-buttons (from "C" to "C'"):*/

for(let x=0; x<myKeys.length; x++){
    myKeys[x].addEventListener("click", ()=>{
        playSound(myKeys[x].innerHTML.toLowerCase());
    });
}

/* Setting the function with which the user can 
   play the sounds by pressing the keys from 'a' to 'k' on the keyboard:*/

let keys = ["a", "s", "d", "f", "g", "h", "j", "k"];

document.addEventListener('keydown', function(btn){
    let pressedKey = btn.key.toLowerCase();
    playSoundFromKeyboard(pressedKey);

    for(let x=0; x<myKeys.length; x++){
        myKeys[x].classList.remove('activated');
    }

    for(let x=0; x<keys.length; x++){
        if(keys[x] == pressedKey){
            myKeys[x].classList.add('activated');
        }
    }
})

function playSound(sound){

    switch(sound){
        case "c":
            new Audio('doremi/do.mp3').play();
            break;
        case "d":
            new Audio('doremi/re.mp3').play();
            break;
        case "e":
            new Audio('doremi/mi.mp3').play();
            break;
        case "f":
            new Audio('doremi/fa.mp3').play();
            break;
        case "g":
            new Audio('doremi/sol.mp3').play();
            break;
        case "a":
            new Audio('doremi/la.mp3').play();
            break;
        case "h":
            new Audio('doremi/ti.mp3').play();
            break;
        case "c'":
            new Audio('doremi/doh.mp3').play();
            break;
    }
}


function playSoundFromKeyboard(sound){

    switch(sound){
        case "a":
            new Audio('doremi/do.mp3').play();
            break;
        case "s":
            new Audio('doremi/re.mp3').play();
            break;
        case "d":
            new Audio('doremi/mi.mp3').play();
            break;
        case "f":
            new Audio('doremi/fa.mp3').play();
            break;
        case "g":
            new Audio('doremi/sol.mp3').play();
            break;
        case "h":
            new Audio('doremi/la.mp3').play();
            break;
        case "j":
            new Audio('doremi/ti.mp3').play();
            break;
        case "k":
            new Audio('doremi/doh.mp3').play();
            break;
    }
}