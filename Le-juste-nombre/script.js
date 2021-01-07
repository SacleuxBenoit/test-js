let number = document.getElementById('number').value;
let result = document.getElementById('result');
let random = Math.floor(Math.random() * 1000);

function showResult(){
    let i = 0;
    if(number > random){
        result.textContent = "Votre nombre est supérieur";
        i++;
    }else if(number < random){
        result.textContent = "Votre nombre est inférieur";
        i++;
    }else if(number == random){
        result.textContent = "Vous avez gagné en " + i + " coups";
    }
}