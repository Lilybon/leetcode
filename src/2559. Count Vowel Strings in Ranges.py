class Solution:
    def vowelStrings(self, words: List[str], queries: List[List[int]]) -> List[int]:
        vowels = {'a', 'e', 'i', 'o', 'u'}

        sum = 0
        prefix_sum = []
        for word in words:
            sum += int(word[0] in vowels and word[-1] in vowels)
            prefix_sum.append(sum)

        ans = []
        for [start, end] in queries:
            ans.append(prefix_sum[end] - (0 if start == 0 else prefix_sum[start - 1]))
        return ans
        