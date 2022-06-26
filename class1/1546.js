/// 평균
/// 브론즈 1

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
input = input.split('\n');
let [len,num] = input;
num = num.split(' ').map((val)=>parseInt(val))
const max_num = Math.max(...num)
const total = num.reduce((pre,cur)=>pre+(cur/max_num)*100,0)
console.log(total/len)