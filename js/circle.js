(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            circle.area = Math.PI * Math.pow(this.radius, 2);
            return circle.area;
        },
        logInfo: function (doRounding) {
            // TODO: complete this method.
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            //Set variables to catch area?
            let rawNumber = circle.getArea();
            let roundedNumber = Math.round(rawNumber);
            if(doRounding === true){
                console.log("Area of a circle with radius: " + this.radius + ", is: " + roundedNumber);
            } else {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + rawNumber);
            }
        }
    };

    //calling get area to test, it works!
    //circle.getArea();


    // log info about the circle
    console.log();
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();