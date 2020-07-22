function getMiles(){
   let KmToMiles = document.getElementById("KmToMiles").value
   let resultMiles = document.getElementById("resultMiles")
    KmToMiles > 0 ? resultMiles.textContent =  KmToMiles * 1.60934 + " Miles" : resultMiles.textContent = " "
}

function getKm(resultKm){
    let MilesToKm = document.getElementById("MilesToKm").value
     resultKm = document.getElementById("resultKm")
    MilesToKm > 0 ? resultKm.textContent = MilesToKm / 1.60934 + " Km" : resultKm.textContent = " " 
}