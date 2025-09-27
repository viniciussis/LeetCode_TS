function longestPalindrome(s: string): string {
    let left = 0, right = s.length - 1;
    let palindrome: string = "";
    while (left < right) {
        palindrome = s.slice(left, right)
        for (let i = right; i < left; i--) {
            
        }
        if (isPalindrome(palindrome)) break;
        right--;
    }
    return palindrome;
};

function isPalindrome(s: string): boolean {
    const str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join('');
};

console.log()