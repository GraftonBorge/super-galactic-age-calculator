export default class ageCalculator {

  constructor(earthYearAge) {
    this.earthYearAge = earthYearAge
    this.earthDayAge = earthYearAge * 365
  }
}