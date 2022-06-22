/// 검증수
/// 브론즈 5

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
input = input.trim().split(' ').map((val)=>parseInt(val))
console.log(input.reduce((pre,cur)=>pre+cur**2,0)%10);