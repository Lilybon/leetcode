class Solution:
    def bagOfTokensScore(self, tokens: List[int], power: int) -> int:
        tokens.sort()
        max_score = score = i = 0
        j = len(tokens) - 1
        while i <= j:
            if power >= tokens[i]:
                power -= tokens[i]
                score += 1
                max_score = max(max_score, score)
                i += 1
            elif score > 0:
                score -= 1
                power += tokens[j]
                j -= 1
            else:
                break
        return max_score
        