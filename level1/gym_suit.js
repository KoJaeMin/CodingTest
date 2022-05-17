function solution(n, lost, reserve) {
    let student = new Array(n+1).fill(1);
    student[0]=0;
    const lost_len = lost.length, reserve_len = reserve.length;
    for(let i=1;i<=lost_len;++i){
        student[lost[i-1]]-=1;
    }
    for(let i=1;i<=reserve_len;++i){
        student[reserve[i-1]]+=1;
    }
    let answer = student.filter(n=>n!==0).length;
    for(let i=1;i<=n;++i){
        if((student[i]===0&&student[i+1]===2)||(student[i+1]===0&&student[i]===2)){
            student[i]=1;
            student[i+1]=1;
            answer++;
        }
    }
    return answer;
}

/*

    느낀점

    처음 풀이에서는 테스트 케이스 중에 2개 정도가 통과가 되지 않았다. 알고리즘은 맞는 것 같았으나
    생각지 못한 문제가 있는 것 같았다. 따라서 다른 사람의 풀이를 약간 참고해서 문제를 풀었다.
*/