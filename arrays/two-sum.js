var nums = [2,7,4,3]
var target = 9;

var twoSum = function(nums, target) {

    var len = nums.length

    for(var i=0; i<len ; i++){
        for(var j=i+1; j<len; j++){
            if(nums[i]+nums[j] === target){
                return [i,j]
            }


        }
    }
    return
};
console.log(twoSum(nums, target))