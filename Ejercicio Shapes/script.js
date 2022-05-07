function dissapear(event) {
    // document.querySelector(".shape").style.opacity="0";
    event.target.style.opacity=0;
}

    // aprender a hacer un for in, for off para no escribir tantas clases
document.querySelector(".triangle").addEventListener("click", dissapear);
document.querySelector(".square").addEventListener("click", dissapear);
document.querySelector(".circle").addEventListener("click", dissapear);

function reset() {
    document.querySelector(".triangle").style.opacity=1;
    document.querySelector(".square").style.opacity=1;
    document.querySelector(".circle").style.opacity=1;
}
document.querySelector(".reset").addEventListener("click", reset);
