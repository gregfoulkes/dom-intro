describe ('Calculate-Billl', function(){
  it ('Should return the total of R3.40',function(){
    var thePhoneBill = totalPhoneBill()
    thePhoneBill.bill('call,sms')
    assert.equal(thePhoneBill.firstTotal(),3.40);
  });

  it ('Should return the call total of R5.50',function(){
    var thePhoneBill = totalPhoneBill()
    thePhoneBill.bill('call,sms,call,sms')
    assert.equal(thePhoneBill.callTotal(),5.50);
  });
  it ('Should return the sms total of R1.30',function(){
    var thePhoneBill = totalPhoneBill()
    thePhoneBill.bill('call,sms,call,sms')
    assert.equal(thePhoneBill.smsTotal(),1.30);
  });
});
