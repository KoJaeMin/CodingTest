function solution(n) {
    var answer = 0;
    var temp = '';
    n.toString().split('').sort().reverse().map((pre,now)=>temp+=pre);
    answer=parseInt(temp)
    return answer;
}
/* 다른 풀이(1)
    function solution(n) {
    var answer = 0;
    var temp = '';
    n.toString().split('').sort().reverse().map((pre)=>temp+=pre);
    answer=parseInt(temp)
    return answer;
}
*/
/* 다른 풀이(2)
    function solution(n) {
    var answer = 0;
    answer=parseInt(n.toString().split('').sort().reverse().join(''))
    return answer;
}
*/
/*

    느낀점

    array에서 모든 elements가 string일때, 한번에 묶어주는 join(s) method가 있다.
    s에는 각 요소들 사이에 들어갈 string이다
    또한 map method에서 parameter를 불필요하게 습관적으로 2개를 주었다.
*/