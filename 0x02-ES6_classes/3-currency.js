export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('code must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(valueName) {
    if (typeof valueName !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = valueName;
  }

  get code() {
    return this._code;
  }

  set code(valueCode) {
    if (typeof valueCode !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = valueCode;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
