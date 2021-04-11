// var x = prompt("Hello !!");
// alert(x);

const translatorEl = document.querySelector("#btn-translator");
const txtInputEl = document.querySelector("#txt-input");
const txtOutputEl = document.querySelector("#txt-output");
const minionTranslatorURL =
  "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
  return minionTranslatorURL + "?" + "text=" + input;
}
function errorHandler(error) {
  console.log("error occured :", error);
  alert("Something is wrong with the server. Try again later.");
}

function clickListener() {
  const inputText = txtInputEl.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      txtOutputEl.value = json.contents.translated;
    });
}

translatorEl.addEventListener("click", clickListener);
