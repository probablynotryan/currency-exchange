import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ConvertThat from './convertmoney.js';
// import currencyvalues from './currency-values.html';

function sanitizedResponse(res, input){
  if (res.result != 'success') {
    $("text").text('Whoops, something went wrong. Check yourself before you wreck yourself.');
  } else if (input === '' || input === NaN){
    $(".text").text('Please enter an amount in USD.');
  } else {
    let currencyConvert = input * res.conversion_rates.BDT;
    $(".text").text(currencyConvert);
  }
}

$(document).ready(function() {

  $("#go").click(function() {
    ConvertThat.moneyMoney()
      .then(function(res) {
        // setCurrencyOptions(res);
        sanitizedResponse(res, userInput);
      });
  });
});

// messing with object to arrays
// const currencyTypes = res.conversation_rates;
// console.log(currencyTypes);
// const currencyArray = Object.values(currencyTypes);
// console.log(currencyArray);
// let userInput = $('#userInput').val();