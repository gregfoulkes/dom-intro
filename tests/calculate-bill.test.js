describe ('Calculate-Billl', function(){
  it ('Should return R3.50',function(){

    assert.equal(calculateTotal('call, sms'),3.50);
  });
  it ('Should return R2.75',function(){

    assert.equal(calculateTotal('call'),2.75);
  });
  it ('Should return R0.75',function(){

    assert.equal(calculateTotal('sms'),0.75);
  });
});
