module.exports = class Scrabble {

  constructor(word) {
    this.word = word;
    this.points = 0;
    this.onePointers = ['a', 'e', 'i','o','u','l','n','r','s','t'];
    this.twoPointers = ['d', 'g'];
    this.threePointers = ['b', 'c', 'm', 'p'];
    this.fourPointers = ['f', 'h', 'v', 'w', 'y'];
    this.fivePointers = ['k'];
    this.eightPointers = ['j', 'x'];
    this.tenPointers = ['q', 'z'];
  }

  score = () => {
    if(this.word == null){
      return 0};
    let letters = this.word.toLowerCase().split("");
    for (let i = 0; i < letters.length; i++) {
      if(this.onePointers.includes(letters[i])){
        this.points += 1
      } if(this.twoPointers.includes(letters[i])){
        this.points += 2
      } if(this.threePointers.includes(letters[i])){
        this.points += 3
      } if(this.fourPointers.includes(letters[i])){
        this.points += 4
      } if(this.fivePointers.includes(letters[i])){
        this.points += 5
      } if(this.eightPointers.includes(letters[i])){
        this.points += 8
      } if(this.tenPointers.includes(letters[i])){
        this.points += 10
      }
    }
    return this.points;
  }

};