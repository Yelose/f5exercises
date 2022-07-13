const vowelsCheckButton = document.querySelector(".vowels-text-btn");
let resultVowelsText = document.querySelector("#result-vowels");

vowelsCheckButton.addEventListener("click", () => {
    let resultA = countAes();
    let resultE = countEes();
    let resultI = countIes();
    let resultO = countOes();
    let resultU = countUes();
    resultVowelsText.innerHTML = `
    <p>a: ${resultA}</p>
    <p>e: ${resultE}</p>
    <p>i: ${resultI}</p>
    <p>o: ${resultO}</p>
    <p>u: ${resultU}</p> `
}) ;

function countAes() {
    const aes = "a";
    let vowelsFinderInput = document.querySelector(".how-many-vowels-input").value;
    let count = 0;
    for (let i = 0; i < vowelsFinderInput.length; i++) {
        if(vowelsFinderInput.charAt(i) == aes){
            count ++;
        }
    }
    return count;
}
function countEes() {
    const ees = "e";
    let vowelsFinderInput = document.querySelector(".how-many-vowels-input").value;
    let count = 0;
    for (let i = 0; i < vowelsFinderInput.length; i++) {
        if(vowelsFinderInput.charAt(i) == ees){
            count ++;
        }
    }
    return count;
}
function countIes() {
    const ies = "i";
    let vowelsFinderInput = document.querySelector(".how-many-vowels-input").value;
    let count = 0;
    for (let k = 0; k < vowelsFinderInput.length; k++) {
        if(vowelsFinderInput.charAt(k) == ies){
            count ++;
        }
    }
    return count;
}
function countOes() {
    const oes = "o";
    let vowelsFinderInput = document.querySelector(".how-many-vowels-input").value;
    let count = 0;
    for (let i = 0; i < vowelsFinderInput.length; i++) {
        if(vowelsFinderInput.charAt(i) == oes){
            count ++;
        }
    }
    return count;
}
function countUes() {
    const ues = "u";
    let vowelsFinderInput = document.querySelector(".how-many-vowels-input").value;
    let count = 0;
    for (let i = 0; i < vowelsFinderInput.length; i++) {
        if(vowelsFinderInput.charAt(i) == ues){
            count ++;
        }
    }
    return count;
}
