"use strict" 

/* 19FA-SWDV-131-001-Web Styling
 
		 Author: Kait Low
		 Date: April 18, 2019

		 LAST MODIFIED: 9/27/2019
 
		 Filename: clock.js
*/

/*Execute the function to run and display the countdown clock*/
runClock();
setInterval("runClock()", 1000);

/*Function to create and run the countdown clock*/
function runClock(){

/*Store the current date and time*/ 
var currentDay = new Date();
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

/*Display the current time and date*/
document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;
}

