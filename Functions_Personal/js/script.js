//JavaScript

//Amy Littlefield-Bousamra
//Personal_Functions:


//Analyzing this room according to the 60-30-10...Rule


//Rule of third in home design...
//Applying the golden ratio to interior design



alert("This program examines how one can apply the concept of the golden ratio when designing a room in their home."+ " " + "Utilzing 60-30-10 one must fill 30 percent of the room with furnishings, 10% with accessories and allow the rest to maintain open space." + " " +"For an example, we will use a livingroom that is 12ft wide and 22ft long." + " " + "Click okay to view the outcome.");


// 60/30/10 can be applied to home decor in percentages. Concept: putting it to work through calculations.

//

//Example a living room that is 14 ft wide and 22 ft long.
//


//Color  60-30-10...

//60% is the main color or dominant color
//30% is the contrast color or secondary colot
//10% is the accent color.


//home furnishings

////30% of the room filled with furniture and 10 % accesories allowing the rest of th 60% for room space.




//curtains so that 60% of the window shows...measure windows.


//returning function


var total = calcArea(14,22); //invoking the function (anonymous invoking is placed after function


function calcArea(w,h){ //w,h, parameters are the storage bins //w 14 and h 22 this is where we store the arguements
	var sqftFurn = (w * h) * 0.30;
    return Math.round(sqftFurn);//function is spitting info out
}

console.log(total);//The total amount of squarefoot used for furnishings or accessories.

alert("30% of furnishings that should be applied to this room equals" + " " + total + "sqft.");


var total = calcArea(14,22); //invoking the function (anonymous invoking is placed after function


function calcArea(w,h){ //w,h, parameters are the storage bins //w 14 and h 22 this is where we store the arguements
	var sqftFurn = (w * h) * 0.30;
    return Math.round(sqftFurn);//function is spitting info out
}

console.log(total);//The total amount of squarefoot used for furnishings or accessories.

alert("The 30% of furnishings and that should be applied to this room equals" + " " + total + "sqft." + " " + "This can also be thought of as ground cover, 10% accesories and 60% space for a more spacious non-clutter look."+ " " + "See the example on this page." + " " + "Next we are going to calculate our own livingroom space." + "Click okay to begin.");


// Now try measuring your livingroom...

var w = Number(prompt("Enter the length of your livingroom using inches." + " " + "Please enter the numerical value only" + " " + "For example if your room is 22 inches in length you would enter," + "22."));

var l = Number(prompt("Enter the width of your livingroom using inches." + " " + "Please enter the numerical value only" + " " + "For example if your room is 14 inches wide you would enter," + "14."));

var roomCalc = function (w,l){ //defining... wSofa,lSofa, in the parameters are the storage bins  	
var roomSqft = (Math.round(w/12) * Math.round(l/12))* .30;//code the function runs the width of the sofa /12 the length of the sofa/12. Next it multiplies the two to get the amount of space/sqft that the sofa will take up in the room. This is an estimate so all numbers should be rounded.
	return Math.round(roomSqft); //what it returns
}

var r = roomCalc(w,l); //invoking what happens after defining functions...The folded box is two inches wide  and 3 inches long on the horizontal side of the box.
	
alert("The amount or 30% of furnishings that should be applied to this room equals" + " " + total + "ft.");

console.log("The amount or 30% of furnishings that should be applied to this room equals" + " " + total + "ft.");

//Next to measure furniture...until they are less than or equal to <=r or || are  >=r + 3 

//Example: Sofa: (35/12) * (84/12) = 21 ft Rounded
    

var wSofa = Number(prompt("Enter the sofa's length or horizontal-side width here using inches." + " " + "Please enter the numerical value only." + " " + "For example if your sofa's length is 84 inches just type in the number," + "84."));

var lSofa = Number(prompt("Please start from the outer part of the sofa's seat and measure to it's back." + " " + "This is called the depth of the sofa but can also be looked at as the width." + " " + "Please enter the numerical value only."));

var sofaCalc = function (wSofa,lSofa){ //defining... wSofa,lSofa, in the parameters are the storage bins  	
var sofaSqft = Math.round(wSofa/12) * Math.round(lSofa/12);//code the function runs the width of the sofa /12 the length of the sofa/12. Next it multiplies the two to get the amount of space/sqft that the sofa will take up in the room. This is an estimate so all numbers should be rounded.
	return Math.round(sofaSqft); //what it returns
}

var s = sofaCalc(wSofa,lSofa); //invoking what happens after defining functions...The folded box is two inches wide  and 3 inches long on the horizontal side of the box.
	
console.log("The amount of space the sofa will utilize is" + " " + s + " " + "sqft.");





