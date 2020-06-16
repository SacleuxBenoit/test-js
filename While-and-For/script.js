let i = 10
let Country = "USA"
// While

while(i > 0){
    alert(i--)
} // Fait un décompte et affiche 10,9,8,7,6,5,4,3,2,1

while(i > 0) alert(i--)

// do while

do{
    alert(i--)
}while(i > 0)

// Comparaison entre while ... et do wile
do{
    alert("Bienvenue en Amérique")
}while(Country === "France") // Affiche quand même "Bienvenue en Amérique" car la boucle est exécuté 1 fois avant d'évaluer while

while(Country === "USA"){
    alert("Bienvenue en Amérique") // N'affiche pas "Bienvenue en Amérique "
}