export default function guardrall(mathFuntion) {
  const queue = [];

  try {
    const result = mathFuntion();
    queue.push(result);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  }
  queue.push('Guardrail was processed');

  return queue;
}
