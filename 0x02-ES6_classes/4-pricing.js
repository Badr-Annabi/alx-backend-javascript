import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(valueAmount) {
    if (typeof valueAmount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = valueAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(valueCurrency) {
    if (!(valueCurrency instanceof Currency)) {
      throw new TypeError('currency must be a number');
    }
    this._currency = valueCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}
