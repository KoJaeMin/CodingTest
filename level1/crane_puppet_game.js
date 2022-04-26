function solution(board, moves) {
    var answer = 0;
    var temp = [];
    for(var i of moves){
        for(var j in board){
            if(board[j][i-1]!==0){
                temp.push(board[j][i-1]);
                board[j][i-1] = 0;
                break;
            }
        }
        if(temp.length>1&&temp[temp.length-1]===temp[temp.length-2]){
            temp.pop();
            temp.pop();
            answer+=2;
        }
    }
    return answer;
}

/*

    느낀점
    
    문제 지문의 양이 많아 겁을 먹었지만 단순하였다.
    지문의 양으로 문제의 난이도를 판단하지 말고 일단 풀어보자!
    
*/