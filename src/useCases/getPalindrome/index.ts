import { GetPalindromeController } from "./GetPalindromeController";
import { GetPalindromeUseCase } from "./GetPalindrome";

const getPalindromeUseCase = new GetPalindromeUseCase()

const getPalindromeController = new GetPalindromeController(
  getPalindromeUseCase
)

export { getPalindromeController }