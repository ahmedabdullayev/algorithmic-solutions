/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxRes = 0;
    let left = 0;
    let right = height.length - 1;

    while(left < right){
        maxRes = Math.max(maxRes, Math.min(height[left], height[right]) * (right-left));
        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxRes;

};