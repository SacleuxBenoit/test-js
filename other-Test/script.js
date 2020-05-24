// Sans arguments

function conversion(){
    let message= prompt("Entrez la valeur en miles");
    let resultat = message * 1.60934;
    alert(message + " miles est égal à " + resultat + " Km")
}

conversion()

// Avec argument

function convertisseur(change){
    let miles = prompt("Entrez votre valeur en miles");
    let result = miles * change;
    alert(miles + " miles est égal à " + result + " Km")
}

convertisseur(1.60934)

// Avec plusieurs arguments 

function convertisseur(miles, change){
    let result = miles * change;
    alert(miles + " miles est égal à " + result + " Km")
}

convertisseur(2,.60934)