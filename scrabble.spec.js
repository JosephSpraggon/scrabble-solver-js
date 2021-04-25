const { test, expect } = require('@jest/globals');
const Scrabble = require('./scrabble');

describe('Scrabble class', () => {

  test('should create a scrabble object', () => {
    expect(new Scrabble).toBeInstanceOf(Scrabble);
  })

  test('should hold a word as a property', () => {
    var test = new Scrabble('test')
    expect(test.word).toEqual('test')
  })

})

describe('Score function', () => {

  test('a should return a score of 1', () => {
    var test = new Scrabble('a')
    expect(test.score).toEqual(1);
  })

})