import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ConvertThat from './convertmoney.js';

$(document).ready(function() {

  ConvertThat.moneyMoney()
    .then(function(res) {
      console.log(res);
    });
});
