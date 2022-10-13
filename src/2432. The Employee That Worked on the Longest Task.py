class Solution:
    def hardestWorker(self, n: int, logs: List[List[int]]) -> int:
        longest_task = logs[0][1]
        id = logs[0][0]
        for i in range(1, len(logs)):
            if logs[i][1] - logs[i - 1][1] > longest_task:
                longest_task = logs[i][1] - logs[i - 1][1]
                id = logs[i][0]
            elif logs[i][1] - logs[i - 1][1] == longest_task:
                id = min(id, logs[i][0])
        return id