/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
    let hash = {};

    for (let num of nums){
        hash[num] = hash[num] + 1 || 1;
    }

    function sortFn(a, b){
        if (a[1] > b[1]) {
            return -1;
        } else if (b[1] < a[1]) {
            return 1;
        }
        return 0;
    }

    let sorted = Object.entries(hash).sort(sortFn);

    let result = [];
    for (let i=0; i<k; i++ ){
        result.push(Number(sorted[i][0]));
    }
    return result;
};