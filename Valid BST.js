const checkValidity=(root)=>{
    if(!root.left && !root.right && k==0)
        return true;

    if(!root.left && !root.right )
        return;
    
    k++;

    
    const parent_value= root.val;
  

    if(root.left && (parent_value>root.left.val))
    checkValidity(root.left);
    else return false;
    if(root.right && (parent_value<root.right.val))
    checkValidity(root.right);
    else {
       
        return false;
    }



    return true;
}
var k=0;



class TreeNode{
    constructor(val,left=null,right=null){
        this.val=val;
        this.right=right;
        this.left=left;
    }

}

const buildTree = (arr) => {
    let i = 0; // Make `i` local to `buildTree`

    const helper = () => {
        if (i >= arr.length || arr[i] === -1) {
            i++;
            return null;
        }

        const node = new TreeNode(arr[i]);
        i++;
        node.left = helper();
        node.right = helper();
        return node;
    };

    return helper();
};

// Example usage
const node = buildTree([3,-1]);

console.log(checkValidity(node))