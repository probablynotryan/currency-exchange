import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ConvertThat from './convertmoney.js';

$(document).ready(function() {

  $("#go").click(function() {
    ConvertThat.moneyMoney()
      .then(function(res) {
        let currencyConvert = $("#inputtedCurrency").val() * res.conversion_rates.BDT;
        $(".text").text(currencyConvert);
      });
  });
});
