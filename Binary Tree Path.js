var binaryTreePaths = function(root) {
    arr=[];
    res=[];
    const innerfun=(root)=>{
        if(root==null){
            return
        }
        arr.push(root.value);
        innerfun(root.left);
        innerfun(root.right);
        if(root.left==null && root.right==null)
        res.push(arr.toString().replaceAll(",","->"));
        arr.pop();

    }
    
    
    innerfun(root);
    return res;
};


