export interface CurrencyProperties {
    code: string;
    codein: string;
    name: string;
    high: string;
    low: string;
    varBid: string;
    pctChange: string;
    bid: string;
    ask: string;
    timestamp: string;
    create_date: string;
}

export interface CurrencyList {
    USD: CurrencyProperties;
    USDT: CurrencyProperties;
    CAD: CurrencyProperties;
    EUR: CurrencyProperties;
    GBP: CurrencyProperties;
    ARS: CurrencyProperties;
    BTC: CurrencyProperties;
    LTC: CurrencyProperties;
    JPY: CurrencyProperties;
    CHF: CurrencyProperties;
    AUD: CurrencyProperties;
    CNY: CurrencyProperties;
    ILS: CurrencyProperties;
    ETH: CurrencyProperties;
    XRP: CurrencyProperties;

}
