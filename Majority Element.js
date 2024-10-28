

var majorityElement = function(nums) {
    var groups={};

for(var i=0;i<nums.length;i++){

    if(nums[i] in groups){
        groups[nums[i]]= groups[nums[i]]+1;
    }
    else
    groups[nums[i]]= 1;

}

var max=Object.values(groups)[0];
var max_key= Object.keys(groups)[0];

for(var i=1;i<Object.values(groups).length;i++){
    
    if(Object.values(groups)[i]>max){
        max= Object.values(groups)[i];
        max_key=Object.keys(groups)[i];
    }
       

    }
return max_key;
    
};


console.log(majorityElement([5,4,5,7,3,3,3,7,7,7,3,3,3]));




