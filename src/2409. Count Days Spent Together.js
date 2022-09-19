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
  const days = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
  const [MM, DD] = str.split('-')
  return days[Number(MM) - 1] + Number(DD)
}
