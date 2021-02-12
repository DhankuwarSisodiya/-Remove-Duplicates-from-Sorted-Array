/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length < 2)
        return nums.length;
    
    let temp = nums[0], i = 1;
    for(let j = 0; j < nums.length ; j++){
        if(nums[j] != temp){
            nums[i] = nums[j];
            temp = nums[j];
            i++;
        }
    }
    return i;
};