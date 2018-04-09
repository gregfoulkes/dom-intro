

function TotalCheck(){
  var  callsTotals = 0;
  var smsTotals = 0;


function billCalculate(value){
  if (value === 'call'){
    callsTotals += 2.75;
    console.log('call')
  }
  if (value === 'sms'){
    smsTotals += 0.65;
  }

}

function callBill(value){
   return callsTotals;
}

function smsBill(value){
   return smsTotals;
}

function totalTextBill(value){
  var  totalCosts = callsTotals + smsTotals;
  return totalCosts;
}

return {
  calculate:  billCalculate,
  callTotal: callBill,
  smsTotal: smsBill,
  total: totalTextBill
  };
}
