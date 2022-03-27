function solution(x, n) {
    var answer = [];
    for(var i = 0; i < n;i++){
        answer.push(x*(i+1))
    }
    return answer;
}
/*
    느낀점

    javascript push와 pop을 사용가능하며 추가적으로 가장 앞에 data를 넣는 것은 unshift를 사용

*/