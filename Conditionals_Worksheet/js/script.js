//Javascript-Conditionals_Worksheet
//Amy littlefield-Bousamra
//1-19'2014

/*Convert a temperature to either degrees Celsius or degrees Fahrenheit depending on what the user has entered. If the user puts a “C” for the unit, the calculator should convert to Celsius. If the user puts “F” for the unit, the calculator should convert to Fahrenheit.*/
    
/*Given:
Degrees (in F or C)
Unit (a string holding an “F” or a “C”)
Result:
Data Sets to Test: (Note that data sets are not the only numbers that should work with your code.)


/*32F is 0C
100C is 212F
90F is 32.22C*/


//An example:
//Convert 37°C to Fahrenheit.
//37°C x  9/5 + 32 = 98.6°F

//Convert 98.6°F to Celsius.
//(98.6°F  -  32)  x  5/9 = 37°C



var fahren = "F";
var cels = "C";


var degreeM = prompt("Do you want to convert your temperature to Celsius or Fahrenheit?" + " " + "Please enter" + " " + "C" + " " + "for Celsius and" + " " + "F" + " " +  "for Fahrenheit.");
console.log(degreeM);

var convertNum = prompt("Enter the temperature here." + " " + "Please enter a numerical value only.");

var tempNum = parseInt(convertNum);

console.log(tempNum);

var degreeF = (tempNum * 9) /5 + 32;
var degreeC = 5/9 * (tempNum - 32);
 

console.log(degreeF);
console.log(degreeC);


//if the person entered C convert the number to celsius c=5/9 (F-32)
//if the person entered F convert the number to fahrenheit f = c * 9/5 +32

if (degreeM === "F"){

	alert("The temperature is" + " " + degreeF + " " + "degrees Faherenheit.");
}	
else
{
	alert("The temperature is" + " " + degreeC + " " + "degrees Celsius.");
}


  
//“The temperature is X degrees Celsius.” Or “The temperature is X degrees Fahrenheit.”

//note: not sure where that additional number on my console is coming from?




//Hot Enough?
//Is it hot enough to go to the beach?
//var temp = 80;
//if the temperature is less than 75..

//if(temp < 75){
     //if its less than 75
    // console.log(“We will go to the beach!”);
//}else{
     //if it’s greater or equal to 75
     //console.log(“We will go to the movies.”);
//}


/*Check the Login

Make sure the user has the correct username and password. If the username doesn’t match then a specific message for that should be printed to the console. If the password doesn’t match a message should appear for that, etc. Only one error message should appear.

    Given:
        Username entered by user
        Password entered by user
        Correct username
        Correct password
    Result To Print Out:
        “Welcome, (place their username here)!”  - if the username and password is correct
        “User not found. Try again.” -if the username does not match
        “Password does not match our records.”  -if the username matches but the password does not*/

var userName = "Joe1977"; //username entered by user
var password = "Mybigtoe"; //password entered by user

var enterName = prompt("Enter your username here.");
var enterPass = prompt("Enter your password here");

if (enterName === userName && enterPass === password){
	console.log("Welcome, Joe1977!");
}

if (enterName != userName){
	console.log("User not found." + " " +"Try again.");
}

if(enterPass != password){
	console.log("Password does not match our records.")
}







