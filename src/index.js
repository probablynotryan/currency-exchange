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
        $('.conversion').show();
        $('.currency-select').show();
        $('#api-updated').text(`Brought to you by exchangerate-api.com. Conversion rates last updated:  ${res.time_last_update_utc}`);
        Object.entries(res.conversion_rates).forEach(element => {
          $('.currency-select').append(`<option value = "${element[1]}"> ${element[0]} </option>`);
        });
      } else {
        $('#response-text').text('Something went wrong.');
      }
    }) .catch (function(error){
      $('#response-text').text(`An error occured attempting to fetch from API. Reason: ${error}`);
    });
  $("#go").click(function() {
    let kaChing = new Audio('https://www.myinstants.com/media/sounds/ka-ching.mp3');
    let userInput = parseInt($('#user-input').val());
    let inCurrencyRate = $('#currency-in').val();
    let outCurrencyRate = $('#currency-out').val();
    let outCurrencyType = $("#currency-out option:selected" ).text();
    $('#response-text').text(sanitizeInputs(userInput, inCurrencyRate, outCurrencyRate, outCurrencyType, kaChing));
  });
});
