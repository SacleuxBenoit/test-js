
// new Date

alert(new Date())

let Today = new Date();

alert(Today)

// Changement de la date avec un string en paramètre

let May = new Date("2020-04-11");

alert(May)

// changement de la date avec plusieurs paramètres dans l'ordre : Année, mois, date, heures, minutes, secondes, ms

let Moment = new Date(2020, 04, 12, 21, 00, 00, 00);

alert(Moment)

// Obtenir directement l'année, le mois / la date du jour

let date = new Date()

alert(date.getFullYear())

alert(date.getMonth())

alert(date.getDate())