import { BrowserHistory } from '../src/1472. Design Browser History'

describe('BrowserHistory', () => {
  test('it implements the BrowserHistory class', () => {
    const leetcode = 'leetcode.com',
      google = 'google.com',
      facebook = 'facebook.com',
      youtube = 'youtube.com',
      linkedin = 'linkedin.com'

    const browserHistory = new BrowserHistory(leetcode)
    browserHistory.visit(google)
    browserHistory.visit(facebook)
    browserHistory.visit(youtube)
    expect(browserHistory.back(1)).toBe(facebook)
    expect(browserHistory.back(1)).toBe(google)
    expect(browserHistory.forward(1)).toBe(facebook)
    browserHistory.visit(linkedin)
    expect(browserHistory.forward(2)).toBe(linkedin)
    expect(browserHistory.back(2)).toBe(google)
    expect(browserHistory.back(7)).toBe(leetcode)
  })
})
