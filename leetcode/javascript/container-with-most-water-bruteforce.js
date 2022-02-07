/**
 * @param {number[]} height
 * @return {number}
 */
// https://leetcode.com/problems/container-with-most-wate
var maxArea = function(height) {
    let maxRes = 0;
    for(let i = 0; i < height.length; i++){
        let first = height[i];
        for(let j = i + 1; j < height.length; j++){
            let maxNum = Math.min(first, height[j]);
            let dif = j - i;
            maxRes = Math.max(maxRes, maxNum * dif);
        }
    }
    return maxRes;
};
