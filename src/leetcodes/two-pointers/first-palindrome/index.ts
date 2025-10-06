import { isPalindromeRange } from '../../../utils';

function firstPalindrome(words: string[]): string {
  let empty = '';
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word && isPalindromeRange(word)) {
      return word;
    }
  }
  return empty;
}

console.log(firstPalindrome(['def', 'ghi']));
console.log(firstPalindrome(['notapalindrome', 'racecar']));
console.log(firstPalindrome(['abc', 'car', 'ada', 'racecar', 'cool']));
