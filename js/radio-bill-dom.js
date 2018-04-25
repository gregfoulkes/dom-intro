var billItemType = document.querySelector(".billItemTypeRadio");
var billAddBtn = document.querySelector(".radioBillAddBtn");

var templateSource = document.querySelector(".radioBillTemplate").innerHTML;

var textTemplate = Handlebars.compile(templateSource);

var insertDataElem = document.querySelector(".radioInsert");


var checkTotal = TotalCheck()

function btnRadioCheck(){
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value
    }
  return billItemType
}

function totalRadioBill(){
  var data = {
    callRadioSum: checkTotal.callTotal().toFixed(2),
    smsRadioSum: checkTotal.smsTotal().toFixed(2),
    totalRadioSum: checkTotal.total().toFixed(2),
    totalRadioSumClass: 'totalOne ' + checkTotal.changeColor()

  };
  insertDataElem.innerHTML = textTemplate(data);

}



billAddBtn.addEventListener('click', function(){
//btnRadioCheck()
checkTotal.calculate(btnRadioCheck())
totalRadioBill();
});

document.addEventListener('DOMContentLoaded', function() {

  var radioData = {
    callRadioSumClass: 'callTotalTwo',
    smsRadioSumClass: 'smsTotalTwo',
    totalRadioSumClass: 'totalTwo',
    callRadioSum: '0.00',
    smsRadioSum: '0.00',
    totalRadioSum: '0.00'

  };

  insertDataElem.innerHTML = textTemplate(radioData);
});
