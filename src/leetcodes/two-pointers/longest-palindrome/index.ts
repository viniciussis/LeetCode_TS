import { isPalindrome } from "../../../utils";

export function bruteForcelongestPalindrome(s: string): string {
    if (s.length === 1) return s;

    let left = 0, right = s.length - 1;
    let inner_palindrome: string = "";
    let outer_palindrome: string = "";
    let resp = "";
    
    while (left < right) {
        outer_palindrome = s.slice(left, right + 1)
        if (isPalindrome(outer_palindrome) && outer_palindrome.length == s.length) {
            resp = outer_palindrome;
            break;
        };

        for (let i = 0; i < outer_palindrome.length; i++) {
            inner_palindrome = outer_palindrome;
            if (i != 0) inner_palindrome = s.slice(i, outer_palindrome.length + 1);
            if (isPalindrome(inner_palindrome) && inner_palindrome.length > resp.length) {
                resp = inner_palindrome;
            };
        }

        right--;
    }
    return resp;
};