
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

callCost.value = 0
smsCost.value = 0

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

    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn){
    var billItemTypeSet = checkedRadioBtn.value

    if (billItemTypeSet === "call"){
      totalCalls += callValue
    }

    else if (billItemTypeSet === "sms"){
       totalSms +=  smsValue;

      }

    }

    callsTotalSet.innerHTML = totalCalls.toFixed(2);
    smsTotalSet.innerHTML = totalSms.toFixed(2);
    var costTotal = totalCalls + totalSms;
    totalCostSet.innerHTML = costTotal.toFixed(2);

    if (costTotal > warnLevel){
        totalCostSet.classList.add("warning");
    }


    if (costTotal > critLevel){
        totalCostSet.classList.add("danger");
    }


}


 billAddTotalBtn.addEventListener('click', setBillTotal);

 updateSetButton.addEventListener('click', updateSet)
