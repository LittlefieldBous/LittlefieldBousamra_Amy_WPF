//JavaScript

//Amy Littlefield-Bousamra 
// 1/19/2014

//Conditionals Wacky

//references: The site: //brainwreck.com/lists/965/15-Real-Fortune-Cookies-You-Wish-You-d-Opened/6
//had some funny fortune sayings. and the 1980s toy magic eight ball..I still have mine.

//The cyber 8 ball...


var NumberA = prompt("Welcome to the pyschic cyber 8 ball!" + " " + "Simply ask your computer a yes or no question and put in the first number" + "(" + "1-10" + ")" + " " + "that pops in your head!"); //person enters the number

var NumberC = parseInt(NumberA);//string changes to a number
 
if ((NumberC >= 1 && NumberC <=3) || ( NumberC >= 7 && NumberC <=8) ) { //if the number is greater than or equal to 1 and the number is less than or equal to 3...OR the number is greater than or equal to 7 and the number is less than 8..signs will point to yes.

console.log("Signs point to Yes!");
alert("Signs point to Yes!");

}

else if (NumberC >= 4 && NumberC <=6){ //if the number is greater than or less than 4 and the number is less than or equal to six the prompt will say dont count on it!

console.log("Don't count on it!");
alert("Don't count on it!");

}else{ //false any other number such as 9 or 10 the prompt will say concentrate harder.

console.log("Concentrate and ask again!");
alert("Concentrate and ask again!");

}


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



