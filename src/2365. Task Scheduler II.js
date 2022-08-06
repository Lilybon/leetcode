/**
 * @param {number[]} tasks
 * @param {number} space
 * @return {number}
 */

export function taskSchedulerII(tasks, space) {
  const map = new Map()
  let days = 0
  for (let task of tasks) {
    if (map.has(task)) days = Math.max(map.get(task) + space, days) + 1
    else days++
    map.set(task, days)
  }
  return days
}
