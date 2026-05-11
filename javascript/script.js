let headingElement = document.getElementById("main-heading");
headingElement.textContent = "JavaScript has taken over this page!";

let favCharacters = [
  "Gilgamesh",
  "Cid Kagenou",
  "Rimuru Tempest",
  "Anos Voldigoad",
];

let nextElement = document.getElementById("anime-display");

let clickCount = 0;

let myButton = document.getElementById("summon-btn");
myButton.addEventListener("click", function () {
  nextElement.textContent = `${favCharacters[clickCount]}`;
  clickCount++;
  if (clickCount >= favCharacters.length) {
    clickCount = 0;
  }
  console.log("The button was clicked!");
});

let characterInput = document.getElementById("character-input");

let addButton = document.getElementById("add-btn");
addButton.addEventListener("click", function () {
  let typedText = characterInput.value;
  favCharacters.push(typedText);
  characterInput.value = "";
  console.log(`${typedText} was added to the list!`);
});
