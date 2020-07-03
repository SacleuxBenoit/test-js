let loremId = document.getElementById("firstLoremId");
let testParent = document.getElementById("testParent");
let divs = document.getElementsByTagName('div')

testParent.style.color="blue"
loremId.style.color = "purple";

// alert(divs.length)

function changeColor(newColor){
    let elem = document.getElementById("divColored");
    elem.style.color = newColor
}

function darkMode(){
    let body = document.body;
    body.style.backgroundColor = "black"
    body.style.color = "white"
}

function whiteMode(){
    let body = document.body;
    body.style.backgroundColor = "white"
    body.style.color = "black"
}