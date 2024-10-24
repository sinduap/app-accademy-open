const chai = require('chai');
const expect = chai.expect;

const { Word } = require('../class');

describe('Word', function () {
  let testWord = new Word('Hello unit testing');

  describe('Word constructor function', function () {
    it('should have a "word" property', function () {
      // expect.fail('replace with your code');
      expect(testWord).to.have.property('word');
    });

    it('should set the "word" property when a new word is created', function () {
      // expect.fail('replace with your code');
      expect(testWord).property('word').to.equal('Hello unit testing');
    });
  });

  describe('removeVowels function', function () {
    it('should return a the word with all vowels removed', function () {
      // expect.fail('replace with your code');
      expect(testWord.removeVowels()).to.equal('Hll nt tstng');
    });
  });

  describe('removeConsonants function', function () {
    it('should return the word with the consonants removed', function () {
      // expect.fail('replace with your code');
      expect(testWord.removeConsonants()).to.equal('eouiei');
    });
  });

  describe('pigLatin function', function () {
    it('should return the word converted to pig latin', function () {
      // expect.fail('replace with your code');
      expect(testWord.pigLatin()).to.equal('ello unit testingHay');
    });
  });
});
