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
    return ('Invalid user entry.');
  } else if ((isNaN(inCurrency)) || (isNaN(outCurrency)) || (inCurrency === "") || (outCurrency === "")) {
    return ('Conversion rate error.');
  } else if (!isNaN(input) && (!isNaN(inCurrency)) && (!isNaN(outCurrency))){
    kaChing.play();
    return ((input / inCurrency * outCurrency).toFixed(2) + " " + outCurrencyType);
  } else {
    return ('An unknown error occured.');
  }
}