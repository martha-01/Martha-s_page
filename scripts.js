const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const wraps = document.querySelectorAll(".wrap");

openBtn.addEventListener("click", function() {
    for(let i=0; i<wraps.length; i++){
        wraps[i].classList.add("visible");
    }
});

closeBtn.addEventListener("click", function() {
    for(let i=0; i<wraps.length; i++){
        wraps[i].classList.remove("visible");
    }
});