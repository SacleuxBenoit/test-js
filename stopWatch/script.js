let timer = document.getElementById("timer");
let start = document.getElementById("start");
let pause = document.getElementById("pause");
let finish = document.getElementById("finish");
let heures = 0;
let minutes = 0;
let secondes = 0;
let millisecondes = 0;
let interval;
let i = 0;

timer.textContent = heures + " heures " + minutes + " minutes " + secondes + " secondes " + millisecondes + " millisecondes ";

start.addEventListener('click', () =>{
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
     },100)
    start.disabled = !start.disabled;
    if(pause.disabled = true){
        start.textContent = "Commencer le chrono"
    }
    pause.disabled = false;
});

pause.addEventListener('click', () =>{
    let newSpan = document.createElement("span")
    let save =  document.createTextNode(++i + ") " + heures + " heures " + minutes + " minutes " + secondes + " secondes " + millisecondes + " millisecondes ")
    start.disabled = false;
    pause.disabled = true;
    newSpan.appendChild(save)
    document.body.appendChild(newSpan)
    clearInterval(interval)
    
    if(pause.disabled = true){
        start.textContent = "Reprendre"
    }
});

finish.addEventListener('click', () =>{
    heures = 0;
    minutes = 0;
    secondes = 0;
    millisecondes = 0;
    timer.textContent = heures + " heures " + minutes + " minutes " + secondes + " secondes " + millisecondes + " millisecondes ";
    start.disabled = false;
    pause.disabled = true
    clearInterval(interval)

    if(pause.disabled = true){
        start.textContent = "Recommencer le chrono"   
    }
})