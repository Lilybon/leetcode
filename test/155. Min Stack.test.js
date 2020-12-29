import { MinStack } from '../src/155. Min Stack'

describe('MinStack', () => {
  test('it returns the stack that supports push, pop, top, and retrieving the minimum element in constant time', () => {
    const stack = new MinStack()
    stack.push(-2)
    stack.push(0)
    stack.push(-3)
    expect(stack.getMin()).toBe(-3)
    stack.pop()
    expect(stack.top()).toBe(0)
    expect(stack.getMin()).toBe(-2)
  })
})
