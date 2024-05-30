export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (Array.isArray(students) && students.every((student) => typeof student === 'string')) {
      this._students = students;
    }
    this._name = name;
    this._length = length;
  }

  get name() {
    return this._name;
  }

  set name(valueName) {
    if (typeof valueName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = valueName;
  }

  get length() {
    return this._length;
  }

  set length(valueLength) {
    if (typeof valueLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = valueLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (Array.isArray(newStudents) && newStudents.every((student) => typeof student === 'string')) {
      this._students = newStudents;
    }
  }
}
