
export class PathResolver {
  static resolve(path: string, identifier: string): string {
    if (path.includes(':identifier')) {
      return path.replace(':identifier', identifier)
    }
    return path
  }

  static resolveWithIdentifier(path: string, identifier: string): string {
    if (path.includes(':identifier')) {
      return path.replace(':identifier', identifier)
    }
    return path
  }

  static resolveWithId(path: string, id: string, identifier: string): string {
    return this.resolve(path, identifier).replace(':id', id)
  }
}
