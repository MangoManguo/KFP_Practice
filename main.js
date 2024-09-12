// Kung Fu Panda Character Look Up

// Event Listener
document.getElementById("search").addEventListener("click", searchClicked);

// Global variables
let characterName = document.getElementById("character-name");
let mainImg = document.getElementById("main-img");
let quoteInput = document.getElementById("quote");

// Update function
function update(charName, img, quote) {
  characterName.innerHTML = charName;
  mainImg.src = img;
  quoteInput.innerHTML = quote;
}

// Event Function
function searchClicked() {
  // Get Input Value (what character to look for?)
  let name = document.getElementById("input-name").value.toLowerCase();
  // Test Input Variable and update the page
  if (name === "po" || name === "dragon warrior") {
    update("Po", "img/po.png", "Buddy, I am the Dragon Warrior.");
  } else if (name === "tigress" || name === "master tigress") {
    update("Master Tigress", "img/tigress.png", "That was pretty hardcore!");
  } else if (name === "mantis" || name === "master mantis") {
    update("Master Mantis", "img/mantis.png", "Fear the bug!");
  } else if (name === "monkey" || name === "master monkey") {
    update("Master Monkey", "img/monkey.png", "We should hang out.");
  } else if (name === "crane" || name === "master crane") {
    update(
      "Master Crane",
      "img/crane.png",
      "You can chain my body, but you will never chain my warrior spirit!"
    );
  } else if (name === "viper" || name === "master viper") {
    update("Master Viper", "img/viper.png", "I don't need to bite to fight!");
  } else if (name === "shifu" || name === "master shifu") {
    update("Master Shifu", "img/shifu.png", "There is now a Level Zero.");
  } else if (name === "ping" || name === "mr. ping") {
    update(
      "Mr. Ping",
      "img/mr-ping.png",
      "We are noodle folk, broth runs through our veins!"
    );
  } else {
    update("?????", "img/question-mark.png", "Character Not Found");
  }
}
