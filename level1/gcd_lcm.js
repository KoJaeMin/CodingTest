function gcd(n,m){
    var temp,max=Math.max(n,m),min=Math.min(n,m);
    while(min!==0){
        temp = (max%min);
        max = min;
        min = temp;
    }
    return max
};//최대공약수
function lcm(n,m){
    return (n*m)/gcd(n,m)
}//최소공배수
function solution(n, m) {
    var answer = [gcd(n,m),lcm(n,m)];
    return answer;
}

/*

    느낀점

    유클리드 호제법을 알고 있어야 풀기 쉬운 문제이다.
    유클리드 호제법이란 
    "
    2개의 자연수 a, b(a > b)에 대해서 a를 b로 나눈 나머지가 r일 때, a와 b의 최대공약수는 b와 r의 최대공약수와 같다.
    "
    그리고 수학적 계산이 필요하면 Math라는 객체를 이용하면 좋다.
*/