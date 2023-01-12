import { detectIdentifier } from './detectIdentifier'
import { PathResolver } from './PathResolver'

declare global {
  interface String {
    resolve(): string
    resolveWithId(id: string): string
    resolveWithIdentifier(identifier: string): string
  }
}

String.prototype.resolve = function () {
  return PathResolver.resolve(this.toString(), detectIdentifier())
}

String.prototype.resolveWithId = function (id: string) {
  return PathResolver.resolveWithId(this.toString(), id, detectIdentifier())
}

String.prototype.resolveWithIdentifier = function (identifier: string) {
  return PathResolver.resolveWithIdentifier(this.toString(), identifier)
}
