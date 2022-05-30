var affirmButton = document.querySelector(".affirmation");
var mantraButton = document.querySelector(".mantra");
var receive = document.querySelector(".receive-message");
var messageArea = document.querySelector(".message-area");
var deleteMssg = document.querySelector(".delete-message");

var meditateImg = document.querySelector(".meditate-img");
var messages = document.querySelector(".message-display");

receive.addEventListener('click', displayMessage);
deleteMssg.addEventListener('click', deleteMessage);

function displayMessage() {
  if (affirmButton.checked === true || mantraButton.checked === true){
    meditateImg.hidden = true;
    deleteMssg.hidden = false;
    messages.hidden = false;
    if(affirmButton.checked){
      messages.innerText = affirmations[getRandomIndex(affirmations)];
    } else if (mantraButton.checked){
      messages.innerText = mantras[getRandomIndex(mantras)];
    }
  }
}

function deleteMessage(){
  meditateImg.hidden = false;
  deleteMssg.hidden = true;
  messages.hidden = true;
  alert("Message deleted.");
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
