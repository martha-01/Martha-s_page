let ageInput = document.querySelector("#ageInput");
let calcBtn = document.querySelector("#calcBtn");
let result = document.querySelector("#result");
let displayResult = document.querySelector("#displayResult");
let resetBtn = document.querySelector("#resetBtn");
let refresh = document.querySelector(".refresh");
let alert = document.querySelector(".alert");
let alert2 = document.querySelector(".alert2");

let mytimer;
let age;
        
calcBtn.addEventListener("click", () =>{
    // displayResult.innerHTML = "";
    age = ageInput.value.trim();
    clearInterval(mytimer);
    if(age == ""){
        alert.classList.add("active");
        mytimer = setInterval(function(){
            alert.classList.remove("active");
        }, 3000)
    }
    else if(isNaN(age) == true){
        alert2.classList.add("active");
        mytimer = setInterval(function(){
            alert2.classList.remove("active");
        }, 3000)
    }
    else {
        result.innerHTML = numberWithCommas((90-age)*52);
        let answer = document.querySelector(".answer");
        answer.classList.add("active");
        ageInput.value = "";
    }
});

function numberWithCommas(weeks) {
    return weeks.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
}

resetBtn.addEventListener("click", ()=>{
    refresh.click();
})
