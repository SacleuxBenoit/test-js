function getMiles(){
   let KmToMiles = document.getElementById("KmToMiles").value
   let resultMiles = document.getElementById("resultMiles")
    KmToMiles > 0 ? resultMiles.textContent =  KmToMiles * 1.60934 + " Miles" : resultMiles.textContent = " "
}

function getKm(){
    let MilesToKm = document.getElementById("MilesToKm").value
     resultKm = document.getElementById("resultKm")
    MilesToKm > 0 ? resultKm.textContent = MilesToKm / 1.60934 + " Km" : resultKm.textContent = " " 
}

function getCelsius(){
    let FtoC = document.getElementById("FtoC").value
    resultCelsius = document.getElementById("resultCelsius")
    resultCelsius.textContent = (FtoC - 32) / 1.8 + " degré Celsuis"
}

function getFahrenheit(){
    let CtoF = document.getElementById("CtoF").value
    resultFahrenheit = document.getElementById("resultFahrenheit")
    resultFahrenheit.textContent = CtoF * 1.8 + 32
}