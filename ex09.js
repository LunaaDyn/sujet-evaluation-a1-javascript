//ex09.js

let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let signs = " ?!,:;/.&'()[]{}$€%";

function encodePassword(password, encodeFunction) {
	if (encodeFunction == encodeRot8) {
		return encodeRot8(password);
	} else if (encodeFunction == encodeRot16) {
		return encodeRot16(password);
	}
}

function encodeRot8(password) {
	let pass = [];
	for (let i = 0; i < password.length; i++) {
		for (let j = 0; j < alphabet.length; j++) {
			if (password[i] == alphabet[j]) {
				let k = 0;
				if (j < 18) {
					k = j + 8;
				} else if (j >= 18 && j < 26) {
					k = j - 18;
				} else if (j >= 26 && j < 44) {
					k = j + 8;
				} else if (j >= 44 && j < 52) {
					k = j - 18;
				} else {
					for (let l = 0; l < signs.length; l++) {
						if (password[i] == signs[l]) {
							k = l;
						}
						pass.push(signs[k]);
					}
				}
				pass.push(alphabet[k]);
			}
		}
		for (let l = 0; l < signs.length; l++) {
			let m = 0;
			if (password[i] == signs[l]) {
				m = l;
				pass.push(signs[m]);
			}
		}
	}
	return pass.join("");
}

function encodeRot16(password) {
	let pass = [];
	for (let i = 0; i < password.length; i++) {
		for (let j = 0; j < alphabet.length; j++) {
			if (password[i] == alphabet[j]) {
				let k = 0;
				if (j < 9) {
					k = j + 16;
				} else if (j >= 9 && j < 26) {
					k = j - 10;
				} else if (j >= 26 && j < 35) {
					k = j + 16;
				} else if (j >= 35 && j < 52) {
					k = j - 10;
				} else {
					for (let l = 0; l < signs.length; l++) {
						if (password[i] == signs[l]) {
							k = l;
						}
						pass.push(signs[k]);
					}
				}
				pass.push(alphabet[k]);
			}
		}
		for (let l = 0; l < signs.length; l++) {
			let m = 0;
			if (password[i] == signs[l]) {
				m = l;
				pass.push(signs[m]);
			}
		}
	}
	return pass.join("");
}

console.log(encodePassword("What ?", encodeRot8));
console.log(encodePassword("abc", encodeRot8)); // Résultat attendu: "ijk";
console.log(encodePassword("abc", encodeRot16)); // Résultat attendu: "qrs";
console.log(encodePassword("xyz", encodeRot8)); // Résultat attendu: "fgh";
console.log(encodePassword("xyz", encodeRot16)); // Résultat attendu: "nop";
console.log(encodePassword("Bonjour, je m'appelle Teuse.", encodeRot8));
console.log(encodePassword("Bonjour, je m'appelle Teuse.", encodeRot16));
