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
var billItemTypeSet = document.querySelector(".billItemTypewithSettings");

var callCost = document.querySelector(".callCostSetting")
var smsCost = document.querySelector(".smsCostSetting")


var callsTotalSet = document.querySelector(".callTotalSettings");
var smsTotalSet = document.querySelector(".smsTotalSettings");
var totalCostSet = document.querySelector(".totalSettings");

var warningLevel = document.querySelector(".warningLevelSetting")
var criticalLevel = document.querySelector(".criticalLevelSetting")

var updateSetButton = document.querySelector(".updateSettings")
var billAddTotalBtn = document.querySelector(".addTotalBillBtn")

var callsTotals = 0;
var smsTotals = 0;
//var totalCost = 0;

function setBillTotal(){
    // get the value entered in the billType textfield
    //var billTypeEntered = billItemType.value.trim();
    // update the correct total
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn){
    var billItemTypeSet = checkedRadioBtn.value
  //  console.log(billItemTypeSet);

        // billItemType will be 'call' or 'sms'
    if (billItemTypeSet === "call"){
      //  callsCost += 2.75
      callCost = 3 * 2.75//callCost * 2.75
        console.log(callsTotals);

    }
    /*
    else if (billItemTypeSet === "sms"){
       smsCost * 0.75;
    }*/
    }
    callsTotalSet.innerHTML = callCost.toFixed(2);
  //  smsTotalSet.innerHTML = smsCost.toFixed(2);
    var totalCosts = callCost + 0;
    totalCostSet.innerHTML = totalCosts.toFixed(2);

    if (totalCostSet >= criticalLevel){
        // adding the danger class will make the text red
        totalCostSet.classList.add("danger");
    }
    else if (totalCostSet >= warningLevel){
        totalCostSet.classList.add("warning");
    }

}

 billAddTotalBtn.addEventListener('click', setBillTotal);
 updateSetButton.addEventListener('click', setBillTotal)
