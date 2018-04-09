describe ('CheckTotal for Settings-Bill', function(){

  it ('Should return a call total of R2.75',function(){
    var checkBillTotal = CheckTotal()

    checkBillTotal.callSet(2.75),
    checkBillTotal.calculate('call')

    assert.equal(checkBillTotal.total(), 2.75);
  });

  it ('Should return a sms total of R0.65',function(){

    var checkBillTotal = CheckTotal()

    checkBillTotal.smsSet(0.65),
    checkBillTotal.calculate('sms')

    assert.equal(checkBillTotal.sms(), 0.65);
  });

  it ('Should return a total of R4.05',function(){
    var checkBillTotal = CheckTotal()

    checkBillTotal.smsSet(0.65),
    checkBillTotal.callSet(2.75),

    checkBillTotal.calculate('sms')
    checkBillTotal.calculate('sms')
    checkBillTotal.calculate('call')

    assert.equal(checkBillTotal.total(), 4.05);
  });
  it ('Should return the updated sms value of R0.85',function(){

    var checkBillTotal = CheckTotal()
    assert.equal(checkBillTotal.smsSet(0.85), 0.85);
  });
  it ('Should return the updated call value of R3.20',function(){

    var checkBillTotal = CheckTotal()
    assert.equal(checkBillTotal.callSet(3.20), 3.20);
  });
  it ('Should return the updated warning level of 20',function(){

    var checkBillTotal = CheckTotal()
    checkBillTotal.updateWarning(20)
    assert.equal(checkBillTotal.getWarning(), 20);
  });
  it ('Should return the updated critical level of 30',function(){

    var checkBillTotal = CheckTotal()
    checkBillTotal.updateCritical(30)
    assert.equal(checkBillTotal.getCritical(), 30);
  });
});
