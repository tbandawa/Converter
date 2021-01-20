import { Component, OnInit } from '@angular/core'
import { Currency, Rate, RateService } from '../core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  currencies: Currency[] = []
  convertForm: FormGroup
  currencyType: string
  output: number
  rate: Rate

  //displayedColumns: string[] = ['value', 'from', 'to', 'output']
  //dataSource = new MatTableDataSource<History>([]);

  constructor(private rateService: RateService, private formBuilder: FormBuilder) { 
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

  convertRates(inRate: number, outRate: number, value: number) : number {
    return ((value/inRate)*outRate)
  }

  ngOnInit() {
    this.convertForm = this.formBuilder.group({
      inputValue: [null, Validators.required],
      fromCurrency: [null, Validators.required],
      toCurrency: [null, Validators.required]
    });
  }

  submit() {
    if (!this.convertForm.valid) {
      return;
    }
    var fromCurrency = this.convertForm.value.fromCurrency
    var toCurrency = this.convertForm.value.toCurrency
    this.currencyType = toCurrency
    var valueToConvert = this.convertForm.value.inputValue
    this.output = this.convertRates(this.rate.rates[fromCurrency], this.rate.rates[toCurrency], valueToConvert)
  }

}