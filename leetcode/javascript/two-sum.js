/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const seen = {};
    for(let i = 0; i < nums.length; i++){
        const firstNum = nums[i];
        const secondNum = target - firstNum;
        if(secondNum in seen){
            return [seen[secondNum], i];
        }
        seen[firstNum] = i;
    }
    return [0, 0];
};