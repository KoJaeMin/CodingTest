function solution(dartResult) {
    var answer = 0;
    var score = dartResult.split('S').join(' ').split('D').join(' ').split('T').join(' ').split('#').join(' ').split('*').join(' ').split(' ').map((item)=>parseInt(item)).filter((item)=>!isNaN(item));
    var char = dartResult.split('').filter((item)=>isNaN(item));
    for(var i = 0;char.length!==0; i++){
        switch(char.shift()){
            case 'S':
                score[i]=Math.pow(score[i],1);
                break;
            case 'D':
                score[i]=Math.pow(score[i],2);
                break;
            case 'T':
                score[i]=Math.pow(score[i],3);
                break;
            case '*':
                i--;
                if(i!==0)
                    score[i-1]*=2;
                score[i]*=2;
                break;
            case '#':
                i--;
                score[i]*=(-1);
                break;   
        }
    }
    for(var i of score)
        answer+=i
    return answer;
}

/*

    느낀점
    
    정규식을 쓰지 않아 숫자를 분리하는데 애를 먹었다.
    
*/