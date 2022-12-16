class UI {

  constructor(outputResult, outputFirst, outputSecond) {
    this.outputResult = outputResult
    this.outputFirst = outputFirst
    this.outputSecond = outputSecond
  }

  changeUI() {

    document.getElementById("outputFirst").innerHTML = this.outputFirst
    document.getElementById("outputSecond").innerHTML = this.outputSecond
    document.getElementById("outputResult").value = this.outputResult

  }


}