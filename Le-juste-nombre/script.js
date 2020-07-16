/*function Num(){
    let valueInput = document.getElementById("valueInput").value
    let result = document.getElementById("result")
    if(valueInput == random){
        alert("c'est good")
    }else{alert("c'est pas good")}
}*/

let random = Math.floor(Math.random() * 1000);
console.log(random)

let question = "Entrez votre Number"
let answer;

do {
    answer = prompt(question);

    if (answer < random) {
        alert("Votre nombres est inférieur");
    }

    else {
        alert("Votre nombre est supérieur");
    }

} while (answer != random)