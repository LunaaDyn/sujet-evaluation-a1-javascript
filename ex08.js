// ex08.js

function calculate(n1, n2, operation) {
	if (operation == addition) {
		return addition(n1, n2);
	} else if (operation == subtraction) {
		return subtraction(n1, n2);
	}
}

function addition(n1, n2) {
	let n3 = n1 + n2;
	return n3;
}

function subtraction(n1, n2) {
	let n3 = n1 - n2;
	return n3;
}

console.log(calculate(0, 1, addition)); // Résultat attendu: 1
console.log(calculate(0, 10, subtraction)); // Résultat attendu: -10
