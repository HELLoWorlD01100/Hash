function hashSum(string) 
{
    let hash = 0;
    for (var i = 0; i < string.length; i++)
        hash += Math.pow(string.charCodeAt(i), 2);
    return hash;
}
let string = 'cababcabcacb';
let substring = 'abc';
let result = [];
let substringHash = hashSum(substring);
let stringHash = hashSum(string.slice(0, substring.length));
for (var i = 0; i <= string.length - substring.length; i++) {
  stringHash = hashSum(string.substr(i, substring.length));
  if (substringHash == stringHash){
    for (var j = 0; string.charAt(i + j) == substring.charAt(j); j++) {
        if (j == substring.length - 1) {
            result.push(i);
            break;
        }
      }
    }
	stringHash -= Math.pow(string.charCodeAt(i), 2);
  stringHash += Math.pow(string.charCodeAt(i + substring.length), 2);
}
console.log(result.toString())


