import * as fs from 'fs';
import * as os from 'os';
import * as process from 'process';
import * as child_process from 'child_process';

const exec = child_process.exec;
const myinstruction="sh getinfo.sh";

async function myfunction(instruction){
    return new Promise((resolve,reject)=> {
        exec(instruction,(error, stdout, stderr) => {
            if (error !== null) {
                console.log(`exec error: ${error}`);
                reject(error);
            }
            resolve(stdout.trim().split('\n'));
        })
    }
)}

let untracked = await myfunction(myinstruction);
let SplitLine = '>-----------------------------------------------------<';

/// 구분선 제거
untracked = untracked.filter(str=>str!==SplitLine);

/// commit 개수
const N = Number(untracked.pop().trim());

/// path 와 file name으로 분리
untracked = untracked.map(str=>str.trim().split(' ')[1].split('/')).map(item=>item.length===1?[`./`,item[0]]:[`./${item[0]}`,item[1]]);

/// path별 untracked file 배열
let mylist = new Map();

untracked.forEach(list=>{
    mylist.set(list[0],mylist.has(list[0])?[...mylist.get(list[0]),list[1]]:[list[1]])
})

console.log(mylist);
console.log(N);