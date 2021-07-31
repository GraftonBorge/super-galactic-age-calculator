
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
    expect(maleDemographic.lifeYearExpectancy).toEqual(75)
  })

  test('should return life expectancy for my UK male demographic', () => {
    maleDemographic.maleAgeExpectancy("UK");
    expect(maleDemographic.lifeYearExpectancy).toEqual(79)
  })

  test('should return life expectancy for my US female demographic', () => {
    femaleDemographic.femaleAgeExpectancy("USA");
    expect(femaleDemographic.lifeYearExpectancy).toEqual(81)
  })

  test('should return life expectancy for my UK female demographic', () => {
    femaleDemographic.femaleAgeExpectancy("UK");
    expect(femaleDemographic.lifeYearExpectancy).toEqual(83)
  })
  
  test('should return age expectancy in days', () => {
    maleDemographic.maleAgeExpectancy("USA")
    expect(maleDemographic.lifeDayExpectancy).toEqual(27375)
  })
})