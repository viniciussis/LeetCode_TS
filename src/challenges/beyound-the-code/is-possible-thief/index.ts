function isPossibleThief(wallet: number[]): boolean {
  if (!wallet.length || wallet.length == 1) return false;
  let left: number = 0;
  let right: number = wallet.length - 1;
  let sum: number;

  while (left < right) {
    sum = wallet[left]! + wallet[right]!;
    if (sum === 150) return true;
    if (sum > 150) {
      right--;
      continue;
    }
    left++;
  }

  return false;
}

console.log(isPossibleThief([10, 20, 50, 70, 80, 100, 150]));
console.log(isPossibleThief([5, 25, 50, 100, 200]));
console.log(isPossibleThief([1, 2, 3, 147, 148, 149]));
console.log(isPossibleThief([75]));
console.log(isPossibleThief([150]));
console.log(isPossibleThief([]));
