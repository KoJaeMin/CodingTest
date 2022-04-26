function solution(new_id) {
    var answer = '';
    answer = new_id.toLowerCase().replace(/[^\w.-]/g,'').replace(/\.+/g,'.').replace(/^\.|\.$/,'');
    answer = answer.length===0?'aaa':answer.length>15? answer.slice(0,15):answer;
    answer = answer.replace(/\.$/,'');
    answer = answer.padEnd(3,answer[answer.length-1])
    return answer;
}

/*

    느낀점
    
    정규식을 공부한 후 풀어보았지만 익숙하지 않아 고생을 했다.
    특히 양끝단에 있는 것과 반복되는 것을 찾는 경우가 그랬다
    padEnd라는 메서드를 사용하면 마지막 조건을 조금 쉽게 풀 수 있었다.
    String.padEnd(max_len,repeat_string)=>String
    
*/