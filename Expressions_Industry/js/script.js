//JavaScript

//Amy Littlefield-Bousamra 
// 1/13/2014
//Expressions Industry-specific

//Industry-Interior Designer/Decorator
//Calculating yardage for curtains


var measureLength = prompt("The Interior decorator's calculator to measuring curtains." + " " + "First let's measure the length." + " " + "Using your measuring tape, begin at the top of the curtain rod and stop where you would prefer the length to be." + " " + "Record the number of inches here");

var measureWidth = prompt("Next, measure the width." + " " + "Using your measuring tape begin from one end of the curtain rod to the other end." + " " + "You do not want to measure the window because curtains should extend beyond the window." + " " + "Record the number of inches here");

var length = measureLength + 9; //traditional style add 6 inchesof fabric above and 3 inches below
var width = measureWidth * 2.5 + 2; //For fullness multiply by 2.5 and then add 2 inches for the seam.

console.log(length);

//Typically a designer would add the extra amount of inches to the fabric...however these variables could be changed to fit customer preference.

var totalInches = "Typically a designer would add 6 inches of fabric to the top, 3 inches to the bottom of the curtain and three inches to each side of the curtain." + " " + "This would make the length of your fabric equal" + " " + length + "inches." + " " + "And the width of your fabric equal" + " " + width + "inches.";

alert(totalInches);














