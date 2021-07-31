
import demographic from "../src/age-expectancy";


describe('demographic', () => {
  let maleDemographic;

  beforeEach(() => {
    maleDemographic = new demographic("male");

  })

  test('should return life expectancy for my US male demographic', () => {
    maleDemographic.maleAgeExpectancy("USA");
    expect(maleDemographic.lifeExpectancy).toEqual(75)
  })

  test('should return life expectancy for my UK male demographic', () => {
    maleDemographic.maleAgeExpectancy("UK");
    expect(maleDemographic.lifeExpectancy).toEqual(79)
  })
})