//JavaScript

//Amy Littlefield-Bousamra
//Personal_Functions:

//Applying the golden ratio to interior design
//30% of the room filled with furniture and 10 % accesories allowing the rest of th 60% for room space.
//I put in the example inches as shown in the floor plan so it would be easier to type in a number and verify/check my calculations.


//Introduction
alert("This program examines how one can apply the concept of the golden ratio when designing a room in their home."+ " " + "30% of the room with furnishings, 10% with accessories and allow the rest 60% to maintain open space." + " " + "Click okay for an example and then design your own room using the 60-30-10 rule.");


//Example
//returning function

var total = calcArea(14,22); //invoking the function (anonymous invoking is placed after function


function calcArea(w,h){ //w,h, parameters are the storage bins //w 14 and h 22 this is where we store the arguements
	var sqftFurn = (w * h) * 0.30;
    return Math.round(sqftFurn);//function is spitting info out
}

console.log(total);//The total amount of squarefoot used for furnishings or accessories.

alert("A livingroom that is 14ft wide and 22ft long has a total of 308 sqft." + " " +  "The 30% of furnishings that should be applied to this room equals" + " " + total + " " + "sqft." + " " + "To see a visual example please view the floor plan on this page.");


var total = calcArea(14,22); //invoking the function (anonymous invoking is placed after function


function calcArea(w,h){ //w,h, parameters are the storage bins //w 14 and h 22 this is where we store the arguements
	var sqftFurn = (w * h) * 0.30;
    return Math.round(sqftFurn);//function is spitting info out
}

console.log(total);//The total amount of squarefoot used for furnishings or accessories.

alert("Next we are going to calculate our own livingroom space." + " " + "Click okay to begin.");


// 1. Now try measuring your livingroom...

var w = Number(prompt("Enter the length of your livingroom using feet." + " " + "Please enter the numerical value only." + " " + "For example if your room is 22 feet long you would enter," + " " + "22."));

var l = Number(prompt("Enter the width of your livingroom using feet" + " " + "Please enter the numerical value only" + " " + "For example if your room is 14 feet wide you would enter," + " " + "14."));

var roomCalc = function (w,l){ //defining... wSofa,lSofa, in the parameters are the storage bins  	
var roomSqft = (Math.round(w * l))* .30;//code the function runs the width of the sofa /12 the length of the sofa/12. Next it multiplies the two to get the amount of space/sqft that the sofa will take up in the room. This is an estimate so all numbers should be rounded.
	return Math.round(roomSqft); //what it returns
}

var r = roomCalc(w,l); //invoking what happens after defining functions...The folded box is two inches wide  and 3 inches long on the horizontal side of the box.
	
alert("The amount or 30% of furnishings that should be applied to this room equals" + " " + total + "sqft.");

console.log("The amount or 30% of furnishings that should be applied to this room equals" + " " + total + "sqft.");


//2. first or only Sofa: 
    

var lSofa = Number(prompt("Enter the sofa's length or horizontal-side width here using inches." + " " + "Please enter the numerical value only." + " " + "For example if your sofa's length is 80 inches just type in the number," + " " + "80."));

var wSofa = Number(prompt("Please start from the outer part of the sofa's seat and measure to it's back." + " " + "This is called the depth of the sofa but can also be looked at as the width." + " " + "Please enter the numerical value only." + " " +  "For example if your sofa's width is 34 inches just type in the number," + " " + "34."));

var sofaCalc = function (wSofa,lSofa){ //defining... wSofa,lSofa, in the parameters are the storage bins  	
var sofaSqft = Math.round(wSofa/12) * Math.round(lSofa/12);//code the function runs the width of the sofa /12 the length of the sofa/12. Next it multiplies the two to get the amount of space/sqft that the sofa will take up in the room. This is an estimate so all numbers should be rounded.
	return Math.round(sofaSqft); //what it returns
}

var s = sofaCalc(wSofa,lSofa); //invoking what happens after defining functions...The folded box is two inches wide  and 3 inches long on the horizontal side of the box.
	
console.log("The amount of space the sofa will utilize is" + " " + s + " " + "sqft.");


var yes = "y";


//3. Is there a second sofa?

var sofabQ = prompt("Does your livingroom have another sofa or loveseat?" + " "
 + "Please enter" + " " + "y" + " " + "for Yes or" + " " + "n" + " " + "for No.");
 console.log(sofabQ);
 
if (sofabQ === "y"){

    var wSofab = Number(prompt("Enter the sofa's length or horizontal-side width here using inches." + " " + "Please enter the numerical value only." + " " + "For example if your sofa's length is 82 inches just type in the number," + "82."));

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

var tota = s + sb;
console.log(tota); //total of 2 items so far


//4. will you have arm chairs and if so how many?

var yes = "y";


var armChQ = prompt("Does your livingroom have armchair/s?" + " "
 + "Please enter" + " " + "y" + " " + "for Yes or" + " " + "n" + " " + "for No.");
 console.log(armChQ);
 
if (armChQ === "y"){

	var numChair = Number(prompt("How many arm chairs will you have in your living room?"));

    var wArmChair = Number(prompt("Enter the length or horizontal-side width of one arm chair here." + " " + "Please measure using inches but enter the numerical value only." + " " + "For example if your arm chair's length is 30 inches just type in the number," + " " + "30."));
    

   var lArmChair = Number(prompt("Please start from the outer part of the arm chair and measure to it's back." + " " + "Please enter the numerical value only." + " " + "For example," + " " + "30."));

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

var totb = s + sb + ach;
console.log(totb); //total of three items so far


//5. coffee table

var yes = "y";


// Is there a coffee table?

var coffeeTQ = prompt("Does your livingroom have a coffee/rectangular table?" + " " + "Please enter" + " " + "y" + " " + "for Yes or" + " " + "n" + " " + "for No.");
 console.log(coffeeTQ);
 
if (coffeeTQ === "y"){

    var wcoffeeT = Number(prompt("Enter the table's width here using inches." + " " + "Please enter the numerical value only." + " " + "For example if your table's length is 28 inches just type in the number," + " " + "28."));

   var lcoffeeT = Number(prompt("Enter the table's length here using inches." + " " + "Please enter the numerical value only." + " " +  "For example if your table's length is 45 inches just type in the number," + " " + "45."));

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

var totc = s + sb + ach + ct;
console.log(totc);//total possible of 4 items so far


 //6.bookshelf

var yes = "y";


var bookshQ = prompt("Does your living space have a bookshelf, desk or a hutch?" + " " + "Please enter" + " " + "y" + " " + "for Yes or" + " " + "n" + " " + "for No.");
 console.log(bookshQ);
 
if (bookshQ=== "y"){

    var wbooksh = Number(prompt("Enter the bookshelf's or other rectangular item's width here using inches." + " " + "Please enter the numerical value only." + " " + "For example if the bookshelf's width is 13 inches just type in the number," + " " + "13."));

   var lbooksh = Number(prompt("Enter the bookshelf's length or other rectangulart item here using inches." + " " + "Please enter the numerical value only." + " " +  "For example if your table's length is 35 inches just type in the number," + " " + "35."));

   var bookshCalc = function (wbooksh,lbooksh){ //defining... the width of the coffee table and the length of the coffee table. (the parameters are the storage bins.)
     	
   var bookshSqft = Math.round(wbooksh/12) * Math.round(lbooksh/12);//code the function runs the width of the coffee table /12 the length of the coffee table/12. Next it multiplies the two to get the amount of space/sqft that the sofa will take up in the room. This is an estimate so all numbers should be rounded.
   
	return Math.round(bookshSqft); //what it returns //it returns what is defined in the function.
}

var bk= ctableCalc(wbooksh,lbooksh); //invoking what happens after defining functions...The folded box is two inches wide  and 3 inches long on the horizontal side of the box.

console.log("The amount of space the bookshelf will utilize is" + " " + bk + " " + "sqft.");
}
        
else {
   var bk = 0; //book shelf equals zero
   alert("You do not have a bookshelf in this room.");
   console.log(bk); 
	
}

var totd = s + sb + ach + ct + bk;
console.log(totd);//total possible of 5 items so far



//6. side tables or small accent tables

var yes = "y";


var sideTabQ = prompt("Does your living space have any additional rectangular tables?" + " " + "This could include side tables or other accent tables." + " " + "Please enter" + " " + "y" + " " + "for Yes or" + " " + "n" + " " + "for No.");
 console.log(sideTabQ);
 
if (sideTabQ === "y"){

    var numsideT = Number(prompt("How many side tables will you have in your living space?"));

    var wSideT = Number(prompt("Enter the tables's width here using inches." + " " + "Please enter the numerical value only." + " " + "For example if the table's length is 23 inches just type in the number," + " " + "23."));

   var lSideT = Number(prompt("Enter the table's length here using inches." + " " + "Please enter the numerical value only." + " " +  "For example if your table's length is 14 inches just type in the number," + " " + "14."));

   var sideTCalc = function (wSideT,lSideT,numsideT){ //defining... the width of the side table and the length of the side table. (the parameters are the storage bins.)
     	
   var sideTSqft = (Math.round(wSideT/12) * Math.round(lSideT/12)) * numsideT;//code the function runs the width of the side table /12 the length of the side table/12. Next it multiplies the two to get the amount of space/sqft that the side table will take up in the room. if more than one table it will multiply by 2 and so on...This is an estimate so all numbers should be rounded.
   
	return Math.round(sideTSqft); //what it returns //it returns what is defined in the function.
}

var st = sideTCalc(wSideT,lSideT,numsideT); //invoking what happens after defining functions...The folded box is two inches wide  and 3 inches long on the horizontal side of the box.

console.log("The amount of space the accent or side table will utilize is" + " " + st  + " " + "sqft.");
}
        
else {
   var st  = 0; // table equals zero
   alert("You do not have a side table in this room.");
   console.log(st); 
	
}

var tote = s + sb + ach + ct + bk + st;
console.log(tote);//total possible of 6 items so far



//7. Round accent tables

var yes = "y";


var roundTabQ = prompt("Does your living space have any round tables?" + " " + "This could include a round dining table, side tables or other accent tables." + " " + "Please enter" + " " + "y" + " " + "for Yes or" + " " + "n" + " " + "for No.");
 console.log(roundTabQ);
 
if (roundTabQ === "y"){
    
    var  p = 3.14

    var numRT = Number(prompt("How many round tables will you have in your living space?"));

    var droundT = Number(prompt("Enter the tables's diameter here using inches." + " " + "Please enter the numerical value only." + " " + "For example if the table's diameter is 16 inches just type in the number," + " " + "16."));

   
   var roundTCalc = function (droundT,numRT,p){ //defining... the width of the side table and the length of the side table. (the parameters are the storage bins.)
     	
   var roundTSqft = Math.round((droundT/12) * p) * numRT;//code the function runs the diameter of the round table using inches then divided by 12 to get ft, then times pie 3.14 for sq ft. next multiply it by how many tables one has.
      
	return Math.round(roundTSqft); //what it returns //it returns what is defined in the function.
}

var rt = roundTCalc (droundT,numRT,p); //invoking what happens after defining functions.

console.log("The amount of space the round table/s will utilize is" + " " + rt  + " " + "sqft.");

}
        
else {
   var rt  = 0; // table equals zero
   alert("You do not have a round table in this room.");
   console.log(rt); 
	
}

var totf = s + sb + ach + ct + bk + st + rt;
console.log(totf);//total possible of 7 items so far


//8. Does your living space have a dining table? 


var yes = "y";


var dinTabQ = prompt("Does your living space have a rectangular dining table?" + " " + "Please enter" + " " + "y" + " " + "for Yes or" + " " + "n" + " " + "for No.");
 console.log(dinTabQ);
 
if (dinTabQ === "y"){

    var wdinT = Number(prompt("Enter the dining tables's width here using inches." + " " + "Please enter the numerical value only." + " " + "For example if the table's length is 36 inches just type in the number," + " " + "36.")); //asking for width of the dining table in inches

   var ldinT = Number(prompt("Enter the dining table's length here using inches." + " " + "Please enter the numerical value only." + " " +  "For example if your table's length is 72 inches just type in the number," + " " + "72.")); //asking for the length of the dining table in inches

   var dinTCalc = function (wdinT,ldinT){ //defining... the width of the dining table and the length of the side table. (the parameters are the storage bins.)
     	
   var dinTSqft = (Math.round(wdinT/12) * Math.round(ldinT/12));//code the function runs the width of the dining table /12 the length of the dining table/12. This is an estimate so all numbers should be rounded.
   
	return Math.round(dinTSqft); //what it returns //it returns outcome of the code/calculations above
}

var dt = dinTCalc(wdinT,ldinT); //invoking what happens after defining functions...

console.log("The amount of space the dining table will utilize is" + " " + dt  + " " + "sqft.");
}
        
else {
   var dt  = 0; // table equals zero
   alert("You do not have a dining table in this room.");
   console.log(dt); 
	
}

var totg= s + sb + ach + ct + bk + st + rt + dt;
console.log(totg);//total possible of 8 items so far



//9. dining chairs or other chairs in the room

var yes = "y";


var dinChQ = prompt("Will you have any dining chair or other accent chairs?" + " "
 + "Please enter" + " " + "y" + " " + "for Yes or" + " " + "n" + " " + "for No.");
 console.log(dinChQ);
 
if (dinChQ === "y"){

	var ndinChair = Number(prompt("How many chairs will you have around your dining table or in this living space?"));

    var wdinChair = Number(prompt("Enter the width of one chair here." + " " + "Please measure using inches but enter the numerical value only." + " " + "For example if your chair's length is 18 inches just type in the number," + " " + "18."));
    

   var ldinChair = Number(prompt("Please start from the outer part of the chair and measure to it's back." + " " + "Please enter the numerical value only." + " " + "For example," + " " + "18."));

   var dinChairCalc = function (wdinChair, ldinChair,ndinChair){ //defining... the width of the armchair, the length of the arm chair and how many armchairs(numchair) in the parameters/storage bins
     	
   var dinChairSqft= Math.round((wdinChair/12) * Math.round(ldinChair/12))* ndinChair;//code the function runs the width of the chair /12 the length of the chair/12. Next it multiplies the two to get the amount of space/sqft that a chair  will take up in the room. Then it multiplies it by the number of armchairs placed in the room. Numbers are rounded.
   
	return Math.round(dinChairSqft); //what it returns
}

var dch = dinChairCalc(wdinChair,ldinChair,ndinChair); //invoking what happens after defining functions...

console.log("The amount of squarefeet these chair/s utilize is" + " " + dch + " " + "sqft.");
}
        
else {
   var dch = 0; 
   alert("You do not have any dining or other chairs in this room.");
   console.log(dch); //dinCh = dining chairs	
}

var toth= s + sb + ach + ct + bk + st + rt + dt + dch;
console.log(toth);//total possible of 9 items so far



//10. plants or other additional ideas taking up space with a lenght and width
var yes = "y";


var itemQ = prompt("Will you have any other items taking up floor space?" + " "
 + "This could include floor plants etc." + " " + "Please enter" + " " + "y" + " " + "for Yes or" + " " + "n" + " " + "for No.");
 console.log(itemQ);
 
if (itemQ === "y"){

	var itemNum = Number(prompt("How many of these items or plants do you have in this living space?"));

    var wItem = Number(prompt("Enter the width of the item here." + " " + "For example if this is a floor plant enter," + " " + "12" + " " + "for 12 inches." + "Please measure the width using inches but enter the numerical value only."));
    

   var lItem = Number(prompt("Enter the length of the item here." + " " + "For example if this is a floor plant enter," + " " + "12" + " " + "for 12 inches." + "Please measure the width using inches but enter the numerical value only."));

   var itemCalc = function (wItem, lItem,itemNum ){ //defining... the width of the armchair, the length of the arm chair and how many armchairs(numchair) in the parameters/storage bins
     	
   var itemSqft= Math.round((wItem/12) * Math.round(lItem/12))* itemNum ;//code the function runs the width of the armchair /12 the length of the armchair/12. Next it multiplies the two to get the amount of space/sqft that the armchairs will take up in the room. Then it multiplies it by the number of armchairs placed in the room. Number are rounded.
   
	return Math.round(itemSqft); //what it returns
}

var i = itemCalc(wItem,lItem,itemNum); //invoking what happens after defining functions...The folded box is two inches wide  and 3 inches long on the horizontal side of the box.

console.log("The amount of squarefeet these items utilize is" + " " + i + " " + "sqft.");
}
        
else {
   var i = 0; 
   alert("You do not have any plants or other addtional items in this room.");
   console.log(i); // item= additional item such as plants	
}



// get a total of all the items taking up floor space and see if it equal's 30% of the room's space


alert("Now that all the items taking up space in your room have been calculated let's find out if they take approximately 30% of the room's space." + " " + "As previousy determined 30% of your room would be" + " " + total + " " +  "sqft.")

var toti= s + sb + ach + ct + bk + st + rt + dt + dch + i;
console.log(toti);//total possible of 10 items.

console.log("Does" + " " + toti + " " + "equal" + " " + total + "?");

alert("The amount of furnishings in this room equals" + " " + toti + "ft.");

console.log("The 30% of furnishings that should be applied to this room equals" + " " + total + "ft.");


alert("Does" + " " + toti + " " + "sqft" + " " + "equal or close to" + " " +  total +  " " + "sqft?" + " " + "If not, note the difference you may either need to add or subtract square footage." + " " + "This could mean taking away items or ordering smaller/larger furniture for the living space provided.")


////Additional room design with the golden ratio...
//Color  60-30-10...

//60% is the main color or dominant color
//30% is the contrast color or secondary colot
//10% is the accent color.

//curtains so that 60% of the window shows...measure windows.


