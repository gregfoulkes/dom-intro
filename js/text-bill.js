
var billTypeText = document.querySelector(".billTypeText");
var billBtn = document.querySelector(".addToBillBtn");
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var totalCostElem = document.querySelector(".totalOne");
var textBillBtn = document.querySelector(".textBillAddBtn")


var callsTotals = 0;
var smsTotals = 0;

function textBillTotal(){

    var billTypeEntered = billTypeText.value.trim();
    if (billTypeEntered === "call"){
        callsTotals += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotals += 0.75;
    }

    callsTotalElem.innerHTML = callsTotals.toFixed(2);
    smsTotalElem.innerHTML = smsTotals.toFixed(2);
    var totalCosts = callsTotals + smsTotals;
    totalCostElem.innerHTML = totalCosts.toFixed(2);


   if (totalCosts >= 50){
       totalCostElem.classList.add("danger");
   }
   else if (totalCosts >= 30){
       totalCostElem.classList.add("warning");
   }
}
billBtn.addEventListener('click', (textBillTotal));
