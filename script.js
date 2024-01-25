console.log("test")

function getComputerChoice(){
    let initialValue=Math.random()*100;
    console.log(`Computer has rolled ${initialValue}`);

    if(initialValue <= 33.3){
        initialValue="Rock";

    } else if (initialValue <= 66.6){
            initialValue="Paper";
    } else {
            initialValue="Scissors";
    }
        console.log(initialValue);
    }

getComputerChoice()

function playerDecision(hand, cancel){
    let playerInput= prompt("Which hand are you playing?");

   let convertedPlayerInput= playerInput.toLowerCase();

   console.log(convertedPlayerInput);
}

playerDecision();