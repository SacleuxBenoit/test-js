let tva = document.getElementById("tva");
let people = document.getElementById("people");
let result = document.getElementById("result");
let totalResult = document.getElementById("totalResult");
let price = document.getElementById("price");
let labelPrice = document.getElementById("labelPrice");
let labelPeople = document.getElementById("labelPeople");
let labelTVA = document.getElementById("labelTVA");

function send(){
    total()
    checkAll()
}

function checkPeople(){

    if(people.value <= 0){
        result.textContent = "Veuillez indiquer le nombre de personne."
        labelPeople.style.color = "red"
    }else{
        labelPeople.style.color = "black"
    }
}

function checkTVA(){
    if(tva.value <= 0){
        result.textContent = "Veuillez indiquer la TVA"
        labelTVA.style.color = "red"
    }else{
        labelTVA.style.color = "black"
    }
}

function checkPrice(){
    if(price.value <= 0){
        result.textContent = "Veuillez indiquez le prix"
        labelPrice.style.color = "red"
    }else{
        labelPrice.style.color = "black"
    }
}

function total(){
    let totalTVA = price.value * tva.value / 100
    let total = price.value * 1 + totalTVA * 1
    let totalPeople = total / people.value
    totalResult.textContent = "Le coût total est de " + total + " euros,"
    result.textContent = "ce qui fait " + totalPeople + " euros par personne."
}

function checkAll(){
checkPeople();
checkPrice();
checkTVA();
}