function solution(answers) {
    let answer = [];
    let l = [0,0,0];
    const len = answers.length;
    let lst = ['12345','21232425','3311224455'];
    lst = lst.map((item)=>{
        const il = item.length, q = parseInt(len/il), r = len%il;
        item = item.repeat(q)+item.slice(0,r);
        return item.split('');
    });
    answers.forEach((item,ind)=>{
        if(item===parseInt(lst[0][ind])){l[0]++;}
        if(item===parseInt(lst[1][ind])){l[1]++;}
        if(item===parseInt(lst[2][ind])){l[2]++;}
    })
    const max = Math.max(...l);
    l.forEach((item,ind)=>{if(item===max){answer.push(ind+1)}})
    return answer;
}
/* 다른 사람 풀이 보고 푼 풀이
function solution(answers) {
    let answer = [];
    let a1 = [1, 2, 3, 4, 5];
    let a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    let a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const a1c = answers.filter((item,ind)=> item === a1[ind%a1.length]).length;
    const a2c = answers.filter((item,ind)=> item === a2[ind%a2.length]).length;
    const a3c = answers.filter((item,ind)=> item === a3[ind%a3.length]).length;
    const max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};


    return answer;
}


*/

/*
    느낀점
    
    완전탐색 문제는 조금만 어렵게 만들면 풀이하는 것이 힘들것 같다는 생각이 들었다.
    효율성 테스트를 생각해서 만들어야겠다.

*/