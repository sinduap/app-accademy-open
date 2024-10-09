const { Character } = require('./character');
const { Enemy } = require('./enemy');
const { Food } = require('./food');

class Player extends Character {
  attackBonus = 0;
  defenseBonus = 0;

  constructor(name, startingRoom) {
    super(name, 'main character', startingRoom);
  }

  move(direction) {
    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;
      nextRoom.printRoom(this);
    } else {
      console.log('You cannot move in that direction');
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0; i < this.items.length; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    // Fill this in
    const item = this.currentRoom.getItemByName(itemName);
    if (!item) {
      console.log(`No ${itemName} in this room`);
      return;
    }
    if (item.isWeapon) {
      this.attackBonus += item.attackBonus;
      this.defenseBonus += item.defenseBonus;
    }
    console.log(`${this.name} is carrying ${item.name}`);
    this.items.push(item);
  }

  dropItem(itemName) {
    // Fill this in
    const item = this.getItemByName(itemName);
    if (item.isWeapon) {
      this.attackBonus -= item.attackBonus;
      this.defenseBonus -= item.defenseBonus;
    }
    console.log(`${this.name} is droping ${item.name}`);
    this.currentRoom.items.push(item);
  }

  eatItem(itemName) {
    // Fill this in
    const item = this.getItemByName(itemName);
    if (!item) {
      console.log(`no ${itemName} in your inventory`);
      return;
    }
    if (!item.isFood) {
      console.log(`cannot eat ${itemName}`);
      this.items.push(item);
      return;
    }
    this.health += item.healthBonus;
    console.log(`${this.name}'s health: ${this.health}`);
  }

  getItemByName(name) {
    // Fill this in
    const item = this.items.find(i => i.name === name);
    this.items = this.items.filter(i => i.name !== name);
    return item;
  }

  hit(name) {
    // Fill this in
    const enemy = this.currentRoom.getEnemyByName(name);
    if (!enemy) {
      console.log(`no enemy named ${name} in this room`);
      return;
    }
    const totalDamage = this.strength + this.strength * this.attackBonus;
    enemy.applyDamage(totalDamage);
    enemy.act();
    if (enemy.health > 0) {
      console.log(`${this.name} hit ${name}: ${totalDamage}`);
      console.log(`${name}'s health: ${enemy.health}`);
    }
  }

  applyDamage(amount) {
    // Fill this in
    if (this.health < amount) {
      this.health = 0;
    } else {
      const totalAmount = amount - amount * this.defenseBonus;
      this.health -= totalAmount;
      console.log(`enemy hit ${this.name}: ${totalAmount}`);
      console.log(`${this.name}'s health: ${this.health}`);
    }
    // Die if health = 0
    if (this.health === 0) {
      this.die();
    }
  }

  die() {
    console.log('You are dead!');
    process.exit();
  }
}

module.exports = {
  Player,
};
