//JavaScript

//Amy Littlefield-Bousamra 
//Conditionals Industry
// 1/23/2014

//Start-up costs for a web design business

//References used: website tutsplus 9 Steps to Starting your Freelance Web Design Business, website WebDesignerDepot Starting a Web Design Business


var yes = "Y";
var no = "N";

var introP = prompt("Hello, I'm start-up Sal!" + " " + "I am here to help calculate start-up costs for a web design business." + " " + " " + "Will you need to purchase new software?" + " "
 + "Please enter" + " " + "Y" + " " + "for Yes or" + " " + "N" + " " + "for No.");
 console.log(introP);
 
if (introP === "Y"){
    var softwareP = prompt("Please enter the cost of any new software purchased.");
    var softwareCost = parseInt(softwareP);
    alert("The cost of software is" + "$" + softwareCost + ".");
      console.log(softwareCost);
}	
        
else {
   var softwareCost = 0; 
   console.log(softwareCost);
	
}


var introH = prompt("Will you need health insurance?" + " " + "Please enter" + " " + "Y" + " " + "for Yes or" + " " + "N" + " " + "for No.");
 console.log(introH);
 
if (introH === "Y"){
    var healthP = prompt("Enter your monthly cost for health insurance." + " " + "Please enter the numerical cost only.");
    var healthIns = parseInt(healthP);
    alert("The cost of health insurance" + "$" + healthIns + ".");
      console.log(healthIns);
}	
        
else {
   var healthIns = 0; 
    console.log(healthIns);
	
}













