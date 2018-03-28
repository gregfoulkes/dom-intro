describe ('Calculate-Billl', function(){
  it ('Should return R3.40',function(){

    assert.equal(totalPhoneBill('call,sms'),3.40);
  });
  it ('Should return R2.75',function(){

    assert.equal(totalPhoneBill('call'),2.75);
  });
  it ('Should return R0.65',function(){

    assert.equal(totalPhoneBill('sms'),0.65);
  });
});
