//JavaScript

//Amy Littlefield-Bousamra 
// 1/13/2014
//Expressions Personal


//How much can I afford to save per paycheck. The poor person's guide to creating a savings: Assuming a biweekly paycheck.

//First find out from a paycheck how much you can save.

var paycheck = prompt ("We are calculating your bi-weekly savings according to your paycheck. \n Please enter your paycheck amount.");
var deductions = prompt("Please enter your bi-weekly deductions bills etc.");
var biweeklySavings = paycheck - deductions; //calculates amount available to save from paycheck. 

//find out how much you can save in a year if you consistently put in the same amount each paycheck. Assuming 26 paychecks a year (bi-weekly paycheck)


var result = "The amount you can save is"+ " " + biweeklySavings +".";
alert(result);


var weekA = prompt ("Please enter the amount you would like to save for week one.");
var yearlyA = weekA * 26; //calculates amount saved in a year if one can save the same amount per paycheck.
var outcomeA  = prompt("The amount you have in your savings is $" + weekA + "." + " " + "If you saved the same amount every paycheck in a year you would have saved $" + yearlyA + "." + "Please change or reenter the amount you would like saved.");

var yearlyB = outcomeA * 26; //calculates amount saved in a year if one can save the same amount per paycheck.
var outcomeB = prompt("The amount you have in your savings is $" + outcomeA + "." + " " + "If you saved the same amount every paycheck in a year you would have saved $" + yearlyB + "." + "Please change or confirm the amount you would like saved.");
var resultb = "The amount you have saved is"+ " " + outcomeB + ".";
alert(resultb);

//var weekTwo = prompt("Please enter your measly savings this week you poor pauper");
//var inSavings = prompt("please enter what coinage you already have!");
//var total = inSavings + weekTwo;
//alert(total);
//var savingB = ("Your now a step above a vagabond! \n The total in your savings account is" + " " + total + ".");
//alert(savingB);


//alert(outcome);













