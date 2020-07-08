let timer = document.getElementById("timer")
let heures = 0
let minutes = 0
let secondes = 0
let millisecondes = 0
let interval;

function Timer(){
    interval = setInterval(function(){
        timer.textContent = heures + " heures " + minutes + " minutes " + secondes + " secondes " + millisecondes + " millisecondes ";
        millisecondes += 1;
        if(millisecondes >= 10){
            secondes ++;
            millisecondes = 0;
        }if(secondes >= 60){
            minutes ++;
            secondes = 0;
        }if(minutes >= 60){
            heures ++;
            minutes = 0;
        }
     },100)}

function Pause(){
    clearInterval(interval)
}
