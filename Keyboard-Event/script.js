let message = document.getElementById('TextArea')

message.addEventListener('keydown', (e) => {
    if(e.key == "z"){
        console.log("Z à était press")
    }
})

message.addEventListener('keyup', (e) => {
    if(e.key == "z"){
        console.log("Z à était relaché")
    }
})