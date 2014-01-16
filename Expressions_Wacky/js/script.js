//JavaScript

//Amy Littlefield-Bousamra 
// 1/13/2014
//Expressions Wacky


//The Chef's New Dish Casserole Name Calculator: naming a new dish based on prefixes and suffixes found in dishes.
//found pasta endings listed in Wikapedia //Italian pasta suffixes are 0-27 Italian pasta prefixes 27-43

//Array

var dishNames = ["ini", "elli", "telli", "delle", "icelli", "coti", "celloni", "illi" , "i", "etti",  "guine", "uccine", "ette", "ine", "elle", "izzoni", "loni", "zoni", "oni", "one", "otti", "ozzi", "acci", "iani", "strussel", "casserole", "paella", "noodlepie", "ragout", "moussaka", "tada", "Ba", "Big", "Bucat", "Capp", "Fett", "Fus", "Fust", "Lin", "Macar", "Mani", "Masala", "Pappar", "Pell", "Perciat", "Spaghett", "Taglia", "Verm", "Zit", "foo"];


var namegenerator = dishNames[44] + dishNames[2];
console.log(namegenerator);

var namegenerator = dishNames[22] + dishNames[2];
console.log(namegenerator);

var namegenerator = dishNames[38] + dishNames[5];
console.log(namegenerator);

var namegeneratorA = dishNames[47] + dishNames[24];
console.log(namegeneratorA);

var prefix = prompt ("Please enter a prefix for your dish here");
var nameA = prefix + dishNames[1];
console.log(nameA);

var suffix = prompt ("Please enter a suffix for your dish here");
var nameB =  dishNames[30] + suffix;
console.log(nameB);

var firstname =  prompt ("Still cannot find a name for your deluctable dish? Combine your own prefixes and suffixes to create a name." + " "+ "Please enter a prefix for your dish here");

var suffix = prompt ("Please enter a suffix for your dish here");
var nameC =  firstname + suffix;
console.log(nameC);




