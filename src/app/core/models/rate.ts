import { ResponseAdapter } from '../adapters/responseadapter'

export class Rate {
    base: string
    rates: { [key: string]: number }
    date: Date
}

export class RateAdapter implements ResponseAdapter<Rate> {
    adapt(item: any): Rate {
        return { base: item.base, rates: item.rates, date: new Date(item.date)}
    }
}