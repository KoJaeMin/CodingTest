/// 기찍 N
/// 브론즈 3

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
input = Number(input);
let answer = '';
for(let i = input;i>0;i--){answer+=(i+'\n')}
console.log(answer)