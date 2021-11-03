// one player ---------------------------------------------------

let button = document.getElementById("btn")
let score = document.getElementById("score")
let winlose = document.getElementById("winlose")
let dice = document.getElementById("dice")

let count = 0

button.addEventListener("click", function () {

    if (button.innerHTML === "Play again" && count >= 20) {
        count = 0
        score.innerHTML = count
    }
    let randnum = Math.floor(Math.random() * 6 + 1)

    dice.src = "images/" + randnum + ".png";

    button.innerHTML = "Roll"
    winlose.innerHTML = ""

    console.log(randnum);
    count += randnum
    score.innerHTML = count
    if (count >= 20) {
        winlose.innerHTML = "You won!"
        button.innerHTML = "Play again"
    }

    if (randnum === 1 && count < 20) {
        winlose.innerHTML = "You lost!"
        score.innerHTML = count
        button.innerHTML = "Play again"
        count = 0
    }

})

// two player ----------------------------------------------------------------

const twoplayer = document.getElementById("twoplayer")
let current = document.getElementById("current")
const newgame = document.getElementById("newgame")
const rolldice = document.getElementById("rolldice")
const hold = document.getElementById("hold")
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
let current1 = document.getElementById("current1")
let current2 = document.getElementById("current2")
let dice2 = document.getElementById("dice2")

let count1 = 0
let count2 = 0
let playercount = 0
rolldice.style.display = "none"
hold.style.display = "none"

newgame.addEventListener("click", function () {
    count1 = 0
    count2 = 0
    playercount = 0
    current1.innerHTML = 0
    current2.innerHTML = 0
    player1.innerHTML = "Player 1"
    player2.innerHTML = "Player 2"
    dice.src = ""
    rolldice.style.display = "block"
    hold.style.display = "block"
    console.log(current1);
    current1.style.color = "black"
    current2.style.color = "black"
})

hold.addEventListener("click", () => {
    if (playercount === 0) {
        playercount = 1
    } else {
        playercount = 0
    }

})
if (playercount === 0) {
    rolldice.addEventListener("click", function () {
        if (playercount === 0) {
            p1()
        } else if (playercount === 1) {
            p2()
        }
    })


    function p1() {
        let randnum = Math.floor(Math.random() * 6 + 1)
        current1.style.color = "green"
        current2.style.color = "black"
        dice2.src = "images/" + randnum + ".png";

        if (newgame.innerHTML === "Play again" && count >= 20) {
            count1 = 0
            current1.innerHTML = count
        }

        rolldice.innerHTML = "Roll"

        count1 += randnum
        current1.innerHTML = count1
        if (randnum === 1 && count1 === 0) {
            playercount = 1
            player1.innerHTML = "You lost!"
            current2 = 0
            current1.style.color = "black"
            current2.style.color = "green"
        }
        if (count1 >= 20) {
            player1.innerHTML = "You won!"
            newgame.innerHTML = "Play again"
            playercount = 1
        }

        if (randnum === 1 && count1 < 20) {
            player1.innerHTML = "You lost!"
            current1.innerHTML = count1
            newgame.innerHTML = "Play again"
            count1 = 0
            playercount = 1
            current1.style.color = "black"
            current2.style.color = "green"
        }
    }

    function p2() {
        current1.style.color = "black"
        current2.style.color = "green"
        randnum = Math.floor(Math.random() * 6 + 1)
        dice2.src = "images/" + randnum + ".png";

        if (newgame.innerHTML === "Play again" && count2 >= 20) {
            count2 = 0
            current2.innerHTML = count2
        }
        
        rolldice.innerHTML = "Roll"

        count2 += randnum
        current2.innerHTML = count2
        if (count2 >= 20) {
            player2.innerHTML = "You won!"
            newgame.innerHTML = "Play again"
            rolldice.style.display = "none"
            hold.style.display = "none"
        }

        if (randnum === 1 && count2 < 20 &&
            current2 != 0) {
            player2.innerHTML = "You lost!"
            current2.innerHTML = count2
            newgame.innerHTML = "Play again"
            count2 = 0
            rolldice.style.display = "none"
            hold.style.display = "none"
        }
    }
}