var billTypeText = document.querySelector(".billTypeText");
var billBtn = document.querySelector(".addToBillBtn");

var textBillBtn = document.querySelector(".textBillAddBtn");

var templateSource = document.querySelector(".textBillTemplate").innerHTML;

var textTemplate = Handlebars.compile(templateSource);

var insertDataElem = document.querySelector(".insertData");


var checkSum = TotalCheck();

function valueType() {
  return billTypeText.value.trim();
}

function billAddTotal() {
  var data = {
    callSum: checkSum.callTotal().toFixed(2),
    smsSum: checkSum.smsTotal().toFixed(2),
    totalSum: checkSum.total().toFixed(2),
    totalSumClass: 'totalOne ' + checkSum.changeColor()

  };
  insertDataElem.innerHTML = textTemplate(data);

}



function doClear() {
  billTypeText.value = '';
}

billBtn.addEventListener('click', function() {

  checkSum.calculate(valueType());
  billAddTotal();
  doClear();
});

document.addEventListener('DOMContentLoaded', function() {

  var callData = {
    callSumClass: 'callTotalOne',
    smsSumClass: 'smsTotalOne',
    totalSumClass: 'totalOne',
    callSum: '0.00',
    smsSum: '0.00',
    totalSum: '0.00'

  };

  insertDataElem.innerHTML = textTemplate(callData);
});
