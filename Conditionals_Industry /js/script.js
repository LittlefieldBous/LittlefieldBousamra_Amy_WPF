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


var introO = prompt("Will you need office Space?" + " " + "Please enter" + " " + "Y" + " " + "for Yes or" + " " + "N" + " " + "for No.");
 console.log(introO);
 
 if (introO === "Y"){
 var officeI = prompt("Enter downpayment or other initial costs for the office space here." + " " + "Please enter the numerical cost only.");
 var initCostO = parseInt(officeI);
  console.log(initCostO);
  } 


 if (introO === "Y"){
    var officeP = prompt("Enter your monthly cost for rent." + " " + "Please enter the numerical cost only.");
    var monthlyO = parseInt(officeP);
    console.log(monthlyO);
 }
     
 if (introO === "Y"){
    var billP = prompt("Enter any other monthly costs associated with renting your office space." + " " + "This may include gas and electric etc." + " " + "Please enter the numerical cost only.");
    var billsO = parseInt(billP);
    console.log(billsO);
 }

          
else {
   var monthlyO = 0;
   var initCostO = 0;
   var billsO =0;
   console.log(monthlyO);
   console.log(initCostO);
   console.log(billsO);
 
}

  var totalO = (monthlyO + initCostO) + billsO;
  alert("The monthly cost of the office space is" + "$" + monthlyO + "." + " " + "The initial start up office cost is" + "$" + initCostO + "." + " " + "Additional bills cost" + "$"+ billsO + "." + " " + "The total office cost is" + "$" + totalO + ".");
      console.log(totalO);
	

var adCostP= prompt("How much money do you plan to spend on marketing and advertising?" + " " + "Enter your initial cost for marketing." + " " + "Please enter the numerical cost only.");

var adCost = parseInt(adCostP);
alert("The initial cost of marketing is" + "$" + adCost + ".");
 console.log(adCost);
	
   var adsMonthP = prompt("Will you have a monthly advertising cost?" + " "
 + "Please enter" + " " + "Y" + " " + "for Yes or" + " " + "N" + " " + "for No.");
 console.log(adsMonthP);
 
   if (adsMonthP === "Y"){
    var adMonth = prompt("Please enter the monthly cost of advertising." + " " + "Please enter the numerical cost only.");
    var adMonthC = parseInt(adMonth);
    alert("The monthly cost of advertising is" + "$" + adMonthC + ".");
      console.log(adMonthC);
}	
        
   else {
   var adMonthC= 0; 
   console.log(adMonthC);
	
}
        
var phoneP = prompt("Enter your monthly phone costs." + " " + "Please enter the numerical cost only.")
var phoneCost = parseInt(phoneP);
alert("Your monthly phone cost is" + "$" + phoneCost+ ".");
 console.log(phoneCost);


var domainP = prompt("Enter your yearly cost for a domain name."+ " " + "Please enter the numerical cost only.")
var domainCost = parseInt(domainP);
alert("Your yearly domain name cost is" + "$" + domainCost + ".");
 console.log(domainCost);


var hostP = prompt("Enter your monthly cost for web hosting."+ " " + "Please enter the numerical cost only.")
var hostCost = parseInt(hostP);
alert("Your yearly domain name cost is" + "$" + hostCost + ".");
 console.log(hostCost);







