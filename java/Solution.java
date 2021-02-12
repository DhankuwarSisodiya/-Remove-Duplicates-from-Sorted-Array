class Solution {
    public int removeDuplicates(int[] nums) {
        if(nums.length < 2)
            return nums.length;
        int temp = nums[0], i = 1;
        for(int j = 1; j < nums.length; j++){
            if(nums[j] != temp){
                nums[i] = nums[j];
                temp = nums[j];
                i++;
            }
        }
        return i;
    }
}