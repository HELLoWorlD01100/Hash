function hashSum(string) 
{
    var hash = 0;
    for (var i = 0; i < string.length; i++)
        hash += string.charCodeAt(i);
    return hash;
}
let string = 'не данил';
let substring = 'данил';
var result = [];
var substringHash = hashSum(substring);
var stringHash = 0
for (var i = 0; i <= string.length - substring.length; i++) {
  stringHash = hashSum(string.substr(i, substring.length));
  if (substringHash == stringHash){
    for (var j = 0; string.charAt(i + j) === substring.charAt(j); j++) {
        if (j == substring.length - 1) {
            result.push(i);
            break;
        }
      }
    }
}
console.log(result.toString())


