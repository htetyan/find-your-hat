const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(fieldArray){
      this.field = fieldArray;	
}

	print(){
		let fieldString = '';
		for (let i = 0; i < this.field.length; i++) {
			this.field[i].forEach(elem => fieldString += elem)
			fieldString += '\n'; 
	 		}
		console.log(fieldString);
		}
}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

myField.print();
