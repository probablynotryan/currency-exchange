export default class ConvertThat {
  static moneyMoney () {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function(res) {
        if (!res.ok) {
          throw Error (res.statusText);
        }
        return res.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}