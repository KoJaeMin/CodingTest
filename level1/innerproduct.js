function solution(a, b) {
    var answer = 0;
    for(let i in a){
        answer += a[i]*b[i];
    }
    return answer;
}
/*
    느낀점
    javascript 반복문

    1. for(초기문;조건문;증감문){실행};
    2. do{
        실행
    }while(조건문);
    3. while(조건문){실행};
    4. for(변수 in object) array일 경우 변수에 index가 들어감
    5. for(변수 of array)
    
    추가적으로 ...object 이런 구문 중 ...은 spread operator이다.

*/