//JavaScript

//Amy Littlefield-Bousamra 
// 1/13/2014
//Expressions Industry-specific

//Industry-Interior Designer/Decorator
//Calculating yardage for curtains


var measureLength = prompt("Hello, I am the Interior decorator's calculator." + " " + "I am here to help you measure curtains." + " " + "Please note:" + " " + "This calculation is for curtains without a pattern." + " " + "First let's measure the length." + " " + "Using your measuring tape, begin at the top of the curtain rod and stop where you would prefer the length to be." + " " + "Record the number of inches here." + " " + "Please enter the numerical value only.");

var addedInches = prompt("Next add in additional inches you will need for the length of the curtain." + " " + "These additional inches accounts for the header allowance and hem." + " " +  "This typically ranges anywhere from 8 to 16 inches." + " " +  "If you are not certain 11 inches is a good standard." + " " + "Please enter the numberical value only." );

var measureWidth = prompt("Next, measure the width." + " " + "Using your measuring tape begin from one end of the curtain rod to the other end." + " " + "You do not want to measure the window because curtains should extend beyond the window." + " " + "Record the number of inches here." + " " + "Please enter the numerical value only.");

var lengthInches = parseInt(measureLength);
var extraInches = parseInt(addedInches);
var widthInches = parseInt(measureWidth);

var length = lengthInches + extraInches; //traditional style add 6 inchesof fabric above and 3 inches below
var width = (widthInches + 6) * 2; //First add 6 inches (3 inches for each side of the curtain width.) Then multiply by 2 for fullness.

console.log(length);
console.log(width);

//Typically a designer would add the extra amount of inches to the fabric...however these variables could be changed to fit customer preference.

var summary = "The overall length of your fabric equals" + " " + length + " " + "inches." + " " + "To calculate the correct fullness of the curtain,  six additional inches are added to the width (3 inches to each side)." + " " +  "Next the width is multiplied by 2." + " " + "This equals" + " " + width + " " + "inches." + " " + "Next we will calulate the total yards needed to complete your order.";

alert(summary);

var finalLength = length / 36; 
console.log(finalLength);

var lengthSum = "The length is then divided by 36 to convert inches to yards." + "This will give you" + " " + finalLength + "yards.";

alert(lengthSum);

var purchase = prompt("What is the width of the fabric the customer is planning to buy?" + " " + "Typically fabric is 54 inches." + " " + "Please enter the width of the fabric you are planning to purchase or confirm that it is 54 inches in length." + " " + "Only put in the numerical value.");

var orderFabric = parseInt(purchase);

var finalWidth = width / orderFabric; //divide the width measured by the fabric in the factory you will be purchasing...Factory standard width is typically 54 inches.


console.log(finalWidth);

var finalYards = finalWidth * finalLength;

console.log(finalYards);

var yardsum = " The final yards you need to order is" + " " + finalYards + " " + "yards." + " You should always round up when ordering yards of fabric for curtains." + " " + "For example if your answer is 4.20 you should round up and order 4 1/2 yards.";

alert(yardsum);














