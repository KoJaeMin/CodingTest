/// 첫번째 풀이

function solution(phone_number) {
    var answer = '';
    answer = '*'.repeat(phone_number.length-4);
    for(var i=phone_number.length-4;i<phone_number.length;i++){
        answer+=phone_number[i];
    }
    return answer;
}

///다른 풀이

function solution(phone_number) {
    var answer = '';
    answer = '*'.repeat(phone_number.length-4) + phone_number.slice(-4);
    return answer;
}

/*

    느낀점

    정규식 표현법 공부에 대한 필요성을 느꼈다.
    기존에 있던 방식보다 코드가 간결해지고 변수 선언과 같은 불필요한 행위를 줄일 수 있다.
    slice(start,end)메서드를 알게 되었고 start에는 시작 index를 end에는 끝나는 index를 넣는다.
    start에 있는 값은 포함 되지만 end의 전에 값까지 포함된다.
*/