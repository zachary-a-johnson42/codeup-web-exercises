"use strict";


function oddNumberSkip(oddNumberPrompt) {
    var oddNumberPrompt = parseInt(prompt("Please put in an odd number from 1 - 50."));
    console.log('Number to skip is ' +oddNumberPrompt);
    for(var i =0; i <= 50; i++) {
        if(i % 2 === 0) {
            continue;
        }
        if(i === oddNumberPrompt) {
            console.log("Is this your number? Time to skip");
            continue;
        }
        console.log('The next odd number is ' + i);
    }
}

oddNumberSkip();