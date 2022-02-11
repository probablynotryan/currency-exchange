import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ConvertThat from './convertmoney.js';
import {sanitizeInputs, checkResponse} from './validate.js';

$(document).ready(function() {
  ConvertThat.moneyMoney()
    .then(function(res){
      if (checkResponse(res)) {
        $('p').show();
        $('#go').show();
        $('#user-input').show();
        $('.currency-select').show();
      } else {
        $('#response-text').text('An error occured attempting to fetch from API.');
        return;
      }
      Object.entries(res.conversion_rates).forEach(element => {
        $('.currency-select').append(`<option value = "${element[1]}"> ${element[0]} </option>`);
      });
    });
  $("#go").click(function() {
    let userInput = parseInt($('#user-input').val());
    let inCurrencyRate = $('#currency-in').val();
    let outCurrencyRate = $('#currency-out').val();
    let outCurrencyType = $("#currency-out option:selected" ).text();
    $('#response-text').text(sanitizeInputs(userInput, inCurrencyRate, outCurrencyRate, outCurrencyType));
  });
});
