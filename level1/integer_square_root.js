function solution(n) {
    var answer = 0;
    answer = Number.isInteger(Math.sqrt(n))?(Math.sqrt(n)+1)**2:-1
    return answer;
}

/*

    느낀점

    Number라는 객체와 Math라는 객체의 method를 사용하면 편하다.
    다만, 기억이 나지 않는다면 parseInt를 사용해서 int값을 구한후 integer를 판별하면 될 것 같다.
*/