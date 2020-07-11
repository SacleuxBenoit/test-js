let textCountdown = document.getElementById("textCountdown")
let futureDate = new Date("Apr 11, 2021 14:33:00").getTime();

let x = setInterval(() => {

  let now = new Date().getTime();
  let timer = futureDate - now;
  let Jours = Math.floor(timer / (1000 * 60 * 60 * 24));
  let Heures = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let Minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
  let Secondes = Math.floor((timer % (1000 * 60)) / 1000);

  textCountdown.textContent = Jours + " Jours " + Heures + " Heures "
  + Minutes + " Minutes " + Secondes + " Secondes ";

  if (timer < 0) {
    clearInterval(x);
    textCountdown.textContent = "Le décompte est fini";
  }
}, 1000);