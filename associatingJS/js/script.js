//JavaScript

var yearBorn = 1955;

console.log("Hello World");
console.log(yearBorn);

alert("ping-pong");
alert (yearBorn);

var firstNumber = 3;
var secondNumber = 3;
var answer;
answer = 3 * 3;
alert (3 * 3);

var muppetNames =["Kermit","Miss Piggy"];

muppetNames[1] = "Rizzo";
muppetNames[2] = "Fozzy";

var num=2;

console.log (muppetNames [num]);

var a = 2; //sets up our variable a and defines it with 2
var b; //sets up the variable and defines it as 2.
a = a + 3 //add 3 to a
console.log(a); //print a

var yearBorn = 1971;
var age = 2014 - yearBorn -1;
console.log(age);

//area of triangle
var width = 4;
var height = 4;
var area =width * height/2;
console.log(area);

//Expressions -modulo operator

//var remainder = 32 /10
//console.log(remainder);
//use % sign
var remainder = 32 % 10;
console.log(remainder);

//calculate quiz grades

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 60;
var quiz4 = 80;

//PEMDAS the average is the sum of the items divided by the number of items
var average = (quiz1 + quiz2 + quiz3 + quiz4)/4;
console.log(average);

var length = 7;
var width = 6;
var perimeter = length * 2 + width * 2;
console.log(perimeter);

//Expressions with Arrays

var orangeBins = [234, 567, 883];
var total = orangeBins[0] + orangeBins[1] + orangeBins[2];
console.log(total);

//concatenating strings...

var firstName = "Kermit";
var lastName = "The Frog";
var fullName = firstName + " " + lastName;

console.log(fullName);

//strings

var a = "6";
var b = "7";

var result = a + b;
console.log(result);

//numbers

var a = 6;
var b = 7;
var result = a + b;
console.log(result);

//casting

//not adding it as a number
var stringVar = "6";
var result = 7 + stringVar;
console.log(result);


//casting if we want it to add as a number
//treating it like a number..cast it like a number
var stringVar = "6";
var result = 7 + Number(stringVar);
console.log(result);

//casting 

//this adds it up..wrong way

var areaCode = 407;
var firstPart = 203;
var secPart = 4529;

var phoneNo = areaCode + firstPart + secPart;
console.log(phoneNo);


//we want it to be a string....right way so that it doesn't add but shows the number...adding it as characters rather than numbers.

var areaCode = 407;
var firstPart = 203;
var secPart = 4529;
//(407) 203-4529 putting in characters.
var phoneNo = "(" + String(areaCode) + ")" + String(firstPart) + "-" + String(secPart);
console.log(phoneNo);


//Expressions - Assignment Operators
//will give the number asked for..
var a = 3; 
a + 4;
console.log(a);


//assign an expression to a...storage container on left what it is storing on the right..
var a = 3; 
//short cuts for a = a + 4; could also do this with multiplacation etc... a *=4
a += 4;
console.log(a);

var a = 3; 
//short cuts for a = a + 4; could also do this with multiplacation etc... a *=4
a ++; //a = a + 1 //  a +=1 // a --; //a= a-1 // a-=1
console.log(a);













