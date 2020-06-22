let Orc = {
    arms : 2,
    legs : 2,
    skill : "unknow",
    "class et race" : "unkwnow"
}

console.log(Orc) // Ici Orc affiche {arms: 2, legs: 2, skill: "unknow", class et race: "unkwnow"}

Orc.Horde = true // Ajout Horde : true pour l'objet Orc
delete Orc.skill // Supprime skill : "unknow" pour l'objet Orc

console.log(Orc) // Et ici Orc affiche {arms: 2, legs: 2, class et race: "unkwnow", Horde: true}