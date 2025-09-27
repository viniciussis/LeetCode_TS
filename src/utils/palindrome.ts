export function isPalindrome(s: string): boolean {
    const str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join('');
};

export function isPalindromeRange(s: string, left: number, right: number): boolean {
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}
