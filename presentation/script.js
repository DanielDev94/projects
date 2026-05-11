const btn = document.querySelector(".togglebtn");
const body = document.querySelector("body");

btn.addEventListener("click", function () {
  //   if (body.style.backgroundColor === "white") {
  //     body.style.backgroundColor = "#1a1a1a";
  //     body.style.color = "#ffffff";
  //   } else {
  //     body.style.backgroundColor = "white";
  //     body.style.color = "black";
  //   }
  body.classList.toggle("dark-mode");
});
