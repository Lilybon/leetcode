/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

export function accountsMerge(accounts) {
  const results = [],
    root = new Map(),
    owner = new Map(),
    m = new Map()
  for (let account of accounts) {
    for (let i = 1; i < account.length; i++) {
      root.set(account[i], account[i])
      owner.set(account[i], account[0])
    }
  }
  for (let account of accounts) {
    const parent = find(account[1], root)
    for (let i = 2; i < account.length; i++) {
      root.set(find(account[i], root), parent)
    }
  }
  for (let account of accounts) {
    for (let i = 1; i < account.length; i++) {
      const parent = find(account[i], root)
      if (!m.has(parent)) m.set(parent, new Set())
      m.get(parent).add(account[i])
    }
  }
  for (let [parent, set] of m) {
    const emails = [...set]
    emails.sort()
    results.push([owner.get(parent), ...emails])
  }
  return results
}

function find(target, root) {
  return root.get(target) === target ? target : find(root.get(target), root)
}
