import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ConvertThat from './convertmoney.js';

$(document).ready(function() {

  $("#go").click(function() {
    ConvertThat.moneyMoney()
      .then(function(res) {

        if (res.result != 'success') {
          $("text").text('Whoops, something went wrong. Check yourself before you wreck yourself.');
        } else if ($('#inputtedCurrency').val() === ''){
          $(".text").text('Please enter an amount in USD.');
        } else {
          let currencyConvert = $("#inputtedCurrency").val() * res.conversion_rates.BDT;
          $(".text").text(currencyConvert);
        }
      });
  });
});
