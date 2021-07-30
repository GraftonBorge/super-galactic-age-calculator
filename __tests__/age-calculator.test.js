
import ageCalculator from "../src/age-calculator";

describe('ageCalculator', () => {
  let myGalacticAges;

  beforeEach(() => {
    myGalacticAges = new ageCalculator(23)
  })

  test('should', () => {
    expect(myGalacticAges.earthAge).toEqual(23);
  })
})