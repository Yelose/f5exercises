const aesCheckButton = document.querySelector(".a-text-btn");
let resultAesText = document.querySelector("#result-aes");

aesCheckButton.addEventListener("click", () => {
    let result = countAes();
    resultAesText.innerHTML = `You have ${result} "a"s.`
}) ;

function countAes() {
    const aes = "a";
    let aesFinderImput = document.querySelector(".how-many-a-input").value;
    let count = 0;
    for (let i = 0; i < aesFinderImput.length; i++) {
        if(aesFinderImput.charAt(i) == aes){
            count ++;
        }
    }
    return count;
}


// recuperar la frase del usuario cuando hace click
// recorrer la frase
// si es a sumar 1
// imprimir la cantidad de aes