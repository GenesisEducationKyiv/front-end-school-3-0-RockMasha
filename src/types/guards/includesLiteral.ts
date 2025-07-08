export function includesLiteral<T extends readonly string[]>(
  arr: T,
  value: string
): value is T[number] {
  return arr.includes(value as T[number])
}
