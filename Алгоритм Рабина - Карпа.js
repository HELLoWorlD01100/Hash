function hashSum(string) 
{
    var hash = 0;
    for (var i = 0; i < string.length; i++)
        hash += hash += string.charCodeAt(i) * Math.pow(2,(string.length - i));
    return hash;
}
let string = 'abcabc';
let substring = 'abc';
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
if (result.length != 0){
  for (let i = 1; i <= result.length; i++){
  
  console.log(i + ' вхождение: ' + result[i-1] + ' позиция')}
}
else console.log('Вхождений нет!')


