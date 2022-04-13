function solution(s) {
    var answer = '';
    for(var data of s.split(' ')){
        for(var i in data){
            answer+= (i%2===0?data[i].toUpperCase():data[i].toLowerCase());
        }
        answer+=' '
    }
    answer = answer.slice(0,answer.length-1)
    return answer;
}

/*

    느낀점

    string은 toUpperCase()로 대문자를 toLowerCase()로 소문자를 지정할 수 있다.
    왜인지는 모르겠지만 for문 안에서 data의 값을 바꾸는 것이 안 되었다.
    아마 call by value여서 그런것 같다!
*/