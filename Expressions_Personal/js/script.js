//JavaScript

//Amy Littlefield-Bousamra 
// 1/13/2014
//Expressions Personal


//How much can I afford to save per paycheck. The poor person's guide to creating a savings: Assuming a biweekly paycheck.

//First find out from a paycheck how much you can save.

var paycheck = prompt ("Hi I am the Miser!" + " " + "I've been created to help poor pauper's increase their measly savings account." + " " + "However, (although you are most likely a vagabond) my calculations assume that you have a job and receive a biweekly paycheck." + " " + "That makes a total of twenty-six payments in a year.\n Welcome to week one!"+ " "  + "First let's find out much you can save each paycheck?" + " " + "Please enter your paycheck amount.");
var deductions = prompt("Please enter your biweekly deductions bills etc.");
var biweeklySavings = paycheck - deductions; //calculates amount available to save from paycheck. 

//find out how much you can save in a year if you consistently put in the same amount each paycheck. Assuming 26 paychecks a year (bi-weekly paycheck)


var result = "The amount you can save is" + " " + "$" + biweeklySavings +".";
alert(result);


var weekA = prompt ("Please enter the amount you would like to save for week one.");
var yearlyA = weekA * 26; //calculates amount saved in a year if one can save the same amount per paycheck.
var outcomeA  = prompt("The amount you have in your savings is" + " " + "$" + weekA + "." + " " + "If you saved the same amount every paycheck in a year you would have saved" + " " + "$" + yearlyA + "." + " " + "C'mon you poor pauper can't you give up a Starbucks or two?" + " " + "Please change or confirm the amount you would like saved.");



var savingsA = "The amount you have in your savings is"+ " " + outcomeA + ".";
alert(savingsA);

var paycheckB = prompt("Good afternoon Poor Pauper! Welcome to week two of creating a savings account" + " " + "You currently have" + " " + "$" + outcomeA + " " + "in your savings account." + " " + "Please enter your paycheck amount for this week.");
var deductionsB = prompt("Please enter your biweekly deductions bills etc.");
var biweeklySavingsB = paycheckB - deductionsB; //calculates amount available to save from paycheck. 

var result = "The amount you can save this week is" + " " + "$" + biweeklySavingsB + "." ;
alert(result);

var moneyA = parseInt(outcomeA);

var weekB = prompt("Please enter the amount you would like to save for week two.");

var moneyB = parseInt(weekB);

var total = moneyA + moneyB; //calculates the total amount in savings from week one and week two ...but isn't calculating..it only calculates with a * - or / but not with a +

var amountB  = "The amount you have in your savings is" + " " + "$" + total + "." + " " + "Congratulations! You are now a step above a vagabond.";
alert(amountB);













