class Solution:
    def maximumRobots(self, chargeTimes: List[int], runningCosts: List[int], budget: int) -> int:
        n = len(chargeTimes)
        sum_of_running_cost = left = 0
        deque_of_charge_time = deque()
        for right in range(n):
            sum_of_running_cost += runningCosts[right]
            while deque_of_charge_time and chargeTimes[deque_of_charge_time[-1]] <= chargeTimes[right]:
                deque_of_charge_time.pop()
            deque_of_charge_time.append(right)
            if chargeTimes[deque_of_charge_time[0]] + (right - left + 1) * sum_of_running_cost > budget:
                if deque_of_charge_time[0] == left:
                    deque_of_charge_time.popleft()
                sum_of_running_cost -= runningCosts[left]
                left += 1
        return n - left
                
        