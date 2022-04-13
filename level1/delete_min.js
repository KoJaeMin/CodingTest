function solution(arr) {
    var answer = [];
    answer = arr.filter((item)=>item!==Math.min(...arr))
    return answer.length!==0?answer:[-1];
}

/*

    느낀점

    array에는 filter라는 method가 있으며 이는 조건에 맞는 요소들만 걸러낸다.
    걸러낸 후에는 다른 array를 return한다.
    array.filter((element[,index[,array]])=>{return fitering_array})
    
    spread operator은 요소들을 반복적으로 check해준다.
*/