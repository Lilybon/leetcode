import { replaceWords } from '../src/648. Replace Words'

describe('replaceWords', () => {
  test('it returns the sentence after the replacement', () => {
    expect(
      replaceWords(
        ['cat', 'bat', 'rat'],
        'the cattle was rattled by the battery'
      )
    ).toBe('the cat was rat by the bat')
    expect(replaceWords(['a', 'b', 'c'], 'aadsfasf absbs bbab cadsfafs')).toBe(
      'a a b c'
    )
    expect(
      replaceWords(
        ['a', 'aa', 'aaa'],
        'a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa'
      )
    ).toBe('a a a a a a a a bbb baba a')
    expect(
      replaceWords(
        ['catt', 'cat', 'bat', 'rat'],
        'the cattle was rattled by the battery'
      )
    ).toBe('the cat was rat by the bat')
    expect(
      replaceWords(
        ['ac', 'ab'],
        'it is abnormal that this solution is accepted'
      )
    ).toBe('it is ab that this solution is ac')
  })
})
