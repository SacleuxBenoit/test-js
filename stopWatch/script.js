let timer = document.getElementById("timer");
let heures = 0;
let minutes = 0;
let secondes = 0;
let millisecondes = 0;
let interval;

timer.textContent = heures + " heures " + minutes + " minutes " + secondes + " secondes " + millisecondes + " millisecondes ";

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

function Reset(){
    heures = 0;
    minutes = 0;
    secondes = 0;
    millisecondes = 0;
timer.textContent = heures + " heures " + minutes + " minutes " + secondes + " secondes " + millisecondes + " millisecondes ";

}