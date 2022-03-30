import { IGetPalindromeDTO } from "./GetPalindromeDTO"

export class GetPalindromeUseCase {
  constructor () {}

  async execute(data: IGetPalindromeDTO) {
    let allPalindromes = []

    for(let i = data.startAt; i <= data.endAt; i++) {
      if (this.isPalindrome(i.toString())) {
        allPalindromes.push(i)
      }
    }

    return {
      parameters: data,
      allPalindromes: allPalindromes
    }
  }

  isPalindrome = (data: string):boolean => {
    for(let i = 0; i < data.length/2; i++) {
      if(data[i] !== data[data.length - 1 - i]) {
        return false
      }
    }

    return true
  }
}