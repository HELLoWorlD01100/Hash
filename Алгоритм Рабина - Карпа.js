function hashSum(string) 
{
    var hash = 0;
    for (var i = 0; i < string.length; i++)
        hash += string.charCodeAt(i) * Math.pow(2,(string.length - i));
    return hash;
}
let string = 'abcabc';
let substring = 'abc';
let result = '';
let substringHash = hashSum(substring);
let stringHash = hashSum(string.substr(i, substring.length));
for (var i = 0; i <= string.length - substring.length; i++) {
  if (substringHash == stringHash){
    for (var j = 0; string.charAt(i + j) == substring.charAt(j); j++) {
        if (j == substring.length - 1) {
            result += i;
            break;
        }
      }
    }
    stringHash = 2 * (stringHash - string.charCodeAt(i) * Math.pow(2, substring.length)
    + string.charCodeAt(i + substring.length));
}
if (result.length != 0){
  for (let i = 1; i <= result.length; i++){
  
  console.log(i + ' вхождение: ' + result[i-1] + ' позиция')}
}
else console.log('Вхождений нет!')


