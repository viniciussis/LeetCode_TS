export function removeDuplicates(nums: number[]) {
  let left = 0,
    right = nums.length - 1;
  let counter = 0;
  while (left < right) {
    let temp = nums[right];
    if (temp === nums[right - 1]) {
      if (temp) {
        nums.unshift(temp);
        nums.pop();
        nums.pop();
        right--;
        continue;
      }
    }
    if (temp) {
      nums.unshift(temp);
      nums.pop();
    }
    left++;
  }

  return { nums, length: nums.length };
}

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
// console.log(removeDuplicates([1,1,2]))
