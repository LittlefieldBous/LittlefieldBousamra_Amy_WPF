//Javascript-Conditionals_Worksheet
//Amy littlefield-Bousamra
//1-19'2014


//1.
/*Convert a temperature to either degrees Celsius or degrees Fahrenheit depending on what the user has entered. If the user puts a “C” for the unit, the calculator should convert to Celsius. If the user puts “F” for the unit, the calculator should convert to Fahrenheit.*/
//Tests   
/*32F is 0C
100C is 212F
90F is 32.22C*/

//An example:
//Convert 37°C to Fahrenheit.
//37°C x  9/5 + 32 = 98.6°F

//Convert 98.6°F to Celsius.
//(98.6°F  -  32)  x  5/9 = 37°C

var fahren = "F"; //unit holding F
var cels = "C"; //unit holding C


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

//2.
      
var correctName = prompt("Please choose a username");
var correctPass = prompt("Please choose a password");       

var userName = correctName; //username entered by user
var password = correctPass; //password entered by user
var greeting = "Thank you for your membership!"+ " " + "Click enter to proceed to login.";
alert(greeting);

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


//3.
//multiple conditions

/*The local movie theater in town has a ticket price of $12.00 but if you are a senior (55 and older), under 10 you get the discounted price of $7.00. In addition, if a customer is seeing a movie between 3pm and 5pm they can also get the discounted price.
Determine which of the two prices the customer is eligible for.

    Given:
        Time of Movie (Assume whole numbers here)
        Age of the customer
     Result To Print Out:
        “The ticket price is X”*/


//Movie Ticket Price

var movieTime = 7;
var custAge = 13

if(custAge > 54 || custAge < 10 || movieTime >2 && movieTime <= 5){ //ticket price is $7 if customer is 55 and older or under 10 years old
	console.log("The ticket price is $7.00.");
}else {
	console.log("The ticket price is $12.00.");
}







