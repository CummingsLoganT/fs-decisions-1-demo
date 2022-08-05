// in this file. we'll be using variables, conditionals, and loops to mdoel a soccer match between the Emerald Eagles and Draconian Dragons

// create variables to represent the two team's offensive and defensive abillity based on stats from previous games

let eaglesOff = 5;
let eaglesDef = 6;
let dragonOff = 5;
let dragonDef = 3;

// Before the game, fans decide to check their stats. Using an if-else statement, console.log whose offense is better
//What if we have a tie? Our code would actually say the Emerald Eagles have a better offense, which would be incorrect. Add an else if to resolve this.


if (eaglesOff > dragonOff){
    console.log('Eagles have better offense than the Dragons');
} else if (dragonOff > eaglesOff){
    console.log('Dragons have better offense than the Eagles');
} else {
    console.log("The two teams have the same offensive ability.");
}


// The game begins! Create two variables to represent the starting scores of the teams.
let eaglesScore = 0;
let dragonScore = 0;

// the dragons start with the ball - use an if/else to determine if the eagles' defense is enough to prevent them from scoring. if it is not enough, console.log "The Dragons have scored." and update the score. Otherwise, console.log "The game continues."
if (dragonOff > eaglesDef){
    console.log("The dragons have scored.");
    dragonScore += 1;
    //dragonScore++;
    //dragonScore = dragonScore + 1;
} else {
    console.log("The game continues.")
}

// Now the Eagles have the ball and are trying to score! Use an if/else to determine if the Dragons’ defense is enough to prevent them from scoring. If they do, console.log “The Eagles have scored.” and update the score. Otherwise, console.log “The game continues."

if (eaglesOff > dragonDef){
    console.log("The Eagles have scored.");
    eaglesScore++;
} else {
    console.log ("The game continues.");
}

// After playing a long time, the players are tired. The coach for the Eagles team decides to swap out one of the offensive players for their best offensive player. This player will raise the offense ability of the team by 5. However, the offense ability cannot canont exceed 10. Using an if else statement, increase the Eagles’ offense ability to the correct value.

if (eaglesOff <= 5) {
    eaglesOff += 5;
} else {
    eaglesOff = 10;
}
//alternate
// eaglesOff = eaglesOff + 5;
// if (eaglesOff > 10) {
//     eaglesOff = 10;
// }

// console.log(eaglesOff);

// The coach for the Dragons team is thinking about taking a timeout. She decides to flip a coin, and if the coin lands on heads, she will take a timeout. If it lands on tails, she won’t. Create a variable called coinLandsHeads and set it equal to false. Then, using an if-else statement and the equality operator, handle the value of the flipped coin (handle for both true and false).
// let coinLandsHeads = false;
// if (coinLandsHeads === true) {
//     console.log("The Dragons coach calls timeout");
// } else {
//     console.log(`Let's keep playing.`)
// }
let coinLandsHeads = false;
// if (coinLandsHeads) {
//     console.log("The Dragons coach calls timeout");
// } else {
//     console.log(`Let's keep playing.`)
// }

// Demonstrate how you can use != to accomplish the same thing.

// if (coinLandsHeads !== false ) {
//     console.log("The Dragons coach calls timeout");
// } else {
//     console.log(`Let's keep playing.`)
// }
if (!coinLandsHeads) {
    console.log(`Let's keep playing.`);
} else {
    console.log("The Dragons coach calls timeout");
}

// Let’s see how this game will play out if it continues. Create a for loop to model the Eagles scoring 5 times. Console.log the scores of the teams after each goal.
for (i = 1; i <= 5; i++) {
        // Loop 5x
    if (eaglesOff > dragonDef){
        console.log("The Eagles have scored.");
        eaglesScore++;
        console.log(`And the scores are: Eagles ${eaglesScore} Dragons ${dragonScore}`)
    } else {
        console.log ("The game continues.");
    }
}

// Demonstrate a while loop that will have the Dragons keep making goals until their score is 5. You will need to comment out the above for loops for these to run properly.

if (dragonOff > eaglesDef){
    while (dragonScore < 5) {
        dragonScore ++;
    }
}
console.log(dragonScore);

// Add an if statement that will only let the Dragons make a goal if their offense ability is greater than the Eagles' defense ability. 
