class Solution:
    def mergeSimilarItems(self, items1: List[List[int]], items2: List[List[int]]) -> List[List[int]]:
        counter = Counter()
        for value, weight in items1:
            counter[value] += weight
        for value, weight in items2:
            counter[value] += weight
        return sorted(counter.items())