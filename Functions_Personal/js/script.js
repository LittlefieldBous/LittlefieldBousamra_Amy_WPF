//JavaScript

//Amy Littlefield-Bousamra
//Personal_Functions:


//Analyzing this room according to the 60-30-10...Rule


//Rule of third in home design...
//Applying the golden ratio to interior design



alert("This program examines how one can apply the concept of the golden ratio when designing a room in their home."+ " " + "Utilizing 60-30-10 one must fill 30 percent of the room with furnishings, 10% with accessories and allow the rest 60% to maintain open space." + " " + "Click okay for an example and then design your own room using the 60-30-10 golden ratio.");


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

alert("A livingroom that is 12ft wide and 22ft long has a total of 308 sqft." + " " +  "The 30% of furnishings that should be applied to this room equals" + " " + total + "sqft." + "To see a visual example please view the floor plan on this page.");


var total = calcArea(14,22); //invoking the function (anonymous invoking is placed after function


function calcArea(w,h){ //w,h, parameters are the storage bins //w 14 and h 22 this is where we store the arguements
	var sqftFurn = (w * h) * 0.30;
    return Math.round(sqftFurn);//function is spitting info out
}

console.log(total);//The total amount of squarefoot used for furnishings or accessories.

alert("Next we are going to calculate our own livingroom space." + " " + "Click okay to begin.");


// Now try measuring your livingroom...

var w = Number(prompt("Enter the length of your livingroom using inches." + " " + "Please enter the numerical value only." + " " + "For example if your room is 22 inches in length you would enter," + " " + "22."));

var l = Number(prompt("Enter the width of your livingroom using inches." + " " + "Please enter the numerical value only" + " " + "For example if your room is 14 inches wide you would enter," + " " + "14."));

var roomCalc = function (w,l){ //defining... wSofa,lSofa, in the parameters are the storage bins  	
var roomSqft = (Math.round(w/12) * Math.round(l/12))* .30;//code the function runs the width of the sofa /12 the length of the sofa/12. Next it multiplies the two to get the amount of space/sqft that the sofa will take up in the room. This is an estimate so all numbers should be rounded.
	return Math.round(roomSqft); //what it returns
}

var r = roomCalc(w,l); //invoking what happens after defining functions...The folded box is two inches wide  and 3 inches long on the horizontal side of the box.
	
alert("The amount or 30% of furnishings that should be applied to this room equals" + " " + total + "ft.");

console.log("The amount or 30% of furnishings that should be applied to this room equals" + " " + total + "ft.");

//Next to measure furniture...until they are less than or equal to <=r or || are  >=r + 3 

//1. first or only Sofa: (35/12) * (84/12) = 21 ft Rounded
    

var wSofa = Number(prompt("Enter the sofa's length or horizontal-side width here using inches." + " " + "Please enter the numerical value only." + " " + "For example if your sofa's length is 84 inches just type in the number," + " " + "84."));

var lSofa = Number(prompt("Please start from the outer part of the sofa's seat and measure to it's back." + " " + "This is called the depth of the sofa but can also be looked at as the width." + " " + "Please enter the numerical value only." + " " +  "For example if your sofa's width is 35 inches just type in the number," + "35."));

var sofaCalc = function (wSofa,lSofa){ //defining... wSofa,lSofa, in the parameters are the storage bins  	
var sofaSqft = Math.round(wSofa/12) * Math.round(lSofa/12);//code the function runs the width of the sofa /12 the length of the sofa/12. Next it multiplies the two to get the amount of space/sqft that the sofa will take up in the room. This is an estimate so all numbers should be rounded.
	return Math.round(sofaSqft); //what it returns
}

var s = sofaCalc(wSofa,lSofa); //invoking what happens after defining functions...The folded box is two inches wide  and 3 inches long on the horizontal side of the box.
	
console.log("The amount of space the sofa will utilize is" + " " + s + " " + "sqft.");


var yes = "y";


//2. Is there a second sofa?

var sofaQ = prompt("Does your livingroom have another sofa or loveseat?" + " "
 + "Please enter" + " " + "y" + " " + "for Yes or" + " " + "n" + " " + "for No.");
 console.log(sofaQ);
 
if (sofaQ === "y"){

    var wSofab = Number(prompt("Enter the sofa's length or horizontal-side width here using inches." + " " + "Please enter the numerical value only." + " " + "For example if your sofa's length is 84 inches just type in the number," + "84."));

   var lSofab = Number(prompt("Please start from the outer part of the sofa's seat and measure to it's back." + " " + "This is called the depth of the sofa but can also be looked at as the width." + " " + "Please enter the numerical value only."));

   var sofaCalcb = function (wSofab,lSofab){ //defining... wSofa,lSofa, in the parameters are the storage bins  	
   var sofaSqftb = Math.round(wSofab/12) * Math.round(lSofab/12);//code the function runs the width of the sofa /12 the length of the sofa/12. Next it multiplies the two to get the amount of space/sqft that the sofa will take up in the room. This is an estimate so all numbers should be rounded.
	return Math.round(sofaSqftb); //what it returns
}

var sb = sofaCalc(wSofab,lSofab); //invoking what happens after defining functions...The folded box is two inches wide  and 3 inches long on the horizontal side of the box.

console.log("The amount of space the sofa will utilize is" + " " + sb + " " + "sqft.");
}
        
else {
   var sb = 0; 
   alert("You do not have another sofa in this room.");
   console.log(sb); 
	
}


//3. will you have arm chairs and if so how many?

var yes = "y";


var armChQ = prompt("Does your livingroom have an armchair/s?" + " "
 + "Please enter" + " " + "y" + " " + "for Yes or" + " " + "n" + " " + "for No.");
 console.log(armChQ);
 
if (armChQ === "y"){

	var numChair = Number(prompt("How many arm chairs will you have in your living room?"));

    var wArmChair = Number(prompt("Enter the length or horizontal-side width of one arm chair here." + " " + "Please measure using inches but enter the numerical value only." + " " + "For example if your arm chair's length is 35 inches just type in the number," + " " + "35."));
    

   var lArmChair = Number(prompt("Please start from the outer part of the arm chair and measure to it's back." + " " + "This is called the depth of the sofa but can also be looked at as the width." + " " + "Please enter the numerical value only." + " " + "For example," + " " + "35."));

   var armChairCalc = function (wArmChair,lArmChair,numChair){ //defining... the width of the armchair, the length of the arm chair and how many armchairs(numchair) in the parameters/storage bins
     	
   var aChairSqft= Math.round((wArmChair/12) * Math.round(lArmChair/12))* numChair;//code the function runs the width of the armchair /12 the length of the armchair/12. Next it multiplies the two to get the amount of space/sqft that the armchairs will take up in the room. Then it multiplies it by the number of armchairs placed in the room. Number are rounded.
   
	return Math.round(aChairSqft); //what it returns
}

var ach = armChairCalc(wArmChair,lArmChair,numChair); //invoking what happens after defining functions...The folded box is two inches wide  and 3 inches long on the horizontal side of the box.

console.log("The amount of squarefeet the arm chairs utilize is" + " " + ach + " " + "sqft.");
}
        
else {
   var ach = 0; 
   alert("You do not have any arm chairs in this room.");
   console.log(ach); //ach=armchairs
	
}

3. //coffee tables

var yes = "y";


//2. Is there a coffee table?

var coffeeTQ = prompt("Does your livingroom have a coffee/rectangular table?" + " " + "Please do not enter side tables here that will nbe addressed in another question." +  " " + "Please enter" + " " + "y" + " " + "for Yes or" + " " + "n" + " " + "for No.");
 console.log(coffeeTQ);
 
if (coffeeTQ === "y"){

    var wcoffeeT = Number(prompt("Enter the table's width here using inches." + " " + "Please enter the numerical value only." + " " + "For example if your table's length is 30 inches just type in the number," + " " + "30."));

   var lcoffeeT = Number(prompt("Enter the table's length here using inches." + " " + "Please enter the numerical value only." + " " +  "For example if your table's length is 48 inches just type in the number," + " " + "48."));

   var ctableCalc = function (wcoffeeT,lcoffeeT){ //defining... the width of the coffee table and the length of the coffee table. (the parameters are the storage bins.)
     	
   var ctableSqft = Math.round(wcoffeeT/12) * Math.round(lcoffeeT/12);//code the function runs the width of the coffee table /12 the length of the coffee table/12. Next it multiplies the two to get the amount of space/sqft that the sofa will take up in the room. This is an estimate so all numbers should be rounded.
   
	return Math.round(ctableSqft); //what it returns //it returns what is defined in the function.
}

var ct= ctableCalc(wcoffeeT,lcoffeeT); //invoking what happens after defining functions...The folded box is two inches wide  and 3 inches long on the horizontal side of the box.

console.log("The amount of space the coffee table will utilize is" + " " + ct + " " + "sqft.");
}
        
else {
   var ct = 0; //coffee table equals zero
   alert("You do not have a coffee table in this room.");
   console.log(ct); 
	
}





