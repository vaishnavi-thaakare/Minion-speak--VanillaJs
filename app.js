var inputText = document.querySelector("#input");
var outputText = document.querySelector("#output");
var button = document.querySelector("#btn");



var serverURL = "https://api.funtranslations.com/translate/minion.json"

function constructURL(text) {
    return serverURL + "?" + "text=" + text
}



function clickHandler() {

    var textInput = inputText.value

    fetch(constructURL(textInput))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText
        })






}

button.addEventListener("click", clickHandler)