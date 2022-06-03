"use strict";

function multByTwo() {
    let counter = 2;
    while (counter <= 65536) {
        console.log(counter)
        counter = counter * 2;
    }
}

multByTwo();

function makeCustomerOrder() {
   return Math.floor(Math.random() * 5) + 1;
}

function sellingStuff() {
    let totalInventory = Math.floor(Math.random() * 50) + 50;
    do{
        let newCustomerOrder = makeCustomerOrder();
        console.log("Total Inventory is now " + totalInventory)
        //Minus order from inventory if we have enough
        if(totalInventory > newCustomerOrder) {
            totalInventory = totalInventory - newCustomerOrder;
            console.log("Your order was for " + newCustomerOrder + ". Inventory is now " + totalInventory)
        }
        //If we don't have enough for the order, reset the order number?
        if(totalInventory < newCustomerOrder) {
            console.log("Our inventory is " + totalInventory + " and your order is " + newCustomerOrder + ". We can't fulfill")
            newCustomerOrder = makeCustomerOrder();
        }
        //If we hit zero, we sold everything. Get out of while loop!
        if(totalInventory === newCustomerOrder) {
            console.log( "Your order is for " + newCustomerOrder + ". We have exactly " + totalInventory + " left! Congratulations and thank you!")
            totalInventory = 0
        }
    } while(totalInventory > 0)
}


