var maxArea = function(height) {

    var l=0;
    var r=height.length-1;
    var current_level;
    var l_level;
    var r_level;

    current_level= (r-l)* Math.min(height[r],height[l]);
    while(l<r){
      
        console.log(current_level)
        if(height[l]<=height[r]){
            l++;
            l_level=(r-l)* Math.min(height[r],height[l]);
            if(l_level>current_level){
                current_level=l_level;
            }
        }
        else{
            r--;
            r_level=(r-l)* Math.min(height[r],height[l]);
            if(r_level>current_level){
                current_level=r_level;
            }
        }

    }
    return current_level;



}


const arr= [8,7,2,1];


console.log(maxArea(arr));