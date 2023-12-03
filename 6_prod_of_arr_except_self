/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let results = [];
    let before = 1;
    let after = 1;

    for (let i=0; i<nums.length; i++){
        results[i] = before;
        before = before * nums[i];
    }
    for (let j=nums.length-1; j>=0; j--){
        results[j] = results[j] * after;
        after = after * nums[j];
    }
    return results;
};