"use strict";

console.log("Hello from external JavaScript!");

alert("Welcome to my website!");

var favoriteColor = prompt("What's your favorite color?")

alert('Great, ' + favoriteColor + ' is my favorite too!');

//DONE:You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

var littleMermaid = parseInt(prompt("How many days have you rented \"The Little Mermaid?\""));
var brotherBear = parseInt(prompt("How many days have you rented \"Brother Bear?\""));
var hercules = parseInt(prompt("How many days have you rented \"Hercules?\""));
var totalDaysRented = littleMermaid+brotherBear+hercules
var pricePerDay = 3
alert('You owe $'+ (totalDaysRented * pricePerDay));

// TODO: Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var googlePay = parseInt(prompt("How much are you paid per hour at Google?"));
var googleHours = parseInt(prompt("How many hours have you worked at Google this week?"));
var googleTotal = googlePay * googleHours;

var amazonPay = parseInt(prompt("How much are you paid per hour at Amazon?"))
var amazonHours = parseInt(prompt("How many hours have you worked at Amazon this week?"));
var amazonTotal = amazonPay * amazonHours;

var facebookPay = parseInt(prompt("How much are you paid per hour at Facebook?"));
var facebookHours = parseInt(prompt("How many hours have you worked at Facebook this week?"));
var facebookTotal = facebookPay * facebookHours;
alert('Your total pay this week is $' + (googleTotal+amazonTotal+facebookTotal));


// TODO: A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
var schedule= prompt("Does this class conflict with your schedule? Please answer Yes or No.");
if(schedule.toLowerCase() === "no" || schedule.toLowerCase() === "n") {
    schedule = true
} else if (schedule.toLowerCase() === "yes" || schedule.toLowerCase() === "y") {
    schedule = false
    alert("Due to conflict in schedule, you may not enroll in this class.");
}
else(alert("Entry invalid. Please answer Yes or No."));

var classSizeCheck = prompt("Is the class at capacity? Please answer Yes or No.");
if(classSizeCheck.toLowerCase() === "yes" || classSizeCheck.toLowerCase() === "y") {
    classSizeCheck = false
    alert("Due to class being at capacity, you may not enroll at this time.")
} else if(classSizeCheck.toLowerCase() === "no" || classSizeCheck === "n") {
    classSizeCheck = true
} else (alert("Invalid entry. Please try again."));

if(schedule === true && classSizeCheck === true) {
    alert("Congratulations! Welcome to the class");
}

//TODO: A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

var premiumMember = prompt("Are you a Premium Member? Please answer Yes or No.")
if(premiumMember.toLowerCase() === "yes" || premiumMember.toLowerCase() === "y") {
    premiumMember = true
} else(premiumMember = false)

var numberOfItems = parseInt(prompt("How many items are you purchasing today?"));

var validOffer = prompt("Is the offer date still valid? Please answer Yes or No")
if(validOffer.toLowerCase() === "yes" || validOffer.toLowerCase() === "y") {
    validOffer = true
} else(validOffer = false)

if(validOffer !== true) {
    alert("Offer is no longer valid.")
}

if(premiumMember === true && validOffer === true) {
    alert("Thank you for your Premium Membership. Please enjoy this offer.")
}

if(premiumMember !== true && numberOfItems >=2 && validOffer === true) {
    alert("Thank you for your purchase, enjoy this offer.")
}