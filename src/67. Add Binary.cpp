class Solution {
public:
    string addBinary(string a, string b) {
        int i = a.size() - 1,
            j = b.size() - 1,
            carry = 0;
        string ans;
        while (i >= 0 || j >= 0) {
            if (i >= 0) {
                carry += a[i--] - '0';
            }
            if (j >= 0) {
                carry += b[j--] - '0';
            }
            ans = to_string(carry % 2) + ans;
            carry = carry > 1 ? 1 : 0;
        }

        if (carry == 1) {
            ans = '1' + ans;
        }

        return ans;
    }
};