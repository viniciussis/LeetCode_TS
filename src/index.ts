import { isPalindrome } from "./utils";

function longestPalindrome(s: string): string {
    if (s.length === 1) return s;

    let left = 0, right = s.length - 1;
    let inner_palindrome: string = "";
    let outer_palindrome: string = "";
    let resp = "";
    
    while (left < right) {
        outer_palindrome = s.slice(left, right + 1)
        if (isPalindromeRange(s, left, right) && outer_palindrome.length == s.length) {
            resp = outer_palindrome;
            break;
        };

        for (let i = 0; i < outer_palindrome.length; i++) {
            inner_palindrome = outer_palindrome;
            if (i != 0) inner_palindrome = s.slice(i, outer_palindrome.length + 1);
            if (isPalindromeRange(inner_palindrome, i, outer_palindrome.length) && inner_palindrome.length > resp.length) {
                resp = inner_palindrome;
            };
        }

        right--;
    }
    return resp;
};

export function isPalindromeRange(s: string, left: number, right: number): boolean {
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}

// console.log(bruteForcelongestPalindrome("ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"))
// console.log(longestPalindrome("a"))
// console.log(longestPalindrome("cbbd"))
console.log(longestPalindrome("babad"))
console.log(longestPalindrome("abba"))