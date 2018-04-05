var billTypeText = document.querySelector(".billTypeText");
var billBtn = document.querySelector(".addToBillBtn");
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var totalCostElem = document.querySelector(".totalOne");
var textBillBtn = document.querySelector(".textBillAddBtn")

var checkSum = TotalCheck()


function valueType(){
  return billTypeText.value.trim()
 }


function TotalCheck(){
  var  callsTotals = 0;
  var smsTotals = 0;


function billCalculate(value){
  if (value === 'call'){
    callsTotals += 2.75;
    console.log('call')
  }
  if (value === 'sms'){
    smsTotals += 0.65;
  }

}

function callBill(value){
   return callsTotals;
}

function smsBill(value){
   return smsTotals;
}

function totalTextBill(value){
  var  totalCosts = callsTotals + smsTotals;
  return totalCosts;
}

return {
  calculate:  billCalculate,
  callTotal: callBill,
  smsTotal: smsBill,
  total: totalTextBill
  };
}

function billAddTotal(){
    callsTotalElem.innerHTML =checkSum.callTotal().toFixed(2);
    smsTotalElem.innerHTML = checkSum.smsTotal().toFixed(2);
    totalCostElem.innerHTML = checkSum.total().toFixed(2);
}

function colorChange(){
  var billTotal = checkSum.total()
   if (billTotal >= 50){
       totalCostElem.classList.add("danger");
   }
   else if (billTotal >= 30){
       totalCostElem.classList.add("warning");
   }

}

function doClear(){
return billTypeText.value = '';
}

billBtn.addEventListener('click', function(){

  checkSum.calculate(valueType());
  billAddTotal();
  colorChange();
  doClear();
 });
