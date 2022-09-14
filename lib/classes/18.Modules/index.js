"use strict";
// All the syntax of Javascript ES Modules is supported by Typescript.
// So, you can define a function:
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
/**
 * @returns true if the input string is a palindrome
 */
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
exports.isPalindrome = isPalindrome;
// and, use it in another file. Think of the next lines as other file:
const RELATIVE_PATH_1 = require("RELATIVE_PATH");
console.log((0, RELATIVE_PATH_1.isPalindrome)('teste'));
console.log((0, RELATIVE_PATH_1.isPalindrome)('madam'));
