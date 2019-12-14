let string = 'Hello Данил'
var substring = 'Данил';
var result = [];

for (var i = 0; i <= string.length - substring.length; i++) {
    for (var j = 0; string.charAt(i + j) === substring.charAt(j); j++) {
        if (j == substring.length - 1) {
            result.push(i);
            break;
        }
    }
}
console.log(result.toString())