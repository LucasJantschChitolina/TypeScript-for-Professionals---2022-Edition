// All the syntax of Javascript ES Modules is supported by Typescript.
// So, you can define a function:

/**
 * @returns true if the input string is a palindrome
 */
export function isPalindrome(str: string): boolean {
    return str === str.split('').reverse().join('')
}

// and, use it in another file. Think of the next lines as other file:

import {isPalindrome} from 'RELATIVE_PATH'

console.log(isPalindrome('teste'))
console.log(isPalindrome('madam'))
