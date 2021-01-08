import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { Rate, RateAdapter } from '../models/rate';

@Injectable()
export class RateService {

    baseURL: string = 'https://api.ratesapi.io/api/'

    constructor(private httpClient: HttpClient, private rateAdapter: RateAdapter) {}

    getRates(): Observable<Rate> {
      return this.httpClient
        .get(this.baseURL + 'latest')
        .pipe(map(resp => this.rateAdapter.adapt(resp)))
    }

}