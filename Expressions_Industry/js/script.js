//JavaScript

//Amy Littlefield-Bousamra 
// 1/13/2014
//Expressions Industry-specific

//Industry-Interior Designer/Decorator
//Calculating yardage for curtains


var measureLength = prompt("The Interior decorator's calculator to measuring curtains." + " " + "First let's measure the length." + " " + "Using your measuring tape, begin at the top of the curtain rod and stop where you would prefer the length to be." + " " + "Record the number of inches here");

var measureWidth = prompt("Next, measure the width." + " " + "Using your measuring tape begin from one end of the curtain rod to the other end." + " " + "You do not want to measure the window because curtains should extend beyond the window." + " " + "Record the number of inches here");

var lengthInches = parseInt(measureLength);
var widthInches = parseInt(measureWidth);

var length = lengthInches + 9; //traditional style add 6 inchesof fabric above and 3 inches below
var width = (widthInches * 2.5) + 2; //For fullness multiply by 2.5 and then add 2 inches for the seam.

console.log(length);
console.log(width);

//Typically a designer would add the extra amount of inches to the fabric...however these variables could be changed to fit customer preference.

var summary = "Typically a designer would add a total of nine inches:" + " " +  "6 inches of fabric to the top and 3 inches to the bottom of the curtain." + " " + "This would make the length of your fabric equal" + " " + length + " " + "inches." + " " + "To calculate the correct fullness of the curtain, the width is multiplied by 2.5 and then two more inches is added for the seam." + " " + "This equals" + " " + width + "inches.";
alert(summary);















