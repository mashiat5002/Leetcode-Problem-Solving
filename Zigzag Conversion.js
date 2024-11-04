var s = "A", R = 2

var res="";
s= s.split("");


for(var i=0;i<R;i++){
    var mid= ((2*R)-2);
    for(var j=0;j<s.length;j++){
        if(j%mid==i || j%mid==(2*R-2)-i ){
            res= res+`${s[j]}`;
        }
    }
   


}
console.log(res.toString())