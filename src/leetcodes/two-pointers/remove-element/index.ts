export function removeElement(nums: number[], val: number): number {
  let right: number = nums.length;

  if (right == 1 && nums[right - 1] != val) {
    return 1;
  }

  for (let i: number = 0; i < right; ) {
    if (nums[i] == val) {
      let temp = nums.splice(i, 1)[0];
      temp && nums.push(temp);
      right--;
      continue;
    }
    i++;
  }

  return right;
}

console.log(removeElement([3, 3], 5));
console.log(removeElement([2], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement([3, 2, 2, 3], 3));
