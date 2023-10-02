class Solution:
    def winnerOfGame(self, colors: str) -> bool:
        alice, bob = 0, 0
        for i in range(2, len(colors)):
            if colors[i - 2] == colors[i - 1] == colors[i]:
                if colors[i] == 'A':
                    alice += 1
                else:
                    bob += 1
        return alice > bob
            