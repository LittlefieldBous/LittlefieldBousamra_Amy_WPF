//JavaScript

//Amy Littlefield-Bousamra
//Functions Worksheet:

//1. Calculate the circumference of a circle
//C= d * 3.14 or (r * 2)*3.14

//using an Anonymous function


var calcCircum = function(radius) { //defining
	var circum= (radius * 2) * 3.14; //code the function runs
	return circum; //what it returns
	
}

var a = calcCircum(4);//invoking happens after defining the functions

console.log("The circumference of the circle is" + " " + a + "."); //what it prints out

//2. Stung!

/*It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function

    Given:
        Victim’s weight (in pounds)     
    Parameter(s) for function:
        Victim’s weight (in pounds)
    Return:
        Number of Bee stings
    Result to print to the console:
        “It takes X bee stings to kill this animal.*/

//basic function

var totalStings = calcStings(20); //invoking the function


function calcStings(pounds){ //holds parameters the storage container for the arguments which is the amount of pounds

// 20lbs is approx my cat's wieght..contains the weight of given animal... information passed in storage holds argument

	var beeStings = pounds * 8.666666667; //calculations number of pounds * # of beestings per pound
	return(beeStings);//function is spitting info out..returning the number of bee stings per pounds
	
}
	console.log("It takes" + " " + totalStings + " " + " bee stings" + "...to kill a fat cat.");
	


//anonymous function:


var beeStung = function(pounds) { //defining
	var totalB = pounds * 8.666666667;  //code the function runs
	return totalB; //what it returns
	
}

var a = beeStung(4);//invoking happens after defining the functions

console.log("It takes" + " " + a + " " + " bee stings" + "...to kill a rat.");//what it prints out























