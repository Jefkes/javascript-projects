function display(val) {
    document.getElementById('result').value += val; 
    return val; 
}

function clearLastChar() {
   let str =  document.getElementById('result').value; 
   str = str.slice(0,-1); 
   document.getElementById('result').value = str; 
   return str; 
}

function clearScreen() {
    document.getElementById('result').value=""; 
}

function isNumber(value) {
    return typeof value === 'number';
}

function solve() {
    let inputField = document.getElementById('result'); 
    let x = inputField.value; 
    let y = eval(x); 
    if (isNumber(y)&&!isNaN(y)) {
        inputField.value = y; 
    }
    else {
    inputField.value = 'error'; 
    }
    
}