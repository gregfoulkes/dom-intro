var billStringField = document.querySelector(".billString");
var calculateBtnElement = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");


function calculateTotal(billValue){

  var splitBill = billValue.split(',')

    var billTotal = 0;

    for (var i=0;i<splitBill.length;i++){
        var billItem = splitBill[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    return billTotal.toFixed(2)
}

 function displayTotal() {

   var billValue = billStringField.value
   billTotalElement.innerHTML = calculateTotal(billValue);
 }

calculateBtnElement.addEventListener('click', function(){
displayTotal()
});


// function calculateBtnClicked(){
//     // get the string entered in the textArea
//     var billString = billStringField.value;
//     //round to two decimals
//     var roundedBillTotal = totalPhoneBill(billString);
//     billTotalElement.innerHTML = roundedBillTotal;
// }

  //totalPhoneBill();
  //calculateBtnClicked(totalPhoneBill());



//calculateBtnElement.addEventListener('click', (calculateBtnClicked));
