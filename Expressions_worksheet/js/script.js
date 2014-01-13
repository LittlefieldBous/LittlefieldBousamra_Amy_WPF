//JavaScript

//Amy Littlefield-Bousamra 
// 1/12/2014
//Expressions Worksheet


//Example area of a Rectangle
var width = 3;
var length= 6;
// area of a rectangle = length * width
var area = width * length;
console.log(area);




//Dog Years


//calculation of actual dog age when compared to human age. one can plug in how old the dog is to find the dog's actual age. For example the dog is 2 years old. Therefore in human years the dog is actually 14 years old.
var dogAge = "2";
var humanAge = "7";
var result =  dogAge * humanAge;
var phrase1 = "Sparky is";
var phrase2 = "human years old which is";
var phrase3 = "in dog years.";
var answer = String(phrase1) + " " + String(dogAge)  +" "+ String(phrase2) + " "+ String(result)+ " " + String(phrase3);

console.log(answer);

//Slice of Pie part I

var SliceNumber = "8";
var PeopleNumber = "9";
var PizzaNumber = "3";
var result = SliceNumber * PizzaNumber / PeopleNumber;
var p1 = "Each person ate";
var p2 = "slices of pizza at the party.";
var sliceperguest = String(p1) + " " + String(result) + " " + String(p2);

//Each person ate 2.66 slices of pizza at the party.

console.log(sliceperguest); 

//Slice of Pie II

var SliceNumber = "8";
var PeopleNumber = "10";
var PizzaNumber = "4";
var result = SliceNumber * PizzaNumber % PeopleNumber;
var s1 = "Sparky got";
var s2 = "slices of pizza.";
var sparkyshare = String(s1) + " " + String(result) + " " + String(s2);

console.log(sparkyshare);

//Sharky got 2 slices of pizza.


//Average shopping bill...array

var groceryCost = [145, 150, 120, 168, 110]; //amount spent per week for five weeks on groceries. index 0-4

var total = groceryCost[0] + groceryCost[1] + groceryCost[2] + groceryCost[3] + groceryCost[4];

var average = (groceryCost[0] + groceryCost[1] + groceryCost[2] + groceryCost[3] + groceryCost[4])/5;

var ph1 = "You have spent a total of $";
var ph2 = "on groceries over 5 weeks.";
var ph3 = "That is an average of $";
var ph4 = "per week";

var budget = String(ph1) + String(total) + " " + String(ph2) + " " + String(ph3) + String(average) + " " + String(ph4);

console.log(budget);
// You have spent a total of $X on groceries over 5 weeks. That is an average of $X per week”

//discounts

var item = "Moonboots";
var originalPrice = "50.00";
var percentOff = "20%";
var percentageRate = ".20";
var salesDiscount = percentageRate * originalPrice;
var salesPrice = originalPrice - salesDiscount;
var stateTax = ".06";
var TaxTotal = salesPrice * stateTax;
var SalesTotal = salesPrice + TaxTotal;

var n1 = "Your";
var n2 = "was originally $";
var n3 = "but after a";
var n4 = "discount, it is now $";
var n5 = "without tax, and $";
var n6 ="with tax.";

//Your X was originally $X, but after a X% discount, it is now $X without tax, and $X with tax.

var discount = String(n1) + " " + String(item) + " " + String(n2) + String(originalPrice) + "," +  " " + String(n3)+ " " + String(percentOff)+" " + String(n4) + (salesPrice) + " " + String(n5) + String(SalesTotal) + " " + String(n6);

console.log(discount);












