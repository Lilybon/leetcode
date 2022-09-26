class Solution:
    def equationsPossible(self, equations: List[str]) -> bool:
        uf = list(range(26))

        def find(x: int) -> int:
            if x != uf[x]:
                uf[x] = find(uf[x])
            return uf[x]

        def getIndex(c: string) -> int:
            return ord(c) - 97
        
        for a, e, _, b in equations:
            if e == "=":
                ra = find(getIndex(a))
                rb = find(getIndex(b))
                uf[ra] = uf[rb]

        return not any(e == "!" and find(getIndex(a)) == find(getIndex(b)) for a, e, _, b in equations)