//Javascript-Conditionals_Worksheet
//Amy littlefield-Bousamra
//1-19'2014

/*Convert a temperature to either degrees Celsius or degrees Fahrenheit depending on what the user has entered. If the user puts a “C” for the unit, the calculator should convert to Celsius. If the user puts “F” for the unit, the calculator should convert to Fahrenheit.*/
    
/*Given:
Degrees (in F or C)
Unit (a string holding an “F” or a “C”)
Result:
“The temperature is X degrees Celsius.” Or “The temperature is X degrees Fahrenheit.”
Data Sets to Test: (Note that data sets are not the only numbers that should work with your code.)


/*32F is 0C
100C is 212F
90F is 32.22C*/


//Convert 37°C to Fahrenheit.
//37°C x  9/5 + 32 = 98.6°F

//Convert 98.6°F to Celsius.
//(98.6°F  -  32)  x  5/9 = 37°C



var fahren = "F";
var cels = "C";


var degreeM = prompt("Do you want to convert your temperature to Celsius or Fahrenheit?" + " " + "Please enter" + " " + "C" + " " + "for Celsius and" + " " + "F" + " " +  "for Fahrenheit.");
var convertNum = prompt("Enter the temperature here." + " " + "Please enter a numerical value only.");

var tempNum = parseInt(convertNum);
var degreeF = (tempNum * 9) /5 + 32;
var degreeC = 5/9 * (tempNum - 32);
 
console.log(degreeM);
console.log(tempNum);
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
















