function isPrime(num){
    let n = 2;
    while(n<num){
        if(num%n===0)
            return false;
        n++;
    }
    return true;
}
function solution(nums) {
    let answer = 0;
    const len = nums.length;
    let sum = [];
    for(let i=0;i<len-2;i++){
        for(let j=i+1;j<len-1;j++){
            for(let k=j+1;k<len;k++){
                sum.push(nums[i]+nums[j]+nums[k])
            }
        }
    }
    answer = sum.map((item)=>isPrime(item)).filter((item)=>item!==false).length;
    return answer;
}

/*
    다른 풀이

function isPrime(num){
    let n = 2;
    while(n<num){
        if(num%n===0)
            return false;
        n++;
    }
    return true;
}
function solution(nums) {
    let answer = 0;
    const len = nums.length;
    for(let i=0;i<len-2;i++){
        for(let j=i+1;j<len-1;j++){
            for(let k=j+1;k<len;k++){
                if(isPrime(nums[i]+nums[j]+nums[k])){
                    answer++
                }
            }
        }
    }
    
    return answer;
}

*/