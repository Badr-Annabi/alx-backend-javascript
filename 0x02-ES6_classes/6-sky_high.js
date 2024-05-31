import Building from './5-building';

export default class SkyHighBuilding {
  constructor(sqft, floors) {
    if (!(sqft instanceof Building) || (typeof sqft !== 'number')) {
      throw new Error('sqft must be a number');
    }
    if (typeof floors !== 'number') {
      throw new TypeError('floor must be a number');
    }
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
