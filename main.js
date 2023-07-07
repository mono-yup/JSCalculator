let total;
let erase = true;
let value = document.getElementById("value");
let negative = document.getElementById("negative");
let clear = document.getElementById("clear");
let percentage = document.getElementById("percentage");
let divide = document.getElementById("divide");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let multi = document.getElementById("multi");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let subtract = document.getElementById("subtract");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let addition = document.getElementById("addition");
let zero = document.getElementById("zero");
let decimal = document.getElementById("decimal");
let equals = document.getElementById("equals");
let num1;
let num2;
let operator;

let numArr = [ seven, eight,  nine, four, five, six, one, two, three,  zero,]
let operatorArr = [ negative,  clear, percentage, divide, multi, subtract, addition, decimal]


equals.addEventListener("click", () => {
       console.log(Number(value.innerText))
    })

numArr.forEach( (e) => {
    e.addEventListener("click", () => {
        console.log(Number(e.innerText));
        total = e.innerText;
        if (erase === true){
            value.innerText = "";
            erase = false;
        }
        value.innerText =  value.innerText + total;

        
    })
});

// 
//math operators
addition.addEventListener("click", () => {
    num1 = Number(value.innerText);
    erase = true;
    operator = "+"
})

//
//operators
clear.addEventListener("click", () => {
    value.innerText = "0"
    erase = true});

negative.addEventListener("click", () => {value.innerText = Number(value.innerText) * -1});

percentage.addEventListener("click", () => {
    total =( Number(value.innerText) /100)
    console.log(total)
    erase = true;
    value.innerText = total.toString()
})

//
//

equals.addEventListener("click", () => {
    num2 = Number(value.innerText);
    if (operator === "+"){
    total = num1 + num2;
    value.innerText = total
    }

    erase = true;
}) 