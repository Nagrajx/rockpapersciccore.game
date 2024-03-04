let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genComChoice = () => {
    //generate computer choice
    const options = ["rock", "paper", "scissors"];
    let ranIndex = Math.floor(Math.random() * 3);
    return options[ranIndex];
}
// draw function if user and computer choice same its result is draw
const drwaGame = () => {

    console.log("its Draw");
    msg.innerText = "Game was Draw. !play again";
    msg.style.backgroundColor = "#081b31"
}
//showwinner function 
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++
        userScorePara.innerText = userScore;
        console.log("You win.");
        msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    } else {
        comScore++
        compScorePara.innerText = comScore;
        console.log("You Loss");
        msg.innerText = `You Loss! computer ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

// playgame function how the game decide result
const PlayGame = (userChoice) => {
    console.log("user choice ", userChoice);

    const compChoice = genComChoice();
    console.log("computer choice", compChoice);
    if (userChoice === compChoice) {
        drwaGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice == "paper" ? false : true;
        } else if (userChoice === "paper") {
            // scissors rock
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

// user singal choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        PlayGame(userChoice);
    });
});