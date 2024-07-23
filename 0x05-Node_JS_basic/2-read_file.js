const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.toString().split('\n');
    const header = lines[0].split(',');

    const students = {};
    let totalStudents = 0;

    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i].split(',');
      if (line.length === header.length) {
        const field = line[header.indexOf('field')];
        const firstname = line[header.indexOf('firstname')];
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
        totalStudents++;
      }
    }
    console.log(`Number of students: ${totalStudents}`);

    for (const field in students) {
      if (students.hasOwnProperty(field)) {
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      }
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    } else {
      throw error;
    }
  }
}

module.exports = countStudents;
