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

function addDiv(){
    let createDiv = document.createElement("DIV")
    let addLorem = document.createTextNode("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit sint, molestias natus repudiandae error odio ad facilis quibusdam dignissimos similique esse iure recusandae consectetur quas alias dolores at modi iste?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae hic doloribus veritatis molestiae eius dolore soluta, porro in tempore voluptatum harum voluptatem amet? Consequatur, earum. Ducimus iusto numquam optio maiores Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maiores nam rerum totam adipisci soluta, iste omnis esse facilis eius, voluptas beatae ea reprehenderit numquam minima dolores cum placeat ratione? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere velit et a distinctio, vitae commodi sint veritatis maiores quibusdam totam. Porro nisi placeat architecto, possimus saepe ipsum sapiente similique velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis natus facilis excepturi assumenda, dolore dicta reprehenderit totam, aspernatur adipisci voluptas eius in exercitationem eaque doloremque ut magnam vel laboriosam accusamus!")
    createDiv.appendChild(addLorem)
    document.body.appendChild(createDiv)
}