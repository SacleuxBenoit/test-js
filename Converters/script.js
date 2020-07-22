function getMiles(){
   let KmToMiles = document.getElementById("KmToMiles").value
   let resultMiles = document.getElementById("resultMiles")
    KmToMiles > 0 ? resultMiles.textContent = KmToMiles  +" Km équivaut à " + KmToMiles * 1.60934 + " Miles" : resultMiles.textContent = " "
}

function getKm(){
    let MilesToKm = document.getElementById("MilesToKm").value
     resultKm = document.getElementById("resultKm")
    MilesToKm > 0 ? resultKm.textContent = MilesToKm + " Miles équivaut à " + MilesToKm / 1.60934 + " Km" : resultKm.textContent = " " 
}

function getCelsius(){
    let FtoC = document.getElementById("FtoC").value
    resultCelsius = document.getElementById("resultCelsius")
    resultCelsius.textContent = FtoC + " degrés Fahrenheit équivaut à " + (FtoC - 32) / 1.8 + " degrés Celsuis"
}

function getFahrenheit(){
    let CtoF = document.getElementById("CtoF").value
    resultFahrenheit = document.getElementById("resultFahrenheit")
    resultFahrenheit.textContent = CtoF + " degrés Celsius équivaut à " + (CtoF * 1.8 + 32)  + " degrés Fahrenheit"
}