// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var billTypeText = document.querySelector(".billTypeText");
var billBtn = document.querySelector(".addToBillBtn");
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var totalCostElem = document.querySelector(".totalOne");
var textBillBtn = document.querySelector(".textBillAddBtn")


var callsTotals = 0;
var smsTotals = 0;

function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
    // update the correct total
    if (billTypeEntered === "call"){
        callsTotals += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotals += 0.75;
    }

    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callsTotals.toFixed(2);
    smsTotalElem.innerHTML = smsTotals.toFixed(2);
    var totalCosts = callsTotals + smsTotals;
    totalCostElem.innerHTML = totalCosts.toFixed(2);


   //color the total based on the criteria
   if (totalCosts >= 50){
       // adding the danger class will make the text red
       totalCostElem.classList.add("danger");
   }
   else if (totalCosts >= 30){
       totalCostElem.classList.add("warning");
   }
}
billBtn.addEventListener('click', (textBillTotal));














//textBillBtn.addEventListener('click', function())
