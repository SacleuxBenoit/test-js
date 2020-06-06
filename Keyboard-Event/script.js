let message = document.getElementById('TextArea')

// Utilisation de keydown avec .key

message.addEventListener('keydown', (e) => {
    if(e.key == "z"){
        console.log("Z à était press")
    }
})

// Utilisation de keyup avec .key

message.addEventListener('keyup', (e) => {
    if(e.key == "z"){
        console.log("Z à était relaché")
    }
})

// Utilisation de keydown avec .keyCode

message.addEventListener('keydown', (e) => {
    if(e.keyCode == "65"){
        console.log("A à était press")
    }
})

// Utilisation de keyup avec .keyCode

message.addEventListener('keyup', (e) =>{
    if(e.keyCode == "65"){
        console.log("A à était relaché")
    }
})

// Utilisation de switch avec .keyCode
message.addEventListener('keydown', (e) =>{
    switch(e.keyCode){
        case 65:
            console.log("C'est un A");
            break;
        case 66:
            console.log("C'est un B");
            break;
        case 67:
            console.log("C'est un C");
            break;
        case 82:
            console.log("C'est un R")
            break;
        default:
            console.log("La touche n'a pas encore était codé")
    }
})