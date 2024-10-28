
var majorityElement = function(nums) {
    var result=[];
    var groups={};

for(var i=0;i<nums.length;i++){

    if(nums[i] in groups){
        groups[nums[i]]= groups[nums[i]]+1;
    }
    else
    groups[nums[i]]= 1;

}

let sortedArray = Object.entries(groups).sort((a, b) => a[1] - b[1]);
console.log(sortedArray[0])
for(var i=0;i<k;i++){
    result.push(sortedArray[sortedArray.length-1-i][0]);
}
return result;
    
};




console.log(majorityElement([5,4,4,1,1]))

