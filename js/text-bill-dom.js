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
