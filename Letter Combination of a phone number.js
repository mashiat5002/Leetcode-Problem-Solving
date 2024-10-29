/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var left= 0;
    var right= height.length-1;
    
    var current_liter= (right-left)*getSmaller(height[right],height[left]);
    while(!(left==right)){
  
        
        var left_move_liter= (right-(left+1))*getSmaller(height[right],height[left+1])
        console.log(left_move_liter)
        if(current_liter<left_move_liter){
            current_liter=left_move_liter;
            left++;
        }
        var right_move_liter= ((right-1)-left)*getSmaller(height[right-1],height[left])
        if(current_liter<right_move_liter){
            current_liter=right_move_liter;
            right--;
        }

    }
    return (right-left)*getSmaller(height[left],height[right])
};

var getSmaller=(one ,other)=>{
    if(one>other)
        return other;
    else return one;
}
const arr= [2,3,4,5,18,17,6];
console.log(maxArea(arr));