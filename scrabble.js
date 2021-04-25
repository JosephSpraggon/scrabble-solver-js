module.exports = class Scrabble {

  constructor(word) {
    this.word = word;
    this.points = 0
  }

  score = () => {
    let letters = this.word.split("")
    for (let i = 0; i < letters.length; i++) {
      if(letters[i] == 'a') {
        this.points += 1
      }
    }
    return this.points;
  }

};