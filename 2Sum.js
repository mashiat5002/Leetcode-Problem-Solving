/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const num = nums;
const groups = {};


for (let i = 0; i < num.length; i++) {
    groups[i] = num[i];
}


const sortedEntries= Object.entries(groups).sort(([,a],[,b])=>a-b);
var l=0;
var r= num.length-1;

while(l<r){

    if(sortedEntries[r][1]+sortedEntries[l][1]<target){
        l++;
    }
    else if(sortedEntries[r][1]+sortedEntries[l][1]>target)
        r--;
        else break;
}



if(l==r && sortedEntries[r][1]+sortedEntries[l][1]!=target){
    console.log("not found")
}
else
    return [Number(sortedEntries[l][0]),Number(sortedEntries[r][0])];
    
};

twoSum([2,7,11,15],9)
console.log(twoSum([2,7,11,15],9))