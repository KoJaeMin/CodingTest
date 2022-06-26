/// 숫자의 개수
/// 브론즈 2

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
input = input.split('\n').map((val)=>parseInt(val));
let sum = (''+input.reduce((pre,cur)=>pre*cur)).split('').reduce((i,j)=>{
    i.set(j,(i.get(j)||0)+1);
    return i;
},new Map());
let answer = '';
for(let i = 0; i<10;i++){
    answer+=((sum.get(i.toString())||0)+'\n');
}
console.log(answer.trim());