export default function updateStudentGradeByCity(students, city, newGrade) {
  return students
    .filter((student) => student.location === city)
    .map((students) => {
      const studentIdFilter = newGrade.filter((grade) => grade.studentId === students.id);
      const grade = studentIdFilter.length > 0 ? studentIdFilter[0].grade : 'N/A';
      return { ...students, grade };
    });
}
