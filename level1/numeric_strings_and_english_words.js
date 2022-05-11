function solution(s) {
    var answer = 0;
    var dic = {"zero":0,"one":1,"two":2,"three":3,"four":4,"five":5,"six":6,"seven":7, "eight":8,"nine":9};
    for(var i in dic){
        while(s.includes(i))
            s = s.replace(i,dic[i])
    }
    answer = parseInt(s)
    return answer;
}
/*

    느낀점

    replace 메서드는 하나만 교체한다.
*/