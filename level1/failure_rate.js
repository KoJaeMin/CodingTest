function solution(N, stages) {
    let answer = [];
    //total에는 도달한 유저 수, fail에는 통과하지 못한 사람 수
    let total = new Array(N+1).fill(0),fail = new Array(N+1).fill(0);
    stages.forEach((item,ind)=>{
        // 이전 단계 통과
        for(let i = 0; i<item;i++){
                total[i]++; 
        }
        // 현재단계 미통과
        fail[item-1]++;
    });

    //도달 유저 없을 시 실패율 0
    total = total.map((item,index)=>item = item!==0?fail[index]/item:0);
    //모두 통과한 경우 빼기
    total.pop();
    
    //index추출 전처리
    //total array deep copy후 내임차순으로 정렬
    let temp = total.slice().sort((a,b)=>b-a);
    //index 추출
    while(temp.length>0){
        const t = total.indexOf(temp.shift());
        total[t]=-1;
        answer.push(t+1)
    }
    return answer;
}

/*

    느낀점

    이전에 작성한 코드를 나 자신이 이해하지 못하면 안되기 때문에 한줋나줄 주석 작성을 해야겠다.
*/