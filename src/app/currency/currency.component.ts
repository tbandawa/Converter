import { Component } from '@angular/core'
import { Currency, Rate, RateService } from '../core'

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent  {

  currencies: Currency[] = []
  currencyType: string
  output: number
  rate: Rate

  selectCurrencyOne: string
  inputCurrencyOne: number
  selectCurrencyTwo: string
  inputCurrencyTwo: number


  constructor(private rateService: RateService) { 
    this.rateService.getRates().subscribe({
      next: data => {

        this.rate = data

        this.rate.rates[data.base] = 1

        for (var key in data.rates) {
          if (data.rates.hasOwnProperty(key)) {
              this.currencies.push({type: key, rate: data.rates[key]})
          }
        }

      },
      error: error => {
        console.log(error)
      }
    })
  }

  onCurrencyOneSelection(value: string) {
      console.log(value)
  }

  onCurrencyTwoSelection(value: string) {
    console.log(value)
  }

  onCurrencyOneInput() {
    console.log(this.inputCurrencyOne)
  }

onCurrencyTwoInput() {
  console.log(this.inputCurrencyTwo)
}

  convertRates(inRate: number, outRate: number, value: number) : number {
    return ((value/inRate)*outRate)
  }

  /*submit() {
    if (!this.convertForm.valid) {
      return;
    }
    var fromCurrency = this.convertForm.value.fromCurrency
    var toCurrency = this.convertForm.value.toCurrency
    this.currencyType = toCurrency
    var valueToConvert = this.convertForm.value.inputValue
    this.output = this.convertRates(this.rate.rates[fromCurrency], this.rate.rates[toCurrency], valueToConvert)
  }*/

}