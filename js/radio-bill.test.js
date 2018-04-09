describe ('TotalCheck for Radio-Bill', function(){
  it ('Should return a total of R3.40',function(){
    var checkRadioTotal = TotalCheck()

    checkRadioTotal.calculate('call')
    checkRadioTotal.calculate('sms')
    assert.equal(checkRadioTotal.total(), 3.40);
  });

  it('Should return a call total of R5.50', function(){
    var checkRadioTotal = TotalCheck()

    checkRadioTotal.calculate('call')
    checkRadioTotal.calculate('call')
    assert.equal(checkRadioTotal.callTotal(), 5.50);

  });
  it('Should return a sms total of R1.30', function(){
    var checkRadioTotal = TotalCheck()

    checkRadioTotal.calculate('sms')
    checkRadioTotal.calculate('sms')
    assert.equal(checkRadioTotal.smsTotal(), 1.30);

  });
});
