class Solution:
    def maximumRobots(self, chargeTimes: List[int], runningCosts: List[int], budget: int) -> int:
        n = len(chargeTimes)
        sumOfRunningCost = left = 0
        dequeOfChargeTime = deque()
        for right in range(n):
            sumOfRunningCost += runningCosts[right]
            while dequeOfChargeTime and chargeTimes[dequeOfChargeTime[-1]] <= chargeTimes[right]:
                dequeOfChargeTime.pop()
            dequeOfChargeTime.append(right)
            if chargeTimes[dequeOfChargeTime[0]] + (right - left + 1) * sumOfRunningCost > budget:
                if dequeOfChargeTime[0] == left:
                    dequeOfChargeTime.popleft()
                sumOfRunningCost -= runningCosts[left]
                left += 1
        return n - left
                
        