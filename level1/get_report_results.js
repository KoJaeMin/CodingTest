function solution(id_list, report, k) {
    var answer = [];
    let temp = [], dic = {}, repo_dic={};
    report = [...(new Set(report))];
    const rep_len = report.length, id_len = id_list.length;
    let i = 0;
    for(i=0;i<id_len;i++){
        dic[id_list[i]]=0;
        repo_dic[id_list[i]]=0;
    }
    for(i = 0; i<rep_len; i++){
        temp.push(report[i].split(' '))
        dic[temp[i][1]]++;
    }
    for(i=0;i<id_len;i++){
        if(dic[id_list[i]]>=k){
            temp.forEach((item)=>{if(item[1]==id_list[i]){repo_dic[item[0]]++;}});
        }
    }
    for(i=0;i<id_len;i++){
        answer.push(repo_dic[id_list[i]])
    }
    return answer;
}

/// 새로운 풀이(1)
// function solution(id_list, report, k) {
//     var answer = [];
//     let dic = {}, repo_dic={};
//     report = [...(new Set(report))].map((item)=>{return item.split(' ')});
//     const rep_len = report.length, id_len = id_list.length;
//     let i = 0;
//     for(i=0;i<id_len;i++){
//         dic[id_list[i]]=0;
//         repo_dic[id_list[i]]=0;
//     }
//     for(i = 0; i<rep_len; i++){
//         dic[report[i][1]]++;
//     }
//     for(i=0;i<id_len;i++){
//         if(dic[id_list[i]]>=k){
//             report.forEach((item)=>{if(item[1]==id_list[i]){repo_dic[item[0]]++;}});
//         }
//     }
//     for(i=0;i<id_len;i++){
//         answer.push(repo_dic[id_list[i]])
//     }
//     return answer;
// }

/// 새로운 풀이(2)
// function solution(id_list, report, k) {
//     let reports = [...new Set(report)].map(a=>{return a.split(' ')});
//     let counts = new Map();
//     for (const bad of reports){
//         counts.set(bad[1],counts.get(bad[1])+1||1)
//     }
//     let good = new Map();
//     for(const report of reports){
//         if(counts.get(report[1])>=k){
//             good.set(report[0],good.get(report[0])+1||1)
//         }
//     }
//     let answer = id_list.map(a=>good.get(a)||0)
//     return answer;
// }


/*

    느낀점

    temp라는 array를 만들어서 사용했다. push 메서드가 시간초과의 주범이기에 안쓰고 하는 방법이 더 나은 방법이라 생각된다.
    Map이라는 객체가 ECMAScript6부터 생겼다.
    Map이라는 객체는 (key,value)의 값을 가지는 자료구조로 매우 유용하다.
    dictionary의 상위 버전이다.
    다음부터는 유용하게 사용해야할 수 있을듯 싶다.
*/