process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    var starline = '*'.repeat(a);
    for(var i = 0;i<b;i++){
        console.log(starline);
    }
});
/*
    느낀점

    programmers에서는 자동완성이 안되니 미리미리 간단한 메서드는 익혀두자!!
    string.repeat(number); <= number만큼 string을 반복한다.
*/