// https://learn.javascript.ru/settimeout-setinterval
// https://learn.javascript.ru/js-animation
let max = 64;
let cells = [];
let counter = 0;
function countCells(i, j) {
	if(cells[i][j]){}
	if (cells[i][j+1] === 1 && cells[i][j+1]) {
		counter++;
	}
	if(cells[i+1][j+1] === 1 && cells[i+1][j+1]) {
		counter++;
	}
	if(cells[i+1][j] === 1 && cells[i+1][j]) {
		counter++;
	}
	if(cells[i][j-1] === 1 && cells[i][j-1]) {
		counter++;
	} 
	if(cells[i-1][j-1] === 1 && cells[i-1][j-1]) {
		counter++;
	}
	if(cells[i-1][j] === 1 && cells[i-1][j]) {
		counter++;
	}
	if(cells[i-1][j+1] === 1 && cells[i-1][j+1]) {
		counter++;
	}
	if(cells[i+1][j-1] === 1 && cells[i+1][j-1]) {
		counter++;
	}
	return counter;
}
for (let i = 0; i < max; i++) {
	cells[i] = [];
	for (let j = 0; j < max; j++) {
		cells[i][j] = Math.random() >= 0.5;
	}
}
setInterval(() => {
	for (let i = 0; i < max; i++) {
		for (let j = 0; j < max; j++) {
			console.log(countCells(i, j)); 
		}
	}
	draw(cells);
}, 500);
