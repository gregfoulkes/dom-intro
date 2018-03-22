// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
var billItemType = document.querySelector(".billItemTypewithSettings");

var callCost = document.querySelector(".callCostSetting")
var smsCost = document.querySelector(".smsCostSetting")


var callsTotalSet = document.querySelector(".callTotalSettings");
var smsTotalSet = document.querySelector(".smsTotalSettings");
var totalCostSet = document.querySelector(".totalSettings");

var warnLevel = document.querySelector(".warningLevelSetting")
var citicalLevel = document.querySelector(".criticalLevelSetting")

var updateSetButton = document.querySelector(".updateSettings")
var billAddBtn = document.querySelector(".addTotalBillBtn")

var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;

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
      //  callsCost += 2.75
        callsTotal = callCost += 2.75
    }
    else if (billItemType === "sms"){
      smsTotal =  smsCost += 0.75;
    }

    callsTotalSet.innerHTML = callsTotal.toFixed(2);
    smsTotalSet.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostSet.innerHTML = totalCost.toFixed(2);
/*
    if (totalCostSet >= citicalLevel){
        // adding the danger class will make the text red
        totalCost.classList.add("danger");
    }
    else if (totalCostSet >= warnLevel){
        totalCost.classList.add("warning");
    }
*/
}

 billAddBtn.addEventListener('click', textBillTotal);
 updateSetButton.addEventListener('click', textBillTotal)
