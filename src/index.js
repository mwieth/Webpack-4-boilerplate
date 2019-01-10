import './styles/style.scss';

console.log('hello world');

var map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var playField = document.createElement('table');
let number = 0;

map.forEach(row => {
  const newRow = document.createElement('tr');
  playField.appendChild(newRow);
  row.forEach(tile => {
    const rowTile = document.createElement('td');

    tile ? rowTile.className = 'white' : rowTile.className = 'black';
    rowTile.id = number;
    newRow.appendChild(rowTile);
    number++;
  });
});

document.body.appendChild(playField);

var table = document.createElement("table");
table.className = "game-field";
for (var i = 1; i < 9; i++) {
  var tr = document.createElement('tr');
  for (var j = 1; j < 9; j++) {
    var td = document.createElement('td');
    if (i % 2 == j % 2) {
      td.className = "white";
    } else {
      td.className = "black";
    }
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
document.body.appendChild(table);

const fields = document.querySelectorAll('td');
fields.forEach(el => {
  /* el.addEventListener('click', () => {
    console.log(el);
  }) */
});

class Player {

  constructor() {
    this.currentPosition = 0;
    const fieldPosition = document.getElementById(this.currentPosition);
    fieldPosition.classList.add('player');
  }

  setStartPosition() {

  }

  moveLeft() {

  }

  moveRight() {
    //document.getElementById(this.currentPosition).classList.remove('player');
    this.currentPosition = this.currentPosition + 1;
    console.log(this.currentPosition);
    const fieldPosition = document.getElementById(this.currentPosition);
    fieldPosition.classList.add('player');
    console.log(this.currentPosition)
  }

}

var lol = new Player();

document.addEventListener('click', lol.moveRight);