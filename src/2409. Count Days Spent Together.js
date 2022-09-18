/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
function countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob) {
  const aliceInverval = [getDays(arriveAlice), getDays(leaveAlice)]
  const bobInverval = [getDays(arriveBob), getDays(leaveBob)]
  if (aliceInverval[1] < bobInverval[0] || bobInverval[1] < aliceInverval[0])
    return 0
  return (
    Math.min(aliceInverval[1], bobInverval[1]) -
    Math.max(aliceInverval[0], bobInverval[0]) +
    1
  )
}

function getDays(str) {
  const daysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const [MM, DD] = str.split('-')
  let days = Number(DD)
  for (let i = 0; i < Number(MM) - 1; i++) {
    days += daysOfMonths[i]
  }
  return days
}
