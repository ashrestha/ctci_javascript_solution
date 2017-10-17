function isUnique(abc) {
	if(abc.length > 128) return false;
	var char_set = [128];
	for(var i = 0; i < abc.length; i ++){
		var val = abc.charAt(i);
		if(char_set[val]) {
			return false;
		}
		char_set[val] = true;
	}
	return true;
}

console.log(isUnique("ecdkjlwf"));
console.log(isUnique("ecdkjlwfe"));