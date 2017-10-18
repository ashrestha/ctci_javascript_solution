function URLify(stri, trulength) {

    // Using Built-in function 
    // var newURLedString = str.replace(/\s/g, '%20')
    // console.log(newURLedString);;

    var str = stri.split('');

    var spaceCount = 0;
    // Count the spaces in the string
    for (var i = 0; i < trulength; i++) {
        if (str[i] === ' ') {
            spaceCount++;
        }
    }

    // Add 2 extra spaces to accomodate '20'
    var newStrLength = trulength + spaceCount * 2;

    if (trulength < str.length) str[trulength] = '\0';

    for (var i = trulength - 1; i >= 0; i--) {
        if (str[i] === ' ') {
            str[newStrLength - 1] = '0';
            str[newStrLength - 2] = '2';
            str[newStrLength - 3] = '%';
            newStrLength = newStrLength - 3;
        } else {
            str[newStrLength - 1] = str[i];
            newStrLength--;
        }
    }
    return str.join('');
}

console.log(URLify("Mr John Smith   ", 13));
console.log(URLify("abcd", 4));
console.log(URLify("  ", 1));