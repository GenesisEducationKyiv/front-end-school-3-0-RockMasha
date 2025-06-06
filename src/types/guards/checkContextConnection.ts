export function checkContextConnection<T>(
  context: T | null,
  name = 'Context'
): T {
  if (!context) {
    throw new Error(`${name} must be used within its corresponding Provider`)
  }
  return context
}

export default checkContextConnection
