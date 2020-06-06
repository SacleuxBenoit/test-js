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

// utilisation de keyup avec .keyCOde

message.addEventListener('keyup', (e) =>{
    if(e.keyCode == "65"){
        console.log("A à était relaché")
    }
})