describe ('TotalCheck for Text-Bill', function(){

  it ('Should return a total of R3.40',function(){
    var checkTextTotal = TotalCheck()

    checkTextTotal.calculate('call')
    checkTextTotal.calculate('sms')
    assert.equal(checkTextTotal.total(), 3.40);
  });

  it('Should return a call total of R5.50', function(){
    var checkTextTotal = TotalCheck()

    checkTextTotal.calculate('call')
    checkTextTotal.calculate('call')
    assert.equal(checkTextTotal.callTotal(), 5.50);
  });

  it('Should return a sms total of R1.30', function(){
    var checkTextTotal = TotalCheck()

    checkTextTotal.calculate('sms')
    checkTextTotal.calculate('sms')
    assert.equal(checkTextTotal.smsTotal(), 1.30);
  });
});
