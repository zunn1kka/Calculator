const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}
function calculate(){
    display.value = eval(display.value);
}
function remove(){
    var strings = document.getElementById("display").value;
    document.getElementById("display").value = strings.substring(0, strings.length-1);
}