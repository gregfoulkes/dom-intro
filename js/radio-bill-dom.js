var billItemType = document.querySelector(".billItemTypeRadio");
var billAddBtn = document.querySelector(".radioBillAddBtn");
var callsTotalTwo = document.querySelector(".callTotalTwo");
var smsTotalTwo = document.querySelector(".smsTotalTwo");
var totalCostTwo = document.querySelector(".totalTwo");


var checkTotal = TotalCheck()

function btnRadioCheck(){
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value
    }
  return billItemType
}

function totalRadioBill(){
    callsTotalTwo.innerHTML = checkTotal.callTotal().toFixed(2);
    smsTotalTwo.innerHTML = checkTotal.smsTotal().toFixed(2);

    totalCostTwo.innerHTML = checkTotal.total().toFixed(2);
}

function cssColourChange(){
  var theTotal = checkTotal.total()
   if (theTotal >= 50){
       totalCostTwo.classList.add("danger");
       billAddBtn.disabled = true

   }
   else if (theTotal >= 30){
       totalCostTwo.classList.add("warning");

   }
}

billAddBtn.addEventListener('click', function(){
//btnRadioCheck()
checkTotal.calculate(btnRadioCheck())
totalRadioBill();
cssColourChange();
});
