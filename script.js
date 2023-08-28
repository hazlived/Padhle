
function updateCountdown() {
  const countdownDate = new Date("January 7, 2024 23:59:59").getTime();
  const currentDate = new Date().getTime();

  const difference = countdownDate - currentDate;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
  document.getElementById("days").style.fontSize = "50px";
  document.getElementById("hours").style.fontSize = "50px";
  document.getElementById("minutes").style.fontSize = "50px";
  document.getElementById("seconds").style.fontSize = "50px";

}

setInterval(updateCountdown, 1000);


document.getElementById("mood").addEventListener("click", function() {
  document.getElementById("motiv").style.display = "block";
  document.getElementById("mood").style.display = "none";

});
