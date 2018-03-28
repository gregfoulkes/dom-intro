describe ('Text-Bill', function(){
  it ('Should return R2.75',function(){
    assert.equal(textBillTotal('call'),2.75);
  });
  it ('Should return R0.75',function(){
    assert.equal(textBillTotal('sms'),0.75);
  });
});
