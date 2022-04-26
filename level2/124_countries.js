function solution(n) {
    var answer = '';
    var num = ['4','1','2'];
    while(n>0){
        answer+=num[n%3];
        n = parseInt(n/3)-(n%3===0?1:0)
    }
    answer=answer.split('').reverse().join('')
    return answer;
}

/*
    느낀점
    
    level1에서는 언어의 method만 잘 사용하면 되는 문제들이 많다면
    level2에서는 점화식또는 수식의 이용이 중요한 것 같다.
    parseInt보다는 Math.floor를 쓰는 것이 좋다고 한다. 
    이유로는 parseInt는 소숫점을 자르고 정수인 부분을 나타내지만
    Math.floor는 가우시안 수를 나타낸다.
    양수일때는 문제가 없지만 음수일 경우 문제가 발생한다.

*/