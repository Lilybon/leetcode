class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0 or (x % 10 == 0 and x != 0):
            return False
        if x < 10:
            return True
        original_x = x
        reversed_x = 0
        while x > 0:
            digit = x % 10
            reversed_x = reversed_x * 10 + digit
            x = (x - digit) / 10
        return original_x == reversed_x
