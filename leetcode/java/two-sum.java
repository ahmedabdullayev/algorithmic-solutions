class Solution {
    public int[] twoSum(int[] nums, int target){
        HashMap<Integer, Integer> seen = new HashMap<>();
        for(int i = 0; i < nums.length; i++){
            int currNum = nums[i];
            int secondNum = target - currNum;
            if(seen.containsKey(secondNum)){
                return new int[]{seen.get(secondNum), i};
            }
            seen.put(currNum, i);
        }
        return new int[]{};
    }
}