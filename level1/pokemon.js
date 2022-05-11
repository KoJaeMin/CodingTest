function solution(nums) {
    var answer = 0;
    var have_num = nums.length/2;
    var temp = [...new Set(nums)];
    answer = have_num>temp.length?temp.length:have_num;
    return answer;
}
