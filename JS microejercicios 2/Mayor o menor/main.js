let higherNum1 = 0;
let higherNum2 = 1;
let higherNum3 = 2;

function higher() {

    higherNum1 = parseFloat(document.getElementById("higher-number-1").value);
    higherNum2 = parseFloat(document.getElementById("higher-number-2").value);
    higherNum3 = parseFloat(document.getElementById("higher-number-3").value);

    if ((!isNaN(higherNum1)) && (isNaN(higherNum2)) && (isNaN(higherNum3))) {
        document.querySelector("#result-higher").innerHTML = `${higherNum1} is just ${higherNum1}, try adding another number to compare it to`
    }
    if ((!isNaN(higherNum2)) && (isNaN(higherNum1)) && (isNaN(higherNum3))) {
        document.querySelector("#result-higher").innerHTML = `${higherNum2} is just ${higherNum2}, try adding another number to compare it to`
    }
    if ((!isNaN(higherNum3)) && (isNaN(higherNum2)) && (isNaN(higherNum1))) {
        document.querySelector("#result-higher").innerHTML = `${higherNum3} is just ${higherNum3}, try adding another number to compare it to`
    }
    
    if ((higherNum2 == higherNum3) && (isNaN(higherNum1))) {
        document.querySelector("#result-higher").innerHTML = 
        `${higherNum2} equals ${higherNum3}, try comparing a number with a different number`
    } 
    if ((higherNum2 == higherNum1) && (isNaN(higherNum3))) {
        document.querySelector("#result-higher").innerHTML = 
        `${higherNum2} equals ${higherNum1}, try comparing a number with a different number`
    } 
    if ((higherNum1 == higherNum3) && (isNaN(higherNum2))) {
        document.querySelector("#result-higher").innerHTML = 
        `${higherNum1} equals ${higherNum3}, try comparing a number with a different number`
    } 
    if ((higherNum1 == higherNum2) && (higherNum3 == higherNum1)) {
        document.querySelector("#result-higher").innerHTML = `All numbers are the same, ${higherNum1}, try changing one of them`
    }
    
    if ((higherNum1 == higherNum2) && (higherNum1 > higherNum3)){
        `${higherNum1} is higher than ${higherNum3}`
    }
    
    if (higherNum1 > higherNum2) {
        if ((higherNum2 == higherNum3) || (isNaN(higherNum3))){
            document.querySelector("#result-higher").innerHTML = `${higherNum1} is higher than ${higherNum2}`           
        }
        if ((higherNum1 > higherNum3) && (higherNum2 != higherNum3)){
            document.querySelector("#result-higher").innerHTML = 
            `${higherNum1} is higher than ${higherNum2} and ${higherNum3}`
           }
        if (higherNum1 == higherNum3) {
            document.querySelector("#result-higher").innerHTML = `${higherNum1} is higher than ${higherNum2}`
        }
    }
    if (higherNum1 > higherNum3) {
        if ((higherNum2 == higherNum3) || (isNaN(higherNum2))){
            document.querySelector("#result-higher").innerHTML = `${higherNum1} is higher than ${higherNum3}`           
        }
        if ((higherNum1 > higherNum2) && (higherNum2 != higherNum3)){
            document.querySelector("#result-higher").innerHTML = 
            `${higherNum1} is higher than ${higherNum2} and ${higherNum3}`
           }
        if (higherNum1 == higherNum2){
            document.querySelector("#result-higher").innerHTML = 
            `${higherNum1} is higher than ${higherNum3}`
        }
    }
    if (higherNum2 > higherNum1) {
        if ((higherNum1 == higherNum3) || isNaN(higherNum3)){
            document.querySelector("#result-higher").innerHTML = 
            `${higherNum2} is higher than ${higherNum1}`            
        }
        if ((higherNum2 > higherNum3) && (higherNum1 != higherNum3)){
            document.querySelector("#result-higher").innerHTML = 
            `${higherNum2} is higher than ${higherNum1} and ${higherNum3}`
           }
        if (higherNum2 == higherNum3) {
            document.querySelector("#result-higher").innerHTML = 
            `${higherNum2} is higher than ${higherNum1}`
        }
    }
    if (higherNum3 > higherNum1) {
        if ((higherNum1 == higherNum2) || (isNaN(higherNum2))) {
            document.querySelector("#result-higher").innerHTML =
            `${higherNum3} is higher than ${higherNum1}`
            debugger
        }
        if ((higherNum1 != higherNum2) && (!isNaN(higherNum2)) ){
            document.querySelector("#result-higher").innerHTML = 
            `${higherNum3} is higher than ${higherNum1} and ${higherNum2}`
        }
        if (higherNum2 == higherNum3) {
            `${higherNum2} is higher than ${higherNum1}`
        }
    }
    if (higherNum3 > higherNum2) {
        debugger
        if ((higherNum1 == higherNum2) || (isNaN(higherNum1))) {
            document.querySelector("#result-higher").innerHTML =
            `${higherNum3} is higher than ${higherNum2}`
        }
    }
}