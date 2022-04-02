///나읨 풀이

function solution(arr) {
    var answer = 0;
    arr.forEach((item)=>answer+=item)
    return answer/arr.length;
}

///다른 사람들의 풀이를 참고후 바꾼 풀이
function solution(arr) {
    var answer = 0;
    answer = arr.reduce((a,b)=> a+=b )
    return answer/arr.length;
}
/*

    느낀점
    
    forEach보다 reduce라는 함수를 하면 변수를 따로 더 만들지 않을 수 있다.
    다만 return을 해줘야지 되고 초기값을 따로 주지 않으면 array에 있는 맨 처음 값이 초기값이 된다.
*/
