class Solution {
public:
    string bestHand(vector<int>& ranks, vector<char>& suits) {
        unordered_map<int,int> rankCounts;
        unordered_map<int,int> suitCounts;
        for(auto& i : ranks){
            rankCounts[i]++;
        }
        for(auto& i : suits){
            suitCounts[i]++;
        }
        for(auto& itr : suitCounts){
            if(itr.second == 5) return "Flush";
            else break;
        }
        for(auto& itr : rankCounts){
            if(itr.second >= 3) return "Three of a Kind";
        }
        for(auto& itr : rankCounts){
            if(itr.second >= 2) return "Pair";
        }
        return "High Card";
    }
};