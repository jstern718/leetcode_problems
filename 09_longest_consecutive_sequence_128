//TODO: why is this 0(n) despite while loop

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    let longest = 0;
    let numSet = new Set(nums);

    for (let i=0; i<nums.length; i++){
        if (!numSet.has(nums[i] - 1)){
            let len = 0;
            while (numSet.has(nums[i]+len)){
                len += 1;
                if (len > longest){
                    longest = len;
                }
            }
        }
    }

    return longest;
};