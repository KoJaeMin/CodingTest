/// 나의 풀이(1)
function solution(arr1, arr2) {
    var answer = [[]];
    for(var i in arr1){
        answer[i]=[]
        for(var j in arr1[i]){
            answer[i].push(arr1[i][j]+arr2[i][j])
        }
    }
    return answer;
}

/// 다른 사람들의 풀이를 본 후 적용한 풀이

/*
function solution(arr1,arr2){
    var answer = [[]];
    answer = arr1.map((inner_matrix,row)=>{
        return inner_matrix.map((inner_item,col)=>{
            return inner_item += arr2[row][col];
        })
    })
}
*/

/*
    느낀점
    array일 때, map 메서드를 사용하면 반복문 쓰는 대신 간단하게 구현 가능!!
    쓰는 방법은 forEach와 같으나 return으로 array를 반환할 수 있음.

*/