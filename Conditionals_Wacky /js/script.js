//JavaScript

//Amy Littlefield-Bousamra 
// 1/19/2014

//Conditionals Wacky



//The cyber 8 ball...


var NumberA = prompt("Welcome to the pyschic cyber 8 ball!" + " " + "Simply ask your computer a yes or no question and put in the first number" + "(" + "1-10" + ")" + " " + "that pops in your head!");

var NumberC = parseInt(NumberA);
 
if ((NumberC >= 1 && NumberC <=3) || ( NumberC >= 7 && NumberC <=8) ) {

console.log("Signs point to Yes!");
alert("Signs point to Yes!");

}

else if (NumberC >= 4 && NumberC <=6){

console.log("Don't count on it!");
alert("Don't count on it!");

}else{

console.log("Concentrate and ask again!");
alert("Concentrate and ask again!");

}


