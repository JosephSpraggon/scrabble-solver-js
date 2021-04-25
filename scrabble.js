module.exports = class Scrabble {

  constructor(word) {
    this.word = word;
    this.points = 0
  }

  score = () => {
    var letters = this.word.split("")
    if(letters.includes('a')){
      this.points += 1
    }
    return this.points;
  }

};