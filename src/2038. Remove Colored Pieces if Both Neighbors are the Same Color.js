/**
 * @param {string} colors
 * @return {boolean}
 */
function winnerOfGame(colors) {
  let [alice, bob] = [0, 0]
  for (let i = 2; i < colors.length; ++i) {
    if (colors[i - 2] === colors[i - 1] && colors[i - 1] === colors[i]) {
      if (colors[i] === 'A') {
        alice++
      } else {
        bob++
      }
    }
  }
  return alice > bob
}
