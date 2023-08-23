export default class Candle {
    currency: string = ''
    initialDateTime: Date = new Date()
    finalDateTime: Date = new Date()
    open: number = 0
    close: number = 0
    high: number = 0
    low: number = 0
    color: string = ''

    constructor(candleObj: any) {
        Object.assign(this, candleObj)
        this.initialDateTime = new Date(this.initialDateTime)
        this.finalDateTime = new Date(this.finalDateTime)
    }
}