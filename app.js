const amount = document.getElementById("amount")
const firstCurrency = document.getElementById("firstCurrency")
const secondCurrency = document.getElementById("secondCurrency")
const form = document.getElementById("currency-form")


eventListeners()

const exchange = new Exchange(amount.value, firstCurrency.value, secondCurrency.value)
const ui = new UI()


function eventListeners() {

  form.onchange = function () {

    exchange.newAmount(amount.value, firstCurrency.value, secondCurrency.value)
    exchange.request()
      .then((data) => {

        const ui = new UI(data.result, data.query.from, data.query.to)
        ui.changeUI()

      }).catch((err) => {
        console.log(err)
      });




  }


}
