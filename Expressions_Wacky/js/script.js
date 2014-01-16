//JavaScript

//Amy Littlefield-Bousamra 
// 1/13/2014
//Expressions Wacky


//var orangeBins = [234, 567, 883];
//var total = orangeBins[0] + orangeBins[1] + orangeBins[2];
//console.log(total);

//concatenating strings...

//var firstName = "Kermit";
//var lastName = "The Frog";
//var fullName = firstName + " " + lastName;

//console.log(fullName);

//var muppetNames =["Kermit","Miss Piggy"];

//muppetNames[1] = "Rizzo";
//muppetNames[2] = "Fozzy";

//var num=2;

//console.log (muppetNames [num]);


//The Chef's New Dish Name Calculator: naming a new dish based on prefixes and suffixes found in dishes.
//found pasta endings listed in Wikapedia //Italian pasta suffixes are 0-27 Italian pasta prefixes 27-43

//Array

var dishNames = [ "ini", "elli", "telli", "delle", "icelli", "coti", "celloni", "illi" , "i", "etti",  "guine", "uccine", "ette", "ine", "elle", "izzoni", "loni", "zoni", "oni", "one", "otti", "ozzi", "acci", "iani", "casserole", "pie", "ragout", "moussaka", "Ba", "Big", "Bucat", "Capp", "Fett", "Fus", "Fust", "Lin", "Macar", "Mani", "Pappar", "Pell", "Perciat", "Spaghett", "Taglia", "Verm", "Zit"]


var namegenerator = dishNames[44] + dishNames[2];
console.log(namegenerator);

var prefix = prompt ("Please enter a prefix for your dish here");
var nameA = prefix + dishNames[1];
console.log(nameA);

var suffix = prompt ("Please enter a suffix for your dish here");
var nameB =  dishNames[30] + suffix;
console.log(nameB);




