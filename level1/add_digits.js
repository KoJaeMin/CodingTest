function solution(n)
{
    var answer = 0;
    n.toString().split('').map((pre)=>answer+=parseInt(pre));
    return answer;
}