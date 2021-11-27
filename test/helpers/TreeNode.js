export class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export function createTree(nums) {
  return createNode(0)
  function createNode(index) {
    if (index >= nums.length || nums[index] === null) return null
    return new TreeNode(
      nums[index],
      createNode(2 * index + 1),
      createNode(2 * index + 2)
    )
  }
}
