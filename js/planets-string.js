(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|')
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?*/
    //This would be useful to make new elements in html
    var planetBreak = planetsArray.join('<br>')
    console.log(planetBreak);

     /** BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
     // grab the div we can attach all this stuff to.
     var divToAppend = document.querySelector('#appendPlanet');

     //create ul
    var newList = document.createElement('ul');

    for(var i=0; i < planetsArray.length; i ++) {
        //for each index, create the li tag to put into the ul
        var listItem = document.createElement('li');
        //put the contents of the array index into the li
        listItem.appendChild(document.createTextNode(planetsArray[i]));
        //add the li to the ul
        newList.appendChild(listItem);
    }
    //add to html
    divToAppend.appendChild(newList);
    console.log(newList);
})();