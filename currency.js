class Exchange {

  constructor(amount, firstCurrency, secondCurrency) {

    this.amount = amount
    this.firstCurrency = firstCurrency
    this.secondCurrency = secondCurrency
    this.apikey = "uRiFBK7nu7x3oDumiKyvRxrCmjfoNLJT"

  }

  request() {
    var myHeaders = new Headers();
    myHeaders.append("apikey", this.apikey);

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    return new Promise((resolve, reject) => {

      fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${this.secondCurrency}&from=${this.firstCurrency}&amount=${this.amount}`, requestOptions)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    })

  }

  newAmount(newAmount, newFirstCurrency, newSecondCurrency) {
    this.amount = newAmount;
    this.firstCurrency = newFirstCurrency;
    this.secondCurrency = newSecondCurrency;
  }

}

