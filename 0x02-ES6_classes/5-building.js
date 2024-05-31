export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must to be a number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(valueSqft) {
    if (typeof valueSqft !== 'number') {
      throw new TypeError('sqft must to be a number');
    }
    this._sqft = valueSqft;
  }
}
