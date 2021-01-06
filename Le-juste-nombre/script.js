/*let random = Math.floor(Math.random() * 1000);
console.log(random)

let question = "Entrez votre Number"
let answer;
let i = 0;

while(answer != random){
answer = prompt(question);

if (answer < random) {
    alert("Votre nombres est inférieur");
    i++
}

else if(answer > random){
    alert("Votre nombre est supérieur");
    i++
}

else if (answer == random){
    alert("Vous avez gagné en " + i + " coups")
}

}*/

let number = document.getElementById('number').value;
let result = document.getElementById('result');
let random = Math.floor(Math.random() * 1000);

function showResult(){
    if(number > random){
        result.textContent = "Votre nombre est supérieur"
    }else if(number < random){
        result.textContent = "Votre nombre est inférieur"
    }else if(number == random){
        result.textContent = "Vous avez gagné !"
    }else{
        result.textContent = "last"
    }
}