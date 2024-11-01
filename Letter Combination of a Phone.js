if(digits.length==0)
    return [];
class Tree{
    constructor(val){
        this.val=val;
        this.childrens=[];
    }

    pushChild(child){
        this.childrens.push(child);
    }
}

const BuildTree=(start)=>{
    if(j==nums.length)
        return null;
    j++;
    var node= new Tree(start);

    if(node.val!="start")
    result.push(node.val);
    

    if(result.length== nums.length){
        finalRes.push([...result].toString().replaceAll(",",""));
    }

    if(nums[j]){
        for(var i=0;i<groups[nums[j]].length;i++){
            node.pushChild( BuildTree(groups[nums[j]][i]) );
        }

    }
    result.pop();
    j--;
    return node;
    

}

const nums=digits.split("");
const groups={
    "2":"abc".split(""),
    "3":"def".split(""),
    "4":"ghi".split(""),
    "5":"jkl".split(""),
    "6":"mno".split(""),
    "7":"pqrs".split(""),
    "8":"tuv".split(""),
    "9":"wxyz".split(""),
}

var j=-1;
var result=[];
var finalRes=[];
BuildTree("start");
return finalRes;