/// 문자열 반복
/// 브론즈 2

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
input = input.split('\n')
const test_case = input.shift();
input = input.map((val)=>val.split(' '))
let temp = '';
for(let i = 0;i<test_case;i++){
    temp += (input[i][1].split('').reduce((pre,cur)=>pre+cur.repeat(parseInt(input[i][0])),'')+'\n')
}
console.log(temp.trim())