function getMiles(){
   let KmToMiles= document.getElementById("KmToMiles").value
   let resultMiles= document.getElementById("resultMiles")
    KmToMiles > 0 ? resultMiles.textContent =  KmToMiles * 1.60934 + " Miles" : resultMiles.textContent = " "
}

