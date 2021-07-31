
import demographic from "../src/age-expectancy";


describe('demographic', () => {
  let maleDemographic;
  let femaleDemographic

  beforeEach(() => {
    maleDemographic = new demographic("male");
    femaleDemographic = new demographic("female")
  })

  test('should return life expectancy for my US male demographic', () => {
    maleDemographic.maleAgeExpectancy("USA");
    expect(maleDemographic.lifeExpectancy).toEqual(75)
  })

  test('should return life expectancy for my UK male demographic', () => {
    maleDemographic.maleAgeExpectancy("UK");
    expect(maleDemographic.lifeExpectancy).toEqual(79)
  })

  test('should return life expectancy for my US female demographic', () => {
    femaleDemographic.femaleAgeExpectancy("USA");
    expect(femaleDemographic.lifeExpectancy).toEqual(81)
  })
})