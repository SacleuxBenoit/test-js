let tva = document.getElementById("tva");
let people = document.getElementById("people");
let result = document.getElementById("result");

function send(){

    let totalTVA = price.value * tva.value / 100
    let total = price.value * 1 + totalTVA * 1
    let totalPeople = total / people.value
    result.textContent = "Le coût est de " + totalPeople + " euros par personne."
}