export const isSelectElement = (element: unknown): element is HTMLSelectElement => {
  return (
    element instanceof HTMLElement &&
    (element as HTMLElement).tagName.toLowerCase() === 'select'
  )
}
