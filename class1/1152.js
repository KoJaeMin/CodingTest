/// 단어의 개수
/// 브론즈 2

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
input = input.trim().split(' ');
console.log(input.join('')===''?0:input.length);