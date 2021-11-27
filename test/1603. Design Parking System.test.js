import { ParkingSystem } from '../src/1603. Design Parking System'

describe('ParkingSystem', () => {
  test('it implements a parking system which has three kinds of parking spaces', () => {
    const parkingSystem = new ParkingSystem(1, 1, 0)
    expect(parkingSystem.addCar(1)).toBe(true)
    expect(parkingSystem.addCar(2)).toBe(true)
    expect(parkingSystem.addCar(3)).toBe(false)
    expect(parkingSystem.addCar(1)).toBe(false)
  })
})
