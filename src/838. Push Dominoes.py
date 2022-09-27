class Solution:
    def pushDominoes(self, dominoes: str) -> str:
        n = len(dominoes)
        ans = [0] * n
        force = 0
        for i in range(n):
            char = dominoes[i]
            if char == "R":
                force = n
            elif char == "L":
                force = 0
            else:
                force = max(force - 1, 0)
            ans[i] += force

        force = 0
        for i in range(n - 1, -1, -1):
            char = dominoes[i]
            if char == "L":
                force = n
            elif char == "R":
                force = 0
            else:
                force = max(force - 1, 0)
            ans[i] -= force

        for i in range(n):
            ans[i] = "." if ans[i] == 0 else ("R" if ans[i] > 0 else "L")
        
        return "".join(ans)