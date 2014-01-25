//JavaScript

//Amy Littlefield-Bousamra 
// 1/19/2014

//Conditionals Wacky

//references: The site: //brainwreck.com/lists/965/15-Real-Fortune-Cookies-You-Wish-You-d-Opened/6
//had some funny fortune sayings. and the 1980s toy magic eight ball..I still have mine.

//The cyber 8 ball...

//a ternary expression

var fortune;
var NumberA = prompt("Welcome to the pyschic cyber 8 ball!" + " " + "Simply ask your computer a yes or no question and put in the first number" + "(" + "1-10" + ")" + " " + "that pops in your head!"); //person enters the number

var NumberC = parseInt(NumberA);//string changes to a number
 
fortune = (NumberC >= 1 && NumberC <=4) || ( NumberC >= 8 && NumberC <=10) ? "Signs point to Yes!" : "Outlook Hazy, Try Again!"; //if the number is greater than or equal to 1 and less than  or equal to four : Signs point to yes! or if number is greater than or equal to 8 and less than or equal to 10 outlook hazy try again!


alert(fortune);

console.log(fortune);


var NumberB = prompt("Want to try the pyschic cyber 8 ball again?" + " " + "Simply ask your computer a yes or no question and put in the first number" + "(" + "1-10" + ")" + " " + "that pops in your head!"); //person enters the number
var NumberD = parseInt(NumberB);//string changes to a number


fortune = (NumberD >= 1 && NumberD <=4) || (NumberD >9) ? "Don't count on it!": "Outlook Good!"; console.log(fortune);
alert(fortune); //greater than or equal to 1, less than or equal to 4 = don't count on it. or greater than 9. otherwise outlook good!

var zelda = "Z"; //Z for Zelda
var mike = "M"; //M for Mike the Magnificent //else C or any other letter typed will go to confucius



var pyschicRead = prompt("Would you like a fortune from Zelda," + " " + "Mike the Magnificent or confucius?"+ " " + "Please enter" + " " + "Z" + " " + "for Zelda" + " " + "M" + " " + "for Mike the magnificent." + " " + "Or" +  " " + "C" + " " + "for confucius."); //person will either input a Z for Zelda, a M for Mike or a C (and any other letter someone puts will be confuscius.

 console.log(pyschicRead);
 
if (pyschicRead === "Z"){ 
 
    
    alert("Zelda says:" + " " + "When you squeeze an orange, orange juice comes out!" + " " + "-Because that's what's inside." + " " + "Lucky Numbers:" + "7," + "18," + "19," + "24," + "38," + " " + "and powerball," + "12.");      
      
console.log("Zelda says:" + " " + "When you squeeze an orange, orange juice comes out!" + " " + "-Because that's what's inside." + " " + "Lucky Numbers:" + "7," + "18," + "19," + "24," + "38," + " " + "and powerball," + "12."); 

}else 

if(pyschicRead === "M"){

  alert("Mike the Magnificent says," + " " + "The road to riches is paved with homework." + " " + "Lucky Numbers:" + " " + "9," + "21," + "38," + "42," + "47," + " " + "and powerball," + "32.");   
   
   console.log("Mike the Magnificent says," + " " + "The road to riches is paved with homework." + " " + "Lucky Numbers:" + " " + "9," + "21," + "38," + "42," + "47," + " " + "and powerball," + "32."); 
	
}else{

alert("Confucius say," + " " + "Ignore previous fortunes." + " " + "But playing lotto is worth try and...if you win," + " " + "please consider supporting Confucius's early retirement fund." + " " + "Lucky Numbers:" + "3," + "17," + "22," + "43," + "50," + " " + "and powerball," + "13.");

console.log("Confucius say," + " " + "Ignore previous fortunes." + " " + "But playing lotto is worth try and...if you win," + " " + "please consider supporting Confucius's early retirement fund." + " " + "Lucky Numbers:" + "3," + "17," + "22," + "43," + "50," + " " + "and powerball," + "13.");

}



