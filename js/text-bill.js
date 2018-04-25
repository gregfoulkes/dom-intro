function TotalCheck() {
  var callsTotals = 0;
  var smsTotals = 0;


  function billCalculate(value) {
    if (value === 'call') {
      callsTotals += 2.75;
      console.log('call')
    }
    if (value === 'sms') {
      smsTotals += 0.65;
    }

  }

  function callBill() {
    return callsTotals;
  }

  function smsBill() {
    return smsTotals;
  }

  function totalTextBill() {
    var totalCosts = callsTotals + smsTotals;
    return totalCosts;
  }

  function colorChange() {
    if (totalTextBill() >= 50) {
      return 'danger'
    } else if (totalTextBill() >= 30) {
      return 'warning'
    }

  }

  return {
    changeColor: colorChange,
    calculate: billCalculate,
    callTotal: callBill,
    smsTotal: smsBill,
    total: totalTextBill
  };
}
