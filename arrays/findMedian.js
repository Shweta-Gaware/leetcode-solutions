let nums1 = [1,3];
let nums2 = [2];

var findMedian = function(nums1, nums2){

    var merged = nums1.concat(nums2).sort((a,b)=>a-b);

    console.log("merged", merged);

    let n = merged.length;
    console.log("length of merged array", n)

    let median;

    // find aray is odd or even

    if(n%2===0){
       median = (merged([n/2-1]+merged([n/2])))/2
      
    }else{
        median = merged[Math.floor(n/2)]
    }
    console.log("median", median)
    return median
    

};
console.log(findMedian(nums1, nums2))