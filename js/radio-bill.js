// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


var billItemType = document.querySelector(".billItemTypeRadio");
var billAddBtn = document.querySelector(".radioBillAddBtn");
var callsTotalTwo = document.querySelector(".callTotalTwo");
var smsTotalTwo = document.querySelector(".smsTotalTwo");
var totalCostTwo = document.querySelector(".totalTwo");

var callsTotal = 0;
var smsTotal = 0;



function textBillTotal(){
    // get the value entered in the billType textfield
    //var billTypeEntered = billItemType.value.trim();
    // update the correct total
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
    }
    if (billItemType === "call"){
        callsTotal += 2.75
    }
    else if (billItemType === "sms"){
        smsTotal += 0.75;
    }

    //update the totals that is displayed on the screen.
    callsTotalTwo.innerHTML = callsTotal.toFixed(2);
    smsTotalTwo.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostTwo.innerHTML = totalCost.toFixed(2);


   //color the total based on the criteria
   if (totalCost >= 50){
       // adding the danger class will make the text red
       totalCostTwo.classList.add("danger");
   }
   else if (totalCost >= 30){
       totalCostTwo.classList.add("warning");
   }
}
billAddBtn.addEventListener('click', (textBillTotal));
