//JavaScript

//Amy Littlefield-Bousamra
//Personal_Functions:


//Analyzing this room according to the 60-30-10...Rule


//Rule of third in home design...
//Applying the golden ratio to interior design



alert("This program examines how one can apply the concept of the golden ratio when designing a room in their home."+ " " + "Utilzing 60-30-10 one must fill 60 percent of the room with furnishings and/or accessories and allow the rest to maintain open space." + " " +"For an example, we will use a livingroom that is 12ft wide and 22ft long." + " " + "Click okay to view the outcome.");


// 60/30/10 can be applied to home decor in percentages. Concept: putting it to work through calculations.

//

//Example a living room that is 14 ft wide and 22 ft long.
//


//Color  60-30-10...

//60% is the main color
//30% is the contrast color
//10% is the accent color.


//home furnishings

////60% of the room filled with furniture and accesories allowing the rest of the room space.


//curtains so that 60% of the window shows...measure windows.


//returning function

var total = calcArea(14,22); //invoking the function (anonymous invoking is placed after function


function calcArea(w,h){ //w,h, parameters are the storage bins //w 14 and h 22 this is where we store the arguements
	var sqftFurn = (w * h) * 0.60;
    return Math.round(sqftFurn);//function is spitting info out
}

console.log(total);//The total amount of squarefoot used for furnishings or accessories.

alert("The amount of furnishings and accessories that should be applied to this room equals" + " " + total + "ft.");


//have to measure furniture...







