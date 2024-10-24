const { Item } = require('./item');

class Food extends Item {
  isFood = true;

  constructor(name, description, healthBonus) {
    super(name, description);
    this.healthBonus = healthBonus;
  }
}

module.exports = {
  Food,
};
