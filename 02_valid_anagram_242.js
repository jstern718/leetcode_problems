/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isAnagram(s, t) {
	let sLetters = {};
    for (let letter of s){
		if (sLetters[letter]){
			sLetters[letter] += 1;
		}
		else{
			sLetters[letter] = 1;
		}
	}
	console.log("sLetters", sLetters);
	for (let letter of t){
		if (sLetters[letter]){
			sLetters[letter] -= 1;
		}
		else{
			return false;
		}
	}
    if (s.length !== t.length){
        return false;
    }
	return true;
};



