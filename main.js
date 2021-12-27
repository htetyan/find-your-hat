const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(fieldArray) {
    this.field = fieldArray;
  }

  print() {
    let fieldString = "";
    for (let i = 0; i < this.field.length; i++) {
      this.field[i].forEach((elem) => (fieldString += elem));
      fieldString += "\n";
    }
    console.log(fieldString);
  }

  print2() {
    let fieldString = '';
    for (let i = 0; i < this.field.length; i++) {
      fieldString += this.field[i].join('');
      fieldString += '\n';
    }
    console.log(fieldString);
  }
}

const myField = new Field([
  ["*", "░", "O"],
  ["░", "O", "░"],
  ["░", "^", "░"],
]);

//myField.print();
//myField.print2();

function genField(width, height, percent) {

    let result = "";
    let fLength = function (width) {
        for (let i = 0; i < width; i++) {}
    }
}

//create following:
// [x] random title sector
// [] length printer
// [] height printer

//yet to figure out: 
//how to add percentage of field to be covered in holes

function tileRandom() { 
    let charArray = [ hole, fieldCharacter]; 
    return charArray[Math.floor(Math.random()*2)];
}; 

//console.log(tileRandom());

function printTileLine(size) {
    let finalLine = "";
    for (let i=0;i<size;i++) {
        finalLine += tileRandom();
    }
    return finalLine;
}

//console.log(printTileLine(8)); 

function printTileGrid(size) {
    let finalGrid = "";
    for (let i=0;i<size;i++) {
        finalGrid += printTileLine(size) + "\n";
    }
    return finalGrid;
}

console.log(printTileGrid(10));
