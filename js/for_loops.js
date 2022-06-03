"use strict";

function showMultiplicationTable(userNumber) {
    for(let i=1; i < 11; i++) {
        console.log(userNumber * i)
    }
    return console.log("Table Complete");
}

showMultiplicationTable(7);

function randomNum() {
    return Math.floor(Math.random() * 180) + 20;
}

function  oddOrEven(num) {
    if(num%2 === 0) {
        return console.log(num + ' is even.');
    } else {
        return console.log(num + ' is odd.');
    }
    return console.log('Odd or Even complete!')
}

function tenRandomNumOddOrEven() {
    for(var i=0; i < 10; i++) {
        oddOrEven(randomNum());
    }
    return console.log("All ten numbers generated, process complete!")
}

tenRandomNumOddOrEven();

function numberTriangle() {
    //first loop is to make the number 1,2,3, etc
    for(var i=1; i < 10; i++) {
        //second loop follows along and prints the number as many times as where (i) is number 1, 22, 333, etc.
        //for example https://wikimass.com/js/number-pattern-9
        //the j break condition has to be <= because if it's just < it lags behind by 1, i.e. 1,2,33,444
        for(var j=1; j <= i; j++) {
            console.log(i);
        }
    }
    return console.log("Number Triangle complete");
}

numberTriangle();

function countdownFrom100(){
    for(var i = 100; i > 0;) {
        console.log(i);
        i = i - 5;
    }
}

countdownFrom100();


