// var levelOrder = function (root) {
//   var stack_parent = [];
//   stack_parent.push(root);
//   var stack_childs = [];
//   var res = [];

//   while (!(stack_parent.length==0 && stack_childs.length==0)) {
//     for (var i = 0; i < stack_parent.length; i++) {
//         if(stack_parent[i].left)
//             stack_parent[i].left != null && stack_childs.push(stack_parent.left);
//     if(stack_parent[i].right)
//       stack_parent[i].right != null && stack_childs.push(stack_parent.right);
//     }
//     res.push(stack_parent.map((x)=>x.val));
//     stack_parent= stack_childs;
//     stack_childs = [];
//   }
//   return res;
// };



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
const node = buildTree([1,2,4,-1,-1,5,-1,-1,3,-1,-1]);






var levelOrderBottom = function (root) {
    var stack_parent = [];
    stack_parent.push(root);
    
    var stack_childs = [];
    var res = [];
    var final_res = [];
    
    while (!(stack_parent.length==0 && stack_childs.length==0)) {
     stack_parent.map((x)=>{
       
        if(x.left!=null)
            stack_childs.push(x.left);
        if(x.right!=null)
            stack_childs.push(x.right);
     })
    
      res.push(stack_parent.map((x)=>x.val));
      stack_parent=[];
      stack_parent= stack_childs;
      stack_childs = [];
    }

    while(res.length!=0){
        final_res.push(res.pop());
    }
    
    return final_res;
  };



  const result=levelOrder(node);
console.log(result[2])



















// const preOrder=(node)=>{

    
//     if(node==null){
//         console.log("-1");
//         return;

//     }
    
//     console.log(node.val);
//     preOrder(node.left);
//     preOrder(node.right);

// }

// preOrder(root);