// Code your solution in this file!
let drivers = ['Charles', 'Erick', 'Mirna', 'Carlos', 'Luis', 'Mario'];
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2);
    ;}
function returnLastTwoDrivers(drivers){   
   return drivers.slice(-2);
  ;}
//create selectingDrivers array with functions as the elements
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]


function createFareMultiplier(i){
        return function(fare){return fare*i;}
}
const fareDoubler= createFareMultiplier(2);

const fareTripler=createFareMultiplier(3);

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