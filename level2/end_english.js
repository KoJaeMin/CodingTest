function solution(n, words) {
    var answer = [];
    const w_len = words.length;
    var temp = {};
    var index = 0;
    for(var i in words){
        if(i> 0 && words[i][0]!==words[i-1][words[i-1].length-1]){
            index = parseInt(i)+1;
            break;
        }
        temp[words[i]] = temp[words[i]]!==undefined? temp[words[i]]+1:1;
        if(temp[words[i]]>1){
            index = parseInt(i)+1;
            break;
        }
    }
    var user = index%n===0?n:index%n;
    index = index===0?0:Math.ceil(index/n);
    answer = index===0?[0,index]:[user,index];
    return answer;
}

/*
    느낀점
    
    for var in Array 문에서 var에 index가 들어가고 index의 type은 string이다.
    이는 아마 Array를 Object로 보고 key값을 string으로 주어서 그런 것 같다.

*/