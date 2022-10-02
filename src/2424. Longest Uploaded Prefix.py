class LUPrefix:

    def __init__(self, n: int):
        self.length = 0
        self.nums = set()

    def upload(self, video: int) -> None:
        self.nums.add(video)

    def longest(self) -> int:
        while self.length + 1 in self.nums:
            self.length += 1
        return self.length


# Your LUPrefix object will be instantiated and called as such:
# obj = LUPrefix(n)
# obj.upload(video)
# param_2 = obj.longest()