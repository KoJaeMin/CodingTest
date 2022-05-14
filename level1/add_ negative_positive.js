function solution(absolutes, signs) {
    let answer = 0;
    const len = absolutes.length;
    let i =0;
    for(i;i<len;i++){
        answer = signs[i]?answer+absolutes[i]:answer-absolutes[i];
    }
    return answer;
}