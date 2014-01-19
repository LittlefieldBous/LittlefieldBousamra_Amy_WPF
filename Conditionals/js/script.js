//Javascript-Conditionals
//Amy littlefield-Bousamra

//Notes

//Conditional Statement:
//True the action is performed.
//False the action is not performed. Then use the else function.

//if(condition){
	//actions //grouping code actions are in braces.
//}


//conditional logic: If it's sunny lets go to the beach.
//if our sunny variable is true then we will want to go to the beach

//Example:
//var sunny = true;  //the action of going to the beach will be performed..If false it won't be performed and the programmer will need an else.
//if(sunny){
//if(condition){
  //   goToTheBeach();
  //   } 
     
     
//if(sunny){
//goToTheBeach();
//}else{
//gotoTheMovies();
//}


//if(temp>70){ //if the temperature is greater than 70 then we will go to the beach.
	//goToTheBeach();
	
//}

//Comparison
//var temp = 82
//temp=82 //temp variable True
//temp =65 False actions in curly braces will be ignored.
//if(temp>70){
	//goToTheBeach();
//}

//relational operators
//there should be no spaces when using two or more operators together.
// >Greater than
// <less than
// >= greater than or equal 
// <= less than or equal to
// != Not equal to
// == Equal to (do not use spaces for ==)


//Equality Operators
//Assignment = stores values
//Equality == //compares two values..think of as the same as...For example:
//a == b translates Is a the same as b
// where as a=b changes the value of a.

//Strict Equality === used to compare value and type as well...
//for example  6 number or 6 string It asks are 
//these two numbers or are these two strings?

// 6 == "6" True 6 number is the same as 6 string..there both sixes
// 6 === "6" False 6 number is not the same as 6 string false. It will skip the first consol.log and print up the second statement.

//Strict equality is faster.

//important to use strict equality over equality
//For example === is better than ==


//Inequality !=

// != this means not the same as
//a != b So only if a does not equal b do this...


//nesting conditional statements
// if(sunny){
// goToTheBeach();
// if(warmWater){
//    wearNewSuit(); //indented to show what action is inside of another.
// }
// }else{
// goToTheMovies();
// }

//if(condition){
//	actions
//}else{
// goToTheMovies();

//Conditional Logic

var oldEnough = true;

//if the child is old enough, print to the console "you can ride!"
//one curly brace on the same line as the if statement. 
//show containment by indenting. /since true it prints out: you can ride the coaster!

if(oldEnough){ 
	//code performed if condition is true 
	console.log("You can ride the coaster!");
}

var oldEnough = false; //if you out false it will skip over the if old Enough but will print the next console.log.

//if the child is old enough, print to the console "you can ride!"
//one curly brace on the same line as the if statement. 
//show containment by indenting.

if(oldEnough){ 
	//code performed if condition is true 
	console.log("You can ride the coaster!");
}

console.log("what comes after");

//Relational Expressions machine checks relationship between two values. Example being able to ride a roller coaster depends on the kids height.

var kidHeight = 50;


//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height

if(kidHeight >48){
   //code performed if condition is true
	console.log ("Yay! You can ride the coaster!");
}


var kidHeight = 40;
var minHeight = 48;

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height

if(kidHeight > minHeight){
   //code performed if condition is true
	console.log ("Yay! You can ride the coaster!");
}

//

var kidHeight = 47;
var minHeight = 48;

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height
//can also add a value. For example if a kids sneakers were 2 inches higher.

if(kidHeight + 2 > minHeight){
   //code performed if condition is true
	console.log ("You can ride the coaster!");
}

// If and Else

var kidHeight = 47;
var minHeight = 48;

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height
//can also add a value. For example if a kids sneakers were 2 inches higher.

if(kidHeight > minHeight){
   //code performed if condition is true
	console.log ("You can ride the coaster!");
}

if(kidHeight <= minHeight){
	console.log("Sorry Kid, you've got some growing to do!");
}


//can combine the above into an else statement


var kidHeight = 47;
var minHeight = 48;

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height


if(kidHeight > minHeight){
   //code performed if condition is true
	console.log ("Yay! You can ride the coaster!");//if true
}else{ //best practice to put curly brace on same line.
	console.log("Sorry Kiddo You'll have to just watch!");//if false
}
 //use if and else when you want the machine to choose between two blocks of code/2ideas/2items...
 
 //else if To choose between 3 or more blocks of code Else if: always has a condition where else never has a condition
 
var kidHeight = 52;
var minHeight = 48;
var wParentHeight = 45; //the height of the kid with the parent

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height


if(kidHeight > minHeight){
   //code performed if condition is true
   //you can ride
	console.log ("Yay! You can ride!" + "Get on the coaster!"); //if true
	
}else if(kidHeight > wParentHeight) { //best practice to put curly brace on same line.//
        //You can ride but only with a parent present
        console.log("Sorry kid, you've got some growing to do first.");
}else{
    //sorry you have some growing to do
	console.log("Sorry Kiddo You have some growing to do.");//if false
}

//notice order if, else if, else...once true it will skip the rest!


//Logical Operators

//They compare two True or False values
//they compare pairs of relational expressions
//the comparison results in true or false
//only between comparisons or boolean variables


// And  &&
// Or ||
// Exclusive or (XOR) ^
// Not !


//And &&

// Requires both in the pair be true
//for the whole pair to be true

//True Table for &&

//True && True //this is True
//True && False //this is false
//false && True //this is false
//false && False // this is false 

//Example: we want to buy the latest iphone but only can if we have the budget for it

var budget = 300;
var iPhonePrice = 199.99;
var paycheck = 200;
//if the price of the phone is less than our budget And if our paycheck is over 300
if(iPhonePrice < budget){
	console.log("We can buy the phone!");
}else{
	console.log("No phone for you!");
}
if(paycheck > 300){
	console.log("This decision is too many times in this example!");
}
	
//puts out two decisions but we need the console to just put out one decision so we need //to put and &&

var budget = 300;
var iPhonePrice = 199.99;
var paycheck = 300;
//if the price of the phone is less than our budget And if our paycheck is over 300
if(iPhonePrice < budget && paycheck > 300){ //&& operator used for going in between operations //this expression requires that both are true the iphone is less than the budget and the paycheck is greater than 300...because the paycheck in this scenario is not greater than 300 the second console.log appears.
	console.log("Yay! We can buy the phone!");
}else{
	console.log("Sorry, No phone for you!"); //2nd console log statement
}



























