/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = function(nums) {
    const numsTracker = {};
    const uniqueNums = [];
    for (const num of nums){
        if (numsTracker[num]){
            return true;
        }
        else (numsTracker[num] = 1)
    }
    return false;

};