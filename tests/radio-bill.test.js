describe ('TotalCheck for Radio-Bill', function(){
  it ('Should return a total of R3.40',function(){
    var check = TotalCheck()
    check.calculate('call')
    check.calculate('sms')
    assert.equal(check.total(), 3.40);
  });

  it('Should return a call total of R5.50', function(){
    var check = TotalCheck()

    check.calculate('call')
    check.calculate('call')
    assert.equal(check.callTotal(), 5.50);

  });
  it('Should return a sms total of R1.30', function(){
    var check = TotalCheck()

    check.calculate('sms')
    check.calculate('sms')
    assert.equal(check.smsTotal(), 1.30);

  });
});
