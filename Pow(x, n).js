var myPow = function(x, n) {
    if(n==1)
        return x;
    else if( n==0)
        return 1;


    if(n<0){
        if(Math.abs(n)%2==0){
            var demo= (( myPow(x,Math.floor(Math.abs(n)/2))));

            return 1/(demo * demo );
        }
    else{
        var demo= ( myPow(x,Math.floor(Math.abs(n)/2))) ;
        return 1/(demo * demo * x );
    }
    }


    else{
        if(n%2==0 && x>0){
            var demo=( myPow(x,Math.floor(n/2)))
            return demo * demo ;
        }
        else if(n%2==0 && x<0 ){

            var demo=( myPow(x,Math.floor(n/2)))
            return  demo * demo ; 
        }
            else if(n%2==1){
                var demo= ( myPow(x,Math.floor(n/2)));
                return demo * demo  * x;
            }
    }
   
};



console.log(myPow(4,6))