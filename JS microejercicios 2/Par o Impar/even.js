
function evenOrOdd () {
    let inputEvenNumber = ""
    const getNumber = document.getElementById("result-even");
    inputEvenNumber = parseFloat(document.querySelector(".even-odd").value);
    if (inputEvenNumber % 2 == 0) {
        getNumber.innerHTML = `${inputEvenNumber} is even`
    }
    if (inputEvenNumber % 2 != 0) {
        getNumber.innerHTML = `${inputEvenNumber} is odd`
    }
    if (isNaN(inputEvenNumber)) {
        getNumber.innerHTML = ""
    }
}
