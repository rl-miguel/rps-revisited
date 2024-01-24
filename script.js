console.log("test")

function computerDecision(){
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



computerDecision()