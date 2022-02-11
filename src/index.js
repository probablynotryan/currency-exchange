import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ConvertThat from './convertmoney.js';

function checkResponse(res){
  if (res.result != 'success') {
    $('#response-text').text('An error occured attempting to fetch from API.');
  } else if (res.result === 'success'){
    $('p').show();
    $('#go').show();
    $('#user-input').show();
    $('.currency-select').show();
    return res.conversion_rates;
  } else {
    $('#response-text').text('An unknown error occurred.');
  }
}

function checkInput(input){
  if (input === '' || isNaN(input)) {
    $('#response-text').text('Come on, silly. Enter a number, please.');
  } else if (!isNaN(input)){
    let conversionOutput = input / $('#currency-in').val() * $('#currency-out').val();
    $('#response-text').text(conversionOutput);
  } else {
    $('#response-text').text("What have you done now? We don't know what went wrong.");
  }
}

$(document).ready(function() {
  ConvertThat.moneyMoney()
    .then(function(res){
      Object.entries(checkResponse(res)).forEach(element => {
        $('.currency-select').append(`<option value = "${element[1]}"> ${element[0]} </option>`);
      });
    });
  $("#go").click(function() {
    let userInput = parseInt($('#user-input').val());
    checkInput(userInput);   
  });
});
