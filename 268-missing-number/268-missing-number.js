/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let book = {};
    for(let i = 0; i < nums.length + 1; i++){
        book[i] = false;
    }
    for(let j = 0; j < nums.length; j++){
        if(!book[nums[j]]){
            book[nums[j]] = true;
        }
    }
    for(let j = 0; j < nums.length + 1; j++){
        if(!book[j]){
            return j;
        }
    }
    
};