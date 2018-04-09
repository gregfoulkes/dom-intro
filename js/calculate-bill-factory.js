var billStringField = document.querySelector(".billString");
var calculateBtnElement = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");

var thePhoneBill = totalPhoneBill();

function stringType(){
  var billText = billStringField.value
  return billText
}

function totalPhoneBill(){
  var total = 0;
  var call = 0
  var sms = 0

  function phoneBill(string){

  //var billString = string.value;
  var splitBill = string.split(',');
  for (var i = 0; i<splitBill.length; i++){
    var billString = splitBill[i];

  	if (billString === 'call'){
    		call += 2.75;
      	}

    if (billString === 'sms'){
            sms += 0.65
            }
          total = call + sms;
        }
      }

    function getCall(string){
      return call.toFixed(2);
    }

    function getSms(string){
      return sms.toFixed(2);
    }

    function myTotal(string){
      return total.toFixed(2);
        }



  return {
    bill: phoneBill,
    callTotal: getCall,
    smsTotal: getSms,
    firstTotal: myTotal,
    };

};

function ColourChange(){
  var theTotal = thePhoneBill.firstTotal();

   if (theTotal >= 50){
       billTotalElement.classList.add("danger");
   }
  else if (theTotal >= 30){
       billTotalElement.classList.add("warning");
      // document.getElementById('AddBtn').disable = true
   }
}

function calculateBtnClicked(){


    var roundedBillTotal = thePhoneBill.firstTotal();
    billTotalElement.innerHTML = roundedBillTotal;
        }

function clearIt (){
  return billStringField.value = '';
      }

calculateBtnElement.addEventListener('click', function(){
//var billText = billStringField.value
thePhoneBill.bill(stringType())
//totalPhoneBill();
calculateBtnClicked();
ColourChange()
clearIt();
});
