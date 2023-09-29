let countDownDate = new Date("Dec 18, 2023 15:37:25").getTime();

let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let secs = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + mins + "m " + secs + "s";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Expired";
  }
}, 1000);
