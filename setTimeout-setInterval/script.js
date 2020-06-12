/*// setTimeout

setTimeout(() =>{
    alert("this is a test for setTimeout")
}, 4000)

// ClearTimeout

let content;

function sayHello(){
    content = setTimeout(function(){alert("Hi")}, 4000);
}

function dontSayHello(){
    clearTimeout(content)
}

// setInterval 

setInterval(() =>{
    alert("This is a test with 3000 ms")
}, 3000)
*/

let timer = document.getElementById("timer");
let intervalId;

let jours = 0;
let heures = 0;
let minutes = 0;
let secondes = 0;
let millisecondes = 0;

timer.textContent = jours + ' jours : ' + heures + ' heures : ' + minutes + ' minutes : ' + secondes + ' secondes : ' + millisecondes;

function Timer(){
    intervalId = setInterval(function(){
        timer.textContent = jours + ' jours : ' + heures + ' heures : ' + minutes + ' minutes : ' + secondes + ' secondes : ' + millisecondes;
        millisecondes+=1;
        if(millisecondes >= 10){
            millisecondes = 0;
            secondes += 1;
        }
        if(secondes >= 60){
            secondes = 0;
            minutes += 1;
        }
        if(minutes >= 60){
            minutes = 0;
            heures += 1;
        }
        if(heures >= 24){
            heures = 0;
            jours += 1;
        }
    }, 100)
}

function PauseTimer(){
    clearInterval(intervalId);
}