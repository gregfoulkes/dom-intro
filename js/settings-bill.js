
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

callCost.value = 0.00
smsCost.value = 0.00

function CheckTotal(){

  var totalCalls = 0;
  var totalSms = 0;

  var callValue = 0;
  var smsValue = 0;

  var warnLevel = 0;
  var critLevel = 0;


  function callUpdate(value){
     callValue = parseFloat(value)
      return callValue
  }

  function smsUpdate(value){
    smsValue = parseFloat(value)
      return smsValue
  }

  function warningLevelUpdate(value){
          warnLevel = parseFloat(value)
          return warnLevel
        }



  function criticalLevelUpdate(value){
          critLevel = parseFloat(value)
          return critLevel
          }



  function billItemCalculate (value){

    if (value === "call"){
      totalCalls += callValue
    }

    else if (value === "sms"){
       totalSms +=  smsValue;

      }
  }


  function allCalls(){
    return totalCalls.toFixed(2)
  }

  function allSms(){
    return totalSms.toFixed(2)
  }

  function getCriticalLevelUpdate(){
      return critLevel
  }

  function getWarningLevelUpdate(){
      return warnLevel
    }

function totalFunction(){
    var costTotal = totalCalls + totalSms;
  return costTotal.toFixed(2);
    }

    return {
      callSet: callUpdate,
      smsSet: smsUpdate,
      updateWarning: warningLevelUpdate,
      updateCritical: criticalLevelUpdate,
      calculate: billItemCalculate,
      call: allCalls,
      sms: allSms,
      total: totalFunction,
      getCritical: getCriticalLevelUpdate,
      getWarning: getWarningLevelUpdate,
    }
  }


var checkAll = CheckTotal();

function UpdateSet(){

   var updatedCall = callCost.value;
   var updatedSms = smsCost.value;
   var updateWarn = warningLevel.value;
   var updateCrit = criticalLevel.value;
   checkAll.callSet(updatedCall);
   checkAll.smsSet(updatedSms);
   checkAll.updateWarning(updateWarn);
   checkAll.updateCritical(updateCrit);


}

function checkBtnType(billItemTypeSet){

    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn){
    var billItemTypeSet = checkedRadioBtn.value

    }
  return  billItemTypeSet
}

function totalDisplay(){


    callsTotalSet.innerHTML =  checkAll.call()
    smsTotalSet.innerHTML =   checkAll.sms()
    totalCostSet.innerHTML =   checkAll.total()
}

function totalColourChange(){
  var finalTotal = checkAll.total();
  var warningValue = checkAll.getWarning();
  var criticalValue = checkAll.getCritical();

    if (finalTotal > warningValue){
        totalCostSet.classList.add("warning");
    }

    if (finalTotal > criticalValue){
        totalCostSet.classList.add("danger");
    }
}


billAddTotalBtn.addEventListener('click', function(){
checkAll.calculate(checkBtnType());
totalDisplay();
totalColourChange();
});

updateSetButton.addEventListener('click', function(){
UpdateSet();
});
