describe ('CheckTotal for Settings-Bill', function(){

  it ('Should return a call total of R2.75',function(){
    var checkIt = CheckTotal()

    checkIt.callSet(2.75),
    checkIt.calculate('call')

    assert.equal(checkIt.total(), 2.75);
  });

  it ('Should return a sms total of R0.65',function(){

    var checkIt = CheckTotal()

    checkIt.smsSet(0.65),
    checkIt.calculate('sms')

    assert.equal(checkIt.sms(), 0.65);
  });

  it ('Should return a total of R4.05',function(){
    var checkIt = CheckTotal()

    checkIt.smsSet(0.65),
    checkIt.callSet(2.75),

    checkIt.calculate('sms')
    checkIt.calculate('sms')
    checkIt.calculate('call')

    assert.equal(checkIt.total(), 4.05);
  });
  it ('Should return the updated sms value of R0.85',function(){

    var checkIt = CheckTotal()
    assert.equal(checkIt.smsSet(0.85), 0.85);
  });
  it ('Should return the updated call value of R3.20',function(){

    var checkIt = CheckTotal()
    assert.equal(checkIt.callSet(3.20), 3.20);
  });
  it ('Should return the updated warning level of 20',function(){

    var checkIt = CheckTotal()
    checkIt.updateWarning(20)
    assert.equal(checkIt.getWarning(), 20);
  });
  it ('Should return the updated critical level of 30',function(){

    var checkIt = CheckTotal()
    checkIt.updateCritical(30)
    assert.equal(checkIt.getCritical(), 30);
  });
});
