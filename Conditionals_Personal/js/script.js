//JavaScript

//Amy Littlefield-Bousamra 
// 1/23/2014
//Conditionals Personal


//Starting a berry farm

//What Soil PH is best for growing berries// Using soil thermometers to determine what to plant. 


//soil ph range for each berry


/*var alkaline = >= 7.0 <= 7.5; 
var neutral = >= 6.5 <= 6.9;
var slightlyAcid = >= 6.0 <= 6.4;
var acid = >= 5.5 <= 5.9;
var veryAcid = >=5.0 <= 5.4;
var extremeAcid = >=4.0 <= 4.9;*/


var FindPH = prompt("Please enter your soil's PH."); //person enters there soils ph

var soilPH = parseInt(FindPH); 

if(soilPH >= 7.0 && soilPH <= 7.5){

   //codes performed if condition is true
    
    alert("Your soil is alkaline." + " " + "Not many berries grow in this soil's PH but saskatoon berries and salmonberries can grow in this soil");
    
	console.log ("Your soil is alkaline." + " " + "Not many berries grow in this soil's PH." + " " + "However," + "saskatoon berries, crowberries and salmonberries can grow in this soil"); //if true
	

	
}else if(soilPH >= 6.5 && soilPH <= 6.9) {

    alert("Your soil is in the neutral PH range." + " " + "Berries that can grow in this soil PH include:" + " " +  "saskatoon berries, currents, gooseberries, coffeeberries, black chokeberry, wolfberries, pineberries, crowberries and salmonberries."); 
    
        console.log("Your soil is in the neutral PH range." + " " + "Berries that can grow in this soil PH include:" + " " +  "saskatoon berries, currents, gooseberries, coffeeberries, wolfberries, pineberries, crowberries and  salmonberries.");
        
               
        	
}if(soilPH >= 6.0 && soilPH <= 6.4) { 

     alert("Your soil is considered slightly acidic." + " " + "Berries that can grow in this soil's PH include:" + " " +  "saskatoon berries, salmonberries, pineberries, black chokeberry currents, jostaberries, gooseberries, elderberries, crowberries strawberries, blackberries, and raspberries.");

        console.log("Your soil is considered slightly acidic." + " " + "Berries that can grow in this soil's PH include:" + " " +  "saskatoon berries, salmonberries, pineberries, currents, jostaberries, elderberries, gooseberries, crowberries, strawberries, blackberries, and raspberries.");
        
}else if(soilPH >= 5.5 && soilPH <= 5.9) { 

 alert("Your soil is acidic." + " " + "Berries that can grow in this soil's PH include:" + " " +  "saskatoon berries, salmonberries, pineberries, currents, jostaberries, elderberries, gooseberries, strawberries, crowberries,blackberries, and raspberries.");


console.log("Your soil is acidic." + " " + "Berries that can grow in this soil's PH include:" + " " +  "saskatoon berries, salmonberries, pineberries, currents, jostaberries, elderberries, gooseberries, strawberries, crowberries, blackberries, rabbit-eye blueberries and raspberries.");

}if(soilPH >= 4.5 && soilPH <= 5.4) { 

 alert("Your soil is very acidic." + " " + "Berries that can grow in this soil's PH include:" + " " +   " northern blueberries, crowberries, cranberries, huckleberries.");

console.log ("Your soil is very acidic." + " " + "Berries that can grow in this soil's PH include:" + " " +   "northern blueberries, crowberries, cranberries, huckleberries.");


}else if(soilPH >= 4.0 && soilPH <= 4.4) { 

     alert("Your soil is extremely acidic." + " " + "Berries that can grow in this soil's PH include:" + " " +   "northern blueberries and crowberries");
     
    console.log("Your soil is extremely acidic." + " " + "Berries that can grow in this soil's PH include:" + " " +   "northern blueberries and crowberries");
        
}else {
    //add sulfur to lower your soil's PH // or add garden lime to increase the soil's PH
   alert("That PH level is out of the proper range for gardening." + "However, if all else fails you should at least be able to grow a crowberry.");
  
	console.log("That PH level is out of the proper range for gardening." + "However, if all else fails you should at least be able to grow a crowberry.");
	//if false
}

/*var yes = "Y";
var no = "N";

//changing your soil's PH 

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
	
}*/


var berryFinder = prompt("Don't know the soil's PH for the type of berry you'd like to grow?"+ " " +"Please enter the name of the berry you'd like to grow.");

if("blueberries || blueberry") { 

 alert("Blueberries need a pH between 4.5 and 5.5.");
 console.log ("Blueberries need a pH between 4.5 and 5.5.");
 }

var lower = "L";
var raise = "R";

//changing your soil's PH 

var changePH= prompt("Will you need to lower or raise your soil's PH?" + " " + "Enter" + " " + "L" + "for lower or" + " "  + "R" + " " + "if you'll need to raise your soil's PH.");

 console.log(changePH);
 
if (changePH === "L"){
   
    alert("Add elemental sulfur to lower the soil's PH." + " " + "This will make our soil more acidic.");
    
      console.log("Add elemental sulfur to lower the soil's PH." + " " + "This will make our soil more acidic.");
}	
        
else if (changePH === "R"){
   
   alert("If you wish to increase your soil's ph and make the soil less acidic use some type of garden lime or dolomite limestone." + " " + "if all else fails you should at least be able to grow a crowberry.");
	
	console.log("If you wish to increase your soil's ph and make the soil less acidic use some type of garden lime or dolomite limestone." + " " + "if all else fails you should at least be able to grow a crowberry.");

}





