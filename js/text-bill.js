
var billTypeText = document.querySelector(".billTypeText");
var billBtn = document.querySelector(".addToBillBtn");
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var totalCostElem = document.querySelector(".totalOne");
var textBillBtn = document.querySelector(".textBillAddBtn")


var callsTotals = 0;
var smsTotals = 0;


//var totalCosts = callsTotals + smsTotals;

function valueType(){
  return billTypeText.value.trim()
}
//console.log(valueType())

function textBillTotal(){

    var billTypeEntered = valueType();
    if (billTypeEntered === "call"){
        callsTotals += 2.75
    }
    if (billTypeEntered === "sms"){
        smsTotals += 0.75;
    }

    if (billTypeEntered === ""){
      callsTotals = 0
    }
   if (billTypeEntered === ""){
      smsTotals = 0
    }
    var totalCosts = callsTotals + smsTotals;
    return totalCosts
}

function billAddTotal(){

    callsTotalElem.innerHTML = callsTotals.toFixed(2);
    smsTotalElem.innerHTML = smsTotals.toFixed(2);
    var totalCosts = callsTotals + smsTotals;
    //var billAddedTotal = textBillTotal()
    totalCostElem.innerHTML = totalCosts.toFixed(2);
    //totalCostElem.innerHTML = billAddedTotal.toFixed(2);


   if (totalCosts >= 50){
       totalCostElem.classList.add("danger");
   }
   else if (totalCosts >= 30){
       totalCostElem.classList.add("warning");
   }
}


billBtn.addEventListener('click', (valueType));
billBtn.addEventListener('click', (textBillTotal));
billBtn.addEventListener('click', (billAddTotal));


/*
function clearBillTotal(){

  if(billTypeEnetered === ""){
    callsTotals = 0

  }

    if(billTypeEnetered === ""){
      smsTotals = 0
    }

}
billBtn.addEventListener('click', (clearBillTotal));
*/
