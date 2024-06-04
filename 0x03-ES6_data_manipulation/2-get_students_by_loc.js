export default function getStudentsByLocation(students, city) {
  if (typeof city !== 'string') {
    return [];
  }
  const newObject = students.filter((student) => student.location === city);
  return newObject;
}
