//JavaScript

//Amy Littlefield-Bousamra
//screencast functions



//Sequential line by line, order by order -expressions
//Conditionals: ternary, if, else, else if...
//Reusable...chunks of code you need to reoccur again and again...
//example cookbook how to make types of cake ...you might put how to make frosting on one page and then reference the page the frosting recipe is on..for different types of cakes.

//repeating blocks of code..used to be called sub routines...mini routines..

//Types of Functions

//normal functions
//procedures
//anonymous functions

//basic structure

//function functionName() {
//code the function runs
//}

//curly braces = blocks of code
//instead of "if" we use function
//then we use a name


//Example: Setting up function

function outptMsg(){
	console.log("Hello World");
}

//function calcArea(){  //function 2

// variables named width. one inside and outside the function..it will use the variable declared inside it's own function.



var width = 5; //this is scoped outside of the function.


function calcArea(){
	var width = 20;//this width is scoped to 
	var height = 30;
	var area = width * height;
	console.log(area);
}


calcArea();
console.log(width); //It will be the width outside of the function...the one within the function is called out under area;


//functions don't happen unless they're called or invoked...

//function Execution: write name of function


outptMsg();
calcArea(); //function invocation, exection or simle named: function call 

//if we called the function out again or multiple times it happens again for example:

calcArea(); 
calcArea();

//now 600 appears three times.
//repeatable-reusable.

//Variable Scope


//Arguments and Parameters

//functions: arguments
//bins to store: parameters

//for example..bear factory wants to make only pink teddy bears..you wouldn't start a new factory as you only need to make pink bears...
//parameters in js are the solution to this problem. they allow us to store and use basic material. all for the same purpose to construct the bear's fur. 

//function call = funcName

//funcName(argument1. argument2);

//function funcName(parameter1,parameter2){

	//code the function runs
//}
 //what you want to store 30, 20
 
//these are the arguments what were going to store inside our parameters were sending it in..

function calcArea(w,h){ //w,h, parameters are the storage bins //w=30 and h=20 this is where we store the arguements
	var area = w * h;
console.log(area);
}

calcArea(20,10);

//every human year is 7 dog years

/*function dogYears(){
	var age = 4;
	var dogYears = age *7;
	console.log("Sparky is" + " " + dogYears + " " + "years.")
	
}

dogYears();*/

//what if we want the dogYears to print out a different number each time?


function dogYears(age){ //holds parameters the storage container for the arguments
	var dogYears = age *7;
	console.log("Sparky is" + " " + dogYears + " " + "years.");
	
}

var age1 = 4; //

dogYears(age1);//arguments information passed in

dogYears(6); //(6)information "passed" in storage holds arguments
dogYears(5);

//result: 42, 35

//arguments your passing in
//parameter's storage containers.


//returning values
//things going out of the function...
//example the finished teddy bears from the factory that is being shipped out.
//whatever that functions returns store it into the variable total.

var total = calcArea(40,2); //invoking the function


function calcArea(w,h){ //w,h, parameters are the storage bins //w=30 and h=20 this is where we store the arguements
	var area = w * h;
    return(area);//function is spitting info out
}
//how do we get it out of the function...is with return.
console.log(total); //generally, functions that are returning should be assigned to variables.

//procedures don't return values...functions returns something...


//anonymous functions also called closures...executes the same time it creates the function.


//function functionName(){
	
//}

//Anonymous functions.
//var functionName = function(){
	//code to run uses variable structure..they have to be declared before they are called.
//}


var calcArea = function(width,height){ //defining

	//code the function runs
	var area = width * height;
	return area;
}

var a = calcArea(50, 10); //invoking happens after defining the functions

console.log(a);



























