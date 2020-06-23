let Orc = {
    arms : 2,
    legs : 2,
    skill : "unknow",
    "class and spec" : "unknow"
}

console.log(Orc) // Ici Orc affiche {arms: 2, legs: 2, skill: "unknow", class and spec: "unkwnow"}

Orc.Horde = true // Ajout Horde : true pour l'objet Orc
delete Orc.skill // Supprime skill : "unknow" pour l'objet Orc

console.log(Orc) // Et ici Orc affiche {arms: 2, legs: 2, class and spec: "unkwnow", Horde: true}

Orc["class and spec"] = "Hunter BM"
console.log(Orc) // {arms: 2, legs: 2, class and spec: "Hunter BM", Horde: true}

delete Orc["class and spec"]
console.log(Orc) // {arms: 2, legs: 2, Horde: true}

let race = {
    Orc : {
        arms : 2,
    },
    Human : {
        arms : 2,
    },
    Undead : {
        arms : 1,
    },

}

console.log(race.Orc.arms)
console.log(race.Undead.arms)

// Copy 

let Human = {
    name : "name",
    age : "age",
}
let Race = Human
Human.test = "test";

console.log(Human); // affiche {name: "name", age: "age", test: "test"}
console.log(Race); // affiche {name: "name", age: "age", test: "test"}

let a = {};
let b = {};

console.log( a == b) // false

let c = {};
let d = c;

console.log( c == d ) // true