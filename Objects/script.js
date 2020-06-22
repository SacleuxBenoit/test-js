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