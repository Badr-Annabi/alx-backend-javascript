export default function iterateThroughObject(reportWithIterator) {
  const employeesName = [];
  for (const item of reportWithIterator) {
    employeesName.push(item);
  }
  return employeesName.join(' | ');
}
