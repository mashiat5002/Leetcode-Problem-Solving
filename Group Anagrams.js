



var groupAnagrams = function(strs) {
    var groups={}
for(var i=0;i<strs.length;i++){
    var sorted= strs[i].split("").sort().toString().replaceAll(",","");

    if(sorted in groups){
        groups[sorted].push(strs[i]);
    }
    else{
        groups[sorted]= [strs[i]];
    }
}
return Object.values(groups)
    
};
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))