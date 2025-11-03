//ex09.js

let lowercase = "abcdefghijklmnopqrstuvwxyz";

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
		for (let j = 0; j < lowercase.length; j++) {
			if (password[i] == lowercase[j]) {
				let k;
				if (j < 18) {
					k = j + 8;
				} else {
					k = j - 18;
				}
				pass.push(lowercase[k]);
			}
		}
	}
	return pass.join("");
}

function encodeRot16(password) {
	let pass = [];
	for (let i = 0; i < password.length; i++) {
		for (let j = 0; j < lowercase.length; j++) {
			if (password[i] == lowercase[j]) {
				let k;
				if (j < 10) {
					k = j + 16;
				} else {
					k = j - 10;
				}
				pass.push(lowercase[k]);
			}
		}
	}
	return pass.join("");
}

console.log(encodePassword("abc", encodeRot8)); // Résultat attendu: "ijk";
console.log(encodePassword("abc", encodeRot16)); // Résultat attendu: "qrs";
console.log(encodePassword("xyz", encodeRot8)); // Résultat attendu: "fgh";
console.log(encodePassword("xyz", encodeRot16)); // Résultat attendu: "nop";
