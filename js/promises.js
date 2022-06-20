'use strict';

//DONE: Create Promise that takes a github username, and returns JUST the date of their last commit. Find a secure way to store access token. NOTE: ADDED REPO NAME AS WELL.

function getLastCommit(username){
    fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization' : `token ${gitToken}`}})
        .then(response => response.json())
        .then(data => console.log(`Last commit was created at ${data[0].created_at} in repository ${data[0].repo.name}`))
        .catch(error => console.error(error))
}


//DONE:Create a function named 'wait' that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

function wait(ms){
    return new Promise((resolve,reject) =>{
        if (typeof ms !== "number") {
            reject("Parameter was not a number")
        }
        if (typeof ms === "number" && isNaN(ms) === false) {
            setTimeout(() => console.log(`It took this message ${ms} milliseconds to create.`), ms)
        }
    })
}

