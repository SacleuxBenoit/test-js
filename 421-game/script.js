function RandomBtn1() {
    arrBtn1 = [Math.floor((Math.random() * 6) + 1)]
    console.log(arrBtn1)
}
function RandomBtn2() {
    arrBtn2 = [Math.floor((Math.random() * 6) + 1)]
    console.log(arrBtn2)
}
function RandomBtn3() {
    arrBtn3 = [Math.floor((Math.random() * 6) + 1)]
    console.log(arrBtn3)
}

function everyThing(){
    RandomBtn1();
    RandomBtn2();
    RandomBtn3()
    console.log(newarr = [...arrBtn1,...arrBtn2,...arrBtn3,])
    sort();
    winner()
}

function sort(){

    if(newarr[1] == 4){
        [newarr[0], newarr[1]] = [newarr[1], newarr[0]]
        console.log(newarr)
    }

    if(newarr[2] == 4){
        [newarr[0], newarr[2]] = [newarr[2], newarr[0]]
        console.log(newarr)
    }

    if(newarr[0] == 2){
        [newarr[0], newarr[1]] = [newarr[1], newarr[0]]
        console.log(newarr)
    }

    if(newarr[2] == 2){
        [newarr[1], newarr[2]] = [newarr[2], newarr[1]]
        console.log(newarr)
    }
}

function winner(){
    if(newarr[0] == 4 && newarr[1] == 2 && newarr[2] == 1){
        alert("vous avez gagné !")
    }
}

/*function teste(){
    newarr = [...arr1,...arr2,...arr3,]
    console.log(newarr)
}

function firstButton(){
    firstThrow = RandomInt(1, 6)
    console.log(firstThrow);
}

function secondButton(){
    secondThrow = RandomInt(1, 6)
   }

function thirdButton(){
    thirdThrow = RandomInt(1, 6)
   }

function everyButton(){
    firstButton();
    secondButton();
    thirdButton();
}

if(firstButton() == 4){
    alert("ok")
}

console.log(firstButton())

console.log(arr)*/