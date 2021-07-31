
export default class demographic {

  constructor(gender, countrie) {
    this.gender = gender
    this.countrie = countrie
    this.lifeExpectancy;
  }

maleAgeExpectancy(countrieChosen) {
  const db_male = [
  {
    countrie: "USA",
    lifeExpectancy: 75
  },
  {
    countrie: "UK",
    lifeExpectancy: 79
  }]
  for (let i = 0; i < db_male.length; i++) {
    let currentCountrie = db_male[i];
    if (currentCountrie.countrie === countrieChosen) {
      this.countrie = countrieChosen;
      this.lifeExpectancy = currentCountrie.lifeExpectancy;
    }
  }
}

femaleAgeExpectancy(countrieChosen) {
  const db_female = [
  {
    countrie: "USA",
    lifeExpectancy: 81
  },
  {
    countrie: "UK",
    lifeExpectancy: 83
  }]
  for (let i = 0; i < db_female.length; i++) {
    let currentCountrie = db_female[i];
    if (currentCountrie.countrie === countrieChosen) {
      this.countrie = countrieChosen;
      this.lifeExpectancy = currentCountrie.lifeExpectancy;
    }
  }
}
};

