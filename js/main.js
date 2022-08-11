var elModalOpenButton = document.querySelector(".nav");
var elModalOpenlink = document.querySelector(".navbar");


elModalOpenButton.addEventListener("click", function () {
  elModalOpenlink.classList.remove("nav--active");
});
