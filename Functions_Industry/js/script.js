//JavaScript

//Amy Littlefield-Bousamra
//Functions_industry:

//Packaging Design Calculations


//1. Making a standard shipping box with cardstock:
/*Pattern length (L) is equal to two times the
sum of the width (W) and length (l) plus 1/2
inch for a glue flap
L = 2 x (W + l) + 1/2

Pattern Width (W) is equal to two times the
depth (D) of the box.
W = 2 x D

Side and end flaps width (FW) is equal to
one-half of the depth (D).
FW = D/2

* On small card stock boxes, a 1/2" glue tab is sufficient.
On larger boxes, a larger glue tab may be required
//L = 2 x (W + l) + 1/2*/

//Making a Simple Folded Box
//1. Make a simple folded box that is 2" wide, 3"
//long, and 1" deep.

//2. Determine the length of the card stock you
//need to make the box. The length of the card
//stock will be twice the sum of the width and
//length of the box, plus 1/2" for the glue tab.

//L = 2 x (W + l) + 1/2
//L = 2 x ( 2 + 3) + 1/2
//L = 2 x 5 + 1/2
//L = 10 + 1/2
//L = 10 1/2

//Anonymous function

alert("Welcome to the package designer assistant!" + " " + "First we will calculate how much cardstock will be needed to make a simple shipping box." + " " + "Measurements include:" + "horizontal-side length, and horizontal-side width," + " " +  "Please note the standard 1/2 inch for glue tabs are calculated in this formula." + " " + "Click okay to continue.");

//calculate pattern length to find out how much cardstock is needed to make the box.
var w = Number(prompt("Enter the boxes horizontal-side width here." + " " + "Please enter the numerical value only."));

var l = Number(prompt("Please put in the boxes horizontal-side length"));

var patternL = function (w,l){ //defining... w,l, in the parameters are the storage bins  	
var pLength = 2 * (w + l) + 0.5;//code the function runs 2 times the width and length plus a 1/2 inch for the glue tabs on the box.
	return pLength; //what it returns
}

var a = patternL(w,l) //invoking what happens after defining functions...The folded box is two inches wide  and 3 inches long on the horizontal side of the box.
	
console.log("The length of the cardstock needed to make the box is" + " " + a + " " + "inches.");

//calculate pattern width to find out how much cardstock is needed to make the box.

var d = Number(prompt("Please put in the boxes depth." + " " + "Measure inches but enter the numerical value only."));


var patternW = function(d){ //defining... d is the depth of the box. Note: the parameters are the storage bins  	
var pWidth = 2 * d; //code the function runs on: Pattern Width (W) is equal to two times the depth (D) of the box.
 return pWidth; //what it returns

}


var b = patternW(d) //invoking what happens after defining functions...how wide is the box?

console.log("The width of the cardstock needed to make the box is" + " " + b +  " " + "inches.");

console.log("To make this shipping box one would order cardstock that is" + " " + a + " " + "inches long and" + " " + b + " " + "inches wide.");

alert("To make this shipping box one would order cardstock that is" + " " + a + " " + "inches long and" + " " + b + " " + "inches wide.");


alert("Finally lets calculate the side flaps for the box." + " " + "Click, okay to continue.")

var depth = Number(prompt("Please put in the boxes depth." + " " + "Measure inches but enter the numerical value only."));


var flapWidth = function(depth){ //defining... The depth of the box. Note: the parameters are the storage bins  	
var fWidth = depth/2; //code the function runs on:  depth/2
return fWidth; //what it returns

}


var c = flapWidth(depth) //invoking what happens after defining functions...what is the flapwidth?

console.log("The flapwidth of the cardstock needed to make the box is" + " " + c +  " " + "inches.");

alert("The flapwidth of the cardstock needed to make the box is" + " " + c +  " " + "inches.");

















