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

function printTileLine2(size) {
    let finalLine = "";
    let helperArray = [];
    for (let i=0;i<size;i++) {
        helperArray.push(tileRandom());
        finalLine = helperArray.join("");
    }
    return finalLine;
}
//console.log(printTileLine(8));

function printHatLine(size) {
    let finalLine = "";
    let helperArray = [];
    let hatPositionNumber = Math.floor(Math.random()*size)-1; 
    for (let i=0; i<size; i++) {
        if ( i === hatPositionNumber) {
            helperArray.push(hat);
        } else {
            helperArray.push(tileRandom());
            finalLine = helperArray.join("");
        }
    }
   // console.log(finalLine.length);
    return finalLine;
};

//console.log(printHatLine(10));
        
function printTileGrid(length, width) {
    let finalGrid = "";
    let hatLineNum = Math.floor(Math.random()*length);
    for (let i=0;i<length;i++) {
        if ( i === hatLineNum) {
            finalGrid += printHatLine(width) + "\n";
        }
        finalGrid += printTileLine2(width) + "\n";
    }
    return finalGrid;
}

console.log(printTileGrid(10, 10));
console.log(printTileGrid(5, 5));
console.log(printTileGrid(8, 11));

