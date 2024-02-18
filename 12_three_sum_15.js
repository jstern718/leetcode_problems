/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    let sorted = nums.sort((a, b) => a - b);
    let answer = [];
    console.log("sorted", sorted);

    for (let [i, val] of sorted.entries()){
        // console.log("i", i, "val", val);
        // console.log("answer", answer);
        if (i > 0 && val === sorted[i - 1]){
            continue;
        }
        let [lp, rp] = [i + 1, sorted.length - 1];
        while (lp < rp){
            // console.log("lp", lp, sorted[lp], "rp", rp, sorted[rp]);
            let threeSum = val + sorted[lp] + sorted[rp];
            // console.log("3sum", threeSum);
            if (threeSum > 0){
                rp -= 1;
            }
            else if (threeSum < 0){
                lp += 1;
            }
            else{
                answer.push([val, sorted[lp], sorted[rp]]);
                // console.log("add to answer", answer);
                lp += 1;
                while (sorted[lp] === sorted[lp - 1] && lp < rp){
                    lp += 1;
                }
            }
        }
    }
    return answer;

};