/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let [lp, rp] = [0, numbers.length - 1];

    while (lp < rp){
        let sum = numbers[lp] + numbers[rp];
        if (sum > target){
            rp--;
        }
        else if (sum < target){
            lp++
        }
        else{
            return [lp + 1, rp + 1];
        }
    }
    return [];
};