const Dragon = require('./dragon');

// Your code here
class FriendlyDragon extends Dragon {
  constructor(name, color, lifeGoals, friend) {
    super(name, color);
    this.lifeGoals = lifeGoals;
    this.friend = friend;
  }

  hasLifeGoals() {
    this.lifeGoals.forEach(lg => {
      console.log(`${this.name} likes to ${lg}`);
    });
  }

  helpsPeople() {
    return `${this.name} helps their friend ${this.friend}`;
  }
}

try {
  module.exports = FriendlyDragon;
} catch {
  module.exports = null;
}
