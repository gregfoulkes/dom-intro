
var billStringField = document.querySelector(".billString");
var calculateBtnElement = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");


/*
function calculateBtnClicked(){

    var billString = billStringField.value;

    var billItems = billString.split(",");

    var billTotal = 0;

    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }

    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;
}
*/
function totalPhoneBill(billStringField){
  var total = 0;
  var call = 0
  var sms = 0
  var billString = billStringField.value;

  var splitBill = billStringField.split(',');
for (var i = 0; i<splitBill.length; i++){
	if (splitBill[i].startsWith('c')){
  		call = call+1;
    	}
  else if(splitBill[i].startsWith('s')){
          sms = sms+1
          }
	}

var total= call*2.75 + sms*0.65;
return total.toFixed(2);
}


function calculateBtnClicked(){
    // get the string entered in the textArea
    var billString = billStringField.value;
    //round to two decimals
    var roundedBillTotal = totalPhoneBill(billString);
    billTotalElement.innerHTML = roundedBillTotal;
}
calculateBtnElement.addEventListener('click', (totalPhoneBill));

calculateBtnElement.addEventListener('click', (calculateBtnClicked));
