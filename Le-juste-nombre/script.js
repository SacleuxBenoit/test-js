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