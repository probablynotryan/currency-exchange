export function checkResponse(res){
  if (res.result != 'success') {
    return -1;
  } else if (res.result === 'success'){
    return 1;
  } else {
    return -1;
  }
}

export function sanitizeInputs(input, inCurrency, outCurrency, outCurrencyType, kaChing){
  if (input === '' || isNaN(input)) {
    return ('Come on, silly. Enter a number, please.');
  } else if (!isNaN(input)){
    kaChing.play();
    return ((input / inCurrency * outCurrency).toFixed(2) + " " + outCurrencyType);
  } else {
    return ('An error occured');
  }
}