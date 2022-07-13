let divisorButton = document.querySelector(".divisors-btn")
function getDivisors() {
let divisorUserInput = document.querySelector(".divisors-input").value
let resultDivisors = []
let printResult = document.querySelector(".result-divisors-text")
    for (let divisor = 2; divisor < divisorUserInput / 2; divisor++) {
        const resultDivisors = array[divisor];
        if (num % divisor == 0) {
            resultDivisors.push(divisor);
        }
    }
    printResult.innerHTML = 
}
divisorButton.addEventListener("click", getDivisors)

let prueba = [2,3,7]
function printArray(array, htmlTag) {
    array.forEach(element => {
        htmlTag.innerHTML = `<p>${element}</p>`
    });
}