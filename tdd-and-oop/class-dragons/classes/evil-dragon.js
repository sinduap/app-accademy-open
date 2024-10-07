const Dragon = require('./dragon');

// Your code here
class EvilDragon extends Dragon {
  constructor(name, color, evilDoings, nemesis) {
    super(name, color);
    this.evilDoings = evilDoings;
    this.nemesis = nemesis;
  }
  dontInviteThemOverForDinner() {
    this.evilDoings.forEach(ed => {
      console.log(`${this.name} will ${ed}`);
    });
  }
  burnsNemesis() {
    return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
  }
}

try {
  module.exports = EvilDragon;
} catch {
  module.exports = null;
}
