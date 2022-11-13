/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let map = {}
    for(let j = 0; j < nums.length; j++){
        if(!map[nums[j]]){
            map[nums[j]] = true;
        }
    }
    let arr = [];
    for(let i = 1; i < nums.length + 1; i++){
        if(!map[i]){
            arr.push(i);
        }
    }
    return arr;
};