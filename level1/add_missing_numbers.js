function solution(numbers) {
    let answer = 45;
    numbers.forEach((item)=>answer-=item);
    return answer;
}
/*

    느낀점
    
    문제 답이 저장이 안 되어졌다. 다음부터는 꼭 확인을 해야겠다.
*/