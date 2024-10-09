var arr= [1,4,6,10,13];



var searchInsert = function(nums, target) {
    let start= 0;
    let end= nums.length-1;
    let result=-1;
    while(start<=end){
      
        mid=  Math.floor((start+end)/2);

        if(target==arr[mid]){
            result=mid;
            return mid;
        }
        else if(target>arr[mid]){
            start= mid+1;
        }
        else{
            end=mid-1;
        }
    
    }
    if(result==-1){
        return end+1;
    }

    
};


console.log(searchInsert(arr,9));