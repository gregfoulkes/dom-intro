

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
