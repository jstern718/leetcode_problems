/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    for (let i=0; i<nums.length; i++){
        let left = target - nums[i];
        for (let j = 0; j<nums.length; j++){
            if (left === nums[j]){
                if (i !== j){
                    return [i, j];
                }
            }
        }
    }
};