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

var totalCalls = 0;
var totalSms = 0;

var callValue = 0;
var smsValue = 0;

var warnLevel = 0;
var critLevel = 0;

var costTotal = totalCalls + totalSms;

//var totalCost = 0;

function updateSet(){
  var updateCall = callCost.value
  var updateSms = smsCost.value
  var updateWarn = warningLevel.value
  var updateCrit = criticalLevel.value

  if (callCost != ""){
    callValue = parseFloat(updateCall)
    console.log(callValue)
  }
  if (smsCost != ""){
    smsValue = parseFloat(updateSms)
    console.log(smsValue)
  }
  if (warningLevel != ""){
    warnLevel = parseFloat(updateWarn)
    console.log(warnLevel)

  }
  if (criticalLevel != ""){
    critLevel = parseFloat(updateCrit)
    console.log(critLevel)

  }

}

function setBillTotal(){
    // get the value entered in the billType textfield
    //var billTypeEntered = billItemType.value.trim();
    // update the correct total
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn){
    var billItemTypeSet = checkedRadioBtn.value

        // billItemType will be 'call' or 'sms'
    if (billItemTypeSet === "call"){
      totalCalls += callValue //* 2.75//callCost * 2.75

    }

    else if (billItemTypeSet === "sms"){
       totalSms +=  smsValue;

      }

    }

    callsTotalSet.innerHTML = totalCalls.toFixed(2);
    smsTotalSet.innerHTML = totalSms.toFixed(2);
    var costTotal = totalCalls + totalSms;
    totalCostSet.innerHTML = costTotal.toFixed(2);

    if (costTotal >= warnLevel){
        totalCostSet.classList.add("warning");
    }

    if (costTotal >= critLevel){
        // adding the danger class will make the text red
        totalCostSet.classList.add("danger");
    }


}



 billAddTotalBtn.addEventListener('click', setBillTotal);
 updateSetButton.addEventListener('click', updateSet)
