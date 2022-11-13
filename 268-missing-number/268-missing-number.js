/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // sum
    let len = nums.length;
    let sum = (len * (len + 1))/2
    for(let i = 0; i < nums.length; i++){
        sum -= nums[i];
    }
    return sum;    
};