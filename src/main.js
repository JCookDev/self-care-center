var affirmButton = document.querySelector(".affirmation");
var mantraButton = document.querySelector(".mantra");
var receive = document.querySelector(".receive-message");
var messageArea = document.querySelector(".message-area");

var meditateImg = document.querySelector(".meditate-img");
var messages = document.querySelector(".message-display");

receive.addEventListener('click', displayMessage);

function displayMessage() {
  if (affirmButton.checked === true || mantraButton.checked === true){
    meditateImg.hidden = true;
    messages.hidden = false;
    if(affirmButton.checked){
      messages.innerText = affirmations[getRandomIndex(affirmations)];
    } else if (mantraButton.checked){
      messages.innerText = mantras[getRandomIndex(mantras)];
    }
  }
}


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
