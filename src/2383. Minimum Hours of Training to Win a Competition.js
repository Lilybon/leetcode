/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */

export function minNumberOfHours(
  initialEnergy,
  initialExperience,
  energy,
  experience,
) {
  const n = energy.length
  let requiredEnergy = 0,
    requiredExperience = 0
  for (let i = 0; i < n; i++) {
    if (initialEnergy > energy[i]) {
      initialEnergy -= energy[i]
    } else {
      requiredEnergy += energy[i] - initialEnergy + 1
      initialEnergy = 1
    }
    if (initialExperience > experience[i]) {
      initialExperience += experience[i]
    } else {
      requiredExperience += experience[i] - initialExperience + 1
      initialExperience = 2 * experience[i] + 1
    }
  }
  return requiredEnergy + requiredExperience
}
