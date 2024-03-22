console.log("WELCOME TO ROCK PAPER SCISSORS")


function getComputerChoice(){
    
    let result = 0;
    result = Math.floor(Math.random() * 3);

    if (result === 0){
        return "rock";
    }

    else if(result === 1){
        return "paper";

    }
    
    else {
        return "scissors";
    }
}



function playRound(playerSelection, computerSelection){

playerSelection = playerSelection.toLowerCase();
const results = document.querySelector("#results");
const outcome = document.createElement("h2");
outcome.classList.add("outcome");
results.appendChild(outcome);

//Establishing winning conditions
if (playerSelection === "rock" && computerSelection === "scissors"){
    
    
    outcome.innerText = "Player WINS. Rock wins over scissors";
    return 1;
}
else if(playerSelection === "paper" && computerSelection === "rock"){
    
    outcome.innerText = "Player WINS. Paper wins over rock";
    return 1;
}
else if(playerSelection === "scissors" && computerSelection === "paper"){

    outcome.innerText = "Player WINS. Scissors wins over paper";
    return 1;

}
//In case there is a TIE
else if(playerSelection === computerSelection){
 

    outcome.innerText = "Its a TIE";
    return 2;
}
//Computer wins
else
    outcome.innerText = "Computer wins";
    return 3;
}




function playGame(ui_selection){



let comp_count = 0, player_count = 0, tie_count = 0;


        const playerSelection = ui_selection;
        const computerSelection = getComputerChoice();
        
        let result = 0;
        result = playRound(playerSelection, computerSelection);

        if(result === 1){
            player_count++;
        }
        else if(result === 3){
            comp_count++;
        }
        else{
            tie_count++;
        }

        console.log("Player Wins:   " + player_count);
        console.log("Computer Wins: " + comp_count);
        console.log("Ties:          " + tie_count);

    

}

//DOM CHANGES

//Displaying the title 
const container = document.querySelector("#container");

const Title = document.createElement("h1");
Title.classList.add("Title");
Title.textContent = "Welcome to ROCK PAPER SCISSORS";

container.appendChild(Title);

//Displaying the buttons, making sure they return something 

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playGame(button.id);
  });
});





 
