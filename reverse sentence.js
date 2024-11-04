const string= "my    name is mashiat islam   ";



const str=string.split(" ");


var l=0,r=str.length-1;

while(l<r){
    var temp;
    temp= str[l];
    str[l]=str[r];
    str[r]=temp;
    l++;
    r--;
}

const str2=str.filter((x)=>x.length!="");
console.log(str2.toString().replaceAll(","," "))