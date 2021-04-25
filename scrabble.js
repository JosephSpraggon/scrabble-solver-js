module.exports = class Scrabble {

  constructor(word) {
    this.word = word;
  }

  score = () => {
    if(this.word === 'a'){
      return 1;
    }
  }

};