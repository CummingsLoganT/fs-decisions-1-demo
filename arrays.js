// In this file, we'll continue following the aftermath of the soccer match.

//We will pick up after the game where the players have finished celebrating and are packing up.

//Mahalia is the team captain. First, let’s create a backpack for her so she can pack her bags. Create a variable called backpack, that is equal to an empty array.

let backpack = []

//Now, let’s add some items to that backpack. Add 3 strings to the array, "soccer ball", "water bottle", and "jersey".

backpack.push("soccer ball" , "water bottle" , "jersey");
// console.log(backpack);

//Realizing that her backpack is going to be too full to add other essentials, Mahalia decides to take the soccer ball out and just carry it on her lap on the way home. Remove the soccer ball from the backpack.

backpack.shift();
// console.log(backpack);
// Mandy suggested: backpack.splice(backpack.indexOf("soccer ball"),1)
    //this could be used if we don't know the index of the soccer ball
        // for (let i = 0; i < back.length; i++) {
        //     if (backpack[i] === "soccer ball") {
        //         backpack.splice(i,1);
        //     }
        // }

//Now Mahalia decides to add some snacks to her backpack. Create a variable called snacks and give it a string value of “string cheese”. Then add that variable to the backpack.

let snacks = "string cheese";
backpack.push(snacks);
// console.log(backpack);

// Getting hungry, Mahalia decides to eat her snack. Without using splice, remove snacks from the array.

backpack.pop();
// console.log(backpack);

//Let’s check how much stuff we have in our backpack. Create a variable called itemCount and set it equal to the number of items in the backpack.

let itemCount = backpack.length;

//Let’s add some other essentials. Add the strings: shoes, socks, sunscreen.

backpack.splice(backpack.length , 0 , "shoes" , "socks" , "sunscreen");
// console.log(backpack);
// console.log(itemCount);

let backpack2 = backpack.splice(2 , 3);
// console.log(backpack);
// console.log(backpack2);

//Using bracket syntax, console.log the first item in backpack2

// console.log(backpack2[0]);
console.log("----------");

//This, of course, is not a effective way to look at each item. We could console.log the entire array, but how do we handle looking at each item in the array, one at a time? This is where loops come in!

for (i = 0; i < backpack2.length; i++) {
    console.log(`secondary: ${backpack2[i]}`);
}
for (i = 0; i < backpack.length; i++) {
    console.log(`main: ${backpack[i]}`);
}

        // let longest;
        // if (backpack.length > backpack2.length) {
        //     longest = backpack.length;
        // } else {
        //     longest = backpack2.length;
        // }

        // for (let i = 0; i < longest; i++) {
        //     console.log(backpack[i]);
        //     console.log(backpack2[i]);
        // }

        // for (let i = 0; i <backpack.length || i < backpack2.length; i++) {
        //     console.log(backpack[i]);
        //     console.log(backpack2[i]);

// }
console.log("----------");

// how could you rewrite this to only show you the first 3 items of a given backpack?

for (let i = 0; i < 2; i++) {
    console.log(backpack[i]);
}

for (let i = 0; i < 3; i++) {
    console.log(backpack2[i]);
}
console.log("----------");

// What if you ran the above for-loop, but did not have 3 items in the array? We could add a level of safety to it, by wrapping it in an if-else statement.

// for (let i = 0; i < 3; i++) {
// //     if (backpack[i] !== undefined) {
//     if (i < backpack.length) {
//         console.log(backpack[i]);
//     }
// //         console.log(backpack[i]);
// //     }
// }
console.log("----------");

// what are the exact steps by guessMe loop from earlier

let guessMe = 54;

while (guessMe < 100) {
  console.log("----------");

  if (guessMe % 4 == 0 || guessMe % 5 == 0) {
    console.log("guessMe is divisible by 4 or 5.  Added 25.");
    guessMe += 25;
  } else if (guessMe % 3 == 0) {
    console.log("guessMe is divisible by 3.  Subtracted 27.");
    guessMe -= 27;
  } else {
    console.log("Added 3.");
    guessMe += 3;
  }

  guessMe += 22;
  console.log(`guessMe is now ${guessMe}.`);
}



