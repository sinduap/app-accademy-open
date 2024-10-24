const assert = require('assert/strict');
const Employee = require('./employee');
const Manager = require('./manager');

const hobbes = new Manager('Hobbes', 1000000, 'Founder', null);
const calvin = new Manager('Calvin', 130000, 'Director', hobbes);
const susie = new Manager('Susie', 100000, 'TA Manager', calvin);
const lily = new Employee('Lily', 90000, 'TA', susie);
const clifford = new Employee('Clifford', 90000, 'TA', susie);

const bonus = 0.05;

assert.equal(hobbes.calculateBonus(bonus), 70500);
assert.equal(calvin.calculateBonus(bonus), 20500);
assert.equal(susie.calculateBonus(bonus), 14000);
assert.equal(lily.calculateBonus(bonus), 4500);
assert.equal(clifford.calculateBonus(bonus), 4500);
