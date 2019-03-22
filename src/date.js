export default class Date {
  constructor(age, planet, gender) {
    this.age = parseInt(age);
    this.planet = planet;
    this.gender = gender;
  }

  age() {
    return this.age;
  }
  
  ageCalc() {
    let earthDays = this.age * 365;
    if (this.planet == "Mercury") {
      let ageMercury = earthDays / 87.6;
      return Math.round(ageMercury * 100) / 100;
    }
    else if (this.planet == "Venus") {
      let ageVenus = earthDays / 226.3;
      return Math.round(ageVenus * 100) / 100;
    }
    else if (this.planet == "Mars") {
      let ageMars = earthDays / 686.2;
      return Math.round(ageMars * 100) / 100;
    }
    else if (this.planet == "Jupiter") {
      let ageJupiter = earthDays / 4328.9;
      return Math.round(ageJupiter * 100) / 100;
    }
  }

  earthExpectancy() {
    if (this.gender == "Male") {
      return 68.33;
    } 
    else if (this.gender == "Female") {
      return 72.66;
    }
  }

  lifeExpectancyCalc() {
    return this.earthExpectancy() - this.ageCalc();
  }

  lifeExpentancyNotification() {
    if (this.lifeExpenctancyCalc() < 0) {
      return "You have lived" + (this.lifeExpectancyCalc() + (this.lifeExpectancyCalc() * 2)) + "past the life expenctancy";
    }
    else if (this.lifeExpectancyCalc() > 0) {
      return "You have" + this.lifeExpectancyCalc() + "years to live on";
    }
  }

}