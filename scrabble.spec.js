const { test, expect } = require('@jest/globals');
const Scrabble = require('./scrabble');

describe('Scrabble class', () => {

  test('should create a scrabble object', () => {
    expect(new Scrabble).toBeInstanceOf(Scrabble);
  })

  test('should hold a word as a property', () => {
    let test = new Scrabble('test');
    expect(test.word).toEqual('test');
  })

})

describe('Score function', () => {

  test('a should return a score of 1', () => {
    let test = new Scrabble('a');
    expect(test.score()).toEqual(1);
  })

  test('aa should return a score of 2', () => {
    let test = new Scrabble('aa');
    expect(test.score()).toEqual(2);
  })

  test('cabbage should return a score of 14', () => {
    let cabbage = new Scrabble('cabbage');
    expect(cabbage.score()).toEqual(14);
  })

})