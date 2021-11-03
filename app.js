var inputText=document.querySelector("#input");
var outputText=document.querySelector("#output");
var button=document.querySelector("#btn");
var textOutput=inputText.value

 
function clickHandler(){
    console.log(" The button was clicked .");
    console.log(inputText.value);
    outputText.innerText=inputText.value
    

}

button.addEventListener("click",clickHandler)