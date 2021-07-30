
import ageCalculator from "../src/age-calculator";

describe('ageCalculator', () => {
  let myGalacticAges;

  beforeEach(() => {
    myGalacticAges = new ageCalculator(23)
  })

  test('Should return my age on Earth', () => {
    expect(myGalacticAges.earthYearAge).toEqual(23);
  })

  test('Should return my age in earth days', () => {
    expect(myGalacticAges.earthDayAge).toEqual(8395)
  })

  test('should return age on mars', () => {
    expect(myGalacticAges.marsYearAge).toEqual(12)
  })

  test('should return age on Mercury', () => {
    expect(myGalacticAges.mercuryYearAge).toEqual(95)
  })


})