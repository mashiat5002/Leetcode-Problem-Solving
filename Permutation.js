/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    class BuildTree{
    constructor(val){
        this.val=val;
        this.childrens=[];

    }

    addChild(child){
        this.childrens.push(child);
    }
}


var result=[];
var finalRes=[];
const buildTree=(root)=>{              
    if(result.includes(root)){
        return null;
    }
    var node= new BuildTree(root);  
    
    if(node.val!="a")
    result.push(node.val);  //"a" 
    
    if(result.length==input.length){
        // console.log(result)
        finalRes.push([...result]);

    }
    for(var i=0;i<input.length;i++){
        
        if(!result.includes(input[i]))
            node.addChild(buildTree(input[i]));
        
    }
    result.pop();
    

}
const input=nums;
buildTree("a");

return finalRes;
    
};