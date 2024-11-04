const nums=[1,1,1,1,2,2,2,2,3,4];

var i=0,k=2;


while(0<nums.length){
    while(nums[k]!=nums[k-2])
        k++;
    i=k;
    while(nums[i]==nums[k-2])
        i++;
    nums[k]=nums[i];
    k=i;

}