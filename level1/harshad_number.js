function solution(x) {
    var answer = true;
    var temp = 0;
    for(var i of String(x)){
        temp+=Number(i)
    }
    answer = x%temp===0;
    return answer;
}
/*
    느낀점

    String도 array같이 for(변수 in String)시 변수에 index가 들어감.
    하지만 map이나 foreach같은 메서드가 없음
*/