let lifeP1 = 0;
let lifeP2 = 0;

function redirection(){
    document.location.href="Game/game.html"
}

function quickAttack(){
    let min = 6;
    let max = 12;
    console.log(Math.floor((Math.random() * (max - min) + min)))
}

function slowAttack(){
    let min = 1;
    let max = 20;
    console.log(Math.floor((Math.random() * (max - min) + min)))
}

function heal(){
    let min = 8;
    let max = 11;
    console.log(Math.floor((Math.random() * (max - min) + min)))
}