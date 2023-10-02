class Solution {
public:
    bool winnerOfGame(string colors) {
        int alice = 0, bob = 0;
        for (int i = 2; i < colors.size(); ++i) {
            if (colors[i - 2] == colors[i - 1] && colors[i - 1] == colors[i]) {
                if (colors[i] == 'A') {
                    alice++;
                } else {
                    bob++;
                }
            }
        }
        return alice > bob;
    }
};