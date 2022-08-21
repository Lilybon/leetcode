class Solution {
  public:
      int minNumberOfHours(int initialEnergy, int initialExperience, vector<int>& energy, vector<int>& experience) {
          int n = energy.size();
          int requiredEnergy = 0;
          int requiredExperience = 0;
          for (int i = 0; i < n; ++i) {
              if (initialEnergy > energy[i]) {
                  initialEnergy -= energy[i];
              } else {
                  requiredEnergy += energy[i] - initialEnergy + 1;
                  initialEnergy = 1;
              }
              if (initialExperience > experience[i]) {
                  initialExperience += experience[i];
              } else {
                  requiredExperience += experience[i] - initialExperience + 1;
                  initialExperience = 2 * experience[i] + 1;
              }
          }
          return requiredEnergy + requiredExperience;
      }
  };