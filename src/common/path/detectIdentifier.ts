export function detectIdentifier(): string {
  const splitted = window.location.pathname.split('/')
  if (splitted.length < 2) {
    return ''
  }

  if (splitted[1] != 'organization') {
    return ''
  }

  const found = splitted[2]
  if (found) {
    return found
  }

  return ''
}
