import { Component } from '@angular/core'
import { Currency, Rate, RateService } from '../core'

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent  {

  currencies: Currency[] = []
  error: string
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
      error: () => {
        this.error = "Could not fetch updated exchange rates.\nRefresh this page."
      }
    })
  }

  onCurrencyOneSelection() {
    this.onCurrencyTwoInput() 
  }

  onCurrencyTwoSelection() {
    this.onCurrencyOneInput()
  }

  onCurrencyOneInput() {
    if(this.inputCurrencyOne != null && this.selectCurrencyOne != null && this.selectCurrencyTwo != null) {
      var inputCurrency = this.rate.rates[this.selectCurrencyOne]
      var outputCurrency = this.rate.rates[this.selectCurrencyTwo]
      this.inputCurrencyTwo = Number(this.convertRates(inputCurrency, outputCurrency, this.inputCurrencyOne).toFixed(2)) 
    }
  }

  onCurrencyTwoInput() {
    if(this.inputCurrencyTwo != null && this.selectCurrencyOne != null && this.selectCurrencyTwo != null) {
      var inputCurrency = this.rate.rates[this.selectCurrencyOne]
      var outputCurrency = this.rate.rates[this.selectCurrencyTwo]
      this.inputCurrencyOne = Number(this.convertRates(outputCurrency, inputCurrency, this.inputCurrencyTwo).toFixed(2)) 
    }
  }

  convertRates(inRate: number, outRate: number, value: number) : number {
    return ((value/inRate)*outRate)
  }

}