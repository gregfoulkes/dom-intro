// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


var itemTypeBtn = document.querySelector(".billItemTypeRadio");
var billAddBtn = document.querySelector(".radioBillAddBtn");

//var billStringField = document.querySelector(".billString");
//var calculateBtnElement = document.querySelector(".calculateBtn");
//var billTotalElement = document.querySelector(".billTotal");



function calculateBtnClicked(){
    // get the string entered in the textArea
    var billString = itemTypeBtn.value;
    //split the string
    var billItems = billString.split(",");
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }

        else{

          biilTotal += 0
        }


    }

    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;
}

//calculateBtnElement.addEventListener('click', (calculateBtnClicked));
billAddBtn.addEventListener('click', (calculateBtnClicked));
