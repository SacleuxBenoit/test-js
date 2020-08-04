let user = {
    name: "Gérard",
    age: "22"
};

user.sayhi = function(){
    console.log("Hello " + this.name) // "Hello Gérard"
}

user.sayhi()

//

let admin = {name : "Benoît", age : 22}
let user = {name : "Gérard", age : 23}

function sayHi(){
    alert(this.name + " " + this.age + " ans")
}

admin.h = sayHi;
user.h = sayHi

admin.h()
user.h()