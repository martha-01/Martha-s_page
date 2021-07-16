let display = document.querySelector("#display");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let reset = document.querySelector("#reset");

plus.addEventListener("click", function(){
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);
    const addTwoNumbers = (x, y) => x + y;
    display.innerHTML = num1 + " + " + num2 + " = " + addTwoNumbers(num1, num2);
});

minus.addEventListener("click", function(){
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);
    const subtractTwoNumbers = (x, y) => x - y;
    display.innerHTML = num1 + " - " + num2 + " = " + subtractTwoNumbers(num1, num2);
});

multiply.addEventListener("click", function(){
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);
    const multiplyTwoNumbers = (x, y) => x * y;
    display.innerHTML = num1 + " x " + num2 + " = " + multiplyTwoNumbers(num1, num2);
});

divide.addEventListener("click", function(){
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);
    const divideTwoNumbers = (x, y) => x / y;
    display.innerHTML = num1 + " / " + num2 + " = " + divideTwoNumbers(num1, num2);
});

reset.addEventListener("click", function(){
    display.innerHTML = "";
    num1.value = 0;
    num2.value = 0;
})