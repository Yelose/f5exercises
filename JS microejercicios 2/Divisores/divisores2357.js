const divisible2357Button = document.querySelector(".divisible-2357-btn");
let divisible2357Text = document.querySelector("#result-divisible-2357");

divisible2357Button.addEventListener("click", () =>{
    let divisible2357Input = (document.querySelector(".divisible-2357-input").value);
    let numberToCheck = parseFloat(divisible2357Input);
   let resultPrime = primeSearch2357(numberToCheck);
   let resultPrimeString = resultPrime.join(", ").replace(/,\s(\d*)$/, ' and $1');
   divisible2357Text.innerHTML = `Your number is divisible by ${resultPrimeString}.`;
});
function primeSearch2357 (inputNumber) {
    let primosTotal = []

    if (inputNumber % 2 == 0){
        primosTotal.push(2)
    }
    if (inputNumber % 3 == 0){
        primosTotal.push(3)
    }
    if (inputNumber % 5 == 0){
        primosTotal.push(5)
    }
    if (inputNumber % 7 == 0){
        primosTotal.push(7)
    }
    
    return primosTotal
}

