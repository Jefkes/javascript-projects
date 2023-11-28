let clear = 0; 

function display(val) {
    
    if (clear == 0)
    document.getElementById('result').value += val; 

    else {
    document.getElementById('result').value = val; 
    }

    clear = 0; 
    return val; 
}

function clearLastChar() {
   let str =  document.getElementById('result').value; 
   str = str.slice(0,-1); 
   document.getElementById('result').value = str; 
   clear = 0; 
   return str; 
}

function clearScreen() {
    document.getElementById('result').value=""; 
    clear = 0; 
}

function isNumber(value) {
    return typeof value === 'number';
}

function solve() {
    let x = document.getElementById('result');

    try {
        let result = eval(x.value);

        if (typeof result === 'number' && !isNaN(result)) {
            x.value = result;
        } 
        
        else {
            x.value = 'error';
        }
    } catch (error) {
        // Handle the error (e.g., syntax error in the expression)
        x.value = 'invalid expression';
    }
    clear = 1; 
}