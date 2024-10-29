
class TreeNode{
    int value;
    TreeNode left;
    TreeNode right;

     TreeNode(int value,TreeNode  right, TreeNode  left){
        this.value= value;
        this.right= right;
        this.left= left;
    }
     TreeNode(int value){
        this.value= value;
        this.right= null;
        this.left= null;
    }
}

class BFS{
    public static int idx=0;
    public static void preOrder(TreeNode node){
        if(node==null){
            System.out.print("-1 ");
            return;
        }
        System.out.print(node.value +" ");
        preOrder(node.left);
        preOrder(node.right);

    }
    public static TreeNode initializaton(int[] arr){

        if(  idx>=arr.length ||  arr[idx] == -1 ){
            idx++;
            return null;
        }
        TreeNode node= new TreeNode(arr[idx]);
        idx++;
        node.left= initializaton(arr);
        node.right= initializaton(arr);
        return node;

    }
    public static void main(String[] args){
        int [] arr={1,2,-1,-1,3,-1,-1};
        idx=0;
        String [] str;
        TreeNode node =initializaton(arr);
        preOrder(node);
    }
}