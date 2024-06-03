export default function getListStudentIds(arg = []) {
  if (!Array.isArray(arg)) {
    return [];
  }
  const ids = arg.map((item) => item.id);
  return ids;
}
