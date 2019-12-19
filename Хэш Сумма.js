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
var stringHash = hashSum(string.substr(0, substring.length));
for (var i = 0; i <= string.length - substring.length; i++) {
  if (substringHash == stringHash){
    for (var j = 0; string.charAt(i + j) === substring.charAt(j); j++) {
        if (j == substring.length - 1) {
            result.push(i);
            break;
        }
      }
    }
  stringHash -= string.charCodeAt(i);
  stringHash += string.charCodeAt(i + substring.length);
}
console.log(result.toString())
