(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ["Dumbledore", "Harry", "Snape", "Ron"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for(let i=0; i < names.length; i++) {
        console.log("The name at the " + i + "index is " + names[i]);
    }

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log("The names array at index 0 is " + names[0])
    console.log("The names array at index 1 is " + names[1])
    console.log("The names array at index 2 is " + names[2])
    console.log("The names array at index 3 is " + names[3])

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(name){
        console.log("This name is " + name);
    })
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(array) {
        return console.log("Using the first function, the first item is " + array[0]);
    }

    first(names);

    function second(array) {
        return console.log("Using the second function, the second item is " +array[1]);
    }

    second(names);

    function last(array) {
        let lastIndex = array.length - 1;
        console.log("Last index is " + lastIndex)
        return console.log("Using the last function, the last item is " + array[lastIndex]);
    }
    last(names);
})();