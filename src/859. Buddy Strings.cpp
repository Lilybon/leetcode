class Solution {
public:
    bool buddyStrings(string s, string goal) {
        if (s.size() != goal.size()) {
            return false;
        }

        int countS[26] = {};
        int countGoal[26] = {};
        int firstIndex = -1;
        int secondIndex = -1;
        for (int i = 0; i < s.size(); ++i) {
           countS[s[i] - 'a']++;
           countGoal[goal[i] - 'a']++;
           if (s[i] != goal[i]) {
               if (firstIndex == -1) {
                   firstIndex = i;
               } else if (secondIndex == -1) {
                   secondIndex = i;
               } else {
                   return false;
               }
           }
        }
        
        bool hasDuplicated = false;
        for (int i = 0; i < 26; ++i) {
            if (countS[i] != countGoal[i]) {
                return false;
            }
            if (countS[i] > 1) {
                hasDuplicated = true;
            }
        }

        if (firstIndex == -1 && secondIndex == -1) {
            return hasDuplicated;
        }

        if (firstIndex == -1 && secondIndex != -1) {
            return false;
        }

        return s[firstIndex] == goal[secondIndex] &&
            s[secondIndex] == goal[firstIndex];
    }
};