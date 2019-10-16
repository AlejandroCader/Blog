var pesta = document.querySelectorAll(".blog a");
var week = document.querySelectorAll(".day");
var show = week[0];

window.onload = function() {
  console.log(show);
  for (let i = 0; i <= 4; i++) {
    pesta[i].addEventListener("click", () => {
      show.classList.add("hidden");
      show = week[i];
      show.classList.remove("hidden");
      console.log(show);
    });
  }
};
