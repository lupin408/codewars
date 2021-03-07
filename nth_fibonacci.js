function fib(n1) {
    /*
    If n is even then k = n/2:
   F(n) = [2*F(k-1) + F(k)]*F(k)
   
   If n is odd then k = (n + 1)/2
   F(n) = F(k)*F(k) + F(k-1)*F(k-1)
   
    */
    var flag = false;
   if(n1 < 0) {
   
   n1 *= -1;
   if (n1%2 === 0) {
   flag = true;
   }
   }
     var sieve = {
      0: BigInt(0),
      1: BigInt(1),
      2: BigInt(1),
      3: BigInt(2),
      4: BigInt(3),
    };
    var sieveA = [0, 1, 2, 3, 4]
    if ((n1 < 3) && (n1 > -1)) {
      return  sieve[n1];
    }
   
    var recur= function(n) {
   
   if (sieveA[n] != undefined){
   
     return sieve[n]
   }
    
    if(n%2 === 0){
      let k = n/2;
   
     sieve[n] = (((BigInt(2)*recur(k-1))+recur(k))*recur(k))
     sieveA[n] = 1;
     return sieve[n]
    } else {
      let k = (n+1)/2;
      sieve[n] = ((recur(k)*recur(k))+(recur(k-1)*recur(k-1)))
       sieveA[n] = 1;
       return sieve[n]
    }
   
     }
   recur(n1)
   
     return (flag === true ? (sieve[n1]* BigInt(-1)) : sieve[n1])
   }