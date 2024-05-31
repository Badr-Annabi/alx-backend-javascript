import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    if (typeof floors !== 'number') {
      throw new TypeError('floor must be a number');
    }
    super(sqft);
    this._sqft = sqft;
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
