import { Component, OnInit } from '@angular/core'
import { RateService } from '../core'

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  constructor(private rateService: RateService) { 
    this.rateService.getRates().subscribe({
      next: data => {
        console.log(data.rates.key)

        for (var key in data.rates) {
          if (data.rates.hasOwnProperty(key)) {
              console.log(key + " -> " + data.rates[key]);
          }
      }

      },
      error: error => {
        console.log(error)
      }
    })
  }

  ngOnInit() { }

}
