//JavaScript

//Amy Littlefield-Bousamra
//Functions Wacky

//Inspired by a made-up travel game that asks kids, "What's your silly bug?"

//Silly Bug Anthology: Create your own silly bug


var correctName = prompt("Welcome to create your own sillybug! Please choose a username");
var correctPass = prompt("Please choose a password");       

var userName = correctName; //username entered by user
var password = correctPass; //password entered by user
var greeting = "Thank you for your membership!"+ " " + "Click enter to proceed to login.";
alert(greeting);

var enterName = prompt("Enter your username here.");
var enterPass = prompt("Enter your password here");

if (enterName === userName && enterPass === password){
	console.log("Welcome," + " " + userName + "!");
}

if (enterName != userName){
	console.log("User not found." + " " +"Try again.");
}

if(enterPass != password){
	console.log("Password does not match our records.")
}

// what is your bug's name?

var bugName = prompt("What is the name of your bug?");
var home = prompt("Where does your bug live?" + " " + "For example, in a tree, under a rock, in the desert, etc.");       

console.log("The name of your bug is" + " " + bugName + " " + "it lives" + " " + home + ".");
alert("The name of your bug is" + " " + bugName + " " + "it lives" + " " + home + ".");


//ternary expression


var lengthQ = prompt("Is your bug small or big?" + " " + "Let's find out!" + " " + "About how many millimeters long is the" + " " + bugName + " " + "?" + " " + "Please enter the numerical value only.");

var length = parseInt(lengthQ);

var size;

size = (length < 20) ? "A"+ " " + bugName + " " +  "is a big bug!" : "A"+ " " + bugName + " " +  "is a small bug!";


console.log(size);


//what is the color of your bug?

var c = prompt("What color is the bug?" + " " + "You can describe your bug here.");

var calcArea = function(c){ //defining the function color

	
	var bugC = c;//code the function runs
	return bugC;//what it returns in this case the color of the bug
}

var color = calcArea(c); //invoking happens after defining the functions

console.log(color);
console.log("A" + " "  + bugName + " " + "is a" + " " + color + " " + "bug.");
alert("A" + " "  + bugName + " " + "is a" + " " + color + " " + "bug.");


//what does the bug like to eat?

var f = prompt("What does a" + " " + bugName + " " + "like to eat?");

var calcfood = function(f){ //defining the function color

	
	var bugF = f;//code the function runs
	return bugF;//what it returns in this case what the bug likes to eat
	
}

var food = calcfood(f); //invoking happens after defining the functions

console.log(food);
console.log("The" + " "  + bugName + " " + "likes to eat" + " " + food + " " + ".");

alert("The" + " " + bugName + " " + "likes to eat" + " " + food + " " + ".");



//can your bug fly? 

var yes = "y";
var no = "n";


var flyQ = prompt("Does your bug fly?" + " " + "Please enter" + " " + "y" + " " + 
"for Yes or" + " " + "n" + " " + "for No, it moves." + " " +  "And if it doesn't move at all click," + "x.");
console.log(flyQ);
 
if (flyQ === "y"){

	var w = prompt("describe the wings by completing this sentence." + " " + "The" +  " " + bugName + " " + "wings are...");

var calcwings = function(w){ //defining the function wings

	
	var bugW = w;//code the function runs
	return bugW;//what it returns in this case what the bug likes to eat
	
}

var wings = calcwings(w); //invoking happens after defining the functions

console.log(wings);
console.log("The" + " " + bugName + " " + "/s" + " " + "wings are" + " " + wings + ".");

alert("The" + " " + bugName + " " + "/s" + " " + "wings are" + " " + wings + ".");



}else 

if (flyQ === "n"){

   var m = prompt("describe the way your bug moves and complete the following sentence:" + " " + "The" + " " + bugName + " " + "does not have wings but moves by...");

var calcMove = function(m){ //defining the function wings

	
	var bugM = m;//code the function runs
	return bugM;//what it returns in this case what the bug likes to eat
	
}

var move = calcMove(m); //invoking happens after defining the functions

console.log(move);
console.log("The" + " " + bugName + " " +  "does not have wings but moves by" + " " + move + ".");

alert("The" + " " + bugName + " " + "does not have wings but moves by" + " " + move + ".");

	
} else {
	console.log("The" + " " + bugName + " " +  "is like a rock and doesn't move at all.");
	alert("The" + " " + bugName + " " +  "is like a rock and doesn't move at all.");

	
}


//other questions if time

//how many eyes does the bug have? 

//what color are the bugs eyes?

//how many legs does this bug have?

//describe its legs (adjective)

//what color are the antennas?

//Are the antennas fuzzy, curly, long or short?

//does your bug make a sound?

//what sound does this silly bug make?

//what is your bugs special talent? This bug has a known for ......
