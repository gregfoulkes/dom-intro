var billStringField = document.querySelector(".billString");
var calculateBtnElement = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");

function displayTotal() {

  var billValue = billStringField.value
  billTotalElement.innerHTML = calculateTotal(billValue);
}

calculateBtnElement.addEventListener('click', function(){
displayTotal()
});
