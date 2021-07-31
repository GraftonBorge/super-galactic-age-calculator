
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
  
  test('should return age expectancy in days for male', () => {
    maleDemographic.maleAgeExpectancy("USA")
    expect(maleDemographic.lifeDayExpectancy).toEqual(27375)
  })

  test('should return age expectancy in days for female', () => {
    femaleDemographic.femaleAgeExpectancy("USA")
    expect(femaleDemographic.lifeDayExpectancy).toEqual(29565)
  })

  test('should return age expectancy on mars for male', () => {
    maleDemographic.maleAgeExpectancy("USA")
    expect(maleDemographic.marsLifeExpectancy).toEqual(39)
  })

  test('should return age expectancy on mars for female', () => {
    femaleDemographic.femaleAgeExpectancy("USA")
    expect(femaleDemographic.marsLifeExpectancy).toEqual(43)
  })

  test('should return age expectancy on mercury for male', () => {
    maleDemographic.maleAgeExpectancy("USA")
    expect(maleDemographic.mercuryLifeExpectancy).toEqual(311)
  })

  test('should return age expectancy on mercury for female', () => {
    femaleDemographic.femaleAgeExpectancy("USA")
    expect(femaleDemographic.mercuryLifeExpectancy).toEqual(335)
  })

  test('should return age expectancy on venus for male', () => {
    maleDemographic.maleAgeExpectancy("USA")
    expect(maleDemographic.venusLifeExpectancy).toEqual(121)
  })

  test('should return age expectancy on venus for female', () => {
    femaleDemographic.femaleAgeExpectancy("USA")
    expect(femaleDemographic.venusLifeExpectancy).toEqual(131)
  })

  test('should return age expectancy on jupiter for male', () => {
    maleDemographic.maleAgeExpectancy("USA")
    expect(maleDemographic.jupiterLifeExpectancy).toEqual(6)
  })

  test('should return age expectancy on jupiter for female', () => {
    femaleDemographic.femaleAgeExpectancy("USA")
    expect(femaleDemographic.jupiterLifeExpectancy).toEqual(6)
  })


})