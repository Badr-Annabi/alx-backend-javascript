const fs = require('fs').promises;
const http = require('http');

async function countStudents(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
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
    throw new Error('Cannot load the database');
  }
}
const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const result = await countStudents(process.argv[2]);
      const finalResult = `This is the list of our students\n${result}`;

      res.end(finalResult);
    } catch (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end(`This is the list of our students\n${error.message}`);
      // throw error;
    }
  }
});

app.listen(1245, '127.0.0.1');

module.exports = app;
