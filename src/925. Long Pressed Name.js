/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */

export function isLongPressedName(name, typed) {
  let np = 0,
    tp = 0
  while (np < name.length && tp < typed.length) {
    if (name[np] === typed[tp]) {
      np++
      tp++
    } else if (tp >= 1 && typed[tp - 1] === typed[tp]) tp++
    else return false
  }
  if (np < name.length) return false
  else if (tp < typed.length) {
    while (tp < typed.length) {
      if (typed[tp - 1] !== typed[tp]) return false
      tp++
    }
    return true
  } else return true
}
