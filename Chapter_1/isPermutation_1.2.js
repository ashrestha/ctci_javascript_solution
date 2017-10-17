function isPermutation(a, b) {

    if (a.length != b.length) {
        return false;
    }

    // Create an array with 0's if length 128
    var letters = [].slice.apply(new Uint8Array(new Array(128)));
    var charCode = a.split('');

    charCode.forEach(function(c) {
        var i = c.charCodeAt(0);
        letters[i]++;
    });

    for (var i = 0; i < b.length; i++) {
        var j = b.charCodeAt(i);
        letters[j]--;

        if (letters[j] < 0) {
            return false;
        }
    }
    return true;
}


console.log(isPermutation("String", "s"));

console.log(isPermutation("sda", "avc"));

console.log(isPermutation("e", "e"));