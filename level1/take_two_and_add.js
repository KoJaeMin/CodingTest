function solution(numbers) {
    var answer = [];
    var temp = numbers.sort((a,b)=>a-b);
    for(var i = 0;i < temp.length-1;i++){
        for(var j =i+1;j<temp.length;j++){
            var sum = temp[i]+temp[j];
            if(!answer.includes(sum)){
                answer.push(sum)
            }
        }
    }
    answer = answer.sort((a,b)=>a-b)
    return answer;
}

/// 다른 사람들의 풀이를 본 후 적용한 풀이

/*
function solution(numbers) {
    var answer = [];
    for(var i = 0;i < numbers.length-1;i++){
        for(var j =i+1;j<numbers.length;j++){
            var sum = numbers[i]+numbers[j];
            if(!answer.includes(sum)){
                answer.push(sum)
            }
        }
    }
    answer = [...new Set(answer)].sort((a,b)=>a-b);
    return answer;
}
*/

/*
    느낀점
    3번째 줄에서 sort는 불필요하다.
    javascript에는 Set이라는 객체가 있다.
    Set이라는 객체는 중복을 허용하지 않는 객체이다.
    이를 이용하면 중복된 것을 쉽게 제거할 수 있다.

*/