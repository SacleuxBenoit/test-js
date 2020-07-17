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
let i = 0;

/*do {
    answer = prompt(question);

    if (answer < random) {
        alert("Votre nombres est inférieur");
        i++
    }

    else {
        alert("Votre nombre est supérieur");
        i++
    }

} while (answer != random)
*/

while(answer != random){
answer = prompt(question);

if (answer < random) {
    alert("Votre nombres est inférieur");
    i++
}

else {
    alert("Votre nombre est supérieur");
    i++
}

}