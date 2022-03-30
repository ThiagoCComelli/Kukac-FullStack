export class InvalidRangeError extends Error {
  constructor (paramName: string) {
    super(`Missing param: ${paramName}`)
    this.name = 'InvalidRangeError'
  }
}