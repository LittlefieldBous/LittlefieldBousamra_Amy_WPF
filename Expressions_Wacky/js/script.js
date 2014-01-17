//JavaScript

//Amy Littlefield-Bousamra 
// 1/13/2014
//Expressions Wacky


//The Chef's New Dish Casserole Name Calculator: naming a new dish based on prefixes and suffixes found in dishes.
//found pasta endings listed in Wikapedia //Italian pasta suffixes are 0-30 Italian pasta prefixes 30-48

//Array

var dishNames = ["ini", "elli", "telli", "delle", "icelli", "coti", "celloni", "illi" , "i", "etti",  "guine", "uccine", "ette", "ine", "elle", "izzoni", "loni", "zoni", "oni", "one", "otti", "ozzi", "acci", "iani", "strussel", "casserole", "Paella", "Noodlepie", "ragout", "moussaka", "tada", "Ba", "Big", "Bucat", "Capp", "Fett", "Fus", "Fust", "Lin", "Macar", "Mani", "Masala", "Pappar", "Pell", "Pop", "Spaghett", "Taglia", "Verm", "Zit", "Foo", "Hungarian", "La"];


var namegeneratorA  = dishNames[48] + dishNames[17];
console.log(namegeneratorA);

var namegeneratorB = dishNames[32] + dishNames[0];
console.log(namegeneratorB);

var namegeneratorC = dishNames[50] + dishNames[27];
console.log(namegeneratorC);

var namegeneratorD = dishNames[49] + dishNames[2];
console.log(namegeneratorD);

var chefHelper = "Have you ever tried," + " " + namegeneratorB + "?" + " " +  "or a bowl of delcious" + " " + namegeneratorA + "?" + " " + "Or maybe some"+ " " + namegeneratorC + "?" + " " + "The Chef helper will aid you in creating just the right name for your new delectable dish!" + " " + "Soon you'll hear your dinner guests remark that" + " " + namegeneratorD + " " + "is excellent!";

alert(chefHelper);

var prefix = prompt ("Please enter a prefix for your dish here");
var nameA = prefix + dishNames[15];
console.log(nameA);

var dishA = "Would you like to have some," + " " + nameA + "?";
alert(dishA);

var suffix = prompt ("Please enter a suffix for your dish here");
var nameB =  dishNames[37] + suffix;
console.log(nameB);

var dishB = "Or perhaps you would like to try some," + " " + nameB + "?";
alert(dishB);

var firstname =  prompt ("Still cannot find a name for your deluctable dish? Combine your own prefixes and suffixes to create a name." + " " + "Please enter a prefix for your dish here.");

var suffix = prompt ("Please enter a suffix for your dish here");
var nameC =  firstname + suffix;
console.log(nameC);

var dishC = "You have named your dish," + " " + nameC + ".";
alert(dishC);




