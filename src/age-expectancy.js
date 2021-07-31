

export default class demographic {

  constructor(gender, countrie, lifeYearExpectancy) {
    this.gender = gender
    this.countrie = countrie
    this.lifeYearExpectancy = lifeYearExpectancy
    this.lifeDayExpectancy;
    this.marsLifeExpectancy;
  }

maleAgeExpectancy(countrieChosen) {
  const db_male = [
  {
    countrie: "USA",
    lifeYearExpectancy: 75
  },
  {
    countrie: "UK",
    lifeYearExpectancy: 79
  }]
  for (let i = 0; i < db_male.length; i++) {
    let currentCountrie = db_male[i];
    if (currentCountrie.countrie === countrieChosen) {
      this.countrie = countrieChosen;
      this.lifeYearExpectancy = currentCountrie.lifeYearExpectancy;
      this.lifeDayExpectancy = this.lifeYearExpectancy * 365;
      this.marsLifeExpectancy = Math.trunc(this.lifeDayExpectancy / 687)
    }
  }
}

femaleAgeExpectancy(countrieChosen) {
  const db_female = [
  {
    countrie: "USA",
    lifeYearExpectancy: 81
  },
  {
    countrie: "UK",
    lifeYearExpectancy: 83
  }]
  for (let i = 0; i < db_female.length; i++) {
    let currentCountrie = db_female[i];
    if (currentCountrie.countrie === countrieChosen) {
      this.countrie = countrieChosen;
      this.lifeYearExpectancy = currentCountrie.lifeYearExpectancy;
      this.lifeDayExpectancy = this.lifeYearExpectancy * 365;
      this.marsLifeExpectancy = Math.trunc(this.lifeDayExpectancy / 687)
    }
  }
}
};

