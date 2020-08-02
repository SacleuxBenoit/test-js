let tva = document.getElementById("tva");
let people = document.getElementById("people");
let result = document.getElementById("result");

console.log(price)

function send(){
 calcTVA();
}

function calcTVA(){
    let totalTVA = price.value * tva.value / 100
    let total = price.value * 1 + totalTVA * 1
    result.textContent = "Le total est de : " + total + " euros"
}