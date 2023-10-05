/**
 * @param {number[]} nums
 * @return {number[]}
 */
function majorityElement(nums) {
  let [candidate1, candidate2, count1, count2] = [0, 1, 0, 0]

  for (num of nums) {
    if (num === candidate1) {
      count1++
    } else if (num == candidate2) {
      count2++
    } else if (count1 === 0) {
      candidate1 = num
      count1++
    } else if (count2 === 0) {
      candidate2 = num
      count2++
    } else {
      count1--
      count2--
    }
  }

  count1 = count2 = 0
  for (num of nums) {
    if (num === candidate1) {
      count1++
    } else if (num === candidate2) {
      count2++
    }
  }

  const [ans, treshold] = [[], Math.floor(nums.length / 3)]
  if (count1 > treshold) {
    ans.push(candidate1)
  }
  if (count2 > treshold) {
    ans.push(candidate2)
  }
  return ans
}
