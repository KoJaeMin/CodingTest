import * as fs from 'fs';
import * as os from 'os';
import * as process from 'process';
import * as child_process from 'child_process';

const exec = child_process.exec;
const myinstruction="sh auto.sh";

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

console.log(await myfunction(myinstruction))