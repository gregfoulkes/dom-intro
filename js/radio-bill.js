

var billItemType = document.querySelector(".billItemTypeRadio");
var billAddBtn = document.querySelector(".radioBillAddBtn");
var callsTotalTwo = document.querySelector(".callTotalTwo");
var smsTotalTwo = document.querySelector(".smsTotalTwo");
var totalCostTwo = document.querySelector(".totalTwo");

var callsTotal = 0;
var smsTotal = 0;



function textBillTotal(){

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value
    }
    if (billItemType === "call"){
        callsTotal += 2.75
    }
    else if (billItemType === "sms"){
        smsTotal += 0.75;
    }

    callsTotalTwo.innerHTML = callsTotal.toFixed(2);
    smsTotalTwo.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostTwo.innerHTML = totalCost.toFixed(2);


   if (totalCost >= 50){
       totalCostTwo.classList.add("danger");
   }
   else if (totalCost >= 30){
       totalCostTwo.classList.add("warning");
   }
}
billAddBtn.addEventListener('click', (textBillTotal));
