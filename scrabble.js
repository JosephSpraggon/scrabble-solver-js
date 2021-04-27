module.exports = class Scrabble {

  constructor(word) {
    this.word = word;
    this.points = 0;
    this.dictionary= {'a':1, 'e':1, 'i':1, 'o':1, 'u':1, 'l':1, 'n':1, 'r':1, 's':1, 't':1,
    'd':2, 'g':2, 'b':3, 'c':3, 'm':3, 'p':3, 'f':4, 'h':4, 'v':4, 'w':4, 'y':4,
  'k':5, 'j':8, 'x':8, 'q':10, 'z':10}
  }

  score = () => {
    if(typeof this.word != "string" || this.word == " " || this.word == " \t\n"){
      return 0};
    let letters = this.word.toLowerCase().split("");
    letters.forEach((letter) => {
      this.points += this.dictionary[letter]
    })
    return this.points;
  }

};