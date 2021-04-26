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

  test('should expect uppercase letters', () => {
    let test = new Scrabble('AA');
    expect(test.score()).toEqual(2);
  })

  test('aeioulnrst should return 10', () => {
    let test = new Scrabble('aeioulnrst');
    expect(test.score()).toEqual(10);
  })

  test('d should return 2', () => {
    let test = new Scrabble('d');
    expect(test.score()).toEqual(2);
  })

})