///첫 번째 풀이
function solution(num) {
    var answer = 0;
    while(num>1){
        if(num%2===0){
            num/=2;
        }else{
            num*=3;
            num+=1;
        }
        answer+=1;
        if(answer>499){
            return -1;
        }
    }
    return answer;
}


///두 번째 풀이

function solution(num) {
    var answer = 0;
    while(num>1 && answer<500){
        num = (num%2===0) ? num/2 : num*3+1;
        answer+=1;
    }
    return answer>499 ? -1 : answer;
}

/*

    느낀점

    문제 풀이만 급급하여 후딱 풀었지만 코드가 길어짐에 가독성이 떨어지는 경향이 있어
    바로 가독성을 위하여 다른 풀이를 작성하였다.
    삼항연산자를 사용하면 가독성이 좋게 코드를 바꿀 수 있기에 자주 사용해야겠디.
*/