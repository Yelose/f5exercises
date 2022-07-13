const coinBtn = document.getElementById("flip-btn")
coinBtn.addEventListener("click", throwACoin);

function throwACoin() {
    const coin = document.getElementById("coin")
    let headsTails = Math.floor(Math.random() * 2);
    coin.style.animation = "none"
    if (headsTails == 0) {
        console.log("you rolled Heads");
        setTimeout(() => {
            coin.style.animation = "flip-heads 3s forwards";
        }, 100);
    }
    if (headsTails == 1) {
        console.log("you rolled Tails")
        setTimeout(() => {
            coin.style.animation = "flip-tails 3s forwards";
        }, 100);
    }
}