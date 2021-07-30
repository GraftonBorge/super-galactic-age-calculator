
import ageCalculator from "../src/age-calculator";

describe('ageCalculator', () => {
  let myGalacticAges;

  beforeEach(() => {
    myGalacticAges = new ageCalculator(23)
  })

  test('Should return my age on Earth', () => {
    expect(myGalacticAges.earthAge).toEqual(23);
  })

  test('Should return my age on Mars', () => {
    expect(myGalacticAges.marsAge).toEqual(12)
  })





})