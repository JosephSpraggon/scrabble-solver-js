module.exports = class Scrabble {

  constructor(word) {
    this.word = word;
    this.points = 0;
    this.onePointers = ['a', 'e', 'i','o','u','l','n','r','s','t'];
    this.twoPointers = ['d', 'g'];
  }



  score = () => {
    let letters = this.word.toLowerCase().split("");
    for (let i = 0; i < letters.length; i++) {
      if(this.onePointers.includes(letters[i])){
        this.points += 1
      } if(this.twoPointers.includes(letters[i])){
        this.points += 2
      }
    }
    return this.points;
  }

};