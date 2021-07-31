
import demographic from "../src/age-expectancy";


describe('demographic', () => {
  let maleDemographic;
  let femaleDemographic;

  beforeEach(() => {
    maleDemographic = new demographic("male");
    femaleDemographic = new demographic("female")
  })

  test('should return life expectancy for my male demographic', () => {
    maleDemographic.maleAgeExpectancy("USA");
    expect(maleDemographic.lifeExpectancy).toEqual(75)
  })
})