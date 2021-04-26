module.exports = class Scrabble {

  constructor(word) {
    this.word = word;
    this.points = 0
  }

  score = () => {
    let letters = this.word.toLowerCase().split("");
    for (let i = 0; i < letters.length; i++) {
      if(letters[i] == 'a' || letters[i] == 'e' || letters[i] == 'i' || letters[i] == 'o' || letters[i] == 'u' || letters[i] == 'l' || letters[i] == 'n' || letters[i] == 'r' || letters[i] == 's' || letters[i] == 't') {
        this.points += 1
      }
    }
    return this.points;
  }

};