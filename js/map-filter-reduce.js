const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Return users with 3 or more languages

let usersWithThreeOrMoreLanguages = users.filter(user => {
    if(user.languages.length >= 3) {
        return user;
    }
},[])

//return all user emails

let usersEmail = users.map(user => {
    return `${user.name}'s email is ${user.email}`;
})

//return total years of experience from all users

let usersTotalExperience = users.reduce((total, user) =>{
    return total + user.yearsOfExperience;
},0)

// average user experience

let usersAverageExperience = usersTotalExperience / users.length;

//return longest email out of all users
//SKIP FOR NOW, ASK CODY OR KEN FOR HELP WITH LOGIC

let longestEmail = users.reduce((longest, current) =>{
    // current.email.length returns the longest number, need to return the actual string value
    //set a variable to catch the longest email?
    //console.log(`Trying to get all user emails.. ${current.email.length}`);
    //console.log(current.email)

    // I need to find a way to compare the current value to the immediately proceeding 'current' to only keep the larger
    // i.e. ryan = 15 to start, luis is also 15, skip. zach is also 15, skip. fernando is 19, replace ryan with fernando
    // if (whatever is accumulated's length is > the current's length) Replace whatever is accumulated with the current
        if(current.email.length > longest.length) {
            console.log(current.email)
            return current.email
        }
        return longest
    }, '')

//return a string of ALL the users name

let usernameString = users.reduce((accum, current) =>{
    //console.log(`The username string is currently... ${current.name}`);
    //This returns white space at the end, ask about a cleaner solution
    current = `User:${current.name} `
    return accum + current
}, [])