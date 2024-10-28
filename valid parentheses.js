

var isValid = function(s) {
    var stack=[];
    
    for(let i=0;i<=s.length-1;i++){
       
        if(s[i]==')' && stack[stack.length-1]=='(' ){
            stack.pop();
            
        }
        else if(s[i]=='}' && stack[stack.length-1]=='{' ){
            stack.pop();
            
        }
        else if(s[i]==']'  && stack[stack.length-1]=='[' ){
            stack.pop();
            
        }
        else if(s[i]=='(' || s[i]==')'){
            
            stack.push(s[i]);
        }
           
        else if(s[i]=='{' || s[i]=='}'){
            
            stack.push(s[i]);
        }
        else if(s[i]=='[' || s[i]==']'){
            
            stack.push(s[i]);
        }
        

    }
    
    if(stack.length==0){
        return true;
    }
    else 
    return false;
};



