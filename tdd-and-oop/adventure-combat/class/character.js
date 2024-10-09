class Character {
  strength = 10;
  health = 100;
  items = [];

  constructor(name, description, currentRoom) {
    // Fill this in
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
  }

  applyDamage(amount) {
    // Fill this in
    if (this.health < amount) {
      this.health = 0;
    } else {
      this.health -= amount;
    }
    // Die if health = 0
    if (this.health === 0) {
      this.die();
    }
  }

  die() {
    // Fill this in
    let droppedItems;
    if (this.items.length !== 0) {
      droppedItems = this.items;
      this.currentRoom.items.push(...droppedItems);
      this.items = [];
    }

    // Set currentRoom to null
    this.currentRoom = null;
  }
}

module.exports = {
  Character,
};
