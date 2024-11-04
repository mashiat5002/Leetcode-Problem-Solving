

var canJump = function(nums) {
    if(nums.length==1){
        return true;
    }
    var j;
    
   for(var i=nums.length-1;i>=0;i--){
    if(nums[i]==0){
        j=i-1;
        while(j>-1 && (j + nums[j])<=i){
            if((j + nums[j])==i && i==nums.length-1){
                break;
            }
            j--;
            
        }
        if(j==-1 ){
            // console.log(j)
            return false;
        }

    }
   }
    return true;
    
};
console.log(canJump([0]))