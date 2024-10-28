
let str= "GGGB";

for(var i=0;i<1;i++){
    if(str.includes("BG")){
        str=str.replaceAll("BG","GB");
   }
}
console.log(str)


console.log(str.indexOf("B"))