var billStringField = document.querySelector(".billString");
var calculateBtnElement = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");

function displayTotal() {
  //var fac = calculateTotal(billValue)
  var billValue = billStringField.value
  var finalTotal = calculateTotal(billValue)
  billTotalElement.innerHTML = final ;

     if (finalTotal >= 30){
         billTotalElement.classList.add("danger");
         calculateBtnElement.disabled = true

     }
    else if (finalTotal >= 20){
         billTotalElement.classList.add("warning");
     }
}

calculateBtnElement.addEventListener('click', function(){
displayTotal()
});
