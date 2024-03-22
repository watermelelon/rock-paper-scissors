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

//Establishing winning conditions
if (playerSelection === "rock" && computerSelection === "scissors"){

    console.log("Player WINS. Rock wins over scissors");
    return 1;
}
else if(playerSelection === "paper" && computerSelection === "rock"){
    
    console.log("Player WINS. Paper wins over rock");
    return 1;
}
else if(playerSelection === "scissors" && computerSelection === "paper"){

    console.log("Player WINS. Scissors wins over paper");
    return 1;

}
//In case there is a TIE
else if(playerSelection === computerSelection){

    console.log("Its a TIE");
    return 2;
}
//Computer wins
else
    console.log("Computer WINS"); 
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


const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    playGame(button.id);
  });
});

 
