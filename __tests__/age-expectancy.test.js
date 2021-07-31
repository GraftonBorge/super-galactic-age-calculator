
import demographic from "../src/age-expectancy";


describe('demographic', () => {
  let maleDemographic;

  beforeEach(() => {
    maleDemographic = new demographic("male");

  })

  test('should return life expectancy for my male demographic', () => {
    maleDemographic.maleAgeExpectancy("USA");
    expect(maleDemographic.lifeExpectancy).toEqual(75)
  })
})