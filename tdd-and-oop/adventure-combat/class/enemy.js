const { Character } = require('./character');

class Enemy extends Character {
  cooldown = 3000;
  attackTarget = null;
  timeoutId = null;

  constructor(name, description, currentRoom) {
    // Fill this in
    super(name, description, currentRoom);
  }

  setPlayer(player) {
    this.player = player;
  }

  randomMove() {
    // Fill this in
    this.cooldown += 3000;
    const exits = this.currentRoom.getExits();
    const idx = Math.floor(Math.random() * exits.length);
    const nextRoom = this.currentRoom.getRoomInDirection(exits[idx]);
    this.currentRoom = nextRoom;
    console.log(`${this.name} moved to other room`);
  }

  takeSandwich() {
    // Fill this in
    this.cooldown += 2000;
    const item = this.attackTarget.getItemByName('sandwich');
    if (!item) {
      console.log(`${this.name} took nothing`);
      return;
    }
    this.items.push(item);
    console.log(`${this.name} took your sandwich`);
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = () => {
      this.cooldown = 0;
      this.timeoutId = null;
      this.act();
    };
    this.timeoutId = setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    // Fill this in
    this.cooldown += 3000;
    if (this.attackTarget.health <= 0) {
      return;
    }
    this.attackTarget.applyDamage(this.strength);
  }

  applyDamage(amount) {
    // Fill this in
    if (this.health < amount) {
      this.health = 0;
    } else {
      this.health -= amount;
    }
  }

  act() {
    this.attackTarget = this.player;
    if (this.health <= 0) {
      console.log(`${this.name} is dead`);
      this.die();
      return;
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      if (this.timeoutId) return;
      this.rest();
    } else {
      const random = Math.random();
      if (random > 0.6) {
        this.attack(); // 40%
      } else if (random > 0.4) {
        this.takeSandwich(); // 20%
      } else if (random > 0.8) {
        this.randomMove(); // 20%
      } else {
        this.scratchNose(); // 20%
      }
    }
  }

  scratchNose() {
    this.cooldown += 1000;
    this.alert(`${this.name} scratches its nose`);
  }
}

module.exports = {
  Enemy,
};
