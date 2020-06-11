/*setInterval(() =>{
    alert("This is a test with 3000 ms")
}, 3000)*/

// ClearInterval

const content;

function sayHello(){
    content = setTimeout(function(){alert("Hi")}, 4000);
}

function dontSayHello(){
    clearTimeout(content)
}
