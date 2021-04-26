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

  test('dog should return 5', () => {
    let test = new Scrabble('dog');
    expect(test.score()).toEqual(5);
  })

  test('cap should return 7', () => {
    let test = new Scrabble('cap');
    expect(test.score()).toEqual(7);
  })

  test('how should return 9', () => {
    let test = new Scrabble('how');
    expect(test.score()).toEqual(9);
  })

  test('ok should return 6', () => {
    let test = new Scrabble('ok');
    expect(test.score()).toEqual(6);
  })

  test('jax should return 17', () => {
    let test = new Scrabble('jax');
    expect(test.score()).toEqual(17);
  })

  test('zq should return 20', () => {
    let test = new Scrabble('zq');
    expect(test.score()).toEqual(20);
  })

  test('cabbage should return 14', () => {
    let test = new Scrabble('cabbage');
    expect(test.score()).toEqual(14);
  })

  test('OXYPHENBUTAZONE should return 41', () => {
    let test = new Scrabble('OXYPHENBUTAZONE');
    expect(test.score()).toEqual(41);
  })

  test('"" should return 0', () => {
    let test = new Scrabble('');
    expect(test.score()).toEqual(0);
  })

  test('" " should return 0', () => {
    let test = new Scrabble(' ');
    expect(test.score()).toEqual(0);
  })

  test('nil should return 0', () => {
    let test = new Scrabble(null);
    expect(test.score()).toEqual(0);
  })

  test('\n or \t should return 0', () => {
    let test = new Scrabble(" \t\n");
    expect(test.score()).toEqual(0);
  })

})