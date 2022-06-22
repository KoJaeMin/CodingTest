/// 단어 공부
/// 브론즈 1
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
input = input.toUpperCase().split('');
const len = input.length;
const result = input.reduce((pre,cur)=> {
    pre.set(cur, (pre.get(cur)||0) +1) ;
    return pre;
},new Map());
let max = 0;
let MaxIndex = '';
let IsMultiple = false;
for(let [key,value] of result){
    if(max<value){
        IsMultiple = false;
        max = value;
        MaxIndex = key;
    }
    else if(max===value){
        IsMultiple = true;
        MaxIndex = '?';
    }
}
console.log(MaxIndex);