//JavaScript

//Amy Littlefield-Bousamra 
//Conditionals Industry
// 1/23/2014

//Start-up costs for a web design business

//References used: website tutsplus 9 Steps to Starting your Freelance Web Design Business, website WebDesignerDepot Starting a Web Design Business


var yes = "Y";
var no = "N";

var introP = prompt("Hello, I'm start-up Sal!" + " " + "I am here to help calculate start-up costs for a web design business." + " " + "We will begin with figuring out the initial start-up cost." + " " + "Will you need to purchase new software?" + " "
 + "Please enter" + " " + "Y" + " " + "for Yes or" + " " + "N" + " " + "for No.");
 
if (introP === "Y"){
    var softwareP = prompt("Please enter the cost of any new software purchased.");
    alert(softwareP);
    var softwareCost = parseInt(softwareP);
    alert("The cost of software is" + "$" + softwareCost + ".");
      console.log(softwareCost);
}	
        
else {
   var softwareCost = 0; 
    console.log(softwareCost);
	
}













