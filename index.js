// Code your solution in this file!
let drivers = [Charles, Erick, Mirna, Carlos, Luis, Mario];
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2);
    ;}
function returnLastTwoDrivers(drivers){   
    return drivers.slice((drivers.length-2));
    ;}
let selectingDrivers = [(returnFirstTwoDrivers), (returnLastTwoDrivers)];
//function createFareMultiplier(num){
        //let multiplier = 5;
        //const newFare = function () { return num * multiplier;}
       // return newFare;
   // ;
//}
//function fareDoubler(num){
    //let multiplier = 2;
   //return createFareMultiplier;
    
//}

//function fareTripler(num){
   // let multiplier = 3;
    //return createFareMultiplier;
//}
function selectDifferentDrivers(drivers, eitherfunction){
    //drivers is needed here as a parameter--if it is not, the array is out of scope
    //the inner functions will need access to the driver array and won't have it unless it's in the parent 
    //that might be wrong, but it helped me here. 
    if (eitherfunction === returnFirstTwoDrivers){
            return returnFirstTwoDrivers(drivers);
        }
    else {
        return returnLastTwoDrivers(drivers);
    }
}