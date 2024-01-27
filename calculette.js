reponse = prompt("Etes vous prêt?  y | n");

if (reponse=="y") {}

//fonctions d'opérations

function appendNumber(number){
    document.getElementById("output").value += number;
}
function appendOperator(operator){
    document.getElementById("output").value += operator;
}
function clearOutput(){
    document.getElementById("output").value = '0';
}
function backOutput(){
    document.getElementById("output").value = '';
}
function calculate(){
    let expression = document.getElementById("output").value;
    let result = eval(expression);
    document.getElementById("output").value = result;
}


