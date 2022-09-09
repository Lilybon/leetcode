class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        R = len(image)
        C = len(image[0])
        old_color = image[sr][sc]
        def dfs(r: int, c: int):
            if r < 0 or r >= R or c < 0 or c >= C or image[r][c] == color or image[r][c] != old_color:
                return
            image[r][c] = color
            dfs(r - 1, c)
            dfs(r + 1, c)
            dfs(r, c - 1)
            dfs(r, c + 1)
        dfs(sr, sc)
        return image