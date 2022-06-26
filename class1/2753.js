/// 윤년
/// 브론즈 5

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
input = parseInt(input);
console.log(((input%4===0 && input%100!==0) || (input%400===0))?1:0);