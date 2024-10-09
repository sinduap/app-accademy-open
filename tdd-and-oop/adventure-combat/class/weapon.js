const { Item } = require('./item');

class Weapon extends Item {
  isWeapon = true;

  constructor(name, description, attackBonus = 0, defenseBonus = 0) {
    super(name, description);
    this.attackBonus = attackBonus;
    this.defenseBonus = defenseBonus;
  }
}

module.exports = { Weapon };
