var citations = [3,8,17,21];
citations= citations.sort((a,b)=>a-b);
var i=citations.length;
var j=0;


while(i>citations[j]){
    j++;
    i--;

}
console.log(i)