let firstThrow = document.getElementById("firstThrow");
let secondThrow = document.getElementById("secondThrow");
let thirdThrow = document.getElementById("thirdThrow");
let bigThrow = document.getElementById("bigThrow");
let result = document.getElementById("result");
let roll = document.getElementById("roll");
let coups = 1;

function RandomBtn1() {
    arrBtn1 = [Math.floor((Math.random() * 6) + 1)];
    console.log(arrBtn1)
}
function RandomBtn2() {
    arrBtn2 = [Math.floor((Math.random() * 6) + 1)];
    console.log(arrBtn2)
}
function RandomBtn3() {
    arrBtn3 = [Math.floor((Math.random() * 6) + 1)];
    console.log(arrBtn3)
}

function everyThing(){
    RandomBtn1();
    RandomBtn2();
    RandomBtn3();
    sort();
    winner();
    disableButton();
    showRandom();
    newArray();
    console.log(++coups)
}

function newArray(){
    console.log(newarr = /*[...arrBtn1,...arrBtn2,...arrBtn3,]*/ arrBtn1.concat(arrBtn2, arrBtn3));
}
function sort(){

    newArray();
    
    if(newarr[1] == 4){
        [newarr[0], newarr[1]] = [newarr[1], newarr[0]];
        console.log(newarr)
    }

    if(newarr[2] == 4){
        [newarr[0], newarr[2]] = [newarr[2], newarr[0]];
        console.log(newarr)
    }

    if(newarr[0] == 2){
        [newarr[0], newarr[1]] = [newarr[1], newarr[0]];
        console.log(newarr)
    }

    if(newarr[2] == 2){
        [newarr[1], newarr[2]] = [newarr[2], newarr[1]];
        console.log(newarr)
    }
}

function winner(){
    if(newarr[0] == 4 && newarr[1] == 2 && newarr[2] == 1){
        result.style.color = "blue";
        disableButton();
    }
}

function disableButton(){

    if(newarr[0] == 4){
        firstThrow.disabled = true
    }else{
        firstThrow.disabled = false
    }

    if(newarr[1] == 2){
        secondThrow.disabled = true
    }else{
        secondThrow.disabled = false
    }

    if(newarr[2] == 1){
        thirdThrow.disabled = true
    }else{
        thirdThrow.disabled = false
    }

    if(newarr[0] == 4 && newarr[1] == 2 && newarr[2] == 1){
        bigThrow.disabled = true
    }

}

function showRandom(){
    roll.textContent =  newarr[0] + " " + newarr[1] + " " + newarr[2]
    if(newarr[0] == 4 && newarr[1] == 2 && newarr[2] == 1){
        result.textContent = "vous avez gagné en " + coups + " coups !"
    }
}

function reset(){
    result.textContent = " "; 
    roll.textContent = " "
    result.style.color = "black";
    firstThrow.disabled = false;
    secondThrow.disabled = false;
    thirdThrow.disabled = false;
    bigThrow.disabled = false;
    coups = 1;
}