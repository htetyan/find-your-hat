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

function printTileArrayLine(size) {
    let helperArray = [];
    for (let i=0;i<size;i++) {
        helperArray.push(tileRandom());
    }
    return helperArray;
}

//console.log(printTileArrayLine(10));
//Tested

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
        
function printHatArrayLine(size) {
    let helperArray = [];
    let hatPositionNumber = Math.floor(Math.random()*size)-1; 
    for (let i=0; i<size; i++) {
        if ( i === hatPositionNumber) {
            helperArray.push(hat);
        } else {
            helperArray.push(tileRandom());
        }
    }
   // console.log(helperArray.length);
    return helperArray;
};

console.log(printHatArrayLine(10));

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
/*
console.log(printTileGrid(10, 10));
console.log(printTileGrid(5, 5));
console.log(printTileGrid(8, 11));
*/

let myArrayGrid = [];

function printTileArrayGrid(length, width) {
    //let finalArrayGrid = [];
    let hatLineNum = Math.floor(Math.random()*(length + 1));
    for (let i=0;i<length;i++) {
        if ( i == hatLineNum) {
            myArrayGrid.push(printHatArrayLine(width));
        } else {
        myArrayGrid.push(printTileArrayLine(width));
        }
    }
    return myArrayGrid;
}

console.log(printTileArrayGrid(4,5));
/*
//console.log(myArrayGrid);
printTileArrayGrid(8,12);
console.log(myArrayGrid);
console.log(myArrayGrid[0][0]);
//console.log(myArrayGrid[7][11]);
//console.log(myArrayGrid[2][5]);
*/
//let letter = prompt("Enter a letter : ");
//console.log(`Here is your ${letter}`);

function xLocation(array, p1, p2) {
    if ((p1 && p2) === undefined)
        p1 = 0;
        p2 = 0;
    if ((p1 || p2) === undefined)
        p1 = 0;
        p2 = 0;
    return array[p1][p2];
}

function winOrLose(xloco) {
    //lose condition
    //off the edge
    //win condition
}
/*
console.log(xLocation(myArrayGrid));
console.log(xLocation(myArrayGrid,0,1));
console.log(xLocation(myArrayGrid,0,2));
console.log(xLocation(myArrayGrid,0,3));
console.log(xLocation(myArrayGrid,1,0));
console.log(xLocation(myArrayGrid,1,1));
console.log(xLocation(myArrayGrid,1,2));
*/
function inputProcessor(userInput) {
    let newLocation = null;
    let myArr = myArrayGrid;
    let len = 1;
    let wid = 1;
    if (userInput === "h") {
        //move left
        wid -= 1;
        newLocation = myArr[len][wid];
        //change the index - 1
        //update the moving board
        //winOrLose(newLocation);
    } else if (userInput === "j") {
        //functions
        len += 1;
        newLocation = myArr[len][wid];
        //winOrLose(newLocation);
    } else if (userInput === "k") {
        //functions
        len -= 1;
        newLocation = myArr[len][wid];
        //winOrLose(newLocation);
    } else if (userInput === "l") {
        //functions
        wid += 1;
        newLocation = myArr[len][wid];
        //winOrLose(newLocation);
    } else {
      console.log("Please put in the correct direction inputs: h,j,k or l")
    }
    console.log(newLocation);
}

let userInput = prompt("Please choose a direction using the hjkl keys : "); 
console.log("Your starting location: ");
console.log(myArrayGrid[1][1]);
console.log(myArrayGrid[1]);
console.log("The next h location: ");
console.log(myArrayGrid[1][0]);
console.log("The next j location: ");
console.log(myArrayGrid[2][1]);
console.log("The next k location: ");
console.log(myArrayGrid[0][1]);
console.log("The next L location: ");
console.log(myArrayGrid[1][2]);
inputProcessor(userInput);

