import demographic from "./age-expectancy"
export default class ageCalculator {

  constructor(earthYearAge) {
    this.earthYearAge = earthYearAge
    this.earthDayAge = earthYearAge * 365
    this.marsYearAge = Math.trunc(this.earthDayAge / 687)
    this.mercuryYearAge = Math.trunc(this.earthDayAge / 88)
    this.venusYearAge = Math.trunc(this.earthDayAge / 225)
    this.jupiterYearAge = Math.trunc(this.earthDayAge / 4333)
  }



}